# Claude Code Task — Render + Upload + Schedule Batch 2 (InfiniWell BPC-157)
# Run this entire file. Fully automated — no manual steps.
# TikTok account ID: 38608

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion

# ─── STEP 1: Sync audio timing ───────────────────────────────────────────────
# Re-runs on local machine (sandbox already synced scripts-batch2.ts but
# local run confirms timing against Windows audio stack)
pip install pydub --break-system-packages -q
python sync-timing-batch2.py

# ─── STEP 2: Render all 3 videos ─────────────────────────────────────────────
npx remotion render src/index.ts Video5-InfiniWellHHS out/video5-infiniwell-hhs.mp4
npx remotion render src/index.ts Video4-InfiniWellGut out/video4-infiniwell-gut.mp4
npx remotion render src/index.ts Video6-InfiniWellRecovery out/video6-infiniwell-recovery.mp4

# Confirm renders
ls -lh out/video4-infiniwell-gut.mp4 out/video5-infiniwell-hhs.mp4 out/video6-infiniwell-recovery.mp4

# ─── STEP 3: Upload + Schedule via Blotato MCP ───────────────────────────────
# Post order: Video 5 first (HHS news hook, most time-sensitive)
# TikTok cadence rules:
#   - Never same product back-to-back
#   - 1/day seedling phase
#   - Space InfiniWell videos every 2 days (no new Aires/BodyBio content yet)
#   - Never go dark 3+ consecutive days
#
# Schedule:
#   Video 5 (HHS)      → Apr 18 2026 8:00 AM ET
#   Video 4 (Gut)      → Apr 20 2026 8:00 AM ET
#   Video 6 (Recovery) → Apr 22 2026 8:00 AM ET

# --- VIDEO 5: HHS Hook ---
# 1. Get presigned upload URL
# mcp: blotato_create_presigned_upload_url { filename: "video5-infiniwell-hhs.mp4" }
# 2. PUT file to returned S3 URL
# 3. Create scheduled post:
# mcp: blotato_create_post {
#   accountId: 38608,
#   videoUrl: <s3_url_from_step_1>,
#   caption: "#ad | Affiliate link in bio — I earn commission on purchases.\n\nHHS just flagged peptides as a research priority. Practitioners have been watching this space for years. Here's one I reach for.\nLink in bio.\n\n#peptides #integrativemedicine #healthtiktok #ad",
#   scheduledAt: "2026-04-18T08:00:00-04:00",
#   isBrandedContent: true,
#   isAiGenerated: true
# }

# --- VIDEO 4: Gut Lining ---
# mcp: blotato_create_presigned_upload_url { filename: "video4-infiniwell-gut.mp4" }
# PUT file to S3
# mcp: blotato_create_post {
#   accountId: 38608,
#   videoUrl: <s3_url>,
#   caption: "#ad | Affiliate link in bio — I earn commission on purchases.\n\nWhen the gut protocol is right and symptoms still won't shift — this is what I check next.\nLink in bio.\n\n#peptides #integrativemedicine #healthtiktok #ad",
#   scheduledAt: "2026-04-20T08:00:00-04:00",
#   isBrandedContent: true,
#   isAiGenerated: true
# }

# --- VIDEO 6: Recovery Plateau ---
# mcp: blotato_create_presigned_upload_url { filename: "video6-infiniwell-recovery.mp4" }
# PUT file to S3
# mcp: blotato_create_post {
#   accountId: 38608,
#   videoUrl: <s3_url>,
#   caption: "#ad | Affiliate link in bio — I earn commission on purchases.\n\nWhen recovery plateaus and the standard protocol isn't closing the gap — this is what I look at next.\nLink in bio.\n\n#peptides #integrativemedicine #healthtiktok #ad",
#   scheduledAt: "2026-04-22T08:00:00-04:00",
#   isBrandedContent: true,
#   isAiGenerated: true
# }

# ─── STEP 4: Report back ─────────────────────────────────────────────────────
# Return:
# - Render file sizes
# - Blotato post IDs for all 3 videos
# - Confirmed schedule times
# Then Cowork will update content_log.md with the post IDs.
