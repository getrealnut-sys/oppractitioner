# Remotion Studio QA Checklist — 6 Videos (V4/V5/V6 + V7/V8/V9)
# Review all six in one sitting before Windows-side render.
#
# How to use: `cd oppractitioner-site/remotion && npm run dev`
# Open http://localhost:3000. Click each composition in the left panel.
# Scrub the timeline. Use the frame scrubber — not just play — so you can
# land exactly on the critical frames listed below.
#
# PASS = every checkbox confirmed green. FAIL on any one = do NOT render.
# Flag which composition + which frame failed and we diagnose before retry.

## ── GLOBAL CHECKS (all 6 videos) ──────────────────────────────────────────
# Run these on every composition before moving to the per-video checks.

[ ] Opening hook frame (frame 0-30): large text readable, no font loading flash
[ ] Audio starts within first ~10 frames (no dead-air opening)
[ ] No mid-sentence audio cut-off at any point
[ ] Final CTA text holds ≥60 frames (2 seconds) after voiceover ends
[ ] Composition ends AFTER audio finishes — not before
[ ] Phrase transitions feel synced to voiceover beats (not arbitrary)
[ ] No overlapping phrases (old phrase still on screen when new one enters)
[ ] Brand green (#7DF9C2) renders consistently — no washed-out frames

## ── BATCH 2: InfiniWell BPC-157 ───────────────────────────────────────────

### V4 — InfiniWell Gut Lining  (Composition: Video4-InfiniWellGut)
#   totalFrames: 911  |  duration: 30.4s  |  audio ends: frame 851
[ ] Frame 0-30: hook phrase renders cleanly
[ ] Frame 851 (≈28.4s): final narration word completes
[ ] Frame 851-911 (last 60 frames): "Link in bio." holds on screen, no overlap
[ ] Frame 911 (end): composition closes cleanly, no black flash mid-hold
[ ] CTA dwell = exactly 60 frames — confirm by scrubbing 851 → 911

### V5 — InfiniWell HHS Regulation  (Composition: Video5-InfiniWellHHS)
#   totalFrames: 689  |  duration: 23.0s  |  audio ends: frame 629
[ ] Frame 0-30: HHS hook lands (this is the strongest weekend-friendly hook)
[ ] Frame 629 (≈21.0s): final narration word completes
[ ] Frame 629-689 (last 60 frames): "Link in bio." holds
[ ] No audio truncation on the HHS regulation phrase (was clipping before)
[ ] CTA dwell = 60 frames

### V6 — InfiniWell Recovery Plateau  (Composition: Video6-InfiniWellRecovery)
#   totalFrames: 721  |  duration: 24.0s  |  audio ends: frame 661
[ ] Frame 0-30: recovery plateau hook renders
[ ] Frame 661 (≈22.0s): final narration word completes
[ ] Frame 661-721 (last 60 frames): "Link in bio." holds
[ ] Phrase about "recovery plateau" syncs to voiceover
[ ] CTA dwell = 60 frames

## ── BATCH 3: Pendulum + Alight + BodyBio Mold ────────────────────────────
# These run longer (85-95s). TikTok 2026 sweet spot — NOT too long.

### V7 — Pendulum Akkermansia / Metabolic Stall  (Composition: Video7-PendulumMetabolicStall)
#   totalFrames: 2661  |  duration: 88.7s  |  audio ends: frame 2601
#   **CHART OVERLAY — this is the retention mechanic.** Test carefully.
[ ] Frame 0-30: metabolic stall hook renders
[ ] Chart entrance — Frame 1806: obligate-anaerobe phrase begins on screen
[ ] Frame 1815-1826: chart title "MICROBIOME COMPOSITION" fades in (9-20 frames into phrase)
[ ] Frame 1827-1841: Bar 1 "Healthy gut" (value 4) grows left-to-right
[ ] Frame 1852-1876: Bar 2 "After antibiotic" (value 2) grows, THEN collapses (this is the key visual beat — ~0.7s hold then collapse)
[ ] Frame 1877-1892: Bar 3 "After stress" (value 0.8) grows — highlight bar with gold glow pulse
[ ] Frame 1892-1956: chart holds on screen while phrase finishes (~2s hold)
[ ] Scan line: 1px phosphor green line sweeps across chart area every 60 frames (2s cycle), 15% opacity
[ ] Glow pulse on highlight bar visible — sine-wave, 0.35-0.60 opacity range
[ ] Chart does NOT appear before frame 1806 or after frame 1956 (clean enter/exit)
[ ] Frame 2601 (≈86.7s): final narration word completes
[ ] Frame 2601-2661 (last 60 frames): CTA "tr.ee/owQ7FM" visible — NOT hyperlinked styling, just typed text
[ ] CTA voiceover speaks the URL clearly — viewer can HEAR "tr ee slash o w Q 7 F M"
[ ] CTA dwell = 60 frames

### V8 — Alight Mycotoxins / Building-Specific  (Composition: Video8-AlightMycotoxins)
#   totalFrames: 2920  |  duration: 95.3s  |  audio ends: frame 2859
#   **Longest of the six. Watch rewatch engineering — does it loop well?**
[ ] Frame 0-30: building-specific mycotoxin hook renders (strong pattern-interrupt)
[ ] Phrase transitions sync to voiceover beats throughout (2859 frames is long — drift surfaces here if anywhere)
[ ] Frame 2859 (≈95.3s): final narration word completes
[ ] Frame 2859-2920 (last 60 frames): CTA "tr.ee/owQ7FM" holds
[ ] CTA voiceover speaks URL clearly
[ ] Rewatch test: does the last frame feel connected to the first? (loop hook)
[ ] CTA dwell = 60 frames

### V9 — BodyBio PC Mold Detox Sequencing  (Composition: Video9-BodyBioMoldDetoxFloor)
#   totalFrames: 2619  |  duration: 85.3s  |  audio ends: frame 2558
[ ] Frame 0-30: mold detox floor hook renders
[ ] Sequencing phrases sync to voiceover (this script has explicit order-of-operations)
[ ] Frame 2558 (≈85.3s): final narration word completes
[ ] Frame 2558-2619 (last 60 frames): CTA "tr.ee/owQ7FM" holds
[ ] CTA voiceover speaks URL clearly
[ ] CTA dwell = 60 frames

## ── AUDIO-VIDEO SYNC SPOT-CHECKS ──────────────────────────────────────────
# For each video, scrub to the 50% mark and confirm the phrase on screen
# matches the word being spoken. Drift usually surfaces mid-composition.

[ ] V4 frame 455 (~50%): phrase matches voiceover word
[ ] V5 frame 344 (~50%): phrase matches voiceover word
[ ] V6 frame 360 (~50%): phrase matches voiceover word
[ ] V7 frame 1330 (~50%): phrase matches voiceover word  ← pre-chart
[ ] V8 frame 1460 (~50%): phrase matches voiceover word
[ ] V9 frame 1309 (~50%): phrase matches voiceover word

## ── DEAD-LINK CTA VERIFICATION (V7/V8/V9 ONLY) ───────────────────────────
# @oppractitioner is under 1K followers → TikTok suppresses link clicks.
# The URL has to be HEARD and MEMORABLE, not clickable.

[ ] V7 final CTA: URL "tr.ee/owQ7FM" rendered as plain text (no underline, no link blue)
[ ] V7 voiceover: URL spoken character-by-character OR in a memorable chunk
[ ] V8 final CTA: same visual treatment
[ ] V8 voiceover: URL audible and parseable
[ ] V9 final CTA: same visual treatment
[ ] V9 voiceover: URL audible and parseable

## ── FAIL ROUTING ──────────────────────────────────────────────────────────
# If any checkbox fails, stop here and report back with:
#   - Composition name (e.g. Video7-PendulumMetabolicStall)
#   - Exact frame where the problem occurs
#   - What you see vs. what you expected
#
# DO NOT run `npx remotion render` until every box above is checked.
# DO NOT schedule in Blotato until each rendered MP4 passes QA on disk too.

## ── AFTER QA PASSES ───────────────────────────────────────────────────────
# V4/V5/V6 → follow CLAUDE_CODE_RERENDER_V4_V6.md (re-render + Apr 18-23 schedule)
# V7 → HOLD (Pendulum affiliate link pending)
# V8 → HOLD until alight-mycotoxins.html {{ALIGHT_AFFILIATE_LINK}} is swapped
# V9 → ready to render + schedule (Sun Apr 19, 1:00 PM ET slot)
