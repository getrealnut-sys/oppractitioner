// ─── Scene Backdrops (Step 1 MVP) ────────────────────────────────────────────
// Three backdrop kinds rendered as AbsoluteFill behind the safe-zone phrase
// content in PhraseVideo.tsx. Fixed role-based assignment at this stage:
//   HOOK  → editorial  (large phosphor frame, corner ticks, clean canvas)
//   BODY  → diagram    (subtle graph-paper grid + corner brackets)
//   CTA   → flat       (current behaviour — bg only)
//
// Explicitly MVP. Not the final visual system. No cinematics, no charts, no
// beat-level customization. This layer exists so the V10+ render path is no
// longer a single-plane flat background behind every tile.

import React from 'react';
import { AbsoluteFill } from 'remotion';
import { BRAND, FONTS, SAFE } from './shared/brand';
import type { Backdrop as BackdropT, BackdropKind } from './types';

// ─── Flat ────────────────────────────────────────────────────────────────────
// No-op backdrop. Same as pre-MVP behaviour. Reserved for CTA so the
// "Link in bio." frame stays clean.

export const FlatBackdrop: React.FC = () => (
  <AbsoluteFill style={{ background: BRAND.bg }} />
);

// ─── Editorial ───────────────────────────────────────────────────────────────
// Hook framing. Reads as a labeled editorial slot, not a colored block.
//   - thin vertical phosphor rule (4px) acts as a margin column at left: 120
//   - large mono index numeral (0 / 1, ~120px) sits against the rule at
//     full BRAND.green saturation — the anchor
//   - small mono eyebrow (· HOOK · 01) above hook text position indicates
//     the frame is indexed
// Hook type clears the anchor because PhraseVideo shifts content paddingLeft
// to 220 when backdrop.kind === 'editorial'.

export const EditorialBackdrop: React.FC = () => {
  const ruleLeft = 120;
  const ruleWidth = 4;
  const numeralSize = 120;

  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      {/* Thin vertical phosphor rule — margin column */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top - 40,
          bottom: SAFE.bottom - 40,
          left: ruleLeft,
          width: ruleWidth,
          background: BRAND.green,
        }}
      />

      {/* Large mono index numeral stacked against the rule */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top,
          left: ruleLeft + 24,
          display: 'flex',
          flexDirection: 'column',
          fontFamily: FONTS.mono,
          fontSize: numeralSize,
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          color: BRAND.green,
        }}
      >
        <span>0</span>
        <span>1</span>
      </div>

      {/* Small mono eyebrow above hook text position */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top - 40,
          left: 220,
          fontFamily: FONTS.mono,
          fontSize: 16,
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: BRAND.green,
          opacity: 0.5,
        }}
      >
        · HOOK · 01
      </div>
    </AbsoluteFill>
  );
};

// ─── Diagram ─────────────────────────────────────────────────────────────────
// Body framing. Reads as a diagrammed information page, not four decorative
// corners.
//   - tightened graph-paper grid (64px, 0.07 opacity) — measurement surface
//   - header rule at top of safe zone — body type hangs from it
//   - top-left: mono coordinate label + horizontal rule extending right
//     (reads as an axis label)
//   - bottom-right: vertical rule + mono "fig. 01" caption anchor
// Props are still accepted for future parameterization but the A-lite pass
// hard-codes the anchors for every tile.

export const DiagramBackdrop: React.FC<{ title?: string; labels?: string[] }> = () => {
  const gridOpacity = 0.07;
  const gridColor = '125, 249, 194';
  const gridSize = 64;

  const ruleColor = BRAND.green;
  const headerOpacity = 0.40;
  const anchorOpacity = 0.70;
  const labelOpacity = 0.60;

  const gridBg =
    `repeating-linear-gradient(` +
    `  to right,` +
    `  rgba(${gridColor}, ${gridOpacity}) 0px,` +
    `  rgba(${gridColor}, ${gridOpacity}) 1px,` +
    `  transparent 1px,` +
    `  transparent ${gridSize}px` +
    `),` +
    `repeating-linear-gradient(` +
    `  to bottom,` +
    `  rgba(${gridColor}, ${gridOpacity}) 0px,` +
    `  rgba(${gridColor}, ${gridOpacity}) 1px,` +
    `  transparent 1px,` +
    `  transparent ${gridSize}px` +
    `)`;

  return (
    <AbsoluteFill style={{ background: BRAND.bg }}>
      {/* Measurement surface */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: gridBg,
        }}
      />

      {/* Header rule — edge-to-edge at top of safe zone. Body type hangs from it. */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top - 8,
          left: 0,
          right: 0,
          height: 2,
          background: ruleColor,
          opacity: headerOpacity,
        }}
      />

      {/* Top-left: mono coordinate label + horizontal rule extending right */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top - 40,
          left: SAFE.side,
          fontFamily: FONTS.mono,
          fontSize: 14,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: ruleColor,
          opacity: labelOpacity,
        }}
      >
        x: 01 / y: 02
      </div>
      <div
        style={{
          position: 'absolute',
          top: SAFE.top - 24,
          left: SAFE.side + 220,
          width: 180,
          height: 2,
          background: ruleColor,
          opacity: anchorOpacity,
        }}
      />

      {/* Bottom-right: vertical rule + mono "fig. 01" caption anchor */}
      <div
        style={{
          position: 'absolute',
          bottom: SAFE.bottom - 16,
          right: SAFE.side,
          width: 2,
          height: 120,
          background: ruleColor,
          opacity: anchorOpacity,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: SAFE.bottom - 40,
          right: SAFE.side + 14,
          fontFamily: FONTS.mono,
          fontSize: 14,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: ruleColor,
          opacity: labelOpacity,
        }}
      >
        fig. 01
      </div>
    </AbsoluteFill>
  );
};

// ─── Resolver ────────────────────────────────────────────────────────────────
// Single entry the render block uses. Unknown/absent kind falls back to flat.

export const Backdrop: React.FC<{ backdrop?: BackdropT }> = ({ backdrop }) => {
  const kind: BackdropKind = backdrop?.kind ?? 'flat';
  if (kind === 'editorial') return <EditorialBackdrop />;
  if (kind === 'diagram')
    return <DiagramBackdrop title={backdrop?.title} labels={backdrop?.labels} />;
  return <FlatBackdrop />;
};
