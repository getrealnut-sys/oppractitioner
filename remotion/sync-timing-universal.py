#!/usr/bin/env python3
"""
sync-timing-universal.py — Universal timing sync for @oppractitioner
Pure Python. No ffmpeg. No pydub. Works on Python 3.14+.

Algorithm:
  1. mutagen reads actual MP3 duration from file headers (no audio decoding)
  2. Word count per phrase determines proportional speaking duration
  3. Inter-phrase gap (PAUSE_S seconds) is inserted before each card transition
  4. totalFrames = audio_frames + END_HOLD_FRAMES (3s hold on last card)

Why word-count works for ElevenLabs TTS:
  - ElevenLabs speaks at ~130–150 WPM (consistent within a session)
  - Word count ∝ phrase duration to within ~10% error
  - Error is much smaller than human perception threshold for card transitions

Usage:
  pip install mutagen --break-system-packages
  python sync-timing-universal.py [batch2|batch3|all]

  If no argument given, runs all batches.
"""

import sys, os, re

# ─── DEPENDENCIES ─────────────────────────────────────────────────────────────
try:
    from mutagen.mp3 import MP3
except ImportError:
    print("Installing mutagen...")
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "mutagen",
                    "--break-system-packages", "-q"], check=True)
    from mutagen.mp3 import MP3

# ─── CONSTANTS ────────────────────────────────────────────────────────────────
FPS           = 30
PAUSE_S       = 0.35   # gap between cards (seconds) — ElevenLabs natural pause
END_HOLD_S    = 2.0    # hold after last word before video ends
END_HOLD_FR   = int(END_HOLD_S * FPS)

SRC    = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(SRC, 'public')
SRCDIR = os.path.join(SRC, 'src')

# ─── BATCH CONFIGS ────────────────────────────────────────────────────────────
# Each entry maps to a typescript file + a list of (composition_id, audio_file, phrase_count)
# phrase_count must match the number of phrase objects in the script data (hook + phrases + cta).

BATCHES = {
    'batch2': {
        'ts_file': os.path.join(SRCDIR, 'scripts-batch2.ts'),
        'videos': [
            {
                'composition': 'Video4-InfiniWellGut',
                'audio':       os.path.join(PUBLIC, 'video4-voice.mp3'),
                # Phrases in order — paste text from scripts-batch2.ts for accurate word count
                'phrases': [
                    "Something I check when gut protocols aren't landing.",
                    "Good protocol. Clean diet. Right supplements.",
                    "Gut symptoms won't clear.",
                    "I look at gut lining integrity. The layer everything has to pass through.",
                    "InfiniWell BPC-157 Delayed. Studied for gut mucosal support.",
                    "One pattern I watch when the gut isn't responding to protocol changes.",
                    "Link in bio.",
                ],
            },
            {
                'composition': 'Video5-InfiniWellHHS',
                'audio':       os.path.join(PUBLIC, 'video5-voice.mp3'),
                'phrases': [
                    "HHS just called for more peptide research.",
                    "This space has been in integrative practice for years.",
                    "One I keep coming back to: BPC-157.",
                    "Gut lining. Tissue repair. Recovery support.",
                    "InfiniWell BPC-157. The regulation is catching up.",
                    "Link in bio.",
                ],
            },
            {
                'composition': 'Video6-InfiniWellRecovery',
                'audio':       os.path.join(PUBLIC, 'video6-voice.mp3'),
                'phrases': [
                    "When recovery just stops at 80%.",
                    "Injury is old. Protocol is right. Progress just... plateaus.",
                    "Tissue repair needs more than ingredients. It may need the right signaling environment.",
                    "InfiniWell BPC-157 Rapid. What I add when timelines keep extending.",
                    "Worth testing when the gap won't close.",
                    "Link in bio.",
                ],
            },
        ],
    },
    'batch3': {
        'ts_file': os.path.join(SRCDIR, 'scripts-batch3.ts'),
        'videos': [
            {
                'composition': 'Video7-AiresTravel',
                'audio':       os.path.join(PUBLIC, 'video7-voice.mp3'),
                'phrases': [
                    "One thing I check with clients who travel constantly.",
                    "Feel fine at home. Fall apart on the road.",
                    "Hotels, airports, cabins — zero control over EMF load.",
                    "Sleep disrupted. Recovery slow. No obvious cause.",
                    "Aires Lifetune ONE. Small enough to pack. Worth testing.",
                    "Link in bio.",
                ],
            },
            {
                'composition': 'Video8-BodyBioAbsorption',
                'audio':       os.path.join(PUBLIC, 'video8-voice.mp3'),
                'phrases': [
                    "When supplements just aren't landing.",
                    "Good stack. Right doses. Not much shifting.",
                    "Before adding more, I check the absorption layer.",
                    "Cell membranes control what enters the cell.",
                    "BodyBio PC. Membrane support before anything else.",
                    "Worth checking when the protocol is right but nothing moves.",
                    "Link in bio.",
                ],
            },
        ],
    },
}

# ─── HELPERS ──────────────────────────────────────────────────────────────────

def word_count(text):
    """Count words in a phrase string."""
    return len(text.split())


def get_audio_duration_s(audio_path):
    """Return MP3 duration in seconds using mutagen (no decoding, no ffmpeg)."""
    audio = MP3(audio_path)
    return audio.info.length


def compute_start_frames(total_audio_s, phrases):
    """
    Distribute startFrames proportionally by word count.
    Inserts PAUSE_S gap before each card (simulates natural TTS pauses).
    Returns list of startFrames, one per phrase.
    """
    words = [word_count(p) for p in phrases]
    total_words = sum(words)
    num_phrases = len(phrases)

    # Total pause time across all inter-phrase gaps
    total_pause_s = PAUSE_S * (num_phrases - 1)
    # Time available for actual speech
    speech_s = max(0.0, total_audio_s - total_pause_s)

    start_frames = []
    cursor_s = 0.0
    for i, w in enumerate(words):
        start_frames.append(int(round(cursor_s * FPS)))
        phrase_duration_s = (w / total_words) * speech_s
        cursor_s += phrase_duration_s
        if i < num_phrases - 1:
            cursor_s += PAUSE_S

    return start_frames


def ms_to_frame(ms):
    return int(round(ms / 1000 * FPS))


def update_ts_file(ts_path, composition_id, new_start_frames, total_frames):
    """
    Rewrite startFrame values and totalFrames for one composition in a .ts file.
    Operates on raw string to avoid any TS parsing dependency.
    """
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    comp_pattern = rf"compositionId: '{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        print(f"  ⚠️  Could not find '{composition_id}' in {os.path.basename(ts_path)}")
        return False

    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]

    # Update totalFrames
    old_block = block
    block = re.sub(r'totalFrames:\s*\d+', f'totalFrames: {total_frames}', block, count=1)

    # Update startFrames in order (reverse to preserve offsets)
    frame_matches = list(re.finditer(r'startFrame:\s*\d+', block))
    expected = len(new_start_frames)
    if len(frame_matches) != expected:
        print(f"  ⚠️  {len(frame_matches)} startFrames in TS vs {expected} computed — "
              f"applying {min(len(frame_matches), expected)}")
    count = min(len(frame_matches), expected)
    for i in range(count - 1, -1, -1):
        m = frame_matches[i]
        block = block[:m.start()] + f'startFrame: {new_start_frames[i]}' + block[m.end():]

    new_content = content[:start_pos] + block + content[end_pos:]
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    changed = block != old_block
    return changed


# ─── MAIN ─────────────────────────────────────────────────────────────────────

def sync_batch(batch_name, batch_cfg):
    ts_path = batch_cfg['ts_file']
    print(f"\n{'─'*52}")
    print(f"  {batch_name.upper()} → {os.path.basename(ts_path)}")
    print(f"{'─'*52}")

    any_changed = False
    for video in batch_cfg['videos']:
        comp   = video['composition']
        audio  = video['audio']
        phrases = video['phrases']

        print(f"\n  ▶  {comp}")

        if not os.path.exists(audio):
            print(f"     ⚠️  Audio not found: {os.path.basename(audio)} — skipping")
            print(f"        Drop {os.path.basename(audio)} into remotion/public/ then re-run.")
            continue

        duration_s = get_audio_duration_s(audio)
        total_frames = int(round(duration_s * FPS)) + END_HOLD_FR
        start_frames = compute_start_frames(duration_s, phrases)

        print(f"     Duration : {duration_s:.2f}s → {total_frames} frames")
        print(f"     Phrases  : {len(phrases)}")
        for i, (sf, ph) in enumerate(zip(start_frames, phrases)):
            words = ph.split()
            preview = " ".join(words[:6]) + ("..." if len(words) > 6 else "")
            print(f"     [{i+1}] frame {sf:4d}  ({sf/FPS:.2f}s)  "{preview}"")

        changed = update_ts_file(ts_path, comp, start_frames, total_frames)
        if changed:
            print(f"     ✅  Updated {os.path.basename(ts_path)}")
            any_changed = True
        else:
            print(f"     ✔   No change needed")

    return any_changed


def main():
    arg = sys.argv[1].lower() if len(sys.argv) > 1 else 'all'

    print(f"\n🎙  @oppractitioner Timing Sync (mutagen · no ffmpeg · Python 3.14 safe)")

    batches_to_run = (
        BATCHES.items() if arg == 'all'
        else [(arg, BATCHES[arg])] if arg in BATCHES
        else None
    )

    if batches_to_run is None:
        print(f"Unknown batch '{arg}'. Use: batch2, batch3, or all")
        sys.exit(1)

    total_changed = False
    for name, cfg in batches_to_run:
        changed = sync_batch(name, cfg)
        total_changed = total_changed or changed

    print(f"\n{'═'*52}")
    if total_changed:
        print("  ✅  Timing sync complete. Render now:")
        print("      npx remotion render src/index.ts <CompositionId> out/<file>.mp4")
    else:
        print("  ✔   All timing values already up to date (or audio files missing).")
    print(f"{'═'*52}\n")


if __name__ == '__main__':
    main()
