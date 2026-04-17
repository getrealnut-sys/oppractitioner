// ─── @oppractitioner Script Data — Batch 3 ───────────────────────────────────
// Batch 3 fills rotation gaps between InfiniWell batch 2 posts.
// Post schedule: Video 7 → Apr 19 2026 | Video 8 → Apr 21 2026
//
// Video 7: Aires — Travel / Hotel Room angle
// Video 8: BodyBio — Supplement absorption angle
//
// Frame numbers are ESTIMATES for composition setup only.
// Drop audio into remotion/public/ then run `python sync-timing-batch3.py` to auto-sync.
// ─────────────────────────────────────────────────────────────────────────────

import { ScriptData } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 7: Aires — Travel Pattern
// Target: ~16 seconds = 480 frames
// Angle: Clients who travel frequently and can't control EMF environment
// Affiliate: airestech.com/getreal | No promo code active (post-4/17 window)
// Value page: https://getrealnut-sys.github.io/oppractitioner/aires-emf
// ─────────────────────────────────────────────────────────────────────────────
export const video7AiresTravel: ScriptData = {
  compositionId: 'Video7-AiresTravel',
  title: 'Aires — Travel Pattern',
  totalFrames: 480,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One thing I check\nwith clients who\ntravel constantly.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Feel fine at home.\nFall apart\non the road.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 55,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Hotels, airports,\ncabins —\n' },
        { text: 'zero control\nover EMF load.', green: true },
      ],
      tag: 'VARIABLE',
      startFrame: 120,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Sleep disrupted.\nRecovery slow.\nNo obvious cause.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 195,
    },
    {
      type: 'product',
      segments: [{ text: 'Aires Lifetune ONE' }],
      qualifier: 'Small enough\nto pack.\nWorth testing.',
      tag: 'WHAT I REACH FOR',
      startFrame: 272,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 400,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 8: BodyBio PC — Supplement Absorption Pattern
// Target: ~17 seconds = 510 frames
// Angle: Supplements not landing — not a dosing issue, it's the membrane layer
// Affiliate: bodybio.com/GETREAL247 | Code GETREAL247 (window may be closed — check)
// Value page: https://getrealnut-sys.github.io/oppractitioner/bodybio-membrane
// ─────────────────────────────────────────────────────────────────────────────
export const video8BodyBioAbsorption: ScriptData = {
  compositionId: 'Video8-BodyBioAbsorption',
  title: 'BodyBio PC — Supplement Absorption Pattern',
  totalFrames: 510,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'When supplements\njust aren\'t\nlanding.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Good stack.\nRight doses.\nNot much shifting.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 50,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Before adding more,\nI check\n' },
        { text: 'the absorption layer.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 110,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Cell membranes\ncontrol what\nenters the cell.' }],
      tag: 'CONTEXT',
      startFrame: 185,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: 'Membrane support\nbefore anything else.',
      tag: 'WHAT I REACH FOR',
      startFrame: 265,
    },
    {
      type: 'result',
      segments: [
        { text: 'Worth checking\nwhen ' },
        { text: 'the protocol\nis right\nbut nothing moves.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 345,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 440,
      clearPrevious: true,
    },
  ],
};

export const BATCH3_SCRIPTS = [video7AiresTravel, video8BodyBioAbsorption];
