// ─── @oppractitioner Remotion Composition Registry ───────────────────────────
// Batch 1: Aires + BodyBio (scripts.ts)
// Batch 2: InfiniWell BPC-157 (scripts-batch2.ts)
// Add new batches by importing from a new scripts-batchN.ts file.

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
    </>
  );
};
