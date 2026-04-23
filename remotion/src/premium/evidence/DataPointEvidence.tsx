// ─── Premium Engine — Evidence: data_point ───────────────────────────────────
// Renders a single numeric reading with unit + range context, positioned
// inside the main stage (upper third, centered horizontally). Not a text
// card — the value is the star, unit and range are subordinate lines, a
// faint examination pane implies the reading is from an instrument.
//
// Layout (in a 1080 wide frame):
//   - examination pane: ~720px wide, ~420px tall, centered on x, top ~470px
//   - value: display font, ~220px, phosphor or white depending on emphasis
//   - unit_label: mono, ~32px, below the value
//   - range_label: mono, ~22px, lower still
//   - ref_id (optional): mono, ~16px, upper-right of pane

import React from 'react';
import { BRAND, FONTS } from '../../shared/brand';
import type { EvidenceDataPoint } from '../types-premium';

export interface DataPointEvidenceProps {
  evidence: EvidenceDataPoint;
}

export const DataPointEvidence: React.FC<DataPointEvidenceProps> = ({
  evidence,
}) => {
  const paneWidth = 720;
  const paneHeight = 440;
  const paneTop = 470;
  const paneLeft = (1080 - paneWidth) / 2;

  const emphasis = evidence.emphasis ?? 'neutral';
  const valueColor = emphasis === 'abnormal' ? BRAND.green : BRAND.white;

  return (
    <>
      {/* Examination pane — implied, not bordered on all sides */}
      <div
        style={{
          position: 'absolute',
          top: paneTop,
          left: paneLeft,
          width: paneWidth,
          height: paneHeight,
          // subtle inner illumination — slightly brighter than surround
          background:
            'radial-gradient(ellipse 620px 400px at 50% 50%, rgba(125,249,194,0.045) 0%, rgba(125,249,194,0.015) 60%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Asymmetric edges — 1px phosphor hairlines on top and bottom only */}
      <div
        style={{
          position: 'absolute',
          top: paneTop,
          left: paneLeft + 40,
          width: paneWidth - 80,
          height: 1,
          background: BRAND.green,
          opacity: 0.35,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: paneTop + paneHeight - 1,
          left: paneLeft + 40,
          width: paneWidth - 80,
          height: 1,
          background: BRAND.green,
          opacity: 0.35,
        }}
      />

      {/* ref_id — upper-right of pane */}
      {evidence.ref_id && (
        <div
          style={{
            position: 'absolute',
            top: paneTop + 16,
            left: paneLeft + paneWidth - 160,
            width: 140,
            textAlign: 'right',
            fontFamily: FONTS.mono,
            fontSize: 16,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: BRAND.green,
            opacity: 0.6,
          }}
        >
          {evidence.ref_id}
        </div>
      )}

      {/* value — the star of the frame */}
      <div
        style={{
          position: 'absolute',
          top: paneTop + 90,
          left: paneLeft,
          width: paneWidth,
          textAlign: 'center',
          fontFamily: FONTS.display,
          fontWeight: 700,
          fontSize: 220,
          lineHeight: 1.0,
          letterSpacing: '-0.02em',
          color: valueColor,
        }}
      >
        {evidence.value}
      </div>

      {/* unit_label — mono, below value */}
      {evidence.unit_label && (
        <div
          style={{
            position: 'absolute',
            top: paneTop + 330,
            left: paneLeft,
            width: paneWidth,
            textAlign: 'center',
            fontFamily: FONTS.mono,
            fontSize: 28,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: BRAND.green,
            opacity: 0.8,
          }}
        >
          {evidence.unit_label}
        </div>
      )}

      {/* range_label — mono, lower still */}
      {evidence.range_label && (
        <div
          style={{
            position: 'absolute',
            top: paneTop + 380,
            left: paneLeft,
            width: paneWidth,
            textAlign: 'center',
            fontFamily: FONTS.mono,
            fontSize: 20,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: BRAND.white,
            opacity: 0.45,
          }}
        >
          {evidence.range_label}
        </div>
      )}
    </>
  );
};

// Expose pane geometry so the bracket annotation can align to it without
// duplicating numbers.
export const DATA_POINT_PANE = {
  width: 720,
  height: 440,
  top: 470,
  left: (1080 - 720) / 2,
};
