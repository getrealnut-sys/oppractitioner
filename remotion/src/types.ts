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
