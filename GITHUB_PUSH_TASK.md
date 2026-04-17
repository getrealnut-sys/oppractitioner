# Claude Code Task — Push site updates to GitHub Pages
# Run this now. Takes ~30 seconds.

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site

git add .gitignore content_log.md GITHUB_PUSH_TASK.md CLAUDE_CODE_RENDER_BATCH2.md CLAUDE_CODE_RENDER_BATCH3.md remotion/sync-timing-universal.py remotion/src/Root.tsx remotion/src/scripts-batch3.ts remotion/sync-timing-batch3.py docs/batch3_aires_bodybio_scripts.md
git commit -m "Timing fix + Batch 3: universal sync script (no ffmpeg, Python 3.14)

TIMING FIX:
- remotion/sync-timing-universal.py: replaces pydub-based sync scripts
  Uses mutagen (pure Python, no ffmpeg) for MP3 duration, distributes
  startFrames by word count (proportional ElevenLabs pacing).
  Works on Python 3.14+. Handles batch2 + batch3.
- CLAUDE_CODE_RENDER_BATCH2.md: updated to use universal sync
- CLAUDE_CODE_RENDER_BATCH3.md: uses universal sync from the start

BATCH 3:
- remotion/src/scripts-batch3.ts: V7 Aires travel, V8 BodyBio absorption
- remotion/src/Root.tsx: batch 3 compositions registered (Video7, Video8)
- remotion/sync-timing-batch3.py: kept for reference, superseded by universal
- docs/batch3_aires_bodybio_scripts.md: voiceover scripts + compliance audit

HOUSEKEEPING:
- content_log.md: batch 2 post IDs logged (4c9cc579, 9e03f8b2, 8a3dd024)
- .gitignore: remotion/public/*.mp3 excluded"
git push origin main

# After push, GitHub Pages will update within ~60 seconds.
# Live URL: https://getrealnut-sys.github.io/oppractitioner/
# Report back when done.
