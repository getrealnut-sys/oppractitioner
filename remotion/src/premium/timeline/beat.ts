// ─── Premium Engine — Beat Timeline Helpers ──────────────────────────────────
// Scaffold only. Minimum helper for locating the active beat at a given
// frame inside a scene. No spring logic, no interpolation, no cinematics
// primitives yet — those land in a later step.

import type { Beat } from '../types-premium';

// Given a frame number relative to scene start, return the active Beat
// (and its 0..1 progress) or null if no beat covers this frame.
export interface ActiveBeat {
  beat: Beat;
  progress: number;     // 0..1 through the beat's own duration
  index: number;
}

export function findActiveBeat(
  beats: Beat[],
  frameInScene: number,
): ActiveBeat | null {
  for (let i = 0; i < beats.length; i++) {
    const b = beats[i];
    const start = b.startFrame;
    const end = b.startFrame + b.durationFrames;
    if (frameInScene >= start && frameInScene < end) {
      const progress =
        b.durationFrames > 0
          ? (frameInScene - start) / b.durationFrames
          : 0;
      return { beat: b, progress, index: i };
    }
  }
  return null;
}
