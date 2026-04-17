#!/usr/bin/env python3
"""
sync-timing.py — Auto-sync Remotion startFrames to ElevenLabs audio.

How it works:
  1. Detects speech chunks and silence gaps in each voice MP3
  2. Assigns each chunk to a phrase based on the largest N-1 gaps
  3. Calculates startFrame (seconds × 30fps) and totalFrames (audio duration + 2s hold)
  4. Rewrites startFrame + totalFrames values directly in scripts.ts

Usage (run from the remotion/ folder):
  python sync-timing.py

Every week: generate audio → rename to video1-voice.mp3 etc → drop in public/ → run this.
Requires: pip install pydub --break-system-packages
"""

import os
import re
import sys

PUBLIC = os.path.join(os.path.dirname(__file__), 'public')
SCRIPTS_TS = os.path.join(os.path.dirname(__file__), 'src', 'scripts.ts')
SCRIPTS_BATCH2_TS = os.path.join(os.path.dirname(__file__), 'src', 'scripts-batch2.ts')
FPS = 30

# ── Phrase definitions (plain text, in order, matching scripts.ts) ────────────
# First 3+ unique words are used for matching — enough to be unambiguous.

VIDEOS = [
    {
        'audio': os.path.join(PUBLIC, 'video1-voice.mp3'),
        'composition': 'Video1-AiresFocus',
        'scripts_file': SCRIPTS_TS,
        'phrases': [
            "One pattern I keep running into",
            "Can't focus at home",
            "Fine at the office Fine at a coffee shop",
            "Same house Same router",
            "Kept landing on EMF in the home workspace",
            "Aires Lifetune ONE Not as a fix As a test",
            "Most came back Fog cleared",
            "Link in bio",
        ],
    },
    {
        'audio': os.path.join(PUBLIC, 'video2-voice.mp3'),
        'composition': 'Video2-BodyBio',
        'scripts_file': SCRIPTS_TS,
        'phrases': [
            "Something I wish more practitioners checked first",
            "Client doing everything right Labs still flat",
            "Nothing is moving",
            "The issue isn't the protocol It's the membrane",
            "BodyBio PC That's where I start",
            "Most see labs shift in four to six weeks",
            "Link in bio",
        ],
    },
    {
        'audio': os.path.join(PUBLIC, 'video3-voice.mp3'),
        'composition': 'Video3-AiresSleep',
        'scripts_file': SCRIPTS_TS,
        'phrases': [
            "Here's one that surprised me",
            "Client's sleep just falls apart No obvious trigger",
            "New router Mesh WiFi upgrade",
            "Three months before the sleep issues started Nobody connected the two",
            "Aires Lifetune in the bedroom Two weeks later Sleep normalized",
            "Worth testing when nothing else explains the shift",
            "Link in bio",
        ],
    },
    # ── Batch 2: InfiniWell BPC-157 ───────────────────────────────────────────
    {
        'audio': os.path.join(PUBLIC, 'video4-voice.mp3'),
        'composition': 'Video4-InfiniWellGut',
        'scripts_file': SCRIPTS_BATCH2_TS,
        'phrases': [
            "Something I check when gut protocols aren't landing",
            "Good protocol Clean diet Right supplements",
            "Gut symptoms won't clear",
            "I look at gut lining integrity The layer everything has to pass through",
            "InfiniWell BPC-157 Delayed Studied for gut mucosal support",
            "One pattern I watch when the gut isn't responding to protocol changes",
            "Link in bio",
        ],
    },
    {
        'audio': os.path.join(PUBLIC, 'video5-voice.mp3'),
        'composition': 'Video5-InfiniWellHHS',
        'scripts_file': SCRIPTS_BATCH2_TS,
        'phrases': [
            "HHS just called for more peptide research",
            "This space has been in integrative practice for years",
            "One I keep coming back to BPC-157",
            "Gut lining Tissue repair Recovery support",
            "InfiniWell BPC-157 The regulation is catching up",
            "Link in bio",
        ],
    },
    {
        'audio': os.path.join(PUBLIC, 'video6-voice.mp3'),
        'composition': 'Video6-InfiniWellRecovery',
        'scripts_file': SCRIPTS_BATCH2_TS,
        'phrases': [
            "When recovery just stops at 80 percent",
            "Injury is old Protocol is right Progress just plateaus",
            "Tissue repair needs more than ingredients It may need the right signaling environment",
            "InfiniWell BPC-157 Rapid What I add when timelines keep extending",
            "Worth testing when the gap won't close",
            "Link in bio",
        ],
    },
]


def normalize(text):
    """Lowercase, strip punctuation for fuzzy matching."""
    return re.sub(r"[^a-z0-9 ]", "", text.lower()).strip()


def get_word_timestamps(audio_path):
    """Run Whisper and return list of (word, start_seconds) tuples."""
    from faster_whisper import WhisperModel
    print(f"  Loading Whisper model (tiny)...")
    model = WhisperModel("tiny", device="cpu", compute_type="int8")
    print(f"  Transcribing {os.path.basename(audio_path)}...")
    segments, _ = model.transcribe(audio_path, word_timestamps=True)
    words = []
    for seg in segments:
        if seg.words:
            for w in seg.words:
                words.append((normalize(w.word), w.start))
    return words


def find_phrase_start(words, phrase):
    """
    Find the start time (seconds) of a phrase in the word list.
    Matches the first 2 normalized words of the phrase against the word stream.
    Returns the start time in seconds, or None if not found.
    """
    phrase_words = normalize(phrase).split()
    if not phrase_words:
        return None

    # Use first 2 words as the search anchor (1 word is too ambiguous)
    anchor = phrase_words[:2] if len(phrase_words) >= 2 else phrase_words[:1]
    word_texts = [w[0] for w in words]

    for i in range(len(word_texts) - len(anchor) + 1):
        if word_texts[i:i+len(anchor)] == anchor:
            return words[i][1]

    # Fallback: try just the first word
    first = phrase_words[0]
    for i, (w, t) in enumerate(words):
        if w == first:
            return t

    return None


def seconds_to_frame(seconds, fps=FPS):
    return int(round(seconds * fps))


def update_scripts_ts(composition_id, new_frames, content=None):
    """
    Rewrite startFrame values for a given composition in the given scripts content string.
    new_frames: list of int frame numbers, in phrase order.
    content: the full file content string to update (reads SCRIPTS_TS if None).
    """
    if content is None:
        with open(SCRIPTS_TS, 'r', encoding='utf-8') as f:
            content = f.read()

    # Find the block for this composition and replace startFrame values
    # Strategy: find all startFrame occurrences after the compositionId line
    comp_pattern = rf"compositionId: '{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        print(f"  ⚠️  Could not find composition '{composition_id}' in scripts.ts")
        return content

    # Find all startFrame: N after this composition (up to the next compositionId)
    start_pos = comp_match.start()
    # Find where the next composition starts (or end of file)
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)

    block = content[start_pos:end_pos]
    frame_positions = [(m.start(), m.end(), m.group()) for m in re.finditer(r'startFrame:\s*\d+', block)]

    if len(frame_positions) != len(new_frames):
        print(f"  ⚠️  Found {len(frame_positions)} startFrame entries but have {len(new_frames)} phrases — check manually")
        # Still apply as many as we can
        count = min(len(frame_positions), len(new_frames))
    else:
        count = len(new_frames)

    # Replace from back to front so positions stay valid
    new_block = block
    for i in range(count - 1, -1, -1):
        pos_start, pos_end, _ = frame_positions[i]
        new_block = new_block[:pos_start] + f'startFrame: {new_frames[i]}' + new_block[pos_end:]

    return content[:start_pos] + new_block + content[end_pos:]


def main():
    print("\n🎙  Remotion Timing Sync\n" + "─" * 40)

    # Load both scripts files
    scripts_contents = {}
    for sf in set(v['scripts_file'] for v in VIDEOS):
        with open(sf, 'r', encoding='utf-8') as f:
            scripts_contents[sf] = f.read()

    for video in VIDEOS:
        audio = video['audio']
        comp = video['composition']
        phrases = video['phrases']
        sf = video['scripts_file']
        scripts_content = scripts_contents[sf]

        print(f"\n▶  {comp}")

        if not os.path.exists(audio):
            print(f"  ⚠️  Audio not found: {audio} — skipping")
            continue

        words = get_word_timestamps(audio)
        if not words:
            print(f"  ⚠️  No words transcribed from {audio}")
            continue

        print(f"  Transcribed {len(words)} words. Matching phrases...")

        new_frames = []
        for phrase in phrases:
            t = find_phrase_start(words, phrase)
            if t is None:
                print(f"  ⚠️  Could not match: \"{phrase[:40]}\" — keeping existing frame")
                new_frames.append(None)
            else:
                frame = seconds_to_frame(t)
                print(f"  ✓  [{frame:4d}f / {t:.2f}s]  {phrase[:50]}")
                new_frames.append(frame)

        # Fill in any None values with existing frames (no change)
        current_frames = [int(m.group(1)) for m in re.finditer(r'startFrame:\s*(\d+)', scripts_content[scripts_content.find(f"'{comp}'"):][:3000])]
        resolved = []
        ci = 0
        for i, f in enumerate(new_frames):
            if f is not None:
                resolved.append(f)
            elif ci < len(current_frames):
                resolved.append(current_frames[ci])
                ci += 1
            else:
                resolved.append(0)

        scripts_contents[sf] = update_scripts_ts(comp, resolved, scripts_contents[sf])

    # Write all updated scripts files
    for sf, content in scripts_contents.items():
        with open(sf, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n✅  {os.path.basename(sf)} updated.")

    print("\n✅  scripts.ts updated with synced timing.\n")
    print("Next: refresh Remotion Studio and play each video to verify.\n")


if __name__ == '__main__':
    main()
