// ─── Premium — Types (minimal slice) ─────────────────────────────────────────
// First premium proof. One hook only. No policy engine, no scene dispatcher,
// no evidence/annotation model. If the props list grows before one hook is
// visually convincing, the slice is being over-engineered — stop and question.
//
// Contract:
//   - `payoff` MUST be an exact substring of `body`. PremiumVideo throws if not.
//   - `payoffFrame` should land early enough to matter (not the very last frame).

export interface PremiumHookProps {
  /** Full hook text, including the payoff inline. Supports \n for line breaks. */
  body: string;

  /** Exact substring of `body` that is withheld until `payoffFrame`. */
  payoff: string;

  /** Frame at which the payoff becomes visible. */
  payoffFrame: number;

  /** Optional secondary line — rendered small, recessive, for variable isolation. */
  support?: string;
}
