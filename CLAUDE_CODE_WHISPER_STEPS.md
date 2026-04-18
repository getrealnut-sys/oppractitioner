# Whisper Transcription — Step-by-Step (Windows)
# Goal: get word-level timestamps for all 6 MP3s so Claude can rebuild scripts.
# Estimated time: 15 minutes one-time + ~5 min of transcription runtime.

## ── STEP 1: Open PowerShell in the remotion folder ────────────────────────
# Press Windows key, type "PowerShell", press Enter. In that window:

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion

# Confirm the MP3s are where I think they are:
dir public\video*.mp3

# You should see video4-voice.mp3 through video9-voice.mp3.
# If any are missing — STOP and tell me which one. Don't continue.

## ── STEP 2: Install OpenAI Whisper (one-time) ─────────────────────────────
# This installs Whisper locally on your machine. Runs on CPU. No API key needed.

pip install -U openai-whisper --break-system-packages

# If that command errors with "pip not found", run this instead:
python -m pip install -U openai-whisper --break-system-packages

# Wait until it finishes. Expect ~2-3 minutes. Last line should say
# "Successfully installed openai-whisper-..." (version number varies).

## ── STEP 3: Transcribe all 6 MP3s (single-line commands) ──────────────────
# PowerShell hates multi-line backticks. Running each command on ONE LINE fixes it.
# Copy-paste the entire block below (mkdir + 6 whisper lines + dir) and press Enter.
# Runtime: about 4-6 minutes total.

mkdir -Force transcripts | Out-Null
whisper "public\video4-voice.mp3" --model base --language en --word_timestamps True --output_format json --output_dir transcripts --verbose False
whisper "public\video5-voice.mp3" --model base --language en --word_timestamps True --output_format json --output_dir transcripts --verbose False
whisper "public\video6-voice.mp3" --model base --language en --word_timestamps True --output_format json --output_dir transcripts --verbose False
whisper "public\video7-voice.mp3" --model base --language en --word_timestamps True --output_format json --output_dir transcripts --verbose False
whisper "public\video8-voice.mp3" --model base --language en --word_timestamps True --output_format json --output_dir transcripts --verbose False
whisper "public\video9-voice.mp3" --model base --language en --word_timestamps True --output_format json --output_dir transcripts --verbose False
dir transcripts\*.json

# Expected: 6 files — video4-voice.json, video5-voice.json, ... video9-voice.json
# Each file has every spoken word with a start/end timestamp in seconds.

## ── STEP 4: Send JSONs back to Claude ─────────────────────────────────────
# Easiest way: drag all 6 .json files from the transcripts\ folder into your
# next Claude message. Claude will read them and rebuild the scripts.
#
# If drag-drop doesn't work, open each JSON in Notepad, copy contents, paste
# into Claude one at a time labeled "video4 transcript", "video5 transcript", etc.
#
# DO NOT EDIT THE JSONS. Don't "clean them up." Raw Whisper output is exactly
# what Claude needs — the word-timestamp structure is what fixes the drift.

## ── STEP 5: Stop for the night ────────────────────────────────────────────
# Once JSONs are sent, you're done for the evening.
# Claude rebuilds scripts-batch2.ts + scripts-batch3.ts overnight-equivalent,
# writes a new sync script that uses the timestamps, and delivers a go/no-go
# report tomorrow. No render tonight — rebuild first, verify second, render third.

## ── TROUBLESHOOT (only if something breaks) ───────────────────────────────
# "whisper not recognized" → close PowerShell, reopen, try again. PATH cache.
# "CUDA not available" → ignore, it's just a warning. CPU mode works fine.
# "FP16 not supported on CPU; using FP32" → ignore, not an error.
# Whisper hangs >10 min on a single file → Ctrl+C, tell me which file.
