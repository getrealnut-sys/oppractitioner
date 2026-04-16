// ─── @oppractitioner Remotion Composition Registry ───────────────────────────
// All 3 Batch 1 videos registered here.
// Add new scripts by importing from scripts.ts and adding a <Composition /> block.

import React from 'react';
import { Composition } from 'remotion';
import { PhraseVideo } from './PhraseVideo';
import {
  video1AiresFocus,
  video2BodyBio,
  video3AiresSleep,
} from './scripts';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* ── Video 1: Aires — EMF + Focus Pattern (~17 sec) ─────────────────── */}
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
          hasAudio: false,                 // Set to true after dropping ambient.mp3 in public/
        }}
      />

      {/* ── Video 2: BodyBio PC — Cell Membrane Pattern (~18 sec) ──────────── */}
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

      {/* ── Video 3: Aires — Sleep + WiFi Pattern (~18 sec) ────────────────── */}
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
    </>
  );
};
