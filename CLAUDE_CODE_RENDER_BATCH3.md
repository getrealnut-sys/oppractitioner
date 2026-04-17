# Claude Code Task — Render + Upload + Schedule Batch 3 (Aires Travel + BodyBio Absorption)
# Run this entire file. Fully automated — no manual steps.
# TikTok account ID: 38608
#
# POST SCHEDULE:
#   Video 7 (Aires Travel)         → Apr 19 2026 8:00 AM ET
#   Video 8 (BodyBio Absorption)   → Apr 21 2026 8:00 AM ET
#
# PREREQUISITE: Drop ElevenLabs voice files into remotion/public/
#   video7-voice.mp3
#   video8-voice.mp3

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion

# ─── STEP 1: Install mutagen (no ffmpeg required) ────────────────────────────
pip install mutagen --break-system-packages -q

# ─── STEP 2: Sync audio timing ───────────────────────────────────────────────
# sync-timing-universal.py uses mutagen to read actual MP3 duration, then
# distributes startFrames by word count (proportional to ElevenLabs pacing).
# Pure Python — works on Python 3.14, no ffmpeg needed.
python sync-timing-universal.py batch3

# Review the frame output above. If any audio file is missing, fix that first.
# Expected: Duration for V7 ~15–17s, V8 ~16–18s.

# ─── STEP 3: Render both videos ──────────────────────────────────────────────
npx remotion render src/index.ts Video7-AiresTravel out/video7-aires-travel.mp4
npx remotion render src/index.ts Video8-BodyBioAbsorption out/video8-bodybio-absorption.mp4

# Confirm renders
ls -lh out/video7-aires-travel.mp4 out/video8-bodybio-absorption.mp4

# ─── STEP 4: Upload + Schedule via Blotato MCP ───────────────────────────────
# Rotation context — DO NOT post same affiliate back to back:
#   Apr 18 → InfiniWell V5 (HHS) — already scheduled
#   Apr 19 → Aires V7             ← this batch
#   Apr 20 → InfiniWell V4 (Gut) — already scheduled
#   Apr 21 → BodyBio V8           ← this batch
#   Apr 22 → InfiniWell V6        — already scheduled

# --- VIDEO 7: Aires Travel ---
# mcp: blotato_create_presigned_upload_url { filename: "video7-aires-travel.mp4" }
# PUT file to returned S3 URL
# mcp: blotato_create_post {
#   accountId: 38608,
#   videoUrl: <s3_url_from_step_above>,
#   caption: "#ad | Affiliate link in bio — I earn commission on purchases.\n\nOne thing I check with clients who travel constantly — sleep falls apart on the road, fine at home. Hotels and airports are zero-control EMF environments. Small enough to pack, worth testing.\nLink in bio.\n\n#emfprotection #integrativemedicine #healthtiktok #ad",
#   scheduledAt: "2026-04-19T08:00:00-04:00",
#   isBrandedContent: true,
#   isAiGenerated: true
# }

# --- VIDEO 8: BodyBio Absorption ---
# NOTE: Check BodyBio promo window before scheduling.
#   Window open through Apr 21 — if still active, caption below is correct.
#   If closed, remove "Code GETREAL247" from caption.
# mcp: blotato_create_presigned_upload_url { filename: "video8-bodybio-absorption.mp4" }
# PUT file to S3
# mcp: blotato_create_post {
#   accountId: 38608,
#   videoUrl: <s3_url>,
#   caption: "#ad | Affiliate link in bio — I earn commission on purchases.\n\nWhen supplements aren't landing — before adding more to the stack, I check the absorption layer. Cell membrane integrity controls what actually enters the cell.\nLink in bio.\n\n#cellhealth #integrativemedicine #guthealth #ad",
#   scheduledAt: "2026-04-21T08:00:00-04:00",
#   isBrandedContent: true,
#   isAiGenerated: true
# }

# ─── STEP 5: Report back ─────────────────────────────────────────────────────
# Return:
# - Render file sizes for both videos
# - Blotato post IDs for both videos
# - Confirmed schedule times
# Then Cowork will update content_log.md with the post IDs.

# ─── OPTIONAL: Re-sync + re-render Batch 2 if timing was off ─────────────────
# Run this ONLY if Apr 18 post (V5 HHS) shows card/audio sync issues after review.
# Batch 2 audio files must be in remotion/public/ (video4/5/6-voice.mp3).
#
# python sync-timing-universal.py batch2
# npx remotion render src/index.ts Video5-InfiniWellHHS out/video5-infiniwell-hhs-v2.mp4
# npx remotion render src/index.ts Video4-InfiniWellGut out/video4-infiniwell-gut-v2.mp4
# npx remotion render src/index.ts Video6-InfiniWellRecovery out/video6-infiniwell-recovery-v2.mp4
# Then re-upload and update Blotato scheduled posts.
