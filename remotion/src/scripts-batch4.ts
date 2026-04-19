// ─── @oppractitioner Script Data — Batch 4 ───────────────────────────────────
// Videos 4-9 rewritten to 2026 algorithm standards (60-90s, hook A/B/C variants,
// second-pass reward engineering, dead-link workaround per Decision #35).
//
// DOCTRINE §6 silo: No Maria Castro / Get R.E.A.L. / CLEARED / TROPOS / SHG /
// Linktree anywhere in this file. Affiliate codes appear on value pages only.
//
// DOCTRINE §5: Voice 4 only. NOT Voice-Guardian-gated.
//
// Dead-link reality (OPERATOR-ONLY — NEVER cited to viewer per Decision #35):
// CTA frames render `tr.ee/owQ7FM` big + center ≥3s. Voiceover speaks URL phonetically.
// NEVER write the reason the link isn't clickable in any output.
//
// V7 Pendulum: scaffold ONLY per DO_NOT_RENDER.md. Three-gate clearance required
// before render: (1) affiliate approval → (2) URL wired into pendulum.html →
// (3) DRAFT banner removed. DO NOT render V7 until all three gates clear.
//
// Frame numbers are ESTIMATES for composition setup only.
// Copy audio to remotion/public/ then run:
//   python sync-timing-universal.py batch4
// to auto-sync startFrames to actual audio durations.
// ─────────────────────────────────────────────────────────────────────────────

import { ScriptData } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 4: InfiniWell BPC-157 — Gut Lining Pattern
// Hook A (pattern observation): ~77.531s = 2326 frames
// Hook B (contradiction):       ~80.144s = 2405 frames
// Hook C (outcome-first):       ~78.289s = 2349 frames
// Angle: Gut symptoms won't clear despite solid protocol — lining is the limiting variable
// Value page: oppractitioner-site/infiniwell.html#observation-1-gut-lining
// ─────────────────────────────────────────────────────────────────────────────

export const video4InfiniWellGutHookA: ScriptData = {
  compositionId: 'Video4-InfiniWellGut-HookA',
  title: 'InfiniWell BPC-157 — Gut Lining (Hook A: Pattern Observation)',
  totalFrames: 2381,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One pattern I keep\nrunning into when\nthe gut protocol\nis already right.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client has done the work.\nElimination diet.\nClean protein.\nRight binders. Right probiotics.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 125,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Six months in.\n' },
        { text: 'Gut symptoms still show up.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 329,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Bloating after meals\nthat shouldn\'t cause bloating.\n' },
        { text: 'Stool that keeps shifting.', green: true },
        { text: '\nIntermittent reactivity\nto foods that used to be fine.' },
      ],
      tag: 'SYMPTOMS',
      startFrame: 515,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The thing I check next\nis ' },
        { text: 'the gut lining itself.', green: true },
        { text: '\nThe layer everything\nhas to pass through.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 721,
    },
    {
      type: 'phrase',
      segments: [{ text: 'If the epithelium\nis chronically inflamed,\nnothing added downstream\nclears the pattern.' }],
      tag: 'MECHANISM',
      startFrame: 879,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Body keeps opening\ntight junctions.\nFood particles keep\ntriggering the immune layer.' }],
      tag: 'MECHANISM',
      startFrame: 1043,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The microbiome keeps\ngetting disrupted\n' },
        { text: 'before it can stabilize.', green: true },
      ],
      tag: 'MECHANISM',
      startFrame: 1146,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'There\'s a peptide\nstudied for ' },
        { text: 'mucosal repair\nspecifically.', green: true },
        { text: '\nBPC-157. Short chain.\nBody Protection Compound.' },
      ],
      tag: 'INTRODUCING',
      startFrame: 1305,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157\nDelayed Release' }],
      qualifier: 'Studied for mucosal repair.\nMay support the tight-junction\nreset the protocol is waiting on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1645,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Most gut protocols\nassume ' },
        { text: 'the lining is intact.', green: true },
        { text: '\nWhen it isn\'t, every input\nreaches a closed door.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1873,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a replacement\nfor the protocol.\n' },
        { text: 'The floor the protocol\nis standing on.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2044,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2381,
      clearPrevious: true,
    },
  ],
};

export const video4InfiniWellGutHookB: ScriptData = {
  compositionId: 'Video4-InfiniWellGut-HookB',
  title: 'InfiniWell BPC-157 — Gut Lining (Hook B: Contradiction)',
  totalFrames: 2457,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Everyone keeps stacking\nmore gut supplements.\n' },
        { text: 'The issue isn\'t\nwhat\'s missing.', green: true },
        { text: '\nIt\'s what\'s not absorbing.' },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client has done the work.\nElimination diet.\nClean protein.\nRight binders. Right probiotics.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 183,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Six months in.\n' },
        { text: 'Gut symptoms still show up.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 376,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Bloating after meals\nthat shouldn\'t cause bloating.\n' },
        { text: 'Stool that keeps shifting.', green: true },
        { text: '\nIntermittent reactivity\nto foods that used to be fine.' },
      ],
      tag: 'SYMPTOMS',
      startFrame: 565,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The thing I check next\nis ' },
        { text: 'the gut lining itself.', green: true },
        { text: '\nThe layer everything\nhas to pass through.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 756,
    },
    {
      type: 'phrase',
      segments: [{ text: 'If the epithelium\nis chronically inflamed,\nnothing added downstream\nclears the pattern.' }],
      tag: 'MECHANISM',
      startFrame: 923,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Body keeps opening\ntight junctions.\nFood particles keep\ntriggering the immune layer.' }],
      tag: 'MECHANISM',
      startFrame: 1103,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The microbiome keeps\ngetting disrupted\n' },
        { text: 'before it can stabilize.', green: true },
      ],
      tag: 'MECHANISM',
      startFrame: 1213,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'There\'s a peptide\nstudied for ' },
        { text: 'mucosal repair\nspecifically.', green: true },
        { text: '\nBPC-157. Short chain.\nBody Protection Compound.' },
      ],
      tag: 'INTRODUCING',
      startFrame: 1365,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157\nDelayed Release' }],
      qualifier: 'Studied for mucosal repair.\nMay support the tight-junction\nreset the protocol is waiting on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1721,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Most gut protocols\nassume ' },
        { text: 'the lining is intact.', green: true },
        { text: '\nWhen it isn\'t, every input\nreaches a closed door.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1937,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a replacement\nfor the protocol.\n' },
        { text: 'The floor the protocol\nis standing on.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2108,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2457,
      clearPrevious: true,
    },
  ],
};

export const video4InfiniWellGutHookC: ScriptData = {
  compositionId: 'Video4-InfiniWellGut-HookC',
  title: 'InfiniWell BPC-157 — Gut Lining (Hook C: Outcome-First)',
  totalFrames: 2401,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Client doing everything right.\nClean diet.\nRight supplements.\n' },
        { text: 'Gut symptoms won\'t clear.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Elimination diet.\nClean protein.\nRight binders. Right probiotics.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 232,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Six months in.\n' },
        { text: 'Gut symptoms still show up.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 374,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Bloating after meals\nthat shouldn\'t cause bloating.\n' },
        { text: 'Stool that keeps shifting.', green: true },
        { text: '\nIntermittent reactivity\nto foods that used to be fine.' },
      ],
      tag: 'SYMPTOMS',
      startFrame: 478,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The thing I check next\nis ' },
        { text: 'the gut lining itself.', green: true },
        { text: '\nThe layer everything\nhas to pass through.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 685,
    },
    {
      type: 'phrase',
      segments: [{ text: 'If the epithelium\nis chronically inflamed,\nnothing added downstream\nclears the pattern.' }],
      tag: 'MECHANISM',
      startFrame: 856,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Body keeps opening\ntight junctions.\nFood particles keep\ntriggering the immune layer.' }],
      tag: 'MECHANISM',
      startFrame: 1018,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The microbiome keeps\ngetting disrupted\n' },
        { text: 'before it can stabilize.', green: true },
      ],
      tag: 'MECHANISM',
      startFrame: 1132,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'There\'s a peptide\nstudied for ' },
        { text: 'mucosal repair\nspecifically.', green: true },
        { text: '\nBPC-157. Short chain.\nBody Protection Compound.' },
      ],
      tag: 'INTRODUCING',
      startFrame: 1288,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157\nDelayed Release' }],
      qualifier: 'Studied for mucosal repair.\nMay support the tight-junction\nreset the protocol is waiting on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1672,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Most gut protocols\nassume ' },
        { text: 'the lining is intact.', green: true },
        { text: '\nWhen it isn\'t, every input\nreaches a closed door.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1882,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a replacement\nfor the protocol.\n' },
        { text: 'The floor the protocol\nis standing on.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2043,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2401,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 5: InfiniWell BPC-157 — Peptide Regulatory Window
// Hook A: ~77.140s = 2315 frames
// Hook B: ~77.845s = 2336 frames
// Hook C: ~77.087s = 2313 frames
// Angle: Category-level tailwind (HHS research priority) + multi-surface mechanism depth
// Value page: oppractitioner-site/infiniwell.html#observation-2-tendon-fascia
// ─────────────────────────────────────────────────────────────────────────────

export const video5InfiniWellPeptideWindowHookA: ScriptData = {
  compositionId: 'Video5-InfiniWellPeptideWindow-HookA',
  title: 'InfiniWell BPC-157 — Peptide Regulatory Window (Hook A: Pattern Observation)',
  totalFrames: 2370,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One peptide I\'ve been\nwatching practitioners reach for\nlong before it was news.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'HHS flagged peptides\nas a research priority this year.\nIn clinical practice,\nthis space has been active\nfor a decade.' }],
      tag: 'CONTEXT',
      startFrame: 132,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'One compound keeps coming back.\nNot because of the hype.\n' },
        { text: 'Because the pattern\nkeeps showing up', green: true },
        { text: '\nin the cases that don\'t fit\nthe standard protocol.' },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 358,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The compound is ' },
        { text: 'BPC-157.', green: true },
        { text: '\nPentadecapeptide — fifteen amino acids —\nderived from a protective sequence\nin gastric juice.' },
      ],
      tag: 'WHAT IT IS',
      startFrame: 434,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Three clinical surfaces\nthe research keeps returning to:\ngut mucosal support,\nsoft-tissue repair,\nrecovery signaling.' }],
      tag: 'CLINICAL SURFACES',
      startFrame: 1007,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157' }],
      qualifier: 'Two release profiles.\nDelayed release for gut-lining cases.\nRapid release for soft-tissue.\nSame compound. Different targets.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1322,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Fifteen amino acids.\n' },
        { text: 'A protective sequence\nthe stomach already makes.', green: true },
        { text: '\nThe body recognizes it\nbefore the research catches up.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1736,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A variable worth testing\nwhen a case has plateaued.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1970,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2370,
      clearPrevious: true,
    },
  ],
};

export const video5InfiniWellPeptideWindowHookB: ScriptData = {
  compositionId: 'Video5-InfiniWellPeptideWindow-HookB',
  title: 'InfiniWell BPC-157 — Peptide Regulatory Window (Hook B: Contradiction)',
  totalFrames: 2390,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Everyone\'s discovering\npeptides this year.\nIn clinical practice,\n' },
        { text: 'this one has been\nthe baseline for years.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'HHS flagged peptides\nas a research priority this year.\nIn clinical practice,\nthis space has been active\nfor a decade.' }],
      tag: 'CONTEXT',
      startFrame: 195,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'One compound keeps coming back.\nNot because of the hype.\n' },
        { text: 'Because the pattern\nkeeps showing up', green: true },
        { text: '\nin the cases that don\'t fit\nthe standard protocol.' },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 421,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The compound is ' },
        { text: 'BPC-157.', green: true },
        { text: '\nPentadecapeptide — fifteen amino acids —\nderived from a protective sequence\nin gastric juice.' },
      ],
      tag: 'WHAT IT IS',
      startFrame: 503,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Three clinical surfaces\nthe research keeps returning to:\ngut mucosal support,\nsoft-tissue repair,\nrecovery signaling.' }],
      tag: 'CLINICAL SURFACES',
      startFrame: 1052,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157' }],
      qualifier: 'Two release profiles.\nDelayed release for gut-lining cases.\nRapid release for soft-tissue.\nSame compound. Different targets.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1386,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Fifteen amino acids.\n' },
        { text: 'A protective sequence\nthe stomach already makes.', green: true },
        { text: '\nThe body recognizes it\nbefore the research catches up.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1768,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A variable worth testing\nwhen a case has plateaued.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1987,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2390,
      clearPrevious: true,
    },
  ],
};

export const video5InfiniWellPeptideWindowHookC: ScriptData = {
  compositionId: 'Video5-InfiniWellPeptideWindow-HookC',
  title: 'InfiniWell BPC-157 — Peptide Regulatory Window (Hook C: Outcome-First)',
  totalFrames: 2364,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'The peptide that finally\nshows up in tissue-repair cases\nno protocol touches.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'HHS flagged peptides\nas a research priority this year.\nIn clinical practice,\nthis space has been active\nfor a decade.' }],
      tag: 'CONTEXT',
      startFrame: 145,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'One compound keeps coming back.\nNot because of the hype.\n' },
        { text: 'Because the pattern\nkeeps showing up', green: true },
        { text: '\nin the cases that don\'t fit\nthe standard protocol.' },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 361,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The compound is ' },
        { text: 'BPC-157.', green: true },
        { text: '\nPentadecapeptide — fifteen amino acids —\nderived from a protective sequence\nin gastric juice.' },
      ],
      tag: 'WHAT IT IS',
      startFrame: 451,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Three clinical surfaces\nthe research keeps returning to:\ngut mucosal support,\nsoft-tissue repair,\nrecovery signaling.' }],
      tag: 'CLINICAL SURFACES',
      startFrame: 982,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157' }],
      qualifier: 'Two release profiles.\nDelayed release for gut-lining cases.\nRapid release for soft-tissue.\nSame compound. Different targets.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1332,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Fifteen amino acids.\n' },
        { text: 'A protective sequence\nthe stomach already makes.', green: true },
        { text: '\nThe body recognizes it\nbefore the research catches up.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1733,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A variable worth testing\nwhen a case has plateaued.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1971,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2364,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 6: InfiniWell BPC-157 — Recovery Plateau
// Hook A: ~74.710s = 2242 frames
// Hook B: ~77.166s = 2315 frames
// Hook C: ~75.128s = 2254 frames
// Angle: Tissue repair stalls at 80% — inputs vs signaling as the missing variable
// Value page: oppractitioner-site/infiniwell.html#observation-3-recovery-plateau
// ─────────────────────────────────────────────────────────────────────────────

export const video6InfiniWellRecoveryPlateauHookA: ScriptData = {
  compositionId: 'Video6-InfiniWellRecoveryPlateau-HookA',
  title: 'InfiniWell BPC-157 — Recovery Plateau (Hook A: Pattern Observation)',
  totalFrames: 2299,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One pattern in tissue-repair cases\nthat plateau at about\neighty percent and stop.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Injury is old.\nSometimes years old.\nSometimes months.\nProtocol is well-designed.\nRight amino acids.\nRight mineral cofactors.\nRight movement rehab.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 149,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Progress comes in the first phase.\n' },
        { text: 'Then it stalls.', green: true },
        { text: '\nBody lands at seventy-five percent\nof baseline function.\nRefuses to close the gap.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 429,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'What I watch for\nis the difference between\ninputs and ' },
        { text: 'signaling.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 694,
    },
    {
      type: 'phrase',
      segments: [{ text: 'You can add every nutrient\non the list and still stall\nif the body isn\'t receiving\na repair signal.' }],
      tag: 'MECHANISM',
      startFrame: 828,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The cells need to know\nthe job is not finished.\n' },
        { text: 'A signaling molecule\noften moves the needle', green: true },
        { text: '\nwhen a tenth nutrient\nwould not.' },
      ],
      tag: 'MECHANISM',
      startFrame: 875,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157 Rapid' }],
      qualifier: 'Same pentadecapeptide. Faster release.\nShort course. Tracked carefully.\nStopped when the plateau breaks.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1330,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nutrients build.\n' },
        { text: 'Signaling decides.', green: true },
        { text: '\nThe protocol stalls when\nthe build is right\nand the signal is missing.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1720,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a forever protocol.\n' },
        { text: 'A test input when the last\ntwenty percent won\'t come back.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1892,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2299,
      clearPrevious: true,
    },
  ],
};

export const video6InfiniWellRecoveryPlateauHookB: ScriptData = {
  compositionId: 'Video6-InfiniWellRecoveryPlateau-HookB',
  title: 'InfiniWell BPC-157 — Recovery Plateau (Hook B: Contradiction)',
  totalFrames: 2368,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Most recovery protocols\nadd more nutrients.\nIn the plateau cases,\n' },
        { text: 'nutrients aren\'t\nthe missing variable.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Injury is old.\nSometimes years old.\nSometimes months.\nProtocol is well-designed.\nRight amino acids.\nRight mineral cofactors.\nRight movement rehab.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 185,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Progress comes in the first phase.\n' },
        { text: 'Then it stalls.', green: true },
        { text: '\nBody lands at seventy-five percent\nof baseline function.\nRefuses to close the gap.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 515,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'What I watch for\nis the difference between\ninputs and ' },
        { text: 'signaling.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 791,
    },
    {
      type: 'phrase',
      segments: [{ text: 'You can add every nutrient\non the list and still stall\nif the body isn\'t receiving\na repair signal.' }],
      tag: 'MECHANISM',
      startFrame: 928,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The cells need to know\nthe job is not finished.\n' },
        { text: 'A signaling molecule\noften moves the needle', green: true },
        { text: '\nwhen a tenth nutrient\nwould not.' },
      ],
      tag: 'MECHANISM',
      startFrame: 973,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157 Rapid' }],
      qualifier: 'Same pentadecapeptide. Faster release.\nShort course. Tracked carefully.\nStopped when the plateau breaks.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1405,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nutrients build.\n' },
        { text: 'Signaling decides.', green: true },
        { text: '\nThe protocol stalls when\nthe build is right\nand the signal is missing.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1786,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a forever protocol.\n' },
        { text: 'A test input when the last\ntwenty percent won\'t come back.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1972,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2368,
      clearPrevious: true,
    },
  ],
};

export const video6InfiniWellRecoveryPlateauHookC: ScriptData = {
  compositionId: 'Video6-InfiniWellRecoveryPlateau-HookC',
  title: 'InfiniWell BPC-157 — Recovery Plateau (Hook C: Outcome-First)',
  totalFrames: 2308,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Injury is old.\nProtocol is right.\n' },
        { text: 'Recovery plateaus\nat eighty percent.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Injury is old.\nSometimes years old.\nSometimes months.\nProtocol is well-designed.\nRight amino acids.\nRight mineral cofactors.\nRight movement rehab.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 139,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Progress comes in the first phase.\n' },
        { text: 'Then it stalls.', green: true },
        { text: '\nBody lands at seventy-five percent\nof baseline function.\nRefuses to close the gap.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 448,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'What I watch for\nis the difference between\ninputs and ' },
        { text: 'signaling.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 708,
    },
    {
      type: 'phrase',
      segments: [{ text: 'You can add every nutrient\non the list and still stall\nif the body isn\'t receiving\na repair signal.' }],
      tag: 'MECHANISM',
      startFrame: 838,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'The cells need to know\nthe job is not finished.\n' },
        { text: 'A signaling molecule\noften moves the needle', green: true },
        { text: '\nwhen a tenth nutrient\nwould not.' },
      ],
      tag: 'MECHANISM',
      startFrame: 875,
    },
    {
      type: 'product',
      segments: [{ text: 'InfiniWell\nBPC-157 Rapid' }],
      qualifier: 'Same pentadecapeptide. Faster release.\nShort course. Tracked carefully.\nStopped when the plateau breaks.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1305,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nutrients build.\n' },
        { text: 'Signaling decides.', green: true },
        { text: '\nThe protocol stalls when\nthe build is right\nand the signal is missing.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1706,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a forever protocol.\n' },
        { text: 'A test input when the last\ntwenty percent won\'t come back.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1908,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2308,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 7: Pendulum Akkermansia — Metabolic Stall
// Hook A: ~79.909s = 2398 frames
// Hook B: ~81.293s = 2439 frames
// Hook C: ~79.700s = 2391 frames
//
// ⚠️  V7 HOLD — DO NOT RENDER per DO_NOT_RENDER.md
// Three-gate clearance required before render:
//   (1) Pendulum affiliate approval
//   (2) Wire real URL into oppractitioner-site/pendulum.html CTA
//   (3) Remove DRAFT banner from pendulum.html
//
// Scaffold is registered so compositions appear in Remotion Studio for timing review.
// RENDER ONLY after all three gates clear.
//
// Angle: Metabolic stall + C-section/antibiotic history → keystone strain unavailable
// Value page: oppractitioner-site/pendulum.html#observation-1-metabolic-stall (DRAFT)
// ─────────────────────────────────────────────────────────────────────────────

export const video7PendulumMetabolicStallHookA: ScriptData = {
  compositionId: 'Video7-PendulumMetabolicStall-HookA',
  title: 'Pendulum Akkermansia — Metabolic Stall (Hook A: Pattern Observation) [HOLD]',
  totalFrames: 2451,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One pattern I keep\nrunning into with\nmetabolic-stall cases\nwho do everything right.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Clean diet.\nDecent sleep.\nSolid probiotic stack for months.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 148,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Labs will not budge.\nInsulin resistance plateaus.\nWeight plateaus.\n' },
        { text: 'Satiety feels broken.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 278,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nine times out of ten,\nwhen I dig into history,\nI find two things.\n' },
        { text: 'C-section birth.', green: true },
        { text: '\nOr a heavy antibiotic course\nsomewhere in the last decade.\nOften both.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 482,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'There is a specific gut organism\nalmost nobody knew\nhow to supplement until recently.\n' },
        { text: 'Akkermansia muciniphila.', green: true },
      ],
      tag: 'KEYSTONE STRAIN',
      startFrame: 769,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Lives in the mucus layer.\nRegulates metabolic signaling,\ninsulin response,\nsatiety hormones.\nOne of the first strains\nwiped out by antibiotics.\nRarely seeded at birth\nwithout vaginal passage.' }],
      tag: 'WHAT IT DOES',
      startFrame: 1029,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'For years nobody could put it\nin a capsule.\n' },
        { text: 'Akkermansia is an obligate anaerobe.\nDies the second it hits oxygen.', green: true },
        { text: '\nThat is why every other probiotic\non the shelf skipped it.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1439,
      chart: {
        kind: 'bar',
        title: 'MICROBIOME COMPOSITION',
        unit: '% akkermansia muciniphila',
        maxValue: 5,
        bars: [
          { label: 'Healthy gut', value: 4, displayValue: '3–5%', highlight: true },
          { label: 'After antibiotic', value: 2, displayValue: '<0.1%', highlight: false, collapseAfter: true },
          { label: 'After stress', value: 0.8, displayValue: '~0.5%', highlight: false },
        ],
      },
    },
    {
      type: 'product',
      segments: [{ text: 'Pendulum\nAkkermansia' }],
      qualifier: 'Pendulum solved the delivery —\nkeeps it viable through manufacturing\nand into the gut.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1668,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A keystone strain that may support\nwhat the rest of the protocol\ncannot reach.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2057,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2451,
      clearPrevious: true,
    },
  ],
};

export const video7PendulumMetabolicStallHookB: ScriptData = {
  compositionId: 'Video7-PendulumMetabolicStall-HookB',
  title: 'Pendulum Akkermansia — Metabolic Stall (Hook B: Contradiction) [HOLD]',
  totalFrames: 2494,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Every probiotic stack has\nLactobacillus and Bifidobacterium.\n' },
        { text: 'The strain the metabolic research\npoints at keeps getting skipped.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Clean diet.\nDecent sleep.\nSolid probiotic stack for months.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 225,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Labs will not budge.\nInsulin resistance plateaus.\nWeight plateaus.\n' },
        { text: 'Satiety feels broken.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 367,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nine times out of ten,\nwhen I dig into history,\nI find two things.\n' },
        { text: 'C-section birth.', green: true },
        { text: '\nOr a heavy antibiotic course\nsomewhere in the last decade.\nOften both.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 566,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'There is a specific gut organism\nalmost nobody knew\nhow to supplement until recently.\n' },
        { text: 'Akkermansia muciniphila.', green: true },
      ],
      tag: 'KEYSTONE STRAIN',
      startFrame: 874,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Lives in the mucus layer.\nRegulates metabolic signaling,\ninsulin response,\nsatiety hormones.\nOne of the first strains\nwiped out by antibiotics.\nRarely seeded at birth\nwithout vaginal passage.' }],
      tag: 'WHAT IT DOES',
      startFrame: 1112,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'For years nobody could put it\nin a capsule.\n' },
        { text: 'Akkermansia is an obligate anaerobe.\nDies the second it hits oxygen.', green: true },
        { text: '\nThat is why every other probiotic\non the shelf skipped it.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1512,
      chart: {
        kind: 'bar',
        title: 'MICROBIOME COMPOSITION',
        unit: '% akkermansia muciniphila',
        maxValue: 5,
        bars: [
          { label: 'Healthy gut', value: 4, displayValue: '3–5%', highlight: true },
          { label: 'After antibiotic', value: 2, displayValue: '<0.1%', highlight: false, collapseAfter: true },
          { label: 'After stress', value: 0.8, displayValue: '~0.5%', highlight: false },
        ],
      },
    },
    {
      type: 'product',
      segments: [{ text: 'Pendulum\nAkkermansia' }],
      qualifier: 'Pendulum solved the delivery —\nkeeps it viable through manufacturing\nand into the gut.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1748,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A keystone strain that may support\nwhat the rest of the protocol\ncannot reach.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2131,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2494,
      clearPrevious: true,
    },
  ],
};

export const video7PendulumMetabolicStallHookC: ScriptData = {
  compositionId: 'Video7-PendulumMetabolicStall-HookC',
  title: 'Pendulum Akkermansia — Metabolic Stall (Hook C: Outcome-First) [HOLD]',
  totalFrames: 2445,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Client is doing everything right.\nLabs won\'t budge.\n' },
        { text: 'Insulin resistance plateaus.\nWeight plateaus.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Clean diet.\nDecent sleep.\nSolid probiotic stack for months.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 185,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Labs will not budge.\nInsulin resistance plateaus.\nWeight plateaus.\n' },
        { text: 'Satiety feels broken.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 322,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nine times out of ten,\nwhen I dig into history,\nI find two things.\n' },
        { text: 'C-section birth.', green: true },
        { text: '\nOr a heavy antibiotic course\nsomewhere in the last decade.\nOften both.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 538,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'There is a specific gut organism\nalmost nobody knew\nhow to supplement until recently.\n' },
        { text: 'Akkermansia muciniphila.', green: true },
      ],
      tag: 'KEYSTONE STRAIN',
      startFrame: 837,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Lives in the mucus layer.\nRegulates metabolic signaling,\ninsulin response,\nsatiety hormones.\nOne of the first strains\nwiped out by antibiotics.\nRarely seeded at birth\nwithout vaginal passage.' }],
      tag: 'WHAT IT DOES',
      startFrame: 1058,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'For years nobody could put it\nin a capsule.\n' },
        { text: 'Akkermansia is an obligate anaerobe.\nDies the second it hits oxygen.', green: true },
        { text: '\nThat is why every other probiotic\non the shelf skipped it.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1443,
      chart: {
        kind: 'bar',
        title: 'MICROBIOME COMPOSITION',
        unit: '% akkermansia muciniphila',
        maxValue: 5,
        bars: [
          { label: 'Healthy gut', value: 4, displayValue: '3–5%', highlight: true },
          { label: 'After antibiotic', value: 2, displayValue: '<0.1%', highlight: false, collapseAfter: true },
          { label: 'After stress', value: 0.8, displayValue: '~0.5%', highlight: false },
        ],
      },
    },
    {
      type: 'product',
      segments: [{ text: 'Pendulum\nAkkermansia' }],
      qualifier: 'Pendulum solved the delivery —\nkeeps it viable through manufacturing\nand into the gut.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1697,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A keystone strain that may support\nwhat the rest of the protocol\ncannot reach.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2064,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2445,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 8: Alight Formulas — Building-Specific Mycotoxin Mapping
// Hook A: ~84.637s = 2540 frames
// Hook B: ~89.130s = 2674 frames
// Hook C: ~83.200s = 2496 frames
// Angle: Fine in some buildings, sick in others — specific mycotoxin, specific profile
// Value page: oppractitioner-site/alight.html#observation-1-building-specific
// ─────────────────────────────────────────────────────────────────────────────

export const video8AlightMycotoxinsHookA: ScriptData = {
  compositionId: 'Video8-AlightMycotoxins-HookA',
  title: 'Alight Formulas — Mycotoxin Mapping (Hook A: Pattern Observation)',
  totalFrames: 2594,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'One pattern in about a third\nof my chronic-inflammation cases\nthat keeps coming up.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client has tried every protocol.\nAntihistamines. Gut work.\nNervous system regulation.\nElimination diet.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 148,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some things help for a week.\n' },
        { text: 'Then the symptoms come back.', green: true },
        { text: '\nUsually in the same places.\nUsually at the same times.\nNobody can map it because\nthe protocol was not designed to.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 360,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Here is what I ask them to track.\nWhich rooms. Which buildings.\nWhich days of the week.' }],
      tag: 'WHAT I DO',
      startFrame: 679,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Within two weeks\n' },
        { text: 'the map is obvious.', green: true },
        { text: '\nFine at work. Sick at home.\nFine in the new office.\nSick in the car.\nFine on vacation. Back to square one\nin the bedroom.' },
      ],
      tag: 'RESULT',
      startFrame: 834,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'This is almost always\na ' },
        { text: 'mycotoxin load pattern.', green: true },
        { text: '\nNot mold generally.\nA specific mycotoxin\nfrom a specific building material\nproducing a specific symptom cluster.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 1185,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Ochratoxin from water-damaged drywall\nlooks different from\naflatoxin from contaminated food.\n' },
        { text: 'Gliotoxin from indoor growth\nlooks different from\ntrichothecenes.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1537,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Eight mycotoxins.\n' },
        { text: 'Eight symptom profiles.', green: true },
        { text: '\nBroad-spectrum treatment keeps missing\nbecause the target is specific.' },
      ],
      tag: 'WHY IT FAILS',
      startFrame: 1847,
    },
    {
      type: 'product',
      segments: [{ text: 'Alight Formulas\nMycotoxin Guides' }],
      qualifier: 'Eight mycotoxin-specific guides.\nSource mold. Organ targeted.\nDifferentiating symptom profile.',
      tag: 'WHAT I REACH FOR',
      startFrame: 2080,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2594,
      clearPrevious: true,
    },
  ],
};

export const video8AlightMycotoxinsHookB: ScriptData = {
  compositionId: 'Video8-AlightMycotoxins-HookB',
  title: 'Alight Formulas — Mycotoxin Mapping (Hook B: Contradiction)',
  totalFrames: 2727,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Everyone treats mold illness\nwith broad-spectrum protocols.\n' },
        { text: 'Eight mycotoxins,\neight symptom profiles —\nthe target is specific.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client has tried every protocol.\nAntihistamines. Gut work.\nNervous system regulation.\nElimination diet.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 254,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some things help for a week.\n' },
        { text: 'Then the symptoms come back.', green: true },
        { text: '\nUsually in the same places.\nUsually at the same times.\nNobody can map it because\nthe protocol was not designed to.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 470,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Here is what I ask them to track.\nWhich rooms. Which buildings.\nWhich days of the week.' }],
      tag: 'WHAT I DO',
      startFrame: 792,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Within two weeks\n' },
        { text: 'the map is obvious.', green: true },
        { text: '\nFine at work. Sick at home.\nFine in the new office.\nSick in the car.\nFine on vacation. Back to square one\nin the bedroom.' },
      ],
      tag: 'RESULT',
      startFrame: 928,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'This is almost always\na ' },
        { text: 'mycotoxin load pattern.', green: true },
        { text: '\nNot mold generally.\nA specific mycotoxin\nfrom a specific building material\nproducing a specific symptom cluster.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 1293,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Ochratoxin from water-damaged drywall\nlooks different from\naflatoxin from contaminated food.\n' },
        { text: 'Gliotoxin from indoor growth\nlooks different from\ntrichothecenes.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1651,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Eight mycotoxins.\n' },
        { text: 'Eight symptom profiles.', green: true },
        { text: '\nBroad-spectrum treatment keeps missing\nbecause the target is specific.' },
      ],
      tag: 'WHY IT FAILS',
      startFrame: 1941,
    },
    {
      type: 'product',
      segments: [{ text: 'Alight Formulas\nMycotoxin Guides' }],
      qualifier: 'Eight mycotoxin-specific guides.\nSource mold. Organ targeted.\nDifferentiating symptom profile.',
      tag: 'WHAT I REACH FOR',
      startFrame: 2192,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2727,
      clearPrevious: true,
    },
  ],
};

export const video8AlightMycotoxinsHookC: ScriptData = {
  compositionId: 'Video8-AlightMycotoxins-HookC',
  title: 'Alight Formulas — Mycotoxin Mapping (Hook C: Outcome-First)',
  totalFrames: 2548,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Fine in some buildings.\nSick in others.\n' },
        { text: 'Same person.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client has tried every protocol.\nAntihistamines. Gut work.\nNervous system regulation.\nElimination diet.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 107,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some things help for a week.\n' },
        { text: 'Then the symptoms come back.', green: true },
        { text: '\nUsually in the same places.\nUsually at the same times.\nNobody can map it because\nthe protocol was not designed to.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 344,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Here is what I ask them to track.\nWhich rooms. Which buildings.\nWhich days of the week.' }],
      tag: 'WHAT I DO',
      startFrame: 659,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Within two weeks\n' },
        { text: 'the map is obvious.', green: true },
        { text: '\nFine at work. Sick at home.\nFine in the new office.\nSick in the car.\nFine on vacation. Back to square one\nin the bedroom.' },
      ],
      tag: 'RESULT',
      startFrame: 782,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'This is almost always\na ' },
        { text: 'mycotoxin load pattern.', green: true },
        { text: '\nNot mold generally.\nA specific mycotoxin\nfrom a specific building material\nproducing a specific symptom cluster.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 1111,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Ochratoxin from water-damaged drywall\nlooks different from\naflatoxin from contaminated food.\n' },
        { text: 'Gliotoxin from indoor growth\nlooks different from\ntrichothecenes.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1470,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Eight mycotoxins.\n' },
        { text: 'Eight symptom profiles.', green: true },
        { text: '\nBroad-spectrum treatment keeps missing\nbecause the target is specific.' },
      ],
      tag: 'WHY IT FAILS',
      startFrame: 1774,
    },
    {
      type: 'product',
      segments: [{ text: 'Alight Formulas\nMycotoxin Guides' }],
      qualifier: 'Eight mycotoxin-specific guides.\nSource mold. Organ targeted.\nDifferentiating symptom profile.',
      tag: 'WHAT I REACH FOR',
      startFrame: 2019,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2548,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 9: BodyBio PC — Mold Detox Floor (Angle 2)
// Hook A: ~75.024s = 2251 frames
// Hook B: ~82.416s = 2473 frames
// Hook C: ~79.438s = 2384 frames
// Angle: Mold detox stalls because binder sequence skipped membrane repair
// Silo note: GETREAL247 code on value page ONLY — never spoken, never on-screen
// Value page: oppractitioner-site/bodybio.html#observation-2-mold-detox-floor
// ─────────────────────────────────────────────────────────────────────────────

export const video9BodyBioMoldDetoxHookA: ScriptData = {
  compositionId: 'Video9-BodyBioMoldDetox-HookA',
  title: 'BodyBio PC — Mold Detox Floor Angle 2 (Hook A: Pattern Observation)',
  totalFrames: 2302,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'Most stalled mold detox protocols\nI see have the same\nmissing step in the sequence.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client is doing everything\nby the book.\nBinders. Glutathione.\nSauna. Maybe CSM.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 142,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some symptoms shift early.\n' },
        { text: 'Then nothing.', green: true },
        { text: '\nProtocol drags for months.\nSometimes years.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 322,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'When I walk back through the sequence,\none thing is almost always skipped.\n' },
        { text: 'Cell membrane repair.', green: true },
        { text: '\nHere is the mechanism.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 555,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Mycotoxins are ' },
        { text: 'lipophilic.', green: true },
        { text: '\nThey store in cell membranes.\nIf the membrane is damaged —\nfrom years of exposure,\ninflammation, oxidative stress —\nbinders never get a full release.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 763,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Toxins keep recycling.\nProtocol keeps running.\nNothing moves.' }],
      tag: 'MECHANISM',
      startFrame: 1097,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Phosphatidylcholine\nis the phospholipid\n' },
        { text: 'the body uses to rebuild\nthat membrane layer.', green: true },
      ],
      tag: 'INTRODUCING',
      startFrame: 1294,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: 'The phospholipid the body uses\nto rebuild the membrane layer.\nThe floor binders stand on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1496,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Usually introduced two to four weeks\nbefore the binding protocol starts,\nor alongside it.' }],
      tag: 'SEQUENCING',
      startFrame: 1495,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Binders without\nphospholipid support\n' },
        { text: 'is why most protocols stall.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1825,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not as a replacement\nfor binders.\n' },
        { text: 'As the floor\nthe binders are standing on.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 1934,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2302,
      clearPrevious: true,
    },
  ],
};

export const video9BodyBioMoldDetoxHookB: ScriptData = {
  compositionId: 'Video9-BodyBioMoldDetox-HookB',
  title: 'BodyBio PC — Mold Detox Floor Angle 2 (Hook B: Contradiction)',
  totalFrames: 2527,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Everyone adds more binders\nwhen detox stalls.\n' },
        { text: 'The issue isn\'t binder strength.\nIt\'s where the toxins are stored.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client is doing everything\nby the book.\nBinders. Glutathione.\nSauna. Maybe CSM.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 208,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some symptoms shift early.\n' },
        { text: 'Then nothing.', green: true },
        { text: '\nProtocol drags for months.\nSometimes years.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 415,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'When I walk back through the sequence,\none thing is almost always skipped.\n' },
        { text: 'Cell membrane repair.', green: true },
        { text: '\nHere is the mechanism.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 661,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Mycotoxins are ' },
        { text: 'lipophilic.', green: true },
        { text: '\nThey store in cell membranes.\nIf the membrane is damaged —\nfrom years of exposure,\ninflammation, oxidative stress —\nbinders never get a full release.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 904,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Toxins keep recycling.\nProtocol keeps running.\nNothing moves.' }],
      tag: 'MECHANISM',
      startFrame: 1261,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Phosphatidylcholine\nis the phospholipid\n' },
        { text: 'the body uses to rebuild\nthat membrane layer.', green: true },
      ],
      tag: 'INTRODUCING',
      startFrame: 1477,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: 'The phospholipid the body uses\nto rebuild the membrane layer.\nThe floor binders stand on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1687,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Usually introduced two to four weeks\nbefore the binding protocol starts,\nor alongside it.' }],
      tag: 'SEQUENCING',
      startFrame: 1687,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Binders without\nphospholipid support\n' },
        { text: 'is why most protocols stall.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 2047,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not as a replacement\nfor binders.\n' },
        { text: 'As the floor\nthe binders are standing on.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2160,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2527,
      clearPrevious: true,
    },
  ],
};

export const video9BodyBioMoldDetoxHookC: ScriptData = {
  compositionId: 'Video9-BodyBioMoldDetox-HookC',
  title: 'BodyBio PC — Mold Detox Floor Angle 2 (Hook C: Outcome-First)',
  totalFrames: 2434,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [
        { text: 'Binders. Glutathione. Sauna.\n' },
        { text: 'Protocol dragging for months.\nNothing is clearing anymore.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Client is doing everything\nby the book.\nBinders. Glutathione.\nSauna. Maybe CSM.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 189,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some symptoms shift early.\n' },
        { text: 'Then nothing.', green: true },
        { text: '\nProtocol drags for months.\nSometimes years.' },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 394,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'When I walk back through the sequence,\none thing is almost always skipped.\n' },
        { text: 'Cell membrane repair.', green: true },
        { text: '\nHere is the mechanism.' },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 630,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Mycotoxins are ' },
        { text: 'lipophilic.', green: true },
        { text: '\nThey store in cell membranes.\nIf the membrane is damaged —\nfrom years of exposure,\ninflammation, oxidative stress —\nbinders never get a full release.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 863,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Toxins keep recycling.\nProtocol keeps running.\nNothing moves.' }],
      tag: 'MECHANISM',
      startFrame: 1223,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Phosphatidylcholine\nis the phospholipid\n' },
        { text: 'the body uses to rebuild\nthat membrane layer.', green: true },
      ],
      tag: 'INTRODUCING',
      startFrame: 1417,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: 'The phospholipid the body uses\nto rebuild the membrane layer.\nThe floor binders stand on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1620,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Usually introduced two to four weeks\nbefore the binding protocol starts,\nor alongside it.' }],
      tag: 'SEQUENCING',
      startFrame: 1618,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Binders without\nphospholipid support\n' },
        { text: 'is why most protocols stall.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1935,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not as a replacement\nfor binders.\n' },
        { text: 'As the floor\nthe binders are standing on.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2047,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2434,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Convenience export for sync-timing-universal.py batch4 registry
// ─────────────────────────────────────────────────────────────────────────────

export const BATCH4_SCRIPTS = [
  video4InfiniWellGutHookA,
  video4InfiniWellGutHookB,
  video4InfiniWellGutHookC,
  video5InfiniWellPeptideWindowHookA,
  video5InfiniWellPeptideWindowHookB,
  video5InfiniWellPeptideWindowHookC,
  video6InfiniWellRecoveryPlateauHookA,
  video6InfiniWellRecoveryPlateauHookB,
  video6InfiniWellRecoveryPlateauHookC,
  video7PendulumMetabolicStallHookA,   // HOLD — scaffold only
  video7PendulumMetabolicStallHookB,   // HOLD — scaffold only
  video7PendulumMetabolicStallHookC,   // HOLD — scaffold only
  video8AlightMycotoxinsHookA,
  video8AlightMycotoxinsHookB,
  video8AlightMycotoxinsHookC,
  video9BodyBioMoldDetoxHookA,
  video9BodyBioMoldDetoxHookB,
  video9BodyBioMoldDetoxHookC,
];
