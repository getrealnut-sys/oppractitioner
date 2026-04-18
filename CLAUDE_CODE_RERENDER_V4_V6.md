# Claude Code Task — Re-render V4/V5/V6 + Schedule Apr 18-23
# InfiniWell BPC-157 (3 videos) + Batch 3 (2 videos) + V7 hold
#
# ── WHY THIS EXISTS ───────────────────────────────────────────────────────────
# Blotato schedule for V4/V5/V6 was deleted because audio was being cut off
# mid-narration. Root cause: scripts-batch2.ts totalFrames values were stale
# estimates (427/339/351) but actual ElevenLabs audio runs 851/629/661 frames.
# Remotion stopped rendering at totalFrames — audio clipped at ~50% through.
#
# FIX APPLIED (this session, sandbox-side):
#   1. Fixed Python syntax bug in sync-timing-universal.py line 274
#      (nested double-quotes in f-string) — would have failed on your machine too.
#   2. Ran `python sync-timing-universal.py batch2` — rewrote totalFrames +
#      startFrames based on actual MP3 duration. Scripts-batch2.ts now:
#        V4: totalFrames 911  (30.4s — full 28.37s audio + 2s CTA hold)
#        V5: totalFrames 689  (23.0s — full 20.98s audio + 2s CTA hold)
#        V6: totalFrames 721  (24.0s — full 22.05s audio + 2s CTA hold)
#
# Root.tsx uses `durationInFrames={video.totalFrames}` dynamically — no edit needed.
#
# ── WHAT STILL NEEDS WINDOWS-SIDE ACTION ──────────────────────────────────────
# Remotion render + GitHub upload + Blotato schedule — runs on your machine.
# No ElevenLabs work. No script changes. Audio files on disk are correct, only
# the composition frame budget was wrong. Your existing MP3s will work as-is.

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion

# ─── STEP 1: Pull this session's changes locally ─────────────────────────────
# The scripts-batch2.ts + sync-timing-universal.py updates happened on sandbox.
# Git-pull from your machine to get the new frame budgets + the Python fix.
#
# If you're syncing manually (no git workflow between sandbox and Windows):
#   - scripts-batch2.ts totalFrames changed: V4=911, V5=689, V6=721
#   - sync-timing-universal.py line 274 quote fix
# Confirm both by running:

python sync-timing-universal.py batch2
# Expected output:
#   V4 → 911 frames, V5 → 689 frames, V6 → 721 frames
#   "✔ No change needed" (because sandbox already wrote them)
# If it says "Updated" instead of "No change needed", the file didn't sync
# and the new values just got written — that's fine, continue.

# ─── STEP 2: (Optional) Preview in Remotion Studio before rendering ──────────
npm run dev
# Open http://localhost:3000. For each of V4/V5/V6:
#   [ ] Scrub to final CTA frame — "Link in bio." should display cleanly
#   [ ] Scrub to very end — audio should finish BEFORE the composition ends
#   [ ] CTA dwell should be ≥2 seconds (last 60 frames)
# ⌃C to stop server.

# ─── STEP 3: Render V4, V5, V6 ───────────────────────────────────────────────
npx remotion render src/index.ts Video4-InfiniWellGut       out/video4-infiniwell-gut.mp4
npx remotion render src/index.ts Video5-InfiniWellHHS       out/video5-infiniwell-hhs.mp4
npx remotion render src/index.ts Video6-InfiniWellRecovery  out/video6-infiniwell-recovery.mp4

ls -lh out/video4-infiniwell-gut.mp4 out/video5-infiniwell-hhs.mp4 out/video6-infiniwell-recovery.mp4
# Expected file sizes: V4 ~8-12MB (30s), V5 ~6-9MB (23s), V6 ~6-9MB (24s)

# ─── STEP 4: QA — play each file end-to-end BEFORE uploading ─────────────────
# Double-click each MP4 and watch in full. Confirm:
#   [ ] Audio narration reaches the final sentence
#   [ ] "Link in bio." text appears and holds ≥2 seconds
#   [ ] No truncation, no mid-sentence cut
#   [ ] Audio-video sync feels tight (phrase text changes match voiceover beats)
#
# If any video fails QA — STOP. Do not upload. Flag which video failed at which
# frame and we'll diagnose before re-rendering.

# ─── STEP 5: Upload renders to getreal-resources GitHub Pages ────────────────
# Copy to your local repo clone:
cp out/video4-infiniwell-gut.mp4       C:\Users\mia22\getreal-resources-clone\
cp out/video5-infiniwell-hhs.mp4       C:\Users\mia22\getreal-resources-clone\
cp out/video6-infiniwell-recovery.mp4  C:\Users\mia22\getreal-resources-clone\

cd C:\Users\mia22\getreal-resources-clone
git add video4-infiniwell-gut.mp4 video5-infiniwell-hhs.mp4 video6-infiniwell-recovery.mp4
git commit -m "Re-render V4/V5/V6: fixed frame budgets to match audio duration"
git push
# Wait ~1 min for GitHub Pages to propagate.
# Confirm public URLs load before scheduling in Blotato:
#   https://getrealnut-sys.github.io/getreal-resources/video4-infiniwell-gut.mp4
#   https://getrealnut-sys.github.io/getreal-resources/video5-infiniwell-hhs.mp4
#   https://getrealnut-sys.github.io/getreal-resources/video6-infiniwell-recovery.mp4

# ─── STEP 6: Dedupe dry-run before scheduling ────────────────────────────────
cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC
python .claude/skills/blotato/blotato_agent.py dedupe --dry-run
# Confirm no leftover V4/V5/V6 refs in Blotato queue from the previous failed
# schedule. If any remain, delete them first.

# ─── STEP 7: Schedule all 6 posts (V4/V5/V6 re-renders + V8/V9 from Batch 3) ─
# Day-by-day schedule for Apr 18-23 below. V7 Pendulum held (no affiliate link).
#
# CADENCE RULE: no same-product back-to-back.
# Saturday : V5 InfiniWell (HHS hook — timely, weekend-friendly)
# Sunday   : V9 BodyBio   (mold detox — different product)
# Monday   : V4 InfiniWell (gut lining — back to InfiniWell after gap)
# Tuesday  : V8 Alight    (mycotoxins — different product)
# Wednesday: V6 InfiniWell (recovery plateau — InfiniWell rotation)
# Thursday : (no post — V7 Pendulum holds for affiliate link)
#   → fallback: pick best-performing reel from V4/V5/V6/V8/V9 to repost/remix
#               if Thursday post is needed, OR skip to keep cadence honest.

# Caption files needed — create these on your machine if not already there:
#   oppractitioner-cowork/scripts/batch2-captions/video4-caption.txt
#   oppractitioner-cowork/scripts/batch2-captions/video5-caption.txt
#   oppractitioner-cowork/scripts/batch2-captions/video6-caption.txt
#   oppractitioner-cowork/scripts/batch3-captions/video8-caption.txt
#   oppractitioner-cowork/scripts/batch3-captions/video9-caption.txt

# V5 InfiniWell HHS — Sat Apr 18, 12:30 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B2_Video5_InfiniWell_HHS_V2 \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video5-infiniwell-hhs.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch2-captions/video5-caption.txt \
  --schedule "2026-04-18T12:30:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# V9 BodyBio Mold Detox — Sun Apr 19, 1:00 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B3_Video9_BodyBio_MoldDetoxFloor \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video9-bodybio-mold-detox.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch3-captions/video9-caption.txt \
  --schedule "2026-04-19T13:00:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# V4 InfiniWell Gut — Mon Apr 20, 12:30 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B2_Video4_InfiniWell_Gut_V2 \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video4-infiniwell-gut.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch2-captions/video4-caption.txt \
  --schedule "2026-04-20T12:30:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# V8 Alight Mycotoxins — Tue Apr 21, 12:30 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B3_Video8_Alight_BuildingSpecific \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video8-alight-mycotoxins.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch3-captions/video8-caption.txt \
  --schedule "2026-04-21T12:30:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# V6 InfiniWell Recovery — Wed Apr 22, 1:00 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B2_Video6_InfiniWell_Recovery_V2 \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video6-infiniwell-recovery.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch2-captions/video6-caption.txt \
  --schedule "2026-04-22T13:00:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# Thursday Apr 23 — HOLD. V7 Pendulum unpublished until affiliate link approved.
# If you need a Thursday post, options:
#   (a) Skip — 5/7 days in a week is fine for @oppractitioner under 1K.
#   (b) Repost best-performing reel from this week with a new caption angle.
#   (c) Plan a V10 script this week if you want Thursday filled with fresh content.

# ─── STEP 8: Log submission IDs ──────────────────────────────────────────────
# Copy each postSubmissionID from the blotato_agent output into:
#   cleared/posts_log.md
#   oppractitioner-cowork/content_log.md
# Flag V4/V5/V6 as "v2 — re-rendered after frame-budget fix."

# ─── STEP 9: Post-publish measurement (48 hr per video) ──────────────────────
# Track in content_log.md:
# - Completion rate (target ≥70% — previously broken because audio cut off)
# - Rewatch rate (target ≥15%)
# - Drop-off timestamp on the ~14-second mark (if it reappears, render broke again)
# - Any affiliate sale attribution

# ─── ROLLBACK (if this re-render also fails audio QA) ────────────────────────
# Don't schedule. Flag the specific video + the frame where audio cuts out.
# Likely causes: composition not re-built (stale output), wrong Root.tsx
# durationInFrames binding, or ElevenLabs file corruption. Diagnose before retry.
