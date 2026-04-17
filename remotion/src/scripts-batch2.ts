// ─── @oppractitioner Script Data — Batch 2 ───────────────────────────────────
// Product: InfiniWell BPC-157
// Affiliate: https://bit.ly/4e3vGOU | 15% commission | no promo code
// Value page: https://getrealnut-sys.github.io/oppractitioner/infiniwell-peptides
//
// Frame numbers are ESTIMATES for composition setup only.
// Drop audio into remotion/public/ then run `python sync-timing.py` to auto-sync.
// ─────────────────────────────────────────────────────────────────────────────

import { ScriptData } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 4: InfiniWell BPC-157 — Gut Lining Pattern
// Target: ~17 seconds = 510 frames
// Angle: Gut symptoms that won't clear despite solid protocol
// ─────────────────────────────────────────────────────────────────────────────
export const video4InfiniWellGut: ScriptData = {
  compositionId: 'Video4-InfiniWellGut',
  title: 'InfiniWell BPC-157 — Gut Lining Pattern',
  totalFrames: 911,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'Something I check\nwhen gut protocols\naren\'t landing.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Good protocol.\nClean diet.\nRight supplements.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 99,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Gut symptoms\nwon\'t clear.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 221,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'I look at\n' },
        { text: 'gut lining integrity.', green: true },
        { text: '\nThe layer everything\nhas to pass through.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 295,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157 Delayed' }],
      qualifier: 'Studied for\ngut mucosal support.',
      tag: 'WHAT I REACH FOR',
      startFrame: 448,
    },
    {
      type: 'result',
      segments: [
        { text: 'One pattern I watch\nwhen the gut\n' },
        { text: 'isn\'t responding\nto protocol changes.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 562,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 694,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 5: InfiniWell BPC-157 — HHS / Regulation Hook
// Target: ~16 seconds = 480 frames
// Angle: Timely news hook — HHS calling for peptide research backing
// ─────────────────────────────────────────────────────────────────────────────
export const video5InfiniWellHHS: ScriptData = {
  compositionId: 'Video5-InfiniWellHHS',
  title: 'InfiniWell BPC-157 — HHS Regulation Hook',
  totalFrames: 689,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'HHS just called\nfor more\npeptide research.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'This space has been\nin integrative practice\nfor years.' }],
      tag: 'CONTEXT',
      startFrame: 102,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'One I keep\ncoming back to:\n' },
        { text: 'BPC-157.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 187,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Gut lining.\nTissue repair.\nRecovery support.' }],
      tag: 'CLINICAL USE CASES',
      startFrame: 244,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157' }],
      qualifier: 'The regulation\nis catching up.',
      tag: 'WHAT I REACH FOR',
      startFrame: 420,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 588,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 6: InfiniWell BPC-157 — Recovery Plateau Pattern
// Target: ~17 seconds = 510 frames
// Angle: Tissue repair that stalls at 80% — the gap that won't close
// ─────────────────────────────────────────────────────────────────────────────
export const video6InfiniWellRecovery: ScriptData = {
  compositionId: 'Video6-InfiniWellRecovery',
  title: 'InfiniWell BPC-157 — Recovery Plateau Pattern',
  totalFrames: 721,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'When recovery\njust stops\nat 80%.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Injury is old.\nProtocol is right.\nProgress just... plateaus.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 75,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Tissue repair needs\nmore than ingredients.\nIt may need\n' },
        { text: 'the right\nsignaling environment.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 194,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157 Rapid' }],
      qualifier: 'What I add\nwhen timelines\nkeep extending.',
      tag: 'WHAT I REACH FOR',
      startFrame: 303,
    },
    {
      type: 'result',
      segments: [
        { text: 'Worth testing\nwhen ' },
        { text: 'the gap\nwon\'t close.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 466,
    },
    {
      type: 'cta',
      segments: [{ text: 'Link\nin bio.' }],
      startFrame: 619,
      clearPrevious: true,
    },
  ],
};

export const BATCH2_SCRIPTS = [
  video4InfiniWellGut,
  video5InfiniWellHHS,
  video6InfiniWellRecovery,
];
