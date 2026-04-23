// ─── Premium Engine — Schema Validator ───────────────────────────────────────
// Enforces the HookScene contract from AUTHORING_MODEL §5. Throws on any
// violation. No silent fallbacks — a malformed hook must fail loudly.
//
// Scope of this slice: validates HookScene with evidence.type === "data_point"
// and annotation.gesture === "bracket". Other evidence types / gestures are
// out of scope until the schema and render path learn them.

import type {
  HookScene,
  PremiumVideo,
  Evidence,
  Annotation,
  AnnotationGesture,
} from './types-premium';

// Gesture / evidence compatibility matrix, per AUTHORING_MODEL §2.4.
const COMPATIBILITY: Record<string, Record<AnnotationGesture, boolean>> = {
  data_point: {
    bracket: true,
    circle: true,
    underline: true,
    extend_to: false,
    flick_value: true,
  },
  // chart_fragment, labeled_object: out of scope in this slice.
};

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function wordBoundaryIncludes(haystack: string, needle: string): boolean {
  const re = new RegExp(`\\b${escapeRegex(needle)}\\b`, 'i');
  return re.test(haystack);
}

function validateEvidence(ev: Evidence, sceneId: string): void {
  if (ev.type === 'data_point') {
    if (typeof ev.value !== 'string' || ev.value.length === 0) {
      throw new Error(
        `[premium/validate] ${sceneId}: data_point evidence requires non-empty 'value' string`,
      );
    }
    return;
  }
  throw new Error(
    `[premium/validate] ${sceneId}: evidence type '${(ev as any).type}' not implemented in this slice`,
  );
}

function validateAnnotation(
  ann: Annotation,
  evidence: Evidence,
  captionText: string,
  sceneId: string,
): void {
  // Gesture implemented in this slice?
  if (ann.gesture !== 'bracket') {
    throw new Error(
      `[premium/validate] ${sceneId}: annotation gesture '${ann.gesture}' not implemented in this slice`,
    );
  }
  // Compatible with evidence type?
  const row = COMPATIBILITY[evidence.type];
  if (!row || !row[ann.gesture]) {
    throw new Error(
      `[premium/validate] ${sceneId}: gesture '${ann.gesture}' incompatible with evidence type '${evidence.type}'`,
    );
  }
  // fire_on_word present in caption.text?
  if (!ann.fire_on_word || !wordBoundaryIncludes(captionText, ann.fire_on_word)) {
    throw new Error(
      `[premium/validate] ${sceneId}: annotation.fire_on_word '${ann.fire_on_word}' not found in caption.text`,
    );
  }
}

export function validateHookScene(scene: HookScene): void {
  const id = scene.scene_id || '(unnamed)';
  if (scene.scene_kind !== 'hook') {
    throw new Error(`[premium/validate] ${id}: scene_kind must be 'hook'`);
  }
  // Timing
  if (!scene.timing) {
    throw new Error(`[premium/validate] ${id}: missing 'timing'`);
  }
  if (scene.timing.duration_frames < 60) {
    throw new Error(
      `[premium/validate] ${id}: duration_frames must be >= 60 (2s at 30fps), got ${scene.timing.duration_frames}`,
    );
  }
  if (
    !scene.timing.voice_window ||
    scene.timing.voice_window.start_frame < 0 ||
    scene.timing.voice_window.end_frame <= scene.timing.voice_window.start_frame
  ) {
    throw new Error(`[premium/validate] ${id}: invalid voice_window`);
  }
  // Caption
  if (!scene.caption || !scene.caption.text) {
    throw new Error(`[premium/validate] ${id}: missing caption.text`);
  }
  if (
    !scene.caption.anchor ||
    !scene.caption.text.toLowerCase().startsWith(scene.caption.anchor.toLowerCase())
  ) {
    throw new Error(
      `[premium/validate] ${id}: caption.anchor must match the start of caption.text`,
    );
  }
  // Evidence + annotation
  validateEvidence(scene.evidence, id);
  validateAnnotation(scene.annotation, scene.evidence, scene.caption.text, id);
}

export function validatePremiumVideo(video: PremiumVideo): void {
  if (!video.video_id) {
    throw new Error(`[premium/validate] video missing video_id`);
  }
  if (!Array.isArray(video.scenes) || video.scenes.length === 0) {
    throw new Error(`[premium/validate] ${video.video_id}: scenes must be non-empty`);
  }
  video.scenes.forEach((s) => validateHookScene(s));
}
