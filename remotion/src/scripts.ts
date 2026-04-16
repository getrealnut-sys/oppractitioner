// ─── @oppractitioner Script Data — Batch 1 ───────────────────────────────────
// Source: scripts/batch1_aires_bodybio.md
// Timing: Estimated at 30fps. ADJUST startFrame values after ElevenLabs audio is
// generated — sync each phrase start to when that phrase is spoken in the audio.
//
// How to adjust timing:
//   1. Generate audio in ElevenLabs / Blotato
//   2. Open in Remotion Studio (npx remotion studio)
//   3. Scrub audio to find each phrase start time (seconds)
//   4. Convert to frames: frame = Math.round(seconds * 30)
//   5. Update startFrame below for each phrase

import { ScriptData } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 1: Aires — EMF + Focus Pattern
// Target: ~17 seconds = 510 frames
// Affiliate: airestech.com/getreal | TikTok Shop: Aires Lifetune ONE
// Value page: https://getrealnut-sys.github.io/oppractitioner/aires-emf
// ─────────────────────────────────────────────────────────────────────────────
export const video1AiresFocus: ScriptData = {
  compositionId: 'Video1_AiresFocus',
  title: 'Aires — EMF + Focus Pattern',
  totalFrames: 510,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One pattern\nI keep\nrunning into.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: "Can't focus\nat home." }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 80,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Fine at the office.\nFine at a\ncoffee shop.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 140,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Same house.\nSame router.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 205,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Kept landing on\n' },
        { text: 'EMF in the\nhome workspace.', green: true },
      ],
      tag: 'VARIABLE ISOLATION',
      startFrame: 258,
    },
    {
      type: 'product',
      segments: [{ text: 'Aires Lifetune ONE' }],
      qualifier: 'Not as a fix.\nAs a test.',
      tag: 'WHAT I REACH FOR',
      startFrame: 328,
    },
    {
      type: 'result',
      segments: [
        { text: 'Most came back.\n' },
        { text: 'Fog cleared.', green: true },
      ],
      tag: 'WHAT I REACH FOR',
      startFrame: 415,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 462,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 2: BodyBio PC — Cell Membrane Pattern
// Target: ~18 seconds = 540 frames
// Affiliate: bodybio.com/GETREAL247 | Code: GETREAL247 | 20% off 4/16-4/21
// Value page: https://getrealnut-sys.github.io/oppractitioner/bodybio-membrane
// ─────────────────────────────────────────────────────────────────────────────
export const video2BodyBio: ScriptData = {
  compositionId: 'Video2_BodyBio',
  title: 'BodyBio PC — Cell Membrane Pattern',
  totalFrames: 540,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'Something I wish\nmore practitioners\nchecked first.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client doing\neverything right.\nLabs still flat.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 90,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Nothing\nis moving.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 168,
    },
    {
      type: 'phrase',
      segments: [
        { text: "The issue isn't the protocol.\nIt's the " },
        { text: 'membrane.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 215,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: "That's where\nI start.",
      promo: '20% off this week. Code GETREAL247.',
      tag: 'WHAT I REACH FOR',
      startFrame: 295,
    },
    {
      type: 'result',
      segments: [
        { text: 'Most see\n' },
        { text: 'labs shift\nin four to six weeks.', green: true },
      ],
      tag: 'WHAT I REACH FOR',
      startFrame: 390,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 482,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 3: Aires — Sleep + WiFi Pattern (Backup)
// Target: ~18 seconds = 540 frames
// Affiliate: airestech.com/getreal | TikTok Shop: Aires Lifetune ONE
// Value page: https://getrealnut-sys.github.io/oppractitioner/aires-emf
// ─────────────────────────────────────────────────────────────────────────────
export const video3AiresSleep: ScriptData = {
  compositionId: 'Video3_AiresSleep',
  title: 'Aires — Sleep + WiFi Pattern',
  totalFrames: 540,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: "Here's one\nthat surprised me." }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: "Client's sleep\njust falls apart.\nNo obvious trigger." }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 75,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'New router.\n' },
        { text: 'Mesh WiFi upgrade.', green: true },
      ],
      tag: 'TIMELINE',
      startFrame: 162,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Three months before\nthe sleep issues started.\nNobody connected the two.' }],
      tag: 'TIMELINE',
      startFrame: 228,
    },
    {
      type: 'product',
      segments: [{ text: 'Aires Lifetune\nin the bedroom.' }],
      qualifier: 'Two weeks later.\nSleep normalized.',
      tag: 'WHAT I REACH FOR',
      startFrame: 318,
    },
    {
      type: 'result',
      segments: [
        { text: 'Worth testing\nwhen nothing else\n' },
        { text: 'explains the shift.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 415,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 482,
      clearPrevious: true,
    },
  ],
};

export const ALL_SCRIPTS = [video1AiresFocus, video2BodyBio, video3AiresSleep];
