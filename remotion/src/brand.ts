// ─── @oppractitioner Brand Kit ───────────────────────────────────────────────
// Diagnostic Terminal aesthetic: pure black, phosphor green, clinical type
// DO NOT cross-reference with CLEARED or Get R.E.A.L. brand kits

export const BRAND = {
  // Backgrounds
  bg: '#000000',           // Pure black — every frame
  bgProduct: '#060F09',    // Product box fill (near-black with green cast)

  // Text
  white: '#F5F5F0',        // Active phrase — full attention
  dim: '#2E2E2E',          // Previous phrase — ghost context only
  handle: '#1E1E1E',       // @op watermark + "link in bio" hint

  // Accent
  green: '#7DF9C2',        // Phosphor green — payoff words only
  greenBorder: '#1A3D2A',  // Product box border

  // Tag background
  tagBg: 'rgba(125, 249, 194, 0.07)',
} as const;

export const FONTS = {
  display: "'Space Grotesk', 'DM Sans', sans-serif",
  mono: "'IBM Plex Mono', 'DM Mono', monospace",
} as const;

// Safe zones per Remotion skill spec (1080x1920 vertical)
export const SAFE = {
  top: 150,     // below status bar / search UI
  bottom: 170,  // above nav / swipe-up UI
  side: 60,     // minimum left/right padding
} as const;

// Font sizes — nothing below 28px (mobile readability rule)
export const SIZES = {
  hook: 76,          // Hook phrase — large, takes full focus
  phrase: 60,        // Regular active phrase
  phrasePrev: 32,    // Previous phrase (dimmed context)
  phraseResult: 60,  // Result phrase (same as regular)
  product: 38,       // Product name inside box
  qualifier: 46,     // "Not as a fix. As a test."
  cta: 100,          // "Link in bio." — largest on screen
  ctaSub: 26,        // "Full breakdown on the page →"
  tag: 20,           // Mono tag label
  promo: 36,         // Promo line "20% off. GETREAL247."
} as const;
