// ─── Premium Engine — Signal Rail ────────────────────────────────────────────
// Diagnostic-instrument voice per AUTHORING_MODEL §2.6 / §B choice.
// Renders: T+MM:SS · OP / DIAG / [SCENE] · REC ●
//
// The rail is a peripheral, ambient layer. Low opacity, mono phosphor, small.
// It must never compete with the evidence or the caption.

import React from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';
import { BRAND, FONTS, SAFE } from '../../shared/brand';

export interface SignalRailProps {
  channel: string;          // e.g. "DIAG"
  sceneLabel: string;       // e.g. "PH 01"
  showTimestamp: boolean;
  showSignalIndicator: boolean;
}

function frameToTimestamp(frame: number, fps: number): string {
  const totalSeconds = Math.floor(frame / fps);
  const mm = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, '0');
  const ss = (totalSeconds % 60).toString().padStart(2, '0');
  return `T+${mm}:${ss}`;
}

export const SignalRail: React.FC<SignalRailProps> = ({
  channel,
  sceneLabel,
  showTimestamp,
  showSignalIndicator,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Slow pulse on the signal indicator — 0.55..1.0 over ~1.5s
  const pulsePhase = (frame % Math.round(fps * 1.5)) / (fps * 1.5);
  const pulse = 0.55 + 0.45 * (0.5 + 0.5 * Math.sin(pulsePhase * Math.PI * 2));

  const railStyle: React.CSSProperties = {
    position: 'absolute',
    top: SAFE.top - 80,
    left: SAFE.side,
    right: SAFE.side,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: FONTS.mono,
    fontSize: 16,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: BRAND.green,
    opacity: 0.55,
  };

  return (
    <div style={railStyle}>
      {/* Left: timestamp */}
      <div style={{ minWidth: 140 }}>
        {showTimestamp ? frameToTimestamp(frame, fps) : ''}
      </div>

      {/* Center: channel / scene label */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        OP {'/'} {channel} {'/'} {sceneLabel}
      </div>

      {/* Right: signal indicator */}
      <div
        style={{
          minWidth: 140,
          textAlign: 'right',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 10,
        }}
      >
        {showSignalIndicator && (
          <>
            <span>REC</span>
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                background: BRAND.green,
                opacity: pulse,
                display: 'inline-block',
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};
