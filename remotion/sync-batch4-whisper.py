#!/usr/bin/env python3
"""
sync-batch4-whisper.py -- Whisper word-timestamp sync for batch4.
Reads Whisper JSON transcripts (with word_timestamps=True) and rewrites
startFrame values in src/scripts-batch4.ts based on actual speech timing.

Algorithm:
  - For each composition, extract anchor words from the TS phrase array
    (first alphabetic word of each phrase's first text segment)
  - Walk the Whisper word list sequentially, matching each anchor
    to its first occurrence AFTER the previous anchor's position
  - startFrame = round(word.start * 30)
  - totalFrames = round(audio_duration * 30) + 60  (2s end hold)

Run from: oppractitioner-site/remotion/
  python sync-batch4-whisper.py
"""

import json, re, os, sys

FPS = 30
END_HOLD_FRAMES = 60  # 2s hold after audio ends

SRCDIR   = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src')
TXDIR    = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'transcripts', 'batch4')
PUBDIR   = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
TS_FILE  = os.path.join(SRCDIR, 'scripts-batch4.ts')

# Map composition_id -> transcript filename (without .json)
COMP_TRANSCRIPT = {
    'Video4-InfiniWellGut-HookA':              'video4-hookA',
    'Video4-InfiniWellGut-HookB':              'video4-hookB',
    'Video4-InfiniWellGut-HookC':              'video4-hookC',
    'Video5-InfiniWellPeptideWindow-HookA':    'video5-hookA',
    'Video5-InfiniWellPeptideWindow-HookB':    'video5-hookB',
    'Video5-InfiniWellPeptideWindow-HookC':    'video5-hookC',
    'Video6-InfiniWellRecoveryPlateau-HookA':  'video6-hookA',
    'Video6-InfiniWellRecoveryPlateau-HookB':  'video6-hookB',
    'Video6-InfiniWellRecoveryPlateau-HookC':  'video6-hookC',
    'Video7-PendulumMetabolicStall-HookA':     'video7-hookA',
    'Video7-PendulumMetabolicStall-HookB':     'video7-hookB',
    'Video7-PendulumMetabolicStall-HookC':     'video7-hookC',
    'Video8-AlightMycotoxins-HookA':           'video8-hookA',
    'Video8-AlightMycotoxins-HookB':           'video8-hookB',
    'Video8-AlightMycotoxins-HookC':           'video8-hookC',
    'Video9-BodyBioMoldDetox-HookA':           'video9-hookA',
    'Video9-BodyBioMoldDetox-HookB':           'video9-hookB',
    'Video9-BodyBioMoldDetox-HookC':           'video9-hookC',
}


def load_words(transcript_name):
    """Load flat word list from Whisper JSON. Returns list of {word, start, end}."""
    path = os.path.join(TXDIR, transcript_name + '.json')
    with open(path, encoding='utf-8') as f:
        data = json.load(f)
    words = []
    for seg in data.get('segments', []):
        for w in seg.get('words', []):
            words.append(w)
    return words, data


def get_audio_duration(transcript_name):
    """Get audio duration from Whisper transcript segments."""
    path = os.path.join(TXDIR, transcript_name + '.json')
    with open(path, encoding='utf-8') as f:
        data = json.load(f)
    segs = data.get('segments', [])
    if segs:
        return segs[-1]['end']
    return 0.0


def clean_word(w):
    """Strip punctuation and lowercase for matching."""
    return re.sub(r"[^a-zA-Z0-9']", '', w).lower()


def first_alpha_word(text):
    """Extract first meaningful word from a phrase text segment."""
    # text may have \n, strip and get first token
    tokens = text.replace('\n', ' ').split()
    for tok in tokens:
        cleaned = clean_word(tok)
        if len(cleaned) >= 2:  # skip single chars like 'a'
            return cleaned
    return None


def extract_phrase_anchors_from_ts(content, composition_id):
    """
    Extract anchor words from each phrase's first text segment in the TS content.
    Returns list of anchor strings (lowercase, no punctuation).
    """
    # Find composition block
    comp_pattern = rf"compositionId:\s*'{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        return None

    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]

    # Find all phrase entries: look for 'type: '...'' then find the first text: '...' segment
    # Split by phrase objects -- each starts with '{'
    # Strategy: find all `text:` string values in order, pick first per phrase block

    # Simpler: find all `{ text:` or `{ text :` occurrences and extract first text per phrase
    # Each phrase object has a 'type' field followed by 'segments' with text entries
    # We'll find phrase boundaries by locating `type: '` tokens

    # Find phrase positions (type declarations in block)
    type_positions = list(re.finditer(r"type:\s*'(hook|phrase|product|result|cta)'", block))

    anchors = []
    for i, tm in enumerate(type_positions):
        # Get text from this phrase until the next type declaration
        next_pos = type_positions[i + 1].start() if i + 1 < len(type_positions) else len(block)
        phrase_block = block[tm.start():next_pos]

        # Find first text: '...' in this phrase block
        text_match = re.search(r"text:\s*'((?:[^'\\]|\\.)*)'", phrase_block)
        if not text_match:
            text_match = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', phrase_block)

        if text_match:
            raw_text = text_match.group(1).replace('\\n', ' ').replace("\\'", "'")
            anchor = first_alpha_word(raw_text)
            anchors.append(anchor or '')
        else:
            anchors.append('')

    return anchors


# Whisper phonetic variant map: word in TS -> what Whisper might say
PHONETIC_ALTS = {
    'infiniwell': ['finnowell', 'finnewell', 'finnwell', 'infinowell'],
    'ochratoxin': ['ocratoxin', 'okrotoxin', 'ocrotoxin'],
    'aflatoxin':  ['aflatoxin', 'aflo'],
    'gliotoxin':  ['gleeotoxin', 'gliotoxin'],
    'akkermansia': ['akkermansia', 'ackermania', 'achermansia'],
    'mycotoxin':  ['mycotoxin', 'micotoxin'],
    'mycotoxins': ['mycotoxin', 'mycotoxins', 'micotoxin', 'micotoxins'],
    'alight':     ['alight', 'light'],  # Whisper splits "Alight" into "A light"
}

WORD_TO_NUM = {
    'fifteen': '15', 'fourteen': '14', 'thirteen': '13', 'twelve': '12',
    'eleven': '11', 'ten': '10', 'nine': '9', 'eight': '8', 'seven': '7',
    'six': '6', 'five': '5', 'four': '4', 'three': '3', 'two': '2', 'one': '1',
    'eighty': '80', 'seventy': '70', 'sixty': '60', 'fifty': '50',
    'forty': '40', 'thirty': '30', 'twenty': '20', 'hundred': '100',
}


def match_anchor_to_words(anchor, words, search_from_idx):
    """
    Find first word in words[search_from_idx:] that matches anchor.
    Uses exact match, 5-char prefix match (phonetic variants), and number-word equivalence.
    Returns (word_index, start_time) or (None, None).
    """
    if not anchor:
        return None, None
    prefix = anchor[:5]  # catches phonetic variants (e.g. "ocrat" for "ochratoxin")
    numeric_alt = WORD_TO_NUM.get(anchor)  # e.g. "fifteen" -> "15"
    phonetic_alts = PHONETIC_ALTS.get(anchor, [])
    for i in range(search_from_idx, len(words)):
        w = clean_word(words[i]['word'])
        if w == anchor or (len(anchor) >= 5 and w.startswith(prefix)):
            return i, words[i]['start']
        if numeric_alt and w == numeric_alt:
            return i, words[i]['start']
        if any(w == alt or w.startswith(alt[:4]) for alt in phonetic_alts):
            return i, words[i]['start']
    return None, None


def count_startframes_in_block(content, composition_id):
    """Count how many startFrame: entries are in the composition block."""
    comp_pattern = rf"compositionId:\s*'{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        return 0
    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]
    return len(re.findall(r'startFrame:\s*\d+', block))


def update_ts_composition(content, composition_id, new_start_frames, total_frames):
    """
    Rewrite startFrame values and totalFrames for one composition.
    Returns new content string.
    """
    comp_pattern = rf"compositionId:\s*'{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        print(f"  [WARN] Could not find '{composition_id}' in TS file")
        return content, False

    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]
    old_block = block

    # Update totalFrames
    block = re.sub(r'totalFrames:\s*\d+', f'totalFrames: {total_frames}', block, count=1)

    # Update startFrames in reverse order to preserve string offsets
    frame_matches = list(re.finditer(r'startFrame:\s*\d+', block))
    count = min(len(frame_matches), len(new_start_frames))
    if len(frame_matches) != len(new_start_frames):
        print(f"  [WARN] {len(frame_matches)} startFrames in TS vs {len(new_start_frames)} anchors")
    for i in range(count - 1, -1, -1):
        m = frame_matches[i]
        block = block[:m.start()] + f'startFrame: {new_start_frames[i]}' + block[m.end():]

    new_content = content[:start_pos] + block + content[end_pos:]
    changed = block != old_block
    return new_content, changed


def sync_composition(content, composition_id, transcript_name):
    """
    Sync one composition's startFrames using Whisper word timestamps.
    Returns (new_content, changed, old_frames, new_frames).
    """
    words, _ = load_words(transcript_name)
    duration_s = get_audio_duration(transcript_name)
    total_frames = round(duration_s * FPS) + END_HOLD_FRAMES

    anchors = extract_phrase_anchors_from_ts(content, composition_id)
    if anchors is None:
        print(f"  [WARN] Composition '{composition_id}' not found")
        return content, False, [], []

    # Get old startFrames for delta reporting
    comp_pattern = rf"compositionId:\s*'{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]
    old_frames = [int(m.group().split()[-1]) for m in re.finditer(r'startFrame:\s*\d+', block)]

    # Match anchors to word timestamps
    new_frames = []
    search_idx = 0
    for i, anchor in enumerate(anchors):
        if i == 0:
            # Hook always starts at frame 0
            new_frames.append(0)
            # Find approximate position of anchor in transcript to start next search
            idx, _ = match_anchor_to_words(anchor, words, 0)
            if idx is not None:
                search_idx = idx + 1
        else:
            idx, start_t = match_anchor_to_words(anchor, words, search_idx)
            if idx is not None and start_t is not None:
                new_frames.append(round(start_t * FPS))
                search_idx = idx + 1
            else:
                # Fallback: proportional estimate from previous frame
                if new_frames:
                    prev = new_frames[-1]
                    remaining_frames = total_frames - prev
                    remaining_phrases = len(anchors) - i
                    estimate = prev + round(remaining_frames / max(remaining_phrases, 1))
                    new_frames.append(estimate)
                    print(f"  [WARN] No match for anchor '{anchor}' (phrase {i+1}) -- using estimate {estimate}")
                else:
                    new_frames.append(0)
                    print(f"  [WARN] No match for anchor '{anchor}' (phrase {i+1}) -- using 0")

    new_content, changed = update_ts_composition(content, composition_id, new_frames, total_frames)
    return new_content, changed, old_frames, new_frames


def main():
    print("\n@oppractitioner Batch 4 Whisper Timing Sync")
    print("=" * 52)

    with open(TS_FILE, encoding='utf-8') as f:
        content = f.read()

    any_changed = False
    all_deltas = {}

    for comp_id, tx_name in COMP_TRANSCRIPT.items():
        print(f"\n  > {comp_id}")
        tx_path = os.path.join(TXDIR, tx_name + '.json')
        if not os.path.exists(tx_path):
            print(f"    [SKIP] transcript not found: {tx_name}.json")
            continue

        content, changed, old_frames, new_frames = sync_composition(content, comp_id, tx_name)
        if changed:
            any_changed = True
            print(f"    [OK] Updated {len(new_frames)} startFrames")
        else:
            print(f"    [--] No change")

        # Print delta for each phrase
        deltas = []
        for i, (old, new) in enumerate(zip(old_frames, new_frames)):
            delta = new - old
            deltas.append(delta)
            marker = " <-- check" if abs(delta) > 150 else ""
            print(f"      phrase {i+1:2d}: {old:4d} -> {new:4d}  (delta {delta:+d}){marker}")
        all_deltas[comp_id] = deltas

    if any_changed:
        with open(TS_FILE, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n[OK] Wrote {TS_FILE}")
    else:
        print(f"\n[--] No changes written")

    print("\n" + "=" * 52)
    print("Sync complete. Open Remotion Studio to verify:")
    print("  npm run dev  (inside remotion/)")
    print("  Load: Video4-InfiniWellGut-HookA")
    print("=" * 52 + "\n")


if __name__ == '__main__':
    main()
