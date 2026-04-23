// ─── @oppractitioner Remotion Types ──────────────────────────────────────────

/**
 * A text segment with optional green highlight.
 * Build phrases as arrays of segments to control which words go green.
 *
 * Example: "Kept landing on EMF in the home workspace."
 * → [{ text: "Kept landing on\n" }, { text: "EMF in the\nhome workspace.", green: true }]
 */
export interface TextSegment {
  text: string;
  green?: boolean;
}

/**
 * Phrase types control rendering behavior:
 * - hook:    First phrase. Large. Full-screen. Tag shown above.
 * - phrase:  Regular narrative phrase. Previous dims above.
 * - product: Shows product box + optional qualifier text below.
 * - result:  Outcome phrase. Same as regular but conceptually distinct.
 * - cta:     "Link in bio." Clean screen. Nothing else. No previous shown.
 */
export type PhraseType = 'hook' | 'phrase' | 'product' | 'result' | 'cta';

// ─── Chart Overlay Spec ───────────────────────────────────────────────────────
// Live-animated chart rendered below phrase text at second-pass reward frames.
// Built for TikTok retention: grow-in, count-up, optional collapse for dead/dying bars.
//
// Animation timeline (relative to phrase startFrame):
//   0–8    phrase text lands (unchanged)
//   9–20   chart title + empty tracks fade in
//   21–35  bar[0] grows left-to-right, value counts up
//   36–45  dwell / glow
//   46–70  bar[1] grows, then collapse if collapseAfter=true
//   71–95  bar[2] grows
//   96+    hold until next phrase
//
// Scan line (always on): 1px phosphor green, 15% opacity, sweeps top-to-bottom.

export interface ChartBar {
  /** Row label, IBM Plex Mono uppercase. "HEALTHY GUT", "AFTER ANTIBIOTIC", etc. */
  label: string;

  /** Numeric value used for bar-width scaling (relative to ChartSpec.maxValue). */
  value: number;

  /** Display string shown at bar end. "3-5%", "<0.1%", "~0.5%". */
  displayValue: string;

  /** True = phosphor green bar + bright value. False = dim white, low opacity. */
  highlight?: boolean;

  /**
   * If true, bar grows to full value then collapses back to a stub.
   * Used on the "dies on contact with oxygen" row to create the pattern-interrupt.
   */
  collapseAfter?: boolean;
}

export interface ChartSpec {
  /** Chart family. Currently only 'bar'. 'line' | 'diagram' | 'matrix' reserved. */
  kind: 'bar';

  /** Optional header above chart. "MICROBIOME COMPOSITION". IBM Plex Mono. */
  title?: string;

  /** Optional unit label below chart. "% akkermansia muciniphila". Dim. */
  unit?: string;

  /** Ordered rows, top to bottom. */
  bars: ChartBar[];

  /** Max value used for bar-width scaling. Bar 0 width = bar.value / maxValue. */
  maxValue: number;
}

export interface PhraseEntry {
  type: PhraseType;

  /** Main text content, broken into segments for green highlighting */
  segments: TextSegment[];

  /**
   * IBM Plex Mono tag shown above active phrase area.
   * Examples: "PATTERN OBSERVED", "CLIENT PRESENTATION", "WHAT I REACH FOR"
   */
  tag?: string;

  /**
   * For product type only: qualifier line below the product box.
   * Example: "Not as a fix.\nAs a test."
   */
  qualifier?: string;

  /**
   * For product type only: promo/code line.
   * Example: "20% off this week. Code GETREAL247."
   */
  promo?: string;

  /**
   * Frame number when this phrase becomes the active phrase.
   * Timing should match ElevenLabs voiceover — adjust after audio is generated.
   */
  startFrame: number;

  /**
   * If true, the previous phrase is NOT shown as ghost context.
   * Use for CTA frames and hard scene breaks.
   */
  clearPrevious?: boolean;

  /**
   * Optional chart overlay. Renders below phrase text with live grow-in animation.
   * Use sparingly — reserved for second-pass reward frames where visual payoff
   * lands harder than text alone.
   */
  chart?: ChartSpec;

  /**
   * Step 1 MVP: scene-progression backdrop layer. Renders full-bleed behind the
   * safe-zone phrase content. Three kinds: 'flat' (current behaviour, bg only),
   * 'editorial' (hook framing), 'diagram' (body framing). Not the final visual
   * system — explicitly MVP to prove the V10+ path is no longer single-plane.
   */
  backdrop?: Backdrop;
  /**
   * Visual mechanics (from automation pipeline tile reveal_mechanic field):
   *   'hard_open' — suppress entry animation; tile appears at full opacity/position on frame 0
   *   'long_hold' — tile duration extended ~1.5x; handled in 04_align_tiles.py durationFrames
   */
  revealMechanic?: 'hard_open' | 'long_hold';
}

// ─── Scene Progression (Step 1 MVP) ──────────────────────────────────────────
// Minimum viable backdrop layer behind phrase text. Three kinds only, fixed
// role-based assignment for this pass (HOOK=editorial, BODY=diagram, CTA=flat).
// Not the final visual system — explicitly MVP.

export type BackdropKind = 'flat' | 'editorial' | 'diagram';

export interface Backdrop {
  kind: BackdropKind;
  /** Optional header shown inside the backdrop frame (diagram kind uses this). */
  title?: string;
  /** Optional label strings for diagram kind. 2–4 items recommended. */
  labels?: string[];
}

/**
 * PhraseSpec — the minimal shape written by the automation pipeline (04_align_tiles.py).
 * Intentionally simpler than PhraseEntry: no segments, no type, no chart.
 * Root.tsx converts PhraseSpec → PhraseEntry via phraseSpecToEntry() before rendering.
 */
export interface PhraseSpec {
  startFrame: number;
  durationFrames: number;
  text: string;
  /** If true, a chart overlay was requested for this tile (not yet wired to ChartSpec). */
  chartCue?: boolean;
  /** Step 1 MVP: backdrop kind for scene progression layer behind phrase text. */
  backdrop?: Backdrop;
  /**
   * Visual mechanics field (written by 06_render.py from tile reveal_mechanic):
   *   'hard_open' — HOOK tile: suppress entry animation, drop in immediately
   *   'long_hold' — REVEAL tile: extend dwell duration ~1.5x for the money frame
   */
  revealMechanic?: 'hard_open' | 'long_hold';
}

/**
 * Convert an automation-generated PhraseSpec into a full PhraseEntry the
 * PhraseVideo component can render.  Text becomes a single segment with no
 * green highlight.  Type defaults to 'phrase' except for the last entry which
 * is treated as 'cta' when its text is "Link in bio." (case-insensitive).
 */
export function phraseSpecToEntry(spec: PhraseSpec, isLast: boolean): PhraseEntry {
  const isCTA = isLast && /link in bio/i.test(spec.text);
  return {
    type: isCTA ? 'cta' : 'phrase',
    segments: [{ text: spec.text }],
    startFrame: spec.startFrame,
    clearPrevious: isCTA,
    backdrop: spec.backdrop,
  };
}

export interface ScriptData {
  /** Remotion composition ID — must match Root.tsx registration */
  compositionId: string;

  /** Human-readable title shown in Remotion Studio */
  title: string;

  /** Total video length in frames (fps × seconds) */
  totalFrames: number;

  /** Always 30 for TikTok */
  fps: 30;

  /** Ordered array of phrase entries */
  phrases: PhraseEntry[];
}
