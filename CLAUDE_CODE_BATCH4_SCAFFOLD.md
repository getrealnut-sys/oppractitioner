# Claude Code CLI Handoff — Batch 4 Remotion Timing Sync

**Handoff date:** 2026-04-18 (revised — scaffold + phrase-array rebuild complete)
**Target interface:** Claude Code CLI, inside `oppractitioner-site/remotion/`
**Handoff from:** Cowork session (Decision #34 preflight + Decision #35 audio remediation + full phrase-array rebuild against authoritative script just completed)
**Doctrine anchor:** DOCTRINE §5 (Voice 4 not VG-gated), §6 (brand silo absolute), §1.4 (vocabulary strip), §7.3 (Blotato sole publish gate) + Decision #35 (sub-1K phrase banned in consumer-facing copy; Remotion preview is sole audio review surface) — files: `governance/DOCTRINE.md`, `oppractitioner-cowork/OPPRACTITIONER_GOVERNANCE.md`, `oppractitioner-cowork/tiktok-strategy/SKILL.md`, `governance/SHG_BRAND_DECISIONS_LOG.md` (Decisions #34 + #35)

**Deadline:** Sunday 2026-04-19 (content must be scheduled tonight)

---

## Session ritual (execute before any work)

1. `cat ../../CLAUDE.md` (workspace index — read the Session Preflight block)
2. `cat ../CLAUDE.md` (project brain — master control doc)
3. `cat ../oppractitioner-cowork/CLAUDE.md` (Brand Operator Gate — RUN THIS GATE BEFORE ANY @oppractitioner ACTION)
4. `cat ../governance/DOCTRINE.md` — §5, §6, §1.4, §7.3
5. `cat ../governance/SHG_BRAND_DECISIONS_LOG.md` — Decisions #33, #34, #35 (most recent at tail)
6. `cat ../oppractitioner-cowork/tiktok-strategy/SKILL.md` — 7-item Brand Silo FAIL list + Pre-Publish Audit template
7. `cat ../oppractitioner-cowork/scripts/batch4_videos_4-9.md` — the authoritative V4-V9 voiceover source (for cross-referencing transcripts if sync drifts)

Output a Preflight Block per `../CLAUDE.md` + a Brand Operator Gate per `../oppractitioner-cowork/CLAUDE.md` before touching any code.

---

## What happened before this handoff (2026-04-18, Cowork)

Batch 4 produced 18 voiceover MP3s (V4-V9 × 3 hook variants) at `oppractitioner-site/remotion/audio/`. Decision #35 (2026-04-18) stripped the "Type it — link in bio isn't clickable under 1K followers" line from all consumer-facing copy:
- **Audio:** trimmed in place (3.1–3.7s removed per file). Originals at `../archive/2026-04-18_audio_pre_decision35_originals/`.
- **Scripts:** `batch4_videos_4-9.md` rewritten, `generate_batch4_audio.py` rewritten.
- **Governance:** 5 governance files rewritten + Decision #35 logged.

**Then, evening 2026-04-18:** Maria flagged audio/tile misalignment in V4-A ("bloating and stool shifting is nonexistent on tiles"). A full audit uncovered 17 missing tiles + 6 partial tiles across V4-V9. Cowork rebuilt the phrase arrays in `src/scripts-batch4.ts` against the authoritative `batch4_videos_4-9.md` voiceover. All 6 videos × 3 hooks = 18 compositions now have complete phrase-tile coverage for every voiceover beat.

**Current state of `src/scripts-batch4.ts`:**
- ✅ 18 compositions exist, all matching authoritative voiceover
- ✅ New tiles added: V4 (SYMPTOMS, MECHANISM, INTRODUCING), V5 (extended product qualifier, extended hook), V6 (extended client presentation, extended plateau, new MECHANISM tile, updated product qualifier), V7 (extended WHAT IT DOES, extended SECOND-PASS REWARD, updated product qualifier), V8 (extended CLIENT PRESENTATION, extended RESULT, extended ROOT PATTERN), V9 (extended ROOT PATTERN, extended SECOND-PASS REWARD, new INTRODUCING + SECOND-PASS REWARD tiles)
- ✅ Decision #35 breach sweep PASSED (no banned phrases, no §6 silo violations, CTA tiles are `tr.ee/owQ7FM` only)
- ⚠️ **`startFrame` values are PLACEHOLDERS.** They were hand-estimated during the rebuild. Sync-timing is CLI's remaining work.

**V7 Pendulum is HELD** per `remotion/audio/DO_NOT_RENDER.md` — affiliate approval + URL wiring + DRAFT banner removal are outstanding. V7 script-data exists as scaffold but must NEVER be rendered or published until the three-gate clearance lands.

---

## What CLI needs to do tonight

Phrase content is locked. The only remaining work is syncing `startFrame` values to the actual audio, then validating in Remotion Studio.

### Step 1 — Copy trimmed MP3s into `public/`

From `oppractitioner-site/remotion/`:
```bash
for f in audio/video*-hook*.mp3; do
  cp "$f" "public/$(basename "$f")"
done
```

Remotion's `staticFile()` only resolves under `public/`. Keep `audio/` as source of truth; `public/` is a render-time copy. Do NOT regenerate audio under any circumstance — the 18 trimmed MP3s are frozen at Decision #35 state.

### Step 2 — Confirm `src/Root.tsx` registers all 18 compositions

Expected composition IDs (must match `compositionId` field in `scripts-batch4.ts`):
- `Video4-InfiniWellGut-HookA/B/C`
- `Video5-InfiniWellPeptideWindow-HookA/B/C`
- `Video6-InfiniWellRecoveryPlateau-HookA/B/C`
- `Video7-PendulumMetabolicStall-HookA/B/C` (HOLD — scaffold only)
- `Video8-AlightMycotoxins-HookA/B/C`
- `Video9-BodyBioMoldDetox-HookA/B/C`

If Root.tsx is not already wired for batch4, register them with `durationInFrames` from the table below. Keep batch1/2/3 compositions intact.

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

### Step 3 — Generate Whisper transcripts for all 18 trimmed files

```bash
# From oppractitioner-site/remotion/
mkdir -p transcripts/batch4
for f in public/video{4,5,6,7,8,9}-hook{A,B,C}.mp3; do
  base=$(basename "$f" .mp3)
  python -m whisper "$f" --model base --output_format json --output_dir transcripts/batch4/ --word_timestamps True
done
```

**Critical:** use `--word_timestamps True` — sync-timing-universal.py needs per-word start times to anchor phrase boundaries. Old `transcripts/video4-voice.json` etc. are obsolete (pre-trim); archive or overwrite. Do NOT reuse any pre-Decision-#35 transcripts.

### Step 4 — Extend `sync-timing-universal.py` for batch4

Currently the script knows batch2 and batch3. Add a batch4 registry block that maps:
- composition ID → audio filename → transcript path → phrase-count (for sanity checks)

The script's job: read the Whisper word-timestamp JSON, match first word of each phrase's first segment against the transcript, overwrite `startFrame` values in `src/scripts-batch4.ts` in place.

Expected matching cadence per phrase:
- First segment's first word is anchor word
- Find its first occurrence in the transcript AFTER the previous phrase's anchor
- `startFrame = round(word_start_seconds * 30)`

Phrase counts per composition (for the script's sanity-check assertion):
- V4-A: 14 phrases (hook + 13 body)
- V4-B: 14 phrases
- V4-C: 14 phrases
- V5-A/B/C: 15 phrases each
- V6-A/B/C: 15 phrases each
- V7-A/B/C: 14 phrases each
- V8-A/B/C: 13 phrases each
- V9-A/B/C: 14 phrases each

(Read scripts-batch4.ts to confirm exact counts before asserting.)

### Step 5 — Run sync-timing-universal.py

```bash
python sync-timing-universal.py batch4
```

It should rewrite all 18 compositions' `startFrame` fields based on Whisper anchors. Diff the file in git before committing — eyeball that changes are only in `startFrame:` lines, not segment text.

### Step 6 — Start Remotion Studio and verify V4-A

```bash
cd oppractitioner-site/remotion/
npm run dev
# Opens Remotion Studio at http://localhost:3000
# Select composition "Video4-InfiniWellGut-HookA"
```

Verify V4-A first — it's the one Maria called out as misaligned. This is the doctrine-correct Remotion preview integrated pass (Decision #35). Check:
- Audio plays cleanly end-to-end (no tail-clipping, no cut-off "owQ7FM")
- Every phrase tile matches what's being spoken at that moment (±15 frames tolerance)
- "SYMPTOMS" tile ("bloating after meals / stool that keeps shifting") lands while Maria says those words
- "MECHANISM" tile lands while the voiceover talks about microbiome disruption
- "INTRODUCING" tile (BPC-157) lands while the voiceover names BPC-157
- CTA frame renders `tr.ee/owQ7FM` big + center ≥3 sec dwell
- No "Type it — link in bio isn't clickable under 1K followers" phrasing anywhere on-screen or in audio
- Scene transitions land on phrase boundaries, not mid-word
- Total composition duration matches audio (±1 frame tolerance)

If V4-A plays clean, spot-check V5-A, V6-A, V8-A, V9-A (same discipline). Skip V7.

### Step 7 — Report back

Produce in the chat:
- List of `startFrame` deltas (before → after) grouped by composition
- V4-A verification result (pass/fail per bullet above)
- Any tile-to-audio gap >20 frames worth flagging to Maria before publish
- Remotion Studio preview URL

### Deliverables NOT in scope for this handoff

- Rendering MP4s (preview pass only — render is gated by Maria's sign-off)
- Publishing to Blotato (DOCTRINE §7.3 — only after render + final audit pass)
- V7 render (still HOLD — scaffold only, skip in spot-checks)
- Updating `posts_log.md` (only after publish)
- Any edits to `scripts-batch4.ts` SEGMENT content (phrases are locked — if you find a content mismatch, STOP and surface to Maria; do not self-correct)

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
- Any phrase containing "under 1K followers," "not clickable," "link isn't active," or similar account-state explanation = automatic FAIL. Breach sweep already run by Cowork; re-run after any sync-timing-script change if the script writes to phrase text by accident.
- Audio QA happens INSIDE Remotion preview — not as a standalone MP3 listen. If you find yourself opening an MP3 in a media player, stop and run Remotion Studio instead.

### Pre-Publish Audit (per `tiktok-strategy/SKILL.md`)
Run the full 7-item Brand Silo Check + Dead-Link Workaround Check + Audio + Scene Review block against V4 Hook A before handing back to Maria for sign-off.

---

## Files to NOT touch

- `remotion/audio/*.mp3` — trimmed production audio, do NOT regenerate (Decision #35 work is complete). If audio/script mismatch is discovered, stop and surface to Maria.
- `remotion/audio/DO_NOT_RENDER.md` — V7 HOLD flag.
- `remotion/out/*.mp4` — prior render history.
- `remotion/src/scripts-batch4.ts` SEGMENT content — phrase text + tags + types are locked by Cowork rebuild. Sync-timing may edit `startFrame` values only.
- Anything under `../archive/` — read-only.

## Expected session output

1. Preflight Block + Operator Gate in CLAUDE.md-standard format at the start.
2. MP3s copied into `public/` (18 files).
3. Root.tsx confirmed/updated to register 18 compositions.
4. 18 Whisper transcripts with word-timestamps under `transcripts/batch4/`.
5. `sync-timing-universal.py` extended for batch4 + run.
6. `scripts-batch4.ts` diff showing startFrame changes only.
7. V4-A verified in Remotion Studio + spot-checks of V5/V6/V8/V9 Hook A.
8. Commit per repo git hygiene rules — but DO NOT push unless Maria explicitly says so.

## When this handoff gate is satisfied

When Maria can open Remotion Studio, load Video4-InfiniWellGut-HookA, and watch the full ~77.5s preview with audio + scenes + on-screen text in sync, with every voiceover beat matched to its tile within ±15 frames, with zero Decision #35 breach language appearing anywhere. That's the Sunday-ready state.

## Handoff anchor

**Doctrine anchor:** DOCTRINE §5 + §6 + §1.4 + §7.3 + Decision #35; paths: `governance/DOCTRINE.md`, `governance/SHG_BRAND_DECISIONS_LOG.md` (Decisions #34 + #35), `oppractitioner-cowork/CLAUDE.md` (Brand Operator Gate), `oppractitioner-cowork/tiktok-strategy/SKILL.md` (Audio + Scene Review block).
