#!/usr/bin/env python3
"""
sync-timing-batch3.py — Sync Batch 3 startFrames using pydub silence detection.

No Whisper, no network. Works fully offline.
Splits each MP3 on silence gaps, maps chunks to phrases in order,
writes corrected startFrame + totalFrames into scripts-batch3.ts.

Usage (from remotion/ folder):
  python sync-timing-batch3.py

Requires: pip install pydub --break-system-packages
ffmpeg must be installed (it is on this machine).
"""

import os, re
from pydub import AudioSegment
from pydub.silence import detect_nonsilent

SRC = os.path.dirname(__file__)
PUBLIC = os.path.join(SRC, 'public')
BATCH3_TS = os.path.join(SRC, 'src', 'scripts-batch3.ts')
FPS = 30

# Silence detection tuning — adjust if chunks don't split correctly
SILENCE_THRESH_DB = -38   # dB below which is considered silence
MIN_SILENCE_MS    = 250   # minimum silence gap to split on (ms)
PADDING_MS        = 80    # ms before each chunk start (avoid clipping)

VIDEOS = [
    {
        'audio': os.path.join(PUBLIC, 'video7-voice.mp3'),
        'composition': 'Video7-AiresTravel',
        'phrase_count': 6,   # hook + 4 phrases + cta
    },
    {
        'audio': os.path.join(PUBLIC, 'video8-voice.mp3'),
        'composition': 'Video8-BodyBioAbsorption',
        'phrase_count': 7,   # hook + 5 phrases + cta
    },
]


def get_chunk_starts(audio_path, phrase_count):
    """
    Return list of start times in ms for each speech chunk.
    Merges chunks if there are more chunks than phrases (over-split).
    """
    audio = AudioSegment.from_mp3(audio_path)
    total_ms = len(audio)

    chunks = detect_nonsilent(
        audio,
        min_silence_len=MIN_SILENCE_MS,
        silence_thresh=SILENCE_THRESH_DB,
    )

    if not chunks:
        print(f"  ⚠️  No speech detected in {os.path.basename(audio_path)}")
        return None, total_ms

    print(f"  Detected {len(chunks)} raw chunks (need {phrase_count})")

    # If we got more chunks than phrases, merge the smallest gaps
    while len(chunks) > phrase_count:
        gaps = [(chunks[i+1][0] - chunks[i][1], i) for i in range(len(chunks)-1)]
        _, merge_idx = min(gaps)
        merged = (chunks[merge_idx][0], chunks[merge_idx+1][1])
        chunks = chunks[:merge_idx] + [merged] + chunks[merge_idx+2:]

    # If we got fewer chunks than phrases, evenly space missing ones
    if len(chunks) < phrase_count:
        print(f"  ⚠️  Only {len(chunks)} chunks found for {phrase_count} phrases — filling with estimates")
        while len(chunks) < phrase_count:
            gaps = [(chunks[i+1][0] - chunks[i][1], i) for i in range(len(chunks)-1)]
            if not gaps:
                break
            _, split_idx = max(gaps)
            mid = (chunks[split_idx][1] + chunks[split_idx+1][0]) // 2
            chunks = chunks[:split_idx+1] + [(mid, mid+100)] + chunks[split_idx+1:]

    starts_ms = [max(0, c[0] - PADDING_MS) for c in chunks]
    return starts_ms, total_ms


def ms_to_frame(ms):
    return int(round(ms / 1000 * FPS))


def update_batch3_ts(composition_id, new_frames, total_frames, content):
    """Rewrite startFrame values and totalFrames for a composition in the content string."""
    comp_pattern = rf"compositionId: '{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        print(f"  ⚠️  Could not find '{composition_id}' in scripts-batch3.ts")
        return content

    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]

    # Update totalFrames
    block = re.sub(r'totalFrames:\s*\d+', f'totalFrames: {total_frames}', block, count=1)

    # Update startFrames
    frame_matches = list(re.finditer(r'startFrame:\s*\d+', block))
    if len(frame_matches) != len(new_frames):
        print(f"  ⚠️  {len(frame_matches)} startFrames in file vs {len(new_frames)} detected — applying {min(len(frame_matches), len(new_frames))}")
    count = min(len(frame_matches), len(new_frames))
    for i in range(count - 1, -1, -1):
        m = frame_matches[i]
        block = block[:m.start()] + f'startFrame: {new_frames[i]}' + block[m.end():]

    return content[:start_pos] + block + content[end_pos:]


def main():
    print("\n🎙  Batch 3 Timing Sync (pydub silence detection)\n" + "─" * 48)

    with open(BATCH3_TS, 'r', encoding='utf-8') as f:
        content = f.read()

    for video in VIDEOS:
        comp = video['composition']
        phrase_count = video['phrase_count']
        audio_path = video['audio']

        print(f"\n▶  {comp}")

        if not os.path.exists(audio_path):
            print(f"  ⚠️  Audio not found: {audio_path} — skipping")
            continue

        starts_ms, total_ms = get_chunk_starts(audio_path, phrase_count)
        if starts_ms is None:
            continue

        # Add 2s hold after last word
        total_frames = ms_to_frame(total_ms) + 60

        new_frames = [ms_to_frame(ms) for ms in starts_ms]

        for i, (ms, frame) in enumerate(zip(starts_ms, new_frames)):
            print(f"  Phrase {i+1}: {ms:5d}ms → frame {frame:4d}")

        content = update_batch3_ts(comp, new_frames, total_frames, content)

    with open(BATCH3_TS, 'w', encoding='utf-8') as f:
        f.write(content)

    print("\n✅  scripts-batch3.ts updated with synced timing.")
    print("Next: npx remotion render for each batch 3 composition.\n")


if __name__ == '__main__':
    main()
