// ─── Premium Engine — Core Types ─────────────────────────────────────────────
// Explicitly decoupled from baseline types (src/types.ts). Do NOT extend
// PhraseSpec / PhraseEntry here — those encode the baseline text-tile
// assumptions and are frozen.
//
// This file defines:
//   - the legacy scaffold Scene (kept for the existing premium-test-01
//     composition; no longer the authoring target for new work)
//   - the premium HOOK schema per AUTHORING_MODEL, scoped tightly to what
//     the end-to-end V12 hook slice requires:
//       * evidence: data_point only
//       * annotation: bracket only
//       * signal rail: diagnostic-instrument voice
//     Body / CTA / other evidence types / other gestures are intentionally
//     absent. They must be added to this schema before they can be authored.

// ─── Legacy scaffold scene (kept, not extended) ──────────────────────────────

export interface Beat {
  id: string;
  startFrame: number;
  durationFrames: number;
  anchor?: string;
  label?: string;
}

export type SceneKind = 'hook' | 'body' | 'cta';

export interface Scene {
  id: string;
  kind: SceneKind;
  startFrame: number;
  durationFrames: number;
  text: string;
  beats: Beat[];
}

// ─── Premium HOOK schema (authoring target) ──────────────────────────────────

// Evidence — discriminated union. Only `data_point` implemented in this slice.

export interface EvidenceDataPoint {
  type: 'data_point';
  ref_id?: string;
  value: string;                    // e.g. "1.8"
  unit_label?: string;              // e.g. "pH"
  range_label?: string;             // e.g. "normal: 1.5–3.5"
  emphasis?: 'abnormal' | 'normal' | 'neutral';
  note?: string;                    // not rendered; pipeline / QA only
}

// Future evidence types will land here as additional union members.
export type Evidence = EvidenceDataPoint;

// Annotation — one gesture per hook. Only `bracket` implemented in this slice.
export type AnnotationGesture =
  | 'bracket'
  | 'circle'
  | 'underline'
  | 'extend_to'
  | 'flick_value';

export interface Annotation {
  gesture: AnnotationGesture;
  fire_on_word: string;             // payoff word in caption.text
  label?: string;                   // small mono label accompanying the mark
}

// Caption — the hook text itself.
export interface Caption {
  text: string;
  anchor: string;                   // transcript-aligned phrase
  accent_word?: string;             // one word rendered in phosphor
}

// Timing — authoritative frame spans for the scene and its voice window.
export interface SceneTiming {
  start_frame: number;              // relative to video start
  duration_frames: number;
  voice_window: { start_frame: number; end_frame: number };
}

// Rail override — optional per-scene override of the video-level rail.
export interface RailOverride {
  channel?: string;
  scene_label?: string;
}

// HookScene — the full authored shape for a premium hook.
export interface HookScene {
  scene_id: string;
  scene_kind: 'hook';
  rail_tag?: string;
  timing: SceneTiming;
  evidence: Evidence;
  annotation: Annotation;
  caption: Caption;
  rail?: RailOverride;
}

// Video-level rail defaults.
export interface VideoRail {
  channel: string;                  // default "DIAG"
  show_timestamp: boolean;
  show_signal_indicator: boolean;
}

// Premium video wrapper — narrowed to HookScene only in this slice.
export interface PremiumVideo {
  video_id: string;
  total_frames: number;
  fps: number;
  voice_src: string;
  rail: VideoRail;
  scenes: HookScene[];
}

// ─── Legacy wrapper (kept for premium-test-01 scaffold composition) ──────────

export interface PremiumVideoSpec {
  totalFrames: number;
  voiceSrc: string;
  scenes: Scene[];
}
