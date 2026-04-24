// ─── Premium — PremiumVideo (first proof) ────────────────────────────────────
// One hook. Four mechanics hardcoded inline. No mechanic engine, no policy
// unions, no scene dispatcher, no shared helpers. When the hook reads right,
// patterns get extracted — not before.
//
// Mechanics (all hardcoded below, in render body):
//   1. HARD OPEN        — before/after-payoff text renders at full opacity on
//                         frame 0. No spring, no fade-in.
//   2. WITHHELD         — payoff substring is invisible until `payoffFrame`,
//      COMPLETION         reserves its layout space so the eye sees the hole.
//   3. VARIABLE         — body dominant (large serif, opacity 1.0);
//      ISOLATION          support recessive (small mono, opacity 0.35).
//   4. COMPRESSED       — payoff lands with a sharp opacity attack (4 frames)
//      REVEAL             paired with a subtle body settle (translateY 4→0
//                         over 6 frames). Tight, then breathe.
//
// Explicitly NOT imported: baseline PhraseVideo, baseline types.ts,
// shared/brand.ts. Premium's visual language is its own — font and color
// choices live inline here so they can diverge without coupling.

import React from 'react';
import { AbsoluteFill, useCurrentFrame, interpolate } from 'remotion';
import type { PremiumHookProps } from './types';

export const PremiumVideo: React.FC<PremiumHookProps> = ({
  body,
  payoff,
  payoffFrame,
  support,
}) => {
  const frame = useCurrentFrame();

  // ── Contract check ────────────────────────────────────────────────────────
  // Fail loudly if payoff is not an exact substring. This is the one
  // invariant the slice relies on and it should never reach render silently.
  const payoffIndex = body.indexOf(payoff);
  if (payoffIndex === -1) {
    throw new Error(
      `PremiumHook contract violation: payoff "${payoff}" is not an exact substring of body.`,
    );
  }
  const before = body.slice(0, payoffIndex);
  const after = body.slice(payoffIndex + payoff.length);

  // ── Mechanic 2 + 4: withheld completion + compressed reveal ───────────────
  // Sharp attack (4 frames) then hold. The compression is in the short attack,
  // not a slow fade. Paired with a body settle below for the "breathe" phase.
  const payoffOpacity = interpolate(
    frame,
    [payoffFrame, payoffFrame + 4, payoffFrame + 18],
    [0, 1, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  // ── Mechanic 4 (continued): body settle on payoff arrival ─────────────────
  // The whole body block eases down 4px → 0 over 6 frames when the payoff
  // lands. Subtle. Reads as release after the sharp attack.
  const bodyY = interpolate(
    frame,
    [payoffFrame, payoffFrame + 6],
    [4, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  // ── Mechanic 3: variable isolation — opacity constants ────────────────────
  const bodyOpacity = 1;
  const supportOpacity = 0.35;

  return (
    <AbsoluteFill style={{ background: '#000000' }}>
      {/* Support — top, recessive. Small mono label, letter-spaced, uppercase. */}
      {support && (
        <div
          style={{
            position: 'absolute',
            top: 240,
            left: 96,
            right: 96,
            textAlign: 'center',
            fontFamily:
              '"IBM Plex Mono", "SFMono-Regular", Consolas, "Courier New", monospace',
            fontSize: 26,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            opacity: supportOpacity,
          }}
        >
          {support}
        </div>
      )}

      {/* Body — bottom third, dominant. Left-aligned, NOT centered. */}
      <div
        style={{
          position: 'absolute',
          bottom: 380,
          left: 96,
          right: 96,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 700,
          fontSize: 92,
          lineHeight: 1.15,
          letterSpacing: '-0.015em',
          color: '#FFFFFF',
          opacity: bodyOpacity,
          whiteSpace: 'pre-line',
          textAlign: 'left',
          transform: `translateY(${bodyY}px)`,
        }}
      >
        {/* Hard open — before/after are always at full opacity */}
        {before}
        {/* Withheld — payoff is invisible until payoffFrame, but reserves space */}
        <span style={{ opacity: payoffOpacity }}>{payoff}</span>
        {after}
      </div>
    </AbsoluteFill>
  );
};
