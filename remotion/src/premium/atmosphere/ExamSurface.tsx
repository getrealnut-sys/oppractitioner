// ─── Premium Engine — Examination Surface ────────────────────────────────────
// The darkened examination surface the evidence sits on. Establishes depth,
// light falloff, and faint grain. This is the layer that keeps the premium
// frame from reading as a flat black poster.
//
// Design rules (AUTHORING_MODEL §2.3, §2 atmosphere):
//   - radial falloff pool centered slightly above the visual midline
//   - 2–3% grain layer across the full frame
//   - edges darker than center (implied depth at corners)
//   - no visible borders or rectangles — only light

import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND } from '../../shared/brand';

export const ExamSurface: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      {/* Illumination pool — soft radial, centered upper-third */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 820px 1100px at 50% 42%, rgba(125,249,194,0.05) 0%, rgba(125,249,194,0.02) 40%, rgba(0,0,0,0) 72%)',
        }}
      />

      {/* Corner falloff — slight darkening at frame edges */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 1400px 2000px at 50% 50%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Grain — tiny repeating pattern, very low opacity. Uses a layered
          set of repeating gradients to approximate noise without an image. */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage:
            'repeating-radial-gradient(circle at 13% 21%, rgba(255,255,255,0.9) 0 1px, transparent 1px 3px),' +
            'repeating-radial-gradient(circle at 71% 63%, rgba(255,255,255,0.7) 0 1px, transparent 1px 4px),' +
            'repeating-radial-gradient(circle at 47% 88%, rgba(255,255,255,0.6) 0 1px, transparent 1px 5px)',
          mixBlendMode: 'overlay',
        }}
      />
    </AbsoluteFill>
  );
};
