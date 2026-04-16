// ─── @oppractitioner Script Data — Batch 1 ───────────────────────────────────
// Source: scripts/batch1_aires_bodybio.md
// Timing: Auto-synced by sync-timing.py using audio silence detection.
// To re-sync after new audio: drop new MP3s in public/, run `python sync-timing.py`

import { ScriptData } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 1: Aires — EMF + Focus Pattern
// Target: ~17 seconds = 510 frames
// Affiliate: airestech.com/getreal | TikTok Shop: Aires Lifetune ONE
// Value page: https://getrealnut-sys.github.io/oppractitioner/aires-emf
// ─────────────────────────────────────────────────────────────────────────────
export const video1AiresFocus: ScriptData = {
  compositionId: 'Video1-AiresFocus',
  title: 'Aires — EMF + Focus Pattern',
  totalFrames: 687,
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
      startFrame: 81,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Fine at the office.\nFine at a\ncoffee shop.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 121,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Same house.\nSame router.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 211,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Kept landing on\n' },
        { text: 'EMF in the\nhome workspace.', green: true },
      ],
      tag: 'VARIABLE ISOLATION',
      startFrame: 280,
    },
    {
      type: 'product',
      segments: [{ text: 'Aires Lifetune ONE' }],
      qualifier: 'Not as a fix.\nAs a test.',
      tag: 'WHAT I REACH FOR',
      startFrame: 387,
    },
    {
      type: 'result',
      segments: [
        { text: 'Most came back.\n' },
        { text: 'Fog cleared.', green: true },
      ],
      tag: 'WHAT I REACH FOR',
      startFrame: 521,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 594,
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
  compositionId: 'Video2-BodyBio',
  title: 'BodyBio PC — Cell Membrane Pattern',
  totalFrames: 616,
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
      startFrame: 83,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Nothing\nis moving.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 171,
    },
    {
      type: 'phrase',
      segments: [
        { text: "Often the issue isn't the protocol.\nIt may be " },
        { text: 'membrane function.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 227,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: "That's where\nI start.",
      promo: '20% off this week. Code GETREAL247.',
      tag: 'WHAT I REACH FOR',
      startFrame: 323,
    },
    {
      type: 'result',
      segments: [
        { text: 'Most see\n' },
        { text: 'labs shift\nin four to six weeks.', green: true },
      ],
      tag: 'WHAT I REACH FOR',
      startFrame: 408,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 519,
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
  compositionId: 'Video3-AiresSleep',
  title: 'Aires — Sleep + WiFi Pattern',
  totalFrames: 687,
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
      startFrame: 56,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'New router.\n' },
        { text: 'Mesh WiFi upgrade.', green: true },
      ],
      tag: 'TIMELINE',
      startFrame: 153,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Three months before\nthe sleep issues started.\nNobody connected the two.' }],
      tag: 'TIMELINE',
      startFrame: 240,
    },
    {
      type: 'product',
      segments: [{ text: 'Aires Lifetune\nin the bedroom.' }],
      qualifier: 'Two weeks later.\nSleep came back.',
      tag: 'WHAT I REACH FOR',
      startFrame: 376,
    },
    {
      type: 'result',
      segments: [
        { text: 'Worth testing\nwhen nothing else\n' },
        { text: 'explains the shift.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 502,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 593,
      clearPrevious: true,
    },
  ],
};

export const ALL_SCRIPTS = [video1AiresFocus, video2BodyBio, video3AiresSleep];
