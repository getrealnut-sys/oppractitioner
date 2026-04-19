"""
Batch Whisper transcription for batch4 MP3s.
Outputs word-timestamp JSON to transcripts/batch4/.
Run from: oppractitioner-site/remotion/
"""
import whisper
import json
import os
import sys

AUDIO_FILES = [
    f"public/video{v}-hook{h}.mp3"
    for v in [4, 5, 6, 7, 8, 9]
    for h in ["A", "B", "C"]
]

OUT_DIR = "transcripts/batch4"
os.makedirs(OUT_DIR, exist_ok=True)

print("Loading Whisper base model...")
model = whisper.load_model("base")
print("Model loaded.")

for audio_path in AUDIO_FILES:
    if not os.path.exists(audio_path):
        print(f"[SKIP] {audio_path} not found")
        continue

    base = os.path.basename(audio_path).replace(".mp3", "")
    out_path = os.path.join(OUT_DIR, base + ".json")

    if os.path.exists(out_path):
        print(f"[EXISTS] {out_path} - skipping")
        continue

    print(f"[TRANSCRIBING] {audio_path} ...", flush=True)
    result = model.transcribe(audio_path, word_timestamps=True, language="en")

    # Write full result JSON
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    word_count = sum(
        len(seg.get("words", []))
        for seg in result.get("segments", [])
    )
    print(f"  -> {out_path} ({word_count} words)")

print("Done. All transcripts written to transcripts/batch4/")
