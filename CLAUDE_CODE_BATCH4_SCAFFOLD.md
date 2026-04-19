# Claude Code CLI Handoff — Batch 4 Remotion Scaffold Build

**Handoff date:** 2026-04-18
**Target interface:** Claude Code CLI, inside `oppractitioner-site/remotion/`
**Handoff from:** Cowork session (Decision #34 preflight + Decision #35 audio remediation just completed)
**Doctrine anchor:** DOCTRINE §5 (Voice 4 not VG-gated), §6 (brand silo absolute), §1.4 (vocabulary strip), §7.3 (Blotato sole publish gate) + Decision #35 (sub-1K phrase banned in consumer-facing copy; Remotion preview is sole audio review surface) — files: `governance/DOCTRINE.md`, `oppractitioner-cowork/OPPRACTITIONER_GOVERNANCE.md`, `oppractitioner-cowork/tiktok-strategy/SKILL.md`, `governance/SHG_BRAND_DECISIONS_LOG.md` (Decision #34 + #35)

---

## Session ritual (execute before any work)

1. `cat ../../CLAUDE.md` (workspace index — read the Session Preflight block)
2. `cat ../CLAUDE.md` (project brain — master control doc)
3. `cat ../oppractitioner-cowork/CLAUDE.md` (Brand Operator Gate — RUN THIS GATE BEFORE ANY @oppractitioner ACTION)
4. `cat ../governance/DOCTRINE.md` — §5, §6, §1.4, §7.3
5. `cat ../governance/SHG_BRAND_DECISIONS_LOG.md` — Decisions #33, #34, #35 (most recent at tail)
6. `cat ../oppractitioner-cowork/tiktok-strategy/SKILL.md` — 7-item Brand Silo FAIL list + Pre-Publish Audit template
7. `cat ../oppractitioner-cowork/scripts/batch4_videos_4-9.md` — the authoritative V4-V9 scripts with revised (post-Decision-#35) CTAs

Output a Preflight Block per `../CLAUDE.md` + a Brand Operator Gate per `../oppractitioner-cowork/CLAUDE.md` before touching any code.

---

## What happened before this handoff

Batch 4 produced 18 voiceover MP3s (V4-V9 × 3 hook variants) at `oppractitioner-site/remotion/audio/`. Pre-existing Remotion scaffold only supports the batch 2/3 single-hook model. The new batch 4 audio uses hook variants, which the current `src/Root.tsx` does not register.

Additionally, Decision #35 (2026-04-18) stripped the "Type it — link in bio isn't clickable under 1K followers" line from all consumer-facing copy:
- **Audio:** trimmed in place (3.1–3.7s removed per file). Originals at `../archive/2026-04-18_audio_pre_decision35_originals/`.
- **Scripts:** `batch4_videos_4-9.md` rewritten, `generate_batch4_audio.py` rewritten.
- **Governance:** 5 governance files rewritten + Decision #35 logged.

**V7 Pendulum is HELD** per `remotion/audio/DO_NOT_RENDER.md` — affiliate approval + URL wiring + DRAFT banner removal are outstanding. V7 assets may be scaffolded (script data + composition) but NEVER rendered or published until the three-gate clearance lands.

## What needs to happen

Scaffold the batch 4 Remotion pipeline on top of the existing batch 2/3 template so a Remotion preview integrated pass is possible per Decision #35.

### Deliverables

1. **`src/scripts-batch4.ts`** — new file. Define:
   - `video4InfiniWellGutHookA`, `video4InfiniWellGutHookB`, `video4InfiniWellGutHookC` (InfiniWell gut lining)
   - `video5InfiniWellPeptideWindowHookA/B/C` (InfiniWell peptide regulatory window)
   - `video6InfiniWellRecoveryPlateauHookA/B/C` (InfiniWell recovery plateau)
   - `video7PendulumMetabolicStallHookA/B/C` (Pendulum Akkermansia — HOLD; scaffold only)
   - `video8AlightMycotoxinsHookA/B/C` (Alight Formulas — building-specific mycotoxin mapping)
   - `video9BodyBioMoldDetoxHookA/B/C` (BodyBio PC — mold detox sequencing, Angle 2)

   Each entry uses the `ScriptData` shape from `src/types.ts`. Body phrases are drawn from `../oppractitioner-cowork/scripts/batch4_videos_4-9.md`. Hook variants differ only in the first phrase; body is shared across A/B/C for a given video.

   **Total frames per video:** see trimmed audio durations (below). FPS 30. Multiply seconds × 30, round up.

   | File | Duration (s) | Frames @ 30fps |
   |---|---|---|
   | video4-hookA.mp3 | 77.531 | 2326 |
   | video4-hookB.mp3 | 80.144 | 2405 |
   | video4-hookC.mp3 | 78.289 | 2349 |
   | video5-hookA.mp3 | 77.140 | 2315 |
   | video5-hookB.mp3 | 77.845 | 2336 |
   | video5-hookC.mp3 | 77.087 | 2313 |
   | video6-hookA.mp3 | 74.710 | 2242 |
   | video6-hookB.mp3 | 77.166 | 2315 |
   | video6-hookC.mp3 | 75.128 | 2254 |
   | video7-hookA.mp3 | 79.909 | 2398 |
   | video7-hookB.mp3 | 81.293 | 2439 |
   | video7-hookC.mp3 | 79.700 | 2391 |
   | video8-hookA.mp3 | 84.637 | 2540 |
   | video8-hookB.mp3 | 89.130 | 2674 |
   | video8-hookC.mp3 | 83.200 | 2496 |
   | video9-hookA.mp3 | 75.024 | 2251 |
   | video9-hookB.mp3 | 82.416 | 2473 |
   | video9-hookC.mp3 | 79.438 | 2384 |

2. **Update `src/Root.tsx`** — register 18 new compositions (V4-V9 × 3 hook variants). Keep existing batch1/2/3 compositions intact (needed for render history + reversibility). Naming convention: `Video4-InfiniWellGut-HookA` / `Video4-InfiniWellGut-HookB` / `Video4-InfiniWellGut-HookC`, etc.

3. **Wire audio sources.** Remotion's `Audio` component needs files in `public/`. Options:
   - (a) Copy trimmed MP3s into `public/` as `video4-hookA.mp3` etc. Simple, doubles disk use.
   - (b) Update `PhraseVideo.tsx` to accept an `audioDir` prop and use `staticFile('audio/video4-hookA.mp3')` — but Remotion's `staticFile()` only resolves inside `public/`, so this still requires copying or symlinking.
   - **Recommendation:** (a) — copy trimmed MP3s to `public/` with the hookA/B/C names. Keep `remotion/audio/` as the source-of-truth folder. Publish script from audio/ → public/ on each regeneration.

4. **Generate Whisper transcripts for new audio.**
   ```
   # From oppractitioner-site/remotion/
   # For each video4-hookA/B/C through video9-hookC:
   python -m whisper public/video4-hookA.mp3 --model base --output_format json --output_dir transcripts/
   ```
   Old `transcripts/video4-voice.json` etc. are obsolete (pre-trim); archive or overwrite.

5. **Run `sync-timing-universal.py batch4`.** Script may need extending to know about batch4 (it currently knows batch2 and batch3). Extend with a batch4 registry block that maps the new composition IDs to the new audio file basenames and transcript paths. Auto-syncs `startFrame` values in `scripts-batch4.ts` based on Whisper word timestamps.

6. **Start Remotion Studio and open V4-A.**
   ```
   cd oppractitioner-site/remotion/
   npm run dev
   # Opens Remotion Studio at http://localhost:3000
   # Select composition "Video4-InfiniWellGut-HookA"
   ```
   This is the doctrine-correct Remotion preview integrated pass. Verify:
   - Audio plays cleanly end-to-end (no tail-clipping, no cut-off "owQ7FM")
   - Phrase on-screen text matches what's being spoken
   - CTA frame renders `tr.ee/owQ7FM` big + center ≥3 sec dwell (per SKILL.md rule #4)
   - No "Type it — link in bio isn't clickable under 1K followers" phrasing anywhere on-screen or in audio
   - Scene transitions land on phrase boundaries, not mid-word
   - Total composition duration matches audio (±1 frame tolerance)

### Deliverables NOT in scope for this handoff

- Rendering MP4s (this is preview pass only — render is a later step, gated by Maria's sign-off)
- Publishing to Blotato (DOCTRINE §7.3 — only after render + final audit pass)
- V7 render (still HOLD — scaffold only)
- Updating `posts_log.md` (only after publish)

---

## Doctrine gates this work must pass

### Brand Operator Gate (run before starting)
Full gate at `../oppractitioner-cowork/CLAUDE.md`. Key items:
- DOCTRINE §5: **NO Voice Guardian invocation.** Voice 4 is not VG-gated.
- DOCTRINE §6: Scripts, composition titles, on-screen text, filenames must contain ZERO references to Maria Castro / Get R.E.A.L. / @getrealnutrition / CLEARED / SHG / TROPOS / Linktree.
- DOCTRINE §1.4: Owned-vocabulary strip — no R.E.A.L., CLEARED, Human Authority Filter, Zone Model, 4 Ds, 3 Es in phrase text.
- Two-layer URL: on-screen URL = `tr.ee/owQ7FM` only. `getrealnut-sys.github.io/...` is internal infrastructure, never rendered on-screen.
- Affiliate-code exception (GETREAL247, /getreal): allowed on value pages ONLY — NEVER in phrase text, voiceover, or on-screen video text.

### Decision #35 gate
- Any phrase containing "under 1K followers," "not clickable," "link isn't active," or similar account-state explanation = automatic FAIL. Strip at authoring time; catch at audit.
- Audio QA happens INSIDE Remotion preview — not as a standalone MP3 listen. If you find yourself opening an MP3 in a media player, stop and run Remotion Studio instead.

### Pre-Publish Audit (per `tiktok-strategy/SKILL.md`)
Run the full 7-item Brand Silo Check + Dead-Link Workaround Check + new Audio + Scene Review block against V4 Hook A before handing back to Maria for sign-off.

---

## Files to NOT touch

- `remotion/audio/*.mp3` — trimmed production audio, do NOT regenerate (Decision #35 work is complete). If audio/script mismatch is discovered, stop and surface to Maria.
- `remotion/audio/DO_NOT_RENDER.md` — V7 HOLD flag.
- `remotion/out/*.mp4` — prior render history.
- Anything under `../archive/` — read-only.

## Expected session output

1. Preflight Block + Operator Gate in CLAUDE.md-standard format at the start.
2. `scripts-batch4.ts` created.
3. `Root.tsx` updated with new compositions.
4. Audio copied into `public/` with hookA/B/C names.
5. Whisper transcripts generated for all 18 files (or at minimum V4-A).
6. `sync-timing-universal.py` extended for batch4.
7. Remotion Studio preview URL in the report.
8. V4-A audit (the 7-item silo check + dead-link check + audio/scene review) in the report.
9. Commit per repo git hygiene rules — but DO NOT push unless Maria explicitly says so.

## When this handoff gate is satisfied

When Maria can open Remotion Studio, load Video4-InfiniWellGut-HookA, and watch the full ~77.5s preview with audio + scenes + on-screen text in sync, with zero Decision #35 breach language appearing anywhere. That's the doctrine-correct audio + scene review pass.

## Handoff anchor

**Doctrine anchor:** DOCTRINE §5 + §6 + §1.4 + §7.3 + Decision #35; paths: `governance/DOCTRINE.md`, `governance/SHG_BRAND_DECISIONS_LOG.md` (Decisions #34 + #35), `oppractitioner-cowork/CLAUDE.md` (Brand Operator Gate), `oppractitioner-cowork/tiktok-strategy/SKILL.md` (Audio + Scene Review block).
