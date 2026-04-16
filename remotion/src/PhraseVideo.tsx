// ─── @oppractitioner PhraseVideo Composition ─────────────────────────────────
// Phrase-by-phrase animated TikTok format.
// One active idea per frame. Previous phrase ghosts/dims. Green on payoff only.
//
// Animation logic:
//   - Active phrase: spring entry from Y+30px, opacity 0→1 (damping: 200)
//   - Previous phrase: simultaneously dims to #2E2E2E, shrinks
//   - Product box: spring entry with same damping
//   - CTA: clean screen, no competition

import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Audio,
  staticFile,
} from 'remotion';
import { BRAND, FONTS, SAFE, SIZES } from './brand';
import { PhraseEntry, TextSegment } from './types';

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Render text segments: plain text + optional green-highlighted spans */
const Segments: React.FC<{ segments: TextSegment[]; inheritColor?: boolean }> = ({
  segments,
  inheritColor = false,
}) => (
  <>
    {segments.map((seg, i) =>
      seg.green && !inheritColor ? (
        <span key={i} style={{ color: BRAND.green }}>
          {seg.text}
        </span>
      ) : (
        <React.Fragment key={i}>{seg.text}</React.Fragment>
      )
    )}
  </>
);

/** Flattens segments to plain text (for previous phrase rendering — no green) */
const flatText = (segments: TextSegment[]): string =>
  segments.map((s) => s.text).join('');

// ─── Sub-components ───────────────────────────────────────────────────────────

const MonoTag: React.FC<{ text: string; opacity?: number }> = ({
  text,
  opacity = 0.65,
}) => (
  <div
    style={{
      fontFamily: FONTS.mono,
      fontSize: SIZES.tag,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: BRAND.green,
      opacity,
      marginBottom: 18,
      background: BRAND.tagBg,
      display: 'inline-block',
      padding: '3px 0',
    }}
  >
    {text}
  </div>
);

const ProductBox: React.FC<{ name: string }> = ({ name }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      border: `1px solid ${BRAND.greenBorder}`,
      background: BRAND.bgProduct,
      borderRadius: 6,
      padding: '16px 22px',
      marginTop: 20,
      marginBottom: 4,
    }}
  >
    {/* Phosphor dot */}
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        background: BRAND.green,
        flexShrink: 0,
        boxShadow: `0 0 8px ${BRAND.green}66`,
      }}
    />
    <span
      style={{
        fontFamily: FONTS.display,
        fontSize: SIZES.product,
        fontWeight: 700,
        color: BRAND.white,
        letterSpacing: '0.02em',
        whiteSpace: 'pre-line',
      }}
    >
      {name}
    </span>
  </div>
);

const Divider: React.FC = () => (
  <div
    style={{
      width: 32,
      height: 1,
      background: BRAND.green,
      opacity: 0.25,
      margin: '14px 0',
    }}
  />
);

// ─── Main Composition ─────────────────────────────────────────────────────────

interface PhraseVideoProps {
  phrases: PhraseEntry[];
  hasAudio?: boolean;
}

export const PhraseVideo: React.FC<PhraseVideoProps> = ({
  phrases,
  hasAudio = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ─── Find current and previous phrase ───────────────────────────────────────
  let currentIdx = -1;
  for (let i = 0; i < phrases.length; i++) {
    if (phrases[i].startFrame <= frame) {
      currentIdx = i;
    }
  }

  if (currentIdx === -1) {
    return <AbsoluteFill style={{ background: BRAND.bg }} />;
  }

  const current = phrases[currentIdx];
  const showPrevious =
    currentIdx > 0 && !current.clearPrevious;
  const previous = showPrevious ? phrases[currentIdx - 1] : null;

  // ─── Animation springs ──────────────────────────────────────────────────────
  const framesElapsed = frame - current.startFrame;

  // Active phrase: spring entry
  const entryProgress = spring({
    frame: framesElapsed,
    fps,
    config: { damping: 200, stiffness: 200 },
  });

  const activeY = interpolate(entryProgress, [0, 1], [30, 0]);
  const activeOpacity = entryProgress;

  // Previous phrase: dims and shrinks as active phrase enters
  const dimProgress = spring({
    frame: framesElapsed,
    fps,
    config: { damping: 200, stiffness: 160 },
  });

  // Opacity: previous was 1.0 when it was active; drops to near-invisible
  const prevOpacity = interpolate(dimProgress, [0, 1], [0.9, 0.18]);
  // Font size: gently shrinks from phrase size toward prev size
  const prevFontSize = interpolate(
    dimProgress,
    [0, 1],
    [SIZES.phrase, SIZES.phrasePrev]
  );

  const isCTA = current.type === 'cta';
  const isProduct = current.type === 'product';

  // ─── Render ─────────────────────────────────────────────────────────────────
  return (
    <AbsoluteFill style={{ background: BRAND.bg, fontFamily: FONTS.display }}>
      {/* Optional ambient audio */}
      {hasAudio && (
        <Audio src={staticFile('ambient.mp3')} volume={0.12} loop />
      )}

      {/* @op watermark — top right, always dim */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top - 20,
          right: SAFE.side,
          fontFamily: FONTS.mono,
          fontSize: 18,
          color: BRAND.handle,
          letterSpacing: '0.1em',
        }}
      >
        @op
      </div>

      {/* "link in bio" hint — bottom center, always dim */}
      <div
        style={{
          position: 'absolute',
          bottom: SAFE.bottom - 50,
          left: 0,
          right: 0,
          textAlign: 'center',
          fontFamily: FONTS.mono,
          fontSize: 18,
          color: BRAND.handle,
          letterSpacing: '0.1em',
        }}
      >
        link in bio
      </div>

      {/* ─── Main content area (safe zone) ─── */}
      <div
        style={{
          position: 'absolute',
          top: SAFE.top,
          bottom: SAFE.bottom,
          left: SAFE.side,
          right: SAFE.side,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {/* ── CTA Frame ─────────────────────────────────────────────────────── */}
        {isCTA && (
          <div
            style={{
              transform: `translateY(${activeY}px)`,
              opacity: activeOpacity,
            }}
          >
            <div
              style={{
                fontFamily: FONTS.display,
                fontWeight: 700,
                fontSize: SIZES.cta,
                lineHeight: 1.0,
                color: BRAND.white,
                whiteSpace: 'pre-line',
              }}
            >
              <Segments segments={current.segments} />
            </div>
            <div
              style={{
                fontFamily: FONTS.mono,
                fontSize: SIZES.ctaSub,
                color: BRAND.green,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                opacity: 0.45,
                marginTop: 24,
              }}
            >
              Full breakdown on the page →
            </div>
          </div>
        )}

        {/* ── Product Frame ──────────────────────────────────────────────────── */}
        {isProduct && (
          <>
            {/* Previous phrase ghost */}
            {previous && (
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 500,
                  fontSize: prevFontSize,
                  lineHeight: 1.35,
                  color: BRAND.dim,
                  opacity: prevOpacity,
                  marginBottom: 6,
                  whiteSpace: 'pre-line',
                }}
              >
                {flatText(previous.segments)}
              </div>
            )}

            {/* Active: tag + product box + qualifier */}
            <div
              style={{
                transform: `translateY(${activeY}px)`,
                opacity: activeOpacity,
              }}
            >
              {current.tag && <MonoTag text={current.tag} />}
              <ProductBox name={flatText(current.segments)} />
              {current.qualifier && (
                <>
                  <Divider />
                  <div
                    style={{
                      fontFamily: FONTS.display,
                      fontWeight: 700,
                      fontSize: SIZES.qualifier,
                      lineHeight: 1.25,
                      color: BRAND.white,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {current.qualifier}
                  </div>
                </>
              )}
              {current.promo && (
                <div
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: SIZES.promo,
                    color: BRAND.green,
                    letterSpacing: '0.1em',
                    marginTop: 18,
                    opacity: 0.9,
                  }}
                >
                  {current.promo}
                </div>
              )}
            </div>
          </>
        )}

        {/* ── Regular / Hook / Result Phrase ─────────────────────────────────── */}
        {!isCTA && !isProduct && (
          <>
            {/* Tag (show above previous if no previous, or always for hook) */}
            {current.tag && !previous && (
              <MonoTag text={current.tag} />
            )}

            {/* Previous phrase ghost */}
            {previous && (
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 500,
                  fontSize: prevFontSize,
                  lineHeight: 1.35,
                  color: BRAND.dim,
                  opacity: prevOpacity,
                  marginBottom: 12,
                  whiteSpace: 'pre-line',
                  // No green on previous — all dim
                }}
              >
                {flatText(previous.segments)}
              </div>
            )}

            {/* Active phrase */}
            <div
              style={{
                transform: `translateY(${activeY}px)`,
                opacity: activeOpacity,
              }}
            >
              <div
                style={{
                  fontFamily: FONTS.display,
                  fontWeight: 700,
                  fontSize:
                    current.type === 'hook' ? SIZES.hook : SIZES.phrase,
                  lineHeight: 1.25,
                  color: BRAND.white,
                  whiteSpace: 'pre-line',
                }}
              >
                <Segments segments={current.segments} />
              </div>
            </div>
          </>
        )}
      </div>
    </AbsoluteFill>
  );
};
