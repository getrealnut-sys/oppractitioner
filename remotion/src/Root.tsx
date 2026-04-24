// ─── @oppractitioner Remotion Composition Registry ───────────────────────────
// Batch 1: Aires + BodyBio (scripts.ts)
// Batch 2: InfiniWell BPC-157 seedling-era shorts (scripts-batch2.ts) — superseded by batch4
// Batch 3: Pendulum + Alight + BodyBio mold (scripts-batch3.ts) — superseded by batch4
// Batch 4: V4-V9 rewritten to 2026 algorithm (scripts-batch4.ts) — 3 hook variants each
//          NOTE: scripts-batch4.ts uses named exports (ScriptData), NOT Record pattern.
//          The automation pipeline (V10+) writes to scripts-batch5.ts (Record pattern).
// Batch 5: V10-V14 automated pilot batch (scripts-batch5.ts, Record keys v10..v14)
//          All future auto-generated videos go here until batch is full (3 per batch).
// Prior batches kept for render history + reversibility. Do NOT delete.

import React from 'react';
import { Composition } from 'remotion';
import { PhraseVideo } from './PhraseVideo';
import {
  video1AiresFocus,
  video2BodyBio,
  video3AiresSleep,
} from './scripts';
import {
  video4InfiniWellGut,
  video5InfiniWellHHS,
  video6InfiniWellRecovery,
} from './scripts-batch2';
import {
  video7PendulumMetabolicStall,
  video8AlightMycotoxins,
  video9BodyBioMoldDetoxFloor,
} from './scripts-batch3';
import {
  video4InfiniWellGutHookA,
  video4InfiniWellGutHookB,
  video4InfiniWellGutHookC,
  video5InfiniWellPeptideWindowHookA,
  video5InfiniWellPeptideWindowHookB,
  video5InfiniWellPeptideWindowHookC,
  video6InfiniWellRecoveryPlateauHookA,
  video6InfiniWellRecoveryPlateauHookB,
  video6InfiniWellRecoveryPlateauHookC,
  video7PendulumMetabolicStallHookA,
  video7PendulumMetabolicStallHookB,
  video7PendulumMetabolicStallHookC,
  video8AlightMycotoxinsHookA,
  video8AlightMycotoxinsHookB,
  video8AlightMycotoxinsHookC,
  video9BodyBioMoldDetoxHookA,
  video9BodyBioMoldDetoxHookB,
  video9BodyBioMoldDetoxHookC,
} from './scripts-batch4';
import { batch5Videos } from './scripts-batch5';
// ─── Premium (sibling render path, baseline frozen) ────────────────────────
// First proof: one hook, four mechanics hardcoded inline. No scaffold, no
// policy engine. Prior exam-surface scaffold archived to
// archive/premium-examsurface-2026-04-23/ on 2026-04-23.
import { PremiumVideo } from './premium/PremiumVideo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ── BATCH 1 ──────────────────────────────────────────────────────────── */}

      {/* Video 1: Aires — EMF + Focus Pattern (~17 sec) */}
      <Composition
        id={video1AiresFocus.compositionId}
        component={PhraseVideo}
        durationInFrames={video1AiresFocus.totalFrames}
        fps={video1AiresFocus.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video1AiresFocus.phrases,
          voiceSrc: 'video1-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* Video 2: BodyBio PC — Cell Membrane Pattern (~18 sec) */}
      <Composition
        id={video2BodyBio.compositionId}
        component={PhraseVideo}
        durationInFrames={video2BodyBio.totalFrames}
        fps={video2BodyBio.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video2BodyBio.phrases,
          voiceSrc: 'video2-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* Video 3: Aires — Sleep + WiFi Pattern (~18 sec) */}
      <Composition
        id={video3AiresSleep.compositionId}
        component={PhraseVideo}
        durationInFrames={video3AiresSleep.totalFrames}
        fps={video3AiresSleep.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video3AiresSleep.phrases,
          voiceSrc: 'video3-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* ── BATCH 2: InfiniWell BPC-157 ──────────────────────────────────────── */}

      {/* Video 4: InfiniWell — Gut Lining Pattern (~17 sec) */}
      <Composition
        id={video4InfiniWellGut.compositionId}
        component={PhraseVideo}
        durationInFrames={video4InfiniWellGut.totalFrames}
        fps={video4InfiniWellGut.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video4InfiniWellGut.phrases,
          voiceSrc: 'video4-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* Video 5: InfiniWell — HHS Regulation Hook (~16 sec) */}
      <Composition
        id={video5InfiniWellHHS.compositionId}
        component={PhraseVideo}
        durationInFrames={video5InfiniWellHHS.totalFrames}
        fps={video5InfiniWellHHS.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video5InfiniWellHHS.phrases,
          voiceSrc: 'video5-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* Video 6: InfiniWell — Recovery Plateau Pattern (~17 sec) */}
      <Composition
        id={video6InfiniWellRecovery.compositionId}
        component={PhraseVideo}
        durationInFrames={video6InfiniWellRecovery.totalFrames}
        fps={video6InfiniWellRecovery.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video6InfiniWellRecovery.phrases,
          voiceSrc: 'video6-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* ── BATCH 3: Pendulum + Alight + BodyBio Mold Detox ──────────────────── */}

      {/* Video 7: Pendulum — Akkermansia / Metabolic Stall (~72 sec) */}
      <Composition
        id={video7PendulumMetabolicStall.compositionId}
        component={PhraseVideo}
        durationInFrames={video7PendulumMetabolicStall.totalFrames}
        fps={video7PendulumMetabolicStall.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video7PendulumMetabolicStall.phrases,
          voiceSrc: 'video7-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* Video 8: Alight Formulas — Building-Specific Mycotoxin Mapping (batch3, ~78 sec) */}
      <Composition
        id={video8AlightMycotoxins.compositionId}
        component={PhraseVideo}
        durationInFrames={video8AlightMycotoxins.totalFrames}
        fps={video8AlightMycotoxins.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video8AlightMycotoxins.phrases,
          voiceSrc: 'video8-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* Video 9: BodyBio — Mold Detox Floor (batch3) */}
      <Composition
        id={video9BodyBioMoldDetoxFloor.compositionId}
        component={PhraseVideo}
        durationInFrames={video9BodyBioMoldDetoxFloor.totalFrames}
        fps={video9BodyBioMoldDetoxFloor.fps}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: video9BodyBioMoldDetoxFloor.phrases,
          voiceSrc: 'video9-voice.mp3',
          hasAudio: false,
        }}
      />

      {/* ── BATCH 4: V4-V9 × A/B/C hook variants (2026 algorithm rewrite) ────── */}

      {/* Video 4 Hook A/B/C — InfiniWell BPC-157 Gut Lining */}
      <Composition
        id={video4InfiniWellGutHookA.compositionId}
        component={PhraseVideo}
        durationInFrames={video4InfiniWellGutHookA.totalFrames}
        fps={video4InfiniWellGutHookA.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video4InfiniWellGutHookA.phrases, voiceSrc: 'video4-hookA.mp3', hasAudio: false }}
      />
      <Composition
        id={video4InfiniWellGutHookB.compositionId}
        component={PhraseVideo}
        durationInFrames={video4InfiniWellGutHookB.totalFrames}
        fps={video4InfiniWellGutHookB.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video4InfiniWellGutHookB.phrases, voiceSrc: 'video4-hookB.mp3', hasAudio: false }}
      />
      <Composition
        id={video4InfiniWellGutHookC.compositionId}
        component={PhraseVideo}
        durationInFrames={video4InfiniWellGutHookC.totalFrames}
        fps={video4InfiniWellGutHookC.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video4InfiniWellGutHookC.phrases, voiceSrc: 'video4-hookC.mp3', hasAudio: false }}
      />

      {/* Video 5 Hook A/B/C — InfiniWell BPC-157 Peptide Regulatory Window
          Hook A is the rescue target for 2026-04-19 Sunday publish. */}
      <Composition
        id={video5InfiniWellPeptideWindowHookA.compositionId}
        component={PhraseVideo}
        durationInFrames={video5InfiniWellPeptideWindowHookA.totalFrames}
        fps={video5InfiniWellPeptideWindowHookA.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video5InfiniWellPeptideWindowHookA.phrases, voiceSrc: 'video5-hookA.mp3', hasAudio: false }}
      />
      <Composition
        id={video5InfiniWellPeptideWindowHookB.compositionId}
        component={PhraseVideo}
        durationInFrames={video5InfiniWellPeptideWindowHookB.totalFrames}
        fps={video5InfiniWellPeptideWindowHookB.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video5InfiniWellPeptideWindowHookB.phrases, voiceSrc: 'video5-hookB.mp3', hasAudio: false }}
      />
      <Composition
        id={video5InfiniWellPeptideWindowHookC.compositionId}
        component={PhraseVideo}
        durationInFrames={video5InfiniWellPeptideWindowHookC.totalFrames}
        fps={video5InfiniWellPeptideWindowHookC.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video5InfiniWellPeptideWindowHookC.phrases, voiceSrc: 'video5-hookC.mp3', hasAudio: false }}
      />

      {/* Video 6 Hook A/B/C — InfiniWell BPC-157 Recovery Plateau */}
      <Composition
        id={video6InfiniWellRecoveryPlateauHookA.compositionId}
        component={PhraseVideo}
        durationInFrames={video6InfiniWellRecoveryPlateauHookA.totalFrames}
        fps={video6InfiniWellRecoveryPlateauHookA.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video6InfiniWellRecoveryPlateauHookA.phrases, voiceSrc: 'video6-hookA.mp3', hasAudio: false }}
      />
      <Composition
        id={video6InfiniWellRecoveryPlateauHookB.compositionId}
        component={PhraseVideo}
        durationInFrames={video6InfiniWellRecoveryPlateauHookB.totalFrames}
        fps={video6InfiniWellRecoveryPlateauHookB.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video6InfiniWellRecoveryPlateauHookB.phrases, voiceSrc: 'video6-hookB.mp3', hasAudio: false }}
      />
      <Composition
        id={video6InfiniWellRecoveryPlateauHookC.compositionId}
        component={PhraseVideo}
        durationInFrames={video6InfiniWellRecoveryPlateauHookC.totalFrames}
        fps={video6InfiniWellRecoveryPlateauHookC.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video6InfiniWellRecoveryPlateauHookC.phrases, voiceSrc: 'video6-hookC.mp3', hasAudio: false }}
      />

      {/* Video 7 Hook A/B/C — Pendulum Akkermansia — HOLD per DO_NOT_RENDER.md */}
      <Composition
        id={video7PendulumMetabolicStallHookA.compositionId}
        component={PhraseVideo}
        durationInFrames={video7PendulumMetabolicStallHookA.totalFrames}
        fps={video7PendulumMetabolicStallHookA.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video7PendulumMetabolicStallHookA.phrases, voiceSrc: 'video7-hookA.mp3', hasAudio: false }}
      />
      <Composition
        id={video7PendulumMetabolicStallHookB.compositionId}
        component={PhraseVideo}
        durationInFrames={video7PendulumMetabolicStallHookB.totalFrames}
        fps={video7PendulumMetabolicStallHookB.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video7PendulumMetabolicStallHookB.phrases, voiceSrc: 'video7-hookB.mp3', hasAudio: false }}
      />
      <Composition
        id={video7PendulumMetabolicStallHookC.compositionId}
        component={PhraseVideo}
        durationInFrames={video7PendulumMetabolicStallHookC.totalFrames}
        fps={video7PendulumMetabolicStallHookC.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video7PendulumMetabolicStallHookC.phrases, voiceSrc: 'video7-hookC.mp3', hasAudio: false }}
      />

      {/* Video 8 Hook A/B/C — Alight Formulas Mycotoxin-Specific (batch4) */}
      <Composition
        id={video8AlightMycotoxinsHookA.compositionId}
        component={PhraseVideo}
        durationInFrames={video8AlightMycotoxinsHookA.totalFrames}
        fps={video8AlightMycotoxinsHookA.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video8AlightMycotoxinsHookA.phrases, voiceSrc: 'video8-hookA.mp3', hasAudio: false }}
      />
      <Composition
        id={video8AlightMycotoxinsHookB.compositionId}
        component={PhraseVideo}
        durationInFrames={video8AlightMycotoxinsHookB.totalFrames}
        fps={video8AlightMycotoxinsHookB.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video8AlightMycotoxinsHookB.phrases, voiceSrc: 'video8-hookB.mp3', hasAudio: false }}
      />
      <Composition
        id={video8AlightMycotoxinsHookC.compositionId}
        component={PhraseVideo}
        durationInFrames={video8AlightMycotoxinsHookC.totalFrames}
        fps={video8AlightMycotoxinsHookC.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video8AlightMycotoxinsHookC.phrases, voiceSrc: 'video8-hookC.mp3', hasAudio: false }}
      />

      {/* Video 9 Hook A/B/C — BodyBio Mold Detox (batch4, Angle 2) */}
      <Composition
        id={video9BodyBioMoldDetoxHookA.compositionId}
        component={PhraseVideo}
        durationInFrames={video9BodyBioMoldDetoxHookA.totalFrames}
        fps={video9BodyBioMoldDetoxHookA.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video9BodyBioMoldDetoxHookA.phrases, voiceSrc: 'video9-hookA.mp3', hasAudio: false }}
      />
      <Composition
        id={video9BodyBioMoldDetoxHookB.compositionId}
        component={PhraseVideo}
        durationInFrames={video9BodyBioMoldDetoxHookB.totalFrames}
        fps={video9BodyBioMoldDetoxHookB.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video9BodyBioMoldDetoxHookB.phrases, voiceSrc: 'video9-hookB.mp3', hasAudio: false }}
      />
      <Composition
        id={video9BodyBioMoldDetoxHookC.compositionId}
        component={PhraseVideo}
        durationInFrames={video9BodyBioMoldDetoxHookC.totalFrames}
        fps={video9BodyBioMoldDetoxHookC.fps}
        width={1080}
        height={1920}
        defaultProps={{ phrases: video9BodyBioMoldDetoxHookC.phrases, voiceSrc: 'video9-hookC.mp3', hasAudio: false }}
      />

      {/* ── PILOT BATCH (V10-V14) — auto-generated by automation pipeline ──────── */}
      {/* durationInFrames patched by 06_render.py after tile alignment.            */}
      {/* phrases cast as `any` — PhraseVideo normalizes PhraseSpec → PhraseEntry at runtime */}

      {/* V10: automated pilot — topic written by pipeline */}
      <Composition
        id="v10"
        component={PhraseVideo}
        durationInFrames={1690}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: (batch5Videos['v10']?.phrases ?? []) as any,
          voiceSrc: 'v10.mp3',
          hasAudio: false,
        }}
      />

      {/* V11: automated pilot — topic written by pipeline */}
      <Composition
        id="v11"
        component={PhraseVideo}
        durationInFrames={1666}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: (batch5Videos['v11']?.phrases ?? []) as any,
          voiceSrc: 'v11.mp3',
          hasAudio: false,
        }}
      />

      {/* V12: automated pilot — topic written by pipeline */}
      <Composition
        id="v12"
        component={PhraseVideo}
        durationInFrames={1723}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: (batch5Videos['v12']?.phrases ?? []) as any,
          voiceSrc: 'v12.mp3',
          hasAudio: false,
        }}
      />

      {/* V13: automated pilot — topic written by pipeline */}
      <Composition
        id="v13"
        component={PhraseVideo}
        durationInFrames={1719}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: (batch5Videos['v13']?.phrases ?? []) as any,
          voiceSrc: 'v13.mp3',
          hasAudio: false,
        }}
      />

      {/* V14: automated pilot — topic written by pipeline */}
      <Composition
        id="v14"
        component={PhraseVideo}
        durationInFrames={1708}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          phrases: (batch5Videos['v14']?.phrases ?? []) as any,
          voiceSrc: 'v14.mp3',
          hasAudio: false,
        }}
      />

      {/* ─── Premium — PremiumHook (first proof, four mechanics inline) ─── */}
      {/* body = full hook incl. payoff; payoff must be exact substring.     */}
      {/* payoffFrame = frame at which withheld completion lands.            */}
      <Composition
        id="PremiumHook"
        component={PremiumVideo}
        durationInFrames={120}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          body: "Most people blame their gut.\nIt's actually their nervous system.",
          payoff: "It's actually their nervous system.",
          payoffFrame: 45,
          support: 'Pattern across 12 recent consults',
        }}
      />
    </>
  );
};
