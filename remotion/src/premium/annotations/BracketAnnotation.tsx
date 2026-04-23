// ─── Premium Engine — Annotation: bracket ────────────────────────────────────
// One precise gesture per hook (AUTHORING_MODEL §2.4). A bracket draws around
// a region of the evidence — for data_point, around the range_label area —
// timed to fire at a specific frame. Short (~12 frames), eased, ends visible.
//
// This component is self-contained: given a target rect and a fire frame, it
// animates in once and then holds. No loops. No ambient pulsing. The bracket
// is also paired with a small mono label positioned below it.

import React from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';
import { BRAND, FONTS } from '../../shared/brand';

export interface BracketAnnotationProps {
  // Target rectangle the bracket surrounds (in frame coordinates, 1080x1920).
  target: { top: number; left: number; width: number; height: number };
  // Frame at which the gesture fires. Scene-relative.
  fireFrame: number;
  // Duration of the draw-in gesture, in frames.
  drawDuration?: number;
  // Small mono label shown below the bracket after it lands.
  label?: string;
  // Emphatic mode: thicker rails + brief white flash on landing.
  // For the V12 hook this is on — the bracket IS the main event.
  emphatic?: boolean;
}

export const BracketAnnotation: React.FC<BracketAnnotationProps> = ({
  target,
  fireFrame,
  drawDuration = 12,
  label,
  emphatic = false,
}) => {
  const frame = useCurrentFrame();

  // progress 0..1 across the draw window, clamped outside it
  const progress = interpolate(
    frame,
    [fireFrame, fireFrame + drawDuration],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.out(Easing.cubic),
    },
  );

  // Bracket geometry: corner tick length grows from 0 → 64px.
  // Horizontal rails grow from center outward.
  const tickLen = 64 * progress;
  const railLen = (target.width - 32) * progress;
  const sideLen = (emphatic ? 72 : 40) * progress;

  // Label fades in after the bracket lands.
  const labelOpacity = interpolate(
    frame,
    [fireFrame + drawDuration, fireFrame + drawDuration + 10],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  // Emphatic landing flash — brief white pulse on the frames just after
  // the bracket lands. Drives home "the gesture just HIT something."
  const flash = emphatic
    ? interpolate(
        frame,
        [
          fireFrame + drawDuration - 2,
          fireFrame + drawDuration + 1,
          fireFrame + drawDuration + 8,
        ],
        [0, 1, 0],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
      )
    : 0;

  const color = BRAND.green;
  const opacity = emphatic ? 0.95 : 0.85;
  const thick = emphatic ? 3 : 2;

  const top = target.top - 12;
  const bottom = target.top + target.height + 12;
  const leftX = target.left + 16;
  const rightX = target.left + target.width - 16;
  const centerX = target.left + target.width / 2;

  return (
    <>
      {/* Emphatic landing flash — soft white illumination inside target
          region on the contact frames. Under the rails. */}
      {emphatic && flash > 0 && (
        <div
          style={{
            position: 'absolute',
            top: top - 4,
            left: target.left - 8,
            width: target.width + 16,
            height: target.height + 32,
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)',
            opacity: flash,
          }}
        />
      )}

      {/* Top rail — grows from center outward */}
      <div
        style={{
          position: 'absolute',
          top,
          left: centerX - railLen / 2,
          width: railLen,
          height: thick,
          background: color,
          opacity,
        }}
      />
      {/* Bottom rail — grows from center outward */}
      <div
        style={{
          position: 'absolute',
          top: bottom,
          left: centerX - railLen / 2,
          width: railLen,
          height: thick,
          background: color,
          opacity,
        }}
      />
      {/* Top-left tick (horizontal stub coming off the top rail, down-left corner) */}
      <div
        style={{
          position: 'absolute',
          top,
          left: leftX - tickLen / 6,
          width: thick,
          height: sideLen,
          background: color,
          opacity,
        }}
      />
      {/* Top-right tick */}
      <div
        style={{
          position: 'absolute',
          top,
          left: rightX,
          width: thick,
          height: sideLen,
          background: color,
          opacity,
        }}
      />
      {/* Bottom-left tick */}
      <div
        style={{
          position: 'absolute',
          top: bottom - sideLen,
          left: leftX - tickLen / 6,
          width: thick,
          height: sideLen,
          background: color,
          opacity,
        }}
      />
      {/* Bottom-right tick */}
      <div
        style={{
          position: 'absolute',
          top: bottom - sideLen,
          left: rightX,
          width: thick,
          height: sideLen,
          background: color,
          opacity,
        }}
      />

      {/* Annotation label — fades in after bracket lands */}
      {label && (
        <div
          style={{
            position: 'absolute',
            top: bottom + 18,
            left: target.left,
            width: target.width,
            textAlign: 'center',
            fontFamily: FONTS.mono,
            fontSize: 18,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color,
            opacity: labelOpacity * 0.85,
          }}
        >
          · {label} ·
        </div>
      )}
    </>
  );
};
