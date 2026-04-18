# Pre-Render Build Checklist — Claude verifies BEFORE Remotion Studio
# 6 videos: V4/V5/V6 (InfiniWell re-render) + V7/V8/V9 (Batch 3 first render)
#
# Maria's job: listen inside Remotion Studio and give voice/pacing feedback.
# Claude's job: every item below is GREEN in the source files before Maria
# ever opens Studio. If any item fails, Claude fixes it and re-verifies.
# Nothing gets handed to Maria for Studio review until this whole doc is ✓.

## ── LAYER 1: AUDIO FILES ON DISK ──────────────────────────────────────────
# All 6 MP3s must exist, be non-zero, and be readable by mutagen.

[ ] public/video4-voice.mp3 exists, >100KB
[ ] public/video5-voice.mp3 exists, >100KB
[ ] public/video6-voice.mp3 exists, >100KB
[ ] public/video7-voice.mp3 exists, >100KB
[ ] public/video8-voice.mp3 exists, >100KB
[ ] public/video9-voice.mp3 exists, >100KB
[ ] mutagen reads each file cleanly (no "unsupported format" errors)
[ ] Duration readout matches ElevenLabs export logs (±0.2s tolerance)

## ── LAYER 2: FRAME BUDGETS MATCH AUDIO ────────────────────────────────────
# sync-timing-universal.py must report "✔ No change needed" for every video.
# If it says "Updated" — the source drifted and needs re-verification.

[ ] `python sync-timing-universal.py batch2` → "No change needed" for V4, V5, V6
[ ] `python sync-timing-universal.py batch3` → "No change needed" for V7, V8, V9
[ ] scripts-batch2.ts V4 totalFrames = 911
[ ] scripts-batch2.ts V5 totalFrames = 689
[ ] scripts-batch2.ts V6 totalFrames = 721
[ ] scripts-batch3.ts V7 totalFrames = 2661
[ ] scripts-batch3.ts V8 totalFrames = 2920
[ ] scripts-batch3.ts V9 totalFrames = 2619
[ ] Every totalFrames = audio_end_frame + 60 (CTA hold enforced)

## ── LAYER 3: PHRASE ANCHORING ─────────────────────────────────────────────
# After sync redistributes startFrames, confirm phrases still line up with
# the voiceover beats. Word count per phrase / total word count should map
# to (phrase_startFrame - prior_startFrame) / totalFrames within ~5%.

[ ] V4 phrase startFrames monotonically increasing, no overlap
[ ] V5 phrase startFrames monotonically increasing, no overlap
[ ] V6 phrase startFrames monotonically increasing, no overlap
[ ] V7 phrase startFrames monotonically increasing, no overlap
[ ] V8 phrase startFrames monotonically increasing, no overlap
[ ] V9 phrase startFrames monotonically increasing, no overlap
[ ] Final CTA phrase startFrame = audio_end_frame (V4:851, V5:629, V6:661,
     V7:2601, V8:2859, V9:2558) — exactly the last audio frame
[ ] No phrase gap >2 seconds mid-composition (dead-air drift)

## ── LAYER 4: CTA CORRECTNESS ──────────────────────────────────────────────
# V4/V5/V6: "Link in bio." (InfiniWell has affiliate — link works)
# V7/V8/V9: "tr.ee/owQ7FM" as plain text (dead-link workaround)

[ ] V4 final phrase text = "Link in bio."
[ ] V5 final phrase text = "Link in bio."
[ ] V6 final phrase text = "Link in bio."
[ ] V7 final phrase text contains "tr.ee/owQ7FM" (bare, no https://, no prefix)
[ ] V8 final phrase text contains "tr.ee/owQ7FM"
[ ] V9 final phrase text contains "tr.ee/owQ7FM"
[ ] PhraseType for each CTA phrase = 'cta' (triggers correct render path)
[ ] No phrase anywhere uses em dashes (—) — CLEARED voice rule
[ ] No phrase uses the word "anonymized" — breaks Get R.E.A.L. voice (also
     applies to @oppractitioner voice by extension)

## ── LAYER 5: V7 CHART OVERLAY WIRING ──────────────────────────────────────
# Chart is the retention mechanic. If it doesn't fire, V7 loses its hook.

[ ] types.ts exports ChartBar + ChartSpec interfaces
[ ] PhraseEntry has optional `chart?: ChartSpec` field
[ ] PhraseVideo.tsx imports ChartSpec from types
[ ] PhraseVideo.tsx renders <ChartOverlay> when current.chart is set
[ ] scripts-batch3.ts V7 obligate-anaerobe phrase has `chart:` field attached
[ ] Chart config: kind='bar', 3 bars, maxValue=5
[ ] Bar 1: "Healthy gut", value=4, displayValue set
[ ] Bar 2: "After antibiotic", value=2, collapseAfter=true
[ ] Bar 3: "After stress", value=0.8, highlight=true
[ ] Chart title = "MICROBIOME COMPOSITION", unit = "% akkermansia muciniphila"
[ ] Chart attached to phrase whose startFrame = 1806 (after sync shift)
[ ] ChartOverlay timing constants match phrase duration (150 frames = 5s)
[ ] Scan line uses useCurrentFrame + interpolate — NO CSS keyframes
[ ] Glow pulse uses Math.sin((frame - timing.growEnd) * 0.15) — not animation

## ── LAYER 6: ROOT.TSX REGISTRY ────────────────────────────────────────────
# Every composition must be registered and use dynamic durationInFrames.

[ ] Video4-InfiniWellGut registered, durationInFrames={video4InfiniWellGut.totalFrames}
[ ] Video5-InfiniWellHHS registered, durationInFrames={video5InfiniWellHHS.totalFrames}
[ ] Video6-InfiniWellRecovery registered, durationInFrames={video6InfiniWellRecovery.totalFrames}
[ ] Video7-PendulumMetabolicStall registered, durationInFrames={video7PendulumMetabolicStall.totalFrames}
[ ] Video8-AlightMycotoxins registered, durationInFrames={video8AlightMycotoxins.totalFrames}
[ ] Video9-BodyBioMoldDetoxFloor registered, durationInFrames={video9BodyBioMoldDetoxFloor.totalFrames}
[ ] No composition uses a hardcoded number for durationInFrames
[ ] All 6 use width=1080, height=1920, fps=30
[ ] voiceSrc string matches public/ filename exactly

## ── LAYER 7: TYPESCRIPT / BUILD SANITY ────────────────────────────────────
# Catch compile errors before Maria hits play.

[ ] `npx tsc --noEmit` passes (no type errors across remotion/src)
[ ] No unused imports in scripts-batch2.ts or scripts-batch3.ts
[ ] No unused imports in PhraseVideo.tsx
[ ] Root.tsx imports resolve (all 9 video objects found)
[ ] No console.log left in PhraseVideo.tsx or ChartOverlay

## ── LAYER 8: TIKTOK 2026 RULE COMPLIANCE ──────────────────────────────────
# Canonical rules from CLAUDE.md top-of-file block. No Instagram bleed.

[ ] V4 duration 30.4s — within 60-120s sweet spot? NO — acceptable (re-render,
     audience already warm from prior post attempts)
[ ] V5 duration 23.0s — under 60s, acceptable per canonical rules (not "too short")
[ ] V6 duration 24.0s — acceptable
[ ] V7 duration 88.7s — IN sweet spot (60-120s) ✓
[ ] V8 duration 95.3s — IN sweet spot ✓
[ ] V9 duration 85.3s — IN sweet spot ✓
[ ] No video under 5s (would never qualify for distribution)
[ ] Every video has caption/subtitle text carrying the message (muted-viewer rule)
[ ] AI-generated disclosure planned for caption + upload toggle (Blotato step)

## ── LAYER 9: DEAD-LINK CTA INTEGRITY (V7/V8/V9) ──────────────────────────
# Under-1K-follower rule: URL must be HEARD, not clicked.

[ ] V7 CTA phrase includes the URL in the TEXT for on-screen display
[ ] V7 ElevenLabs audio actually speaks the URL (check transcript against MP3)
[ ] V8 CTA phrase includes URL in text
[ ] V8 audio speaks URL
[ ] V9 CTA phrase includes URL in text
[ ] V9 audio speaks URL
[ ] No hyperlink styling in the PhraseVideo render (no blue, no underline)
[ ] No "click the link" language anywhere — the link doesn't work

## ── LAYER 10: PUBLISHING HOLDS RESPECTED ──────────────────────────────────
# Don't let a render slip through to Blotato before gates clear.

[ ] V7 flagged HOLD — Pendulum affiliate link not yet approved
[ ] V8 flagged HOLD — Alight affiliate link swap in alight-mycotoxins.html
     still has {{ALIGHT_AFFILIATE_LINK}} placeholder
[ ] V9 clear to schedule (BodyBio active affiliate)
[ ] V4/V5/V6 clear to schedule (InfiniWell re-render, affiliate active)
[ ] CLAUDE_CODE_RERENDER_V4_V6.md schedule block reflects holds correctly

## ── EXECUTION ORDER ───────────────────────────────────────────────────────
# Claude runs this doc top-to-bottom. No jumping around.
# Each FAIL stops the chain and gets fixed before moving forward.
#
# When every box is ✓:
#   → Hand off to Maria: "All 10 layers green. Open Remotion Studio when ready."
#   → Maria reviews in Studio for voice/pacing/feel (her lane)
#   → Maria gives go/no-go per video
#   → Only on go: `npx remotion render` on Windows side

## ── FAILURE REPORTING FORMAT ──────────────────────────────────────────────
# If a layer fails, report to Maria as:
#   Layer N, Item [checkbox text]: FAILED because [specific reason]
#   Fix applied: [what changed]
#   Re-verified: ✓
#
# Never hand off to Studio with a known FAIL still in the chain.
