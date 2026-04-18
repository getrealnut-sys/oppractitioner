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
import { PhraseEntry, TextSegment, ChartSpec } from './types';

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

// ─── Chart Overlay ────────────────────────────────────────────────────────────
// Live-animated bar chart. Grows in left-to-right, counts up numeric values,
// optional collapse for dead-bar pattern-interrupt. Scan line sweeps top-to-bottom.
//
// Frame budget (relative to phrase startFrame, 30fps):
//   9–20   title + empty tracks fade in
//   21–35  bar[0] grows, value counts
//   46–70  bar[1] grows (collapses if collapseAfter)
//   71–95  bar[2] grows
//   96+    hold

const CHART_WIDTH = 860;      // px, inside SAFE.side=60 → 1080-120=960 usable, 860 centered
const ROW_HEIGHT = 62;
const ROW_GAP = 22;
const LABEL_WIDTH = 240;
const VALUE_WIDTH = 110;
const TRACK_HEIGHT = 14;

/** Clamp helper for interpolate replacement (keeps values in range without extrapolating). */
const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max);

const ChartOverlay: React.FC<{
  spec: ChartSpec;
  framesElapsed: number;
  fps: number;
}> = ({ spec, framesElapsed, fps }) => {
  // ── Title + tracks fade-in (frames 9–20) ──
  const titleOpacity = clamp(
    interpolate(framesElapsed, [9, 20], [0, 1], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }),
    0,
    1
  );

  // ── Bar grow timings ──
  // Bar 0: grow frames 21–35 (15 frames)
  // Bar 1: grow frames 46–61 (15 frames), collapse 61–70 (9 frames) if collapseAfter
  // Bar 2: grow frames 71–86 (15 frames)
  const barTimings = [
    { growStart: 21, growEnd: 35, collapseStart: 35, collapseEnd: 45 },
    { growStart: 46, growEnd: 61, collapseStart: 61, collapseEnd: 70 },
    { growStart: 71, growEnd: 86, collapseStart: 86, collapseEnd: 95 },
  ];

  // ── Scan line sweep (continuous, 0–150 frames, 2s sweep) ──
  const scanFrame = framesElapsed % 60;
  const scanY = interpolate(scanFrame, [0, 60], [0, spec.bars.length * (ROW_HEIGHT + ROW_GAP) + 40], {
    extrapolateRight: 'clamp',
  });
  const scanOpacity = framesElapsed < 20 ? 0 : 0.15;

  return (
    <div
      style={{
        marginTop: 36,
        width: CHART_WIDTH,
        position: 'relative',
      }}
    >
      {/* Title */}
      {spec.title && (
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: SIZES.tag,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: BRAND.green,
            opacity: titleOpacity * 0.8,
            marginBottom: 18,
          }}
        >
          {spec.title}
        </div>
      )}

      {/* Chart area — relative container so scan line can absolutely position */}
      <div style={{ position: 'relative' }}>
        {/* Scan line */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: scanY,
            height: 1,
            background: BRAND.green,
            opacity: scanOpacity,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* Rows */}
        {spec.bars.map((bar, i) => {
          const timing = barTimings[i] ?? barTimings[barTimings.length - 1];

          // Grow progress 0→1
          const growProgress = clamp(
            interpolate(
              framesElapsed,
              [timing.growStart, timing.growEnd],
              [0, 1],
              { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
            ),
            0,
            1
          );

          // Collapse progress 0→1 (only if collapseAfter)
          const collapseProgress = bar.collapseAfter
            ? clamp(
                interpolate(
                  framesElapsed,
                  [timing.collapseStart, timing.collapseEnd],
                  [0, 1],
                  { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
                ),
                0,
                1
              )
            : 0;

          // Final bar width factor. Normal: grows to (value/max). Collapsing: grows then shrinks to 2%.
          const fullWidthFactor = bar.value / spec.maxValue;
          const widthFactor = bar.collapseAfter
            ? fullWidthFactor * growProgress * (1 - collapseProgress) + 0.02 * collapseProgress
            : fullWidthFactor * growProgress;

          // Value count-up: numeric interpolation from 0 → bar.value during grow window.
          // For display, we use bar.displayValue as final, but count numerically up to bar.value.
          const countedValue = bar.collapseAfter
            ? (bar.value * growProgress * (1 - collapseProgress))
            : (bar.value * growProgress);

          // Display: during grow, show counted number. After grow (or after collapse starts), show displayValue.
          const showFinalLabel =
            framesElapsed >= timing.growEnd && (!bar.collapseAfter || framesElapsed >= timing.collapseStart + 4);
          const displayedText = showFinalLabel
            ? bar.displayValue
            : `${countedValue.toFixed(countedValue < 1 ? 1 : 0)}%`;

          // Colors: highlight row = phosphor green, dim rows = muted white
          const barColor = bar.highlight ? BRAND.green : '#6A6A65';
          const valueColor = bar.highlight ? BRAND.green : '#8A8A85';
          const labelColor = bar.highlight ? BRAND.white : '#7A7A75';
          const labelOpacity = titleOpacity;

          // Glow on highlight bar after grow completes
          const glowOpacity = bar.highlight && framesElapsed >= timing.growEnd
            ? 0.35 + 0.25 * Math.sin((framesElapsed - timing.growEnd) * 0.15)
            : 0;

          // Track width = CHART_WIDTH - LABEL_WIDTH - VALUE_WIDTH - 2 gutters
          const trackWidth = CHART_WIDTH - LABEL_WIDTH - VALUE_WIDTH - 24;
          const barPixelWidth = trackWidth * widthFactor;

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                height: ROW_HEIGHT,
                marginBottom: i < spec.bars.length - 1 ? ROW_GAP : 0,
              }}
            >
              {/* Label */}
              <div
                style={{
                  width: LABEL_WIDTH,
                  fontFamily: FONTS.mono,
                  fontSize: 22,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: labelColor,
                  opacity: labelOpacity,
                  paddingRight: 12,
                }}
              >
                {bar.label}
              </div>

              {/* Track + bar */}
              <div
                style={{
                  width: trackWidth,
                  height: TRACK_HEIGHT,
                  background: 'rgba(125, 249, 194, 0.06)',
                  borderRadius: 2,
                  position: 'relative',
                  opacity: titleOpacity,
                }}
              >
                {/* Glow layer (highlight only) */}
                {bar.highlight && glowOpacity > 0 && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: -4,
                      height: TRACK_HEIGHT + 8,
                      width: barPixelWidth,
                      background: BRAND.green,
                      opacity: glowOpacity * 0.3,
                      filter: 'blur(8px)',
                      borderRadius: 4,
                    }}
                  />
                )}
                {/* Actual bar */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: TRACK_HEIGHT,
                    width: barPixelWidth,
                    background: barColor,
                    borderRadius: 2,
                    boxShadow: bar.highlight
                      ? `0 0 12px ${BRAND.green}66`
                      : 'none',
                  }}
                />
              </div>

              {/* Value */}
              <div
                style={{
                  width: VALUE_WIDTH,
                  fontFamily: FONTS.mono,
                  fontSize: 26,
                  fontWeight: 500,
                  color: valueColor,
                  opacity: growProgress > 0 ? titleOpacity : 0,
                  textAlign: 'right',
                  paddingLeft: 12,
                }}
              >
                {displayedText}
              </div>
            </div>
          );
        })}
      </div>

      {/* Unit label */}
      {spec.unit && (
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 18,
            color: BRAND.handle,
            opacity: titleOpacity * 0.7,
            marginTop: 20,
            letterSpacing: '0.08em',
          }}
        >
          {spec.unit}
        </div>
      )}
    </div>
  );
};

// ─── Main Composition ─────────────────────────────────────────────────────────

interface PhraseVideoProps {
  phrases: PhraseEntry[];
  hasAudio?: boolean;      // ambient background music (ambient.mp3 in public/)
  voiceSrc?: string;       // voiceover filename in public/ e.g. 'video1-voice.mp3'
}

export const PhraseVideo: React.FC<PhraseVideoProps> = ({
  phrases,
  hasAudio = false,
  voiceSrc,
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
      {/* Voiceover — full script read, synced to phrase timing */}
      {voiceSrc && (
        <Audio src={staticFile(voiceSrc)} volume={1.0} />
      )}

      {/* Optional ambient background music (barely-there texture) */}
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

              {/* Chart overlay — renders below phrase text when spec is present.
                  Animation is driven by framesElapsed, independent of phrase entry spring. */}
              {current.chart && (
                <ChartOverlay
                  spec={current.chart}
                  framesElapsed={framesElapsed}
                  fps={fps}
                />
              )}
            </div>
          </>
        )}
      </div>
    </AbsoluteFill>
  );
};
