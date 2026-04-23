// ─── Premium Engine — HookScene (end-to-end) ─────────────────────────────────
// Reads a fully authored HookScene from the premium schema and renders it as
// a single composed frame — exam surface, signal rail, evidence, annotation,
// caption. No placeholder logic.
//
// Scope: data_point evidence + bracket annotation only. Other evidence types
// and gestures will fail validation upstream.

import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
} from 'remotion';
import { BRAND, FONTS, SAFE, SIZES } from '../../shared/brand';
import type { HookScene as HookSceneSpec, VideoRail } from '../types-premium';
import { ExamSurface } from '../atmosphere/ExamSurface';
import { SignalRail } from '../rail/SignalRail';
import {
  DataPointEvidence,
  DATA_POINT_PANE,
} from '../evidence/DataPointEvidence';
import { BracketAnnotation } from '../annotations/BracketAnnotation';

export interface HookSceneProps {
  scene: HookSceneSpec;
  rail: VideoRail;

  // Frame at which annotation should fire, scene-relative. In this slice it
  // is computed by PremiumVideo from the voice_window (simple heuristic until
  // Whisper alignment is wired in a later step).
  annotationFireFrame: number;
}

// Render the caption with an optional accent word in phosphor green.
const Caption: React.FC<{ text: string; accentWord?: string }> = ({
  text,
  accentWord,
}) => {
  if (!accentWord) {
    return <>{text}</>;
  }
  const re = new RegExp(`(\\b${accentWord}\\b)`, 'i');
  const parts = text.split(re);
  return (
    <>
      {parts.map((p, i) =>
        re.test(p) ? (
          <span key={i} style={{ color: BRAND.green }}>
            {p}
          </span>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </>
  );
};

export const HookScene: React.FC<HookSceneProps> = ({
  scene,
  rail,
  annotationFireFrame,
}) => {
  const frame = useCurrentFrame();

  // Make the annotation the main event. It fires earlier (not waiting for
  // the end of the voice window) and draws faster. Caption arrives on the
  // same beat, attached directly to the evidence — not floating at the
  // bottom of the frame. Perceptual order is preserved (evidence →
  // annotation → caption) but collapsed in time so they feel like ONE
  // act of examination, not three events.
  const drawDuration = 8;
  const earlyFire = Math.max(12, annotationFireFrame - 30);
  const captionStart = earlyFire + drawDuration;
  const captionOpacity = interpolate(
    frame,
    [captionStart, captionStart + 10],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );
  const captionY = interpolate(
    frame,
    [captionStart, captionStart + 10],
    [10, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  // Derived rail label: per-scene override > rail_tag > scene_kind uppercased.
  const sceneLabel =
    scene.rail?.scene_label ??
    scene.rail_tag ??
    scene.scene_kind.toUpperCase();
  const channel = scene.rail?.channel ?? rail.channel;

  // Bracket target — around the VALUE itself, not the range line. The
  // annotation should hit the star of the frame, not a footnote.
  const bracketTarget = {
    top: DATA_POINT_PANE.top + 86,
    left: DATA_POINT_PANE.left + 200,
    width: DATA_POINT_PANE.width - 400,
    height: 240,
  };

  // Caption rule geometry — short asymmetric phosphor rule to the LEFT of
  // the caption block, not across the frame. Reinforces off-axis placement.
  const ruleLeft = DATA_POINT_PANE.left;
  const ruleWidth = 120;

  return (
    <AbsoluteFill>
      {/* Atmosphere */}
      <ExamSurface />

      {/* Signal rail */}
      <SignalRail
        channel={channel}
        sceneLabel={sceneLabel}
        showTimestamp={rail.show_timestamp}
        showSignalIndicator={rail.show_signal_indicator}
      />

      {/* Evidence */}
      {scene.evidence.type === 'data_point' && (
        <DataPointEvidence evidence={scene.evidence} />
      )}

      {/* Annotation — the main event. Targets the value itself. */}
      {scene.annotation.gesture === 'bracket' && (
        <BracketAnnotation
          target={bracketTarget}
          fireFrame={earlyFire}
          drawDuration={drawDuration}
          label={scene.annotation.label}
          emphatic
        />
      )}

      {/* Caption — attached directly under the evidence pane, pushed
          off-axis to the left. Not a separate band at the bottom of the
          frame — this is the caption to the thing being shown. */}
      <div
        style={{
          position: 'absolute',
          top: DATA_POINT_PANE.top + DATA_POINT_PANE.height + 56,
          left: DATA_POINT_PANE.left,
          width: 1080 - DATA_POINT_PANE.left - SAFE.side,
          opacity: captionOpacity,
          transform: `translateY(${captionY}px)`,
        }}
      >
        {/* Short phosphor rule to the LEFT of the caption — off-axis anchor */}
        <div
          style={{
            position: 'absolute',
            top: 26,
            left: ruleLeft - DATA_POINT_PANE.left - 16,
            width: ruleWidth,
            height: 2,
            background: BRAND.green,
            opacity: 0.8,
          }}
        />
        <div
          style={{
            paddingLeft: 12,
            fontFamily: FONTS.display,
            fontWeight: 600,
            fontSize: 52,
            lineHeight: 1.12,
            color: BRAND.white,
            letterSpacing: '-0.01em',
            textAlign: 'left',
          }}
        >
          <Caption
            text={scene.caption.text}
            accentWord={scene.caption.accent_word}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
