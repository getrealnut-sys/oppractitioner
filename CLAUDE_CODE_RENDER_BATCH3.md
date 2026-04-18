# Claude Code Task — Render + Upload + Schedule Batch 3 (REAL)
# Pendulum + Alight Formulas + BodyBio Mold Detox
# UPDATED: April 17, 2026 — stale Aires/BodyBio plan replaced with real Batch 3
#
# TikTok account ID: 38608 (@oppractitioner)
# Bio URL (type-only, not clickable under 1K followers): https://tr.ee/owQ7FM
#
# ── STATUS ────────────────────────────────────────────────────────────────────
# Video 7 (Pendulum / Akkermansia / Metabolic Stall) ...... 🟡 HOLD — affiliate link pending approval
# Video 8 (Alight Formulas / Mycotoxin-Specific Mapping) .. 🟢 GO once affiliate link drops into alight-mycotoxins.html
# Video 9 (BodyBio PC / Mold Detox Floor — Angle 2) ....... 🟢 GO (existing affiliate link)
#
# PUBLISH SCHEDULE (proposed — finalize after render review)
#   Video 8 (Alight)  → Apr 21 2026 12:30 PM ET
#   Video 9 (BodyBio) → Apr 22 2026  1:00 PM ET
#   Video 7 (Pendulum) → HOLD — publish 24-48 hours after affiliate link lands + value page builds
#
# Daily cadence: 1/day. Never same product back-to-back (V8 Alight → V9 BodyBio is fine; V7 Pendulum
# is different from both). Batch 2 InfiniWell posts continue on their existing schedule between.

cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion

# ─── STEP 1: Install mutagen (no ffmpeg required) ────────────────────────────
pip install mutagen --break-system-packages -q

# ─── STEP 2: Drop ElevenLabs voiceover files into remotion/public/ ───────────
# Required files (same locked voice as Batch 1 & 2):
#   video7-voice.mp3   (Pendulum — ~72 sec)
#   video8-voice.mp3   (Alight  — ~78 sec)
#   video9-voice.mp3   (BodyBio — ~68 sec)
#
# Use the voiceover scripts from:
#   ../../oppractitioner-cowork/scripts/batch3_pendulum_alight_bodybio.md
#
# CTA voiceover for ALL three ends with:
#   "Full pattern breakdown at tr dot ee slash owQ7FM. Type it — not clickable, you'll need to type it."
# This is the dead-link workaround — viewers must TYPE the URL (bio link is not hyperlinked under 1K).

# ─── STEP 3: Sync audio timing ───────────────────────────────────────────────
# Reads actual MP3 duration + distributes startFrames by word count proportional to ElevenLabs pacing.
python sync-timing-universal.py batch3

# Expected durations after sync: V7 ~72s, V8 ~78s, V9 ~68s.
# Review the frame output above. If any audio file is missing, fix that first.
# All three should show totalFrames > 2000 (videos are 60s+).

# ─── STEP 4: Verify compositions in Remotion Studio (optional but recommended) ────
npm run dev
# Preview each composition in http://localhost:3000:
#   Video7-PendulumMetabolicStall
#   Video8-AlightMycotoxins
#   Video9-BodyBioMoldDetoxFloor
# Confirm: hook clean, second-pass reward frames readable, CTA shows "tr.ee/owQ7FM" big and centered.
# ⌃C to stop the dev server when done reviewing.
#
# ✨ NEW IN V7: Microbiome composition chart overlay at startFrame 1440 ("obligate anaerobe"
# phrase). Three bars grow in live, "After antibiotic" bar collapses after growing (pattern-
# interrupt for rewatch), subtle scan line sweeps top-to-bottom. Scrub frames 1440-1590 in
# Studio to verify:
#   [ ] Title "MICROBIOME COMPOSITION" fades in cleanly (frames 1449-1460)
#   [ ] "Healthy gut" bar (phosphor green) grows and holds bright with glow pulse
#   [ ] "After antibiotic" bar grows then collapses to stub — this is intentional
#   [ ] "After stress" bar grows to small stub and holds
#   [ ] Numeric values count up, then swap to display strings ("3-5%", "<0.1%", "~0.5%")
#   [ ] Scan line visible but subtle (15% opacity)
#   [ ] Chart clears when product phrase takes over at startFrame 1680
# Chart source:   src/scripts-batch3.ts   (chart: {} field on phrase at startFrame 1440)
# Chart renderer: src/PhraseVideo.tsx     (ChartOverlay sub-component)
# Types:          src/types.ts            (ChartSpec, ChartBar interfaces)

# ─── STEP 5: Render all three ────────────────────────────────────────────────
npx remotion render src/index.ts Video7-PendulumMetabolicStall out/video7-pendulum-akkermansia.mp4
npx remotion render src/index.ts Video8-AlightMycotoxins       out/video8-alight-mycotoxins.mp4
npx remotion render src/index.ts Video9-BodyBioMoldDetoxFloor  out/video9-bodybio-mold-detox.mp4

# Confirm file sizes
ls -lh out/video7-pendulum-akkermansia.mp4 out/video8-alight-mycotoxins.mp4 out/video9-bodybio-mold-detox.mp4

# Expected: each file 10-25 MB range for 60-90s vertical 1080p.

# ─── STEP 6: Value Pages (GitHub Pages — oppractitioner-site repo) ──────────
# Confirm the following pages are live on getrealnut-sys.github.io/oppractitioner/ before the
# matching video publishes:
#
# V8 Alight:   alight-mycotoxins.html  — EDIT: replace {{ALIGHT_AFFILIATE_LINK}} with real link
#                                         (Maria scraped Alight — link still pending in affiliate-map.md
#                                          as of 2026-04-17; update BEFORE publish)
#
# V9 BodyBio:  bodybio-membrane.html   — UPDATED with "Angle 2: Mold Detox Floor" section
#                                         (live immediately; existing GETREAL247 link unchanged)
#
# V7 Pendulum: pendulum-akkermansia.html  — NOT YET CREATED
#                                           Build from _template.html when affiliate link approved.
#                                           Use video7PendulumMetabolicStall script text for pattern content.
#                                           Also remove index.html → pendulum-akkermansia.html placeholder
#                                           link if the page still doesn't exist at publish time.
#
# index.html already updated — Pendulum + Alight entries visible. Pendulum link will 404
# until the page exists. Accept or remove that link until V7 goes live.
#
# Then commit + push:
cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site
git add alight-mycotoxins.html bodybio-membrane.html index.html
git commit -m "Batch 3: Alight mycotoxins + BodyBio Angle 2 + index refresh"
git push

# ─── STEP 7: Upload renders to getreal-resources GitHub Pages ────────────────
# Match Batch 2 MP4 hosting pattern (public URL: getrealnut-sys.github.io/getreal-resources/<file>.mp4)
# if that's where @oppractitioner videos host. Otherwise adjust.
#
# Copy renders:
cp out/video7-pendulum-akkermansia.mp4  C:\Users\mia22\getreal-resources-clone\
cp out/video8-alight-mycotoxins.mp4     C:\Users\mia22\getreal-resources-clone\
cp out/video9-bodybio-mold-detox.mp4    C:\Users\mia22\getreal-resources-clone\

cd C:\Users\mia22\getreal-resources-clone
git add video7-pendulum-akkermansia.mp4 video8-alight-mycotoxins.mp4 video9-bodybio-mold-detox.mp4
git commit -m "Batch 3 renders: Pendulum, Alight, BodyBio mold detox"
git push

# ─── STEP 8: Duplicate Guard (dry-run) ───────────────────────────────────────
cd C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC
python .claude/skills/blotato/blotato_agent.py dedupe --dry-run

# Must confirm: no prior GR_B3_Video7 / GR_B3_Video8 / GR_B3_Video9 posts in queue or log.

# ─── STEP 9: Schedule via Blotato Agent ──────────────────────────────────────
# V8 Alight — Apr 21 12:30 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B3_Video8_Alight_BuildingSpecific \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video8-alight-mycotoxins.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch3-captions/video8-caption.txt \
  --schedule "2026-04-21T12:30:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# V9 BodyBio — Apr 22 1:00 PM ET
python .claude/skills/blotato/blotato_agent.py reel \
  --platform tiktok \
  --account 38608 \
  --file-ref GR_B3_Video9_BodyBio_MoldDetoxFloor \
  --media-url https://getrealnut-sys.github.io/getreal-resources/video9-bodybio-mold-detox.mp4 \
  --caption-file oppractitioner-cowork/scripts/batch3-captions/video9-caption.txt \
  --schedule "2026-04-22T13:00:00-04:00" \
  --is-branded-content \
  --is-ai-generated

# V7 Pendulum — DO NOT SCHEDULE YET. Schedule after affiliate link approved + value page built.

# ─── STEP 10: Log to posts_log + content_log ─────────────────────────────────
# Append post IDs + file_refs to:
#   cleared/posts_log.md                               (submission IDs — canonical)
#   oppractitioner-cowork/content_log.md               (product + pattern angle + value page URL)
#   oppractitioner-cowork/case-patterns/_usage-log.md  (pattern angle + 30-day rule tracking)

# ─── DEAD-LINK WORKAROUND — EXECUTION CHECKLIST (per video) ──────────────────
# Before each publish, confirm:
# [ ] CTA frame renders "tr.ee/owQ7FM" big, bold, centered, ≥3 sec dwell
# [ ] Voiceover speaks "tr dot ee slash owQ7FM" phonetically at CTA
# [ ] Caption has Type tr.ee/owQ7FM → [product] page. Link in bio isn't clickable under 1K followers — type it.
# [ ] No https:// shown on screen (just tr.ee/owQ7FM)
# [ ] tr.ee/owQ7FM destination page (index.html) surfaces the matching product clearly above-the-fold
# [ ] TikTok AI label toggled ON at upload (platform-side, not scriptable)

# ─── POST-PUBLISH MEASUREMENT (48 hr per video) ──────────────────────────────
# Track in content_log.md:
# - Completion rate (target ≥70%)
# - Rewatch rate (target ≥15%)
# - tr.ee/owQ7FM page visits (GitHub Pages traffic if analytics wired, else GitHub insights count)
# - Any affiliate sale attribution (affiliate dashboard timestamps)
