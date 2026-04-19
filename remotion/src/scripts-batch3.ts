// ─── @oppractitioner Script Data — Batch 3 (REAL) ───────────────────────────
// Video 7: Pendulum     — Akkermansia / metabolic stall + C-section/antibiotic history
// Video 8: Alight       — Mycotoxin-specific / building-sourced symptom mapping
// Video 9: BodyBio PC   — Mold detox sequencing (Angle 2 — different from Batch 1)
//
// Dead-link reality (OPERATOR-ONLY concept — NEVER cited to viewer per Decision #35):
// Treat every @oppractitioner URL as text-only. CTA frames render `tr.ee/owQ7FM` big
// + center so viewers can TYPE it. Voiceover speaks the URL phonetically at CTA.
// No https:// on screen. Caption adds a type-this instruction.
// NEVER write the reason the link isn't clickable (follower count, platform tier,
// "not clickable," etc.) into voiceover, on-screen text, caption, or pinned comment.
//
// Frame numbers here are PLACEHOLDERS for composition setup only.
// Drop audio into remotion/public/ then run
//   `python sync-timing-universal.py batch3`
// to auto-sync startFrames to actual ElevenLabs audio duration by word count.
// ─────────────────────────────────────────────────────────────────────────────

import { ScriptData } from './types';

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 7: Pendulum — Akkermansia / Metabolic Stall Pattern
// Target: ~72 seconds = 2160 frames
// Angle: Metabolic stall + C-section or antibiotic history → missing keystone strain
// Affiliate: PENDING APPROVAL — hold publish until approved (script + render ready)
// Value page: getrealnut-sys.github.io/oppractitioner/pendulum-akkermansia (CREATE on approval)
// Search keywords: akkermansia, gut microbiome, metabolic stall, integrative practitioner
// ─────────────────────────────────────────────────────────────────────────────
export const video7PendulumMetabolicStall: ScriptData = {
  compositionId: 'Video7-PendulumMetabolicStall',
  title: 'Pendulum — Akkermansia / Metabolic Stall Pattern',
  totalFrames: 2661,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'The gut strain\nalmost no\nprotocol includes.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Pattern I keep\nrunning into\nwith metabolic stall.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 172,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Clean diet.\nDecent sleep.\nSolid probiotic stack.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 368,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Labs won\'t budge.\nWeight plateaus.\nSatiety feels broken.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 540,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Nine times out of ten,\nhistory shows\n' },
        { text: 'C-section birth.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 736,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Or a heavy\nantibiotic course\nin the last decade.\n' },
        { text: 'Often both.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 955,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'A specific gut organism —\n' },
        { text: 'Akkermansia muciniphila.', green: true },
      ],
      tag: 'KEYSTONE STRAIN',
      startFrame: 1220,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Lives in the\nmucus layer.\nRegulates metabolic signaling.' }],
      tag: 'WHAT IT DOES',
      startFrame: 1392,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Wiped out by antibiotics.\n' },
        { text: 'Rarely seeded\nwithout vaginal birth.', green: true },
      ],
      tag: 'WHY IT\'S MISSING',
      startFrame: 1588,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'For years, nobody\ncould supplement it.\n' },
        { text: 'Obligate anaerobe.', green: true },
        { text: '\nDies on contact\nwith oxygen.' },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1806,
      // ── Microbiome composition chart overlay ──
      // Healthy gut holds 3-5% Akkermansia. Antibiotics wipe it out (collapse animation
      // visually echoes "dies on contact with oxygen"). Stress suppresses but doesn't fully kill.
      // Rewatch mechanic: the antibiotic bar grows then collapses — pattern-interrupt that pulls
      // viewers back to rewind the moment.
      chart: {
        kind: 'bar',
        title: 'MICROBIOME COMPOSITION',
        unit: '% akkermansia muciniphila',
        maxValue: 5,
        bars: [
          {
            label: 'Healthy gut',
            value: 4,
            displayValue: '3–5%',
            highlight: true,
          },
          {
            label: 'After antibiotic',
            value: 2,
            displayValue: '<0.1%',
            highlight: false,
            collapseAfter: true,
          },
          {
            label: 'After stress',
            value: 0.8,
            displayValue: '~0.5%',
            highlight: false,
          },
        ],
      },
    },
    {
      type: 'product',
      segments: [{ text: 'Pendulum\nAkkermansia' }],
      qualifier: 'Delivery system\nthat keeps it viable\nto the gut.',
      tag: 'WHAT I REACH FOR',
      startFrame: 2117,
    },
    {
      type: 'result',
      segments: [
        { text: 'Not a fix.\n' },
        { text: 'A keystone strain.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2382,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2532,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 8: Alight Formulas — Mycotoxin-Specific Symptom Mapping
// Target: ~78 seconds = 2340 frames
// Angle: Fine in some buildings, sick in others → specific mycotoxin, specific profile
// Affiliate: Alight Formulas (confirmed — scraped)
// Value page: getrealnut-sys.github.io/oppractitioner/alight-mycotoxins
// Search keywords: mycotoxin, mold illness, environmental health, integrative practitioner
// ─────────────────────────────────────────────────────────────────────────────
export const video8AlightMycotoxins: ScriptData = {
  compositionId: 'Video8-AlightMycotoxins',
  title: 'Alight Formulas — Building-Specific Mycotoxin Mapping',
  totalFrames: 2920,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'Fine at work.\nSick at home.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Comes up in about\na third of my\nchronic inflammation cases.' }],
      tag: 'FREQUENCY',
      startFrame: 149,
    },
    {
      type: 'phrase',
      segments: [{ text: 'They\'ve tried everything.\nAntihistamines.\nGut work. Nervous system.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 413,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some things help for a week.\n' },
        { text: 'Then the symptoms\ncome back.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 608,
    },
    {
      type: 'phrase',
      segments: [{ text: 'What I ask them\nto track — which rooms.\nWhich buildings.' }],
      tag: 'WHAT I DO',
      startFrame: 873,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Within two weeks,\n' },
        { text: 'the map is obvious.', green: true },
      ],
      tag: 'RESULT',
      startFrame: 1137,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Fine at work.\nSick at home.\nFine on vacation.\nBack to square one\nin the bedroom.' }],
      tag: 'EXAMPLES',
      startFrame: 1309,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'This is almost always\na ' },
        { text: 'mycotoxin load pattern.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 1689,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Not mold generally.\nA specific mycotoxin.\nFrom specific materials.' }],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1884,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Ochratoxin.\nAflatoxin.\n' },
        { text: 'Gliotoxin.\nTrichothecenes.', green: true },
      ],
      tag: 'SECOND-PASS REWARD',
      startFrame: 2102,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Eight mycotoxins.\nEight symptom profiles.\nBroad-spectrum misses.' }],
      tag: 'WHY IT FAILS',
      startFrame: 2205,
    },
    {
      type: 'product',
      segments: [{ text: 'Alight Formulas\nMycotoxin Guides' }],
      qualifier: 'Source mold.\nTarget organ.\nDifferentiating profile.',
      tag: 'WHAT I REACH FOR',
      startFrame: 2377,
    },
    {
      type: 'result',
      segments: [
        { text: 'Worth testing\n' },
        { text: 'when the protocol\nkeeps stopping.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2618,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2790,
      clearPrevious: true,
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// VIDEO 9: BodyBio PC — Angle 2 / Mold Detox Sequencing
// Target: ~68 seconds = 2040 frames
// Angle: Mold detox stalls because binder sequence skipped membrane repair
// NOT the "bucket with holes" absorption angle from Batch 1 Video 2
// Affiliate: bodybio.com/GETREAL247 (code active until 4/21; bio routing only)
// Value page: getrealnut-sys.github.io/oppractitioner/bodybio-membrane (Angle 2 section)
// Search keywords: phosphatidylcholine, cell membrane, mold detox, integrative practitioner
// ─────────────────────────────────────────────────────────────────────────────
export const video9BodyBioMoldDetoxFloor: ScriptData = {
  compositionId: 'Video9-BodyBioMoldDetoxFloor',
  title: 'BodyBio PC — Mold Detox Sequencing Pattern',
  totalFrames: 2619,
  fps: 30,
  phrases: [
    {
      type: 'hook',
      segments: [{ text: 'Most stalled\nmold detox protocols\nhave the same\nmissing step.' }],
      tag: 'PATTERN OBSERVED',
      startFrame: 0,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Everything by the book.\nBinders. Glutathione.\nSauna. Maybe CSM.' }],
      tag: 'CLIENT PRESENTATION',
      startFrame: 288,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'Some symptoms shift.\n' },
        { text: 'Then nothing.', green: true },
      ],
      tag: 'CLIENT PRESENTATION',
      startFrame: 549,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Protocol drags\nfor months.\nSometimes years.' }],
      tag: 'TIMELINE',
      startFrame: 698,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'One thing\nalmost always skipped.\n' },
        { text: 'Cell membrane repair.', green: true },
      ],
      tag: 'ROOT PATTERN',
      startFrame: 875,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Mycotoxins\nare lipophilic.\nThey store in\ncell membranes.' }],
      tag: 'SECOND-PASS REWARD',
      startFrame: 1108,
    },
    {
      type: 'phrase',
      segments: [
        { text: 'If the membrane\nis damaged —\n' },
        { text: 'binders never get\na full release.', green: true },
      ],
      tag: 'MECHANISM',
      startFrame: 1340,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Toxins recycle.\nProtocol runs.\nNothing moves.' }],
      tag: 'WHY IT STALLS',
      startFrame: 1684,
    },
    {
      type: 'product',
      segments: [{ text: 'BodyBio PC' }],
      qualifier: 'The floor\nbinders stand on.',
      tag: 'WHAT I REACH FOR',
      startFrame: 1861,
    },
    {
      type: 'phrase',
      segments: [{ text: 'Usually introduced\ntwo to four weeks\nbefore binders.' }],
      tag: 'SEQUENCING',
      startFrame: 2066,
    },
    {
      type: 'result',
      segments: [
        { text: 'Worth testing\n' },
        { text: 'when nothing\nis moving.', green: true },
      ],
      tag: 'PATTERN OBSERVED',
      startFrame: 2298,
    },
    {
      type: 'cta',
      segments: [{ text: 'tr.ee/\nowQ7FM' }],
      startFrame: 2475,
      clearPrevious: true,
    },
  ],
};

export const BATCH3_SCRIPTS = [
  video7PendulumMetabolicStall,
  video8AlightMycotoxins,
  video9BodyBioMoldDetoxFloor,
];
