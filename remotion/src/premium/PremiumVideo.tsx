// ─── Premium Engine — Composition Entry ──────────────────────────────────────
// Two render paths in one file, deliberately separated:
//
//   1. PremiumVideo (new) — reads a fully authored PremiumVideo from the
//      HookScene schema. Validates on render. Dispatches each scene to its
//      scene component. This is the real path.
//
//   2. PremiumVideoLegacy — reads the scaffold PremiumVideoSpec used by
//      premium-test-01. Kept so the scaffold composition still renders
//      while the end-to-end slice matures.
//
// Neither path imports from baseline.

import React from 'react';
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useVideoConfig,
} from 'remotion';
import { BRAND, FONTS } from '../shared/brand';
import type {
  PremiumVideo as PremiumVideoT,
  PremiumVideoSpec,
  Scene,
} from './types-premium';
import { HookScene } from './scenes/HookScene';
import { validatePremiumVideo } from './validate';

// ─── New path: reads the authored HookScene schema ───────────────────────────

export interface PremiumVideoProps {
  video: PremiumVideoT;
}

export const PremiumVideo: React.FC<PremiumVideoProps> = ({ video }) => {
  // Fail loudly if the authored data violates the contract.
  validatePremiumVideo(video);

  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      {video.voice_src && (
        <Audio src={staticFile(video.voice_src)} volume={1.0} />
      )}

      {video.scenes.map((scene) => {
        // Scene-local annotation fire: simple heuristic for this slice — fire
        // 70% of the way through the voice window (scene-relative frames).
        const vw = scene.timing.voice_window;
        const localFire = Math.round(
          (vw.start_frame + (vw.end_frame - vw.start_frame) * 0.7) -
            scene.timing.start_frame,
        );

        return (
          <Sequence
            key={scene.scene_id}
            from={scene.timing.start_frame}
            durationInFrames={scene.timing.duration_frames}
          >
            <HookScene
              scene={scene}
              rail={video.rail}
              annotationFireFrame={localFire}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
};

// ─── Legacy path: reads the scaffold PremiumVideoSpec ────────────────────────

export interface PremiumVideoLegacyProps {
  video: PremiumVideoSpec;
}

const UnimplementedScene: React.FC<{ scene: Scene }> = ({ scene }) => (
  <AbsoluteFill
    style={{
      background: BRAND.bg,
      color: BRAND.green,
      fontFamily: FONTS.mono,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 32,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    }}
  >
    {'· '}unimplemented scene kind: {scene.kind}{' ·'}
  </AbsoluteFill>
);

const LegacyHookPlaceholder: React.FC<{ scene: Scene }> = ({ scene }) => (
  <AbsoluteFill
    style={{
      background: BRAND.bg,
      color: BRAND.green,
      fontFamily: FONTS.mono,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      padding: 120,
      textAlign: 'center',
    }}
  >
    {scene.text}
  </AbsoluteFill>
);

export const PremiumVideoLegacy: React.FC<PremiumVideoLegacyProps> = ({
  video,
}) => {
  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      {video.voiceSrc && (
        <Audio src={staticFile(video.voiceSrc)} volume={1.0} />
      )}
      {video.scenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationFrames}
        >
          {scene.kind === 'hook' ? (
            <LegacyHookPlaceholder scene={scene} />
          ) : (
            <UnimplementedScene scene={scene} />
          )}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
