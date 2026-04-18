# Claude Code Task — Push site updates to GitHub Pages
# Run this now. Takes ~30 seconds.

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site

git add .gitignore content_log.md GITHUB_PUSH_TASK.md CLAUDE.md CLAUDE_CODE_RENDER_BATCH2.md CLAUDE_CODE_RENDER_BATCH3.md remotion/sync-timing-universal.py remotion/src/Root.tsx remotion/src/scripts-batch3.ts remotion/sync-timing-batch3.py docs/batch3_aires_bodybio_scripts.md
git commit -m "Bio link fix + timing fix + Batch 3

BIO LINK FIX:
- CLAUDE.md: bio link issue documented, caption rule updated (link must appear
  as plain text in every caption: 'Link in bio → https://tr.ee/owQ7FM')
- CLAUDE_CODE_CAPTION_FIX.md: task to update all 5 scheduled Blotato posts
- CLAUDE_CODE_RENDER_BATCH3.md: batch 3 captions updated with link line
- Action needed: convert to TikTok Business Account (removes 1K follower gate)

TIMING FIX:
- remotion/sync-timing-universal.py: replaces pydub — mutagen only, no ffmpeg,
  Python 3.14 compatible. Run: python sync-timing-universal.py [batch2|batch3|all]
- CLAUDE_CODE_RENDER_BATCH2.md: updated to use universal sync

BATCH 3:
- remotion/src/scripts-batch3.ts: V7 Aires travel, V8 BodyBio absorption
- remotion/src/Root.tsx: batch 3 compositions registered
- docs/batch3_aires_bodybio_scripts.md: voiceover scripts + compliance audit

HOUSEKEEPING:
- content_log.md: batch 2 post IDs logged (4c9cc579, 9e03f8b2, 8a3dd024)
- .gitignore: remotion/public/*.mp3 excluded"
git push origin main

# After push, GitHub Pages will update within ~60 seconds.
# Live URL: https://getrealnut-sys.github.io/oppractitioner/
# Report back when done.
