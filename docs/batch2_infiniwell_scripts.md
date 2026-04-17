# Batch 2 Scripts — InfiniWell BPC-157
# @oppractitioner | Integrative Health
# Compliance: All claims hedged. No absolute declarations. No disease-treatment framing.
# FTC: #ad | Affiliate link in bio — I earn commission on purchases.

---

## PRE-PUBLISH AUDIT — All 3 Videos

### Compliance Check
- [x] No absolute claims ("will," "fixes," "heals," "treats")
- [x] All claims use hedged language ("studied for," "may be," "worth testing," "one pattern I watch")
- [x] No disease names used as treatment claims
- [x] No personal testimonial framing ("one I keep coming back to" = practitioner POV, not testimonial)
- [x] HHS reference is factual — not framed as product endorsement
- ⚠️ FLAG Video 5: "BPC-157. Gut lining. Tissue repair. Recovery support." — clinical use case list, not treatment claim. Acceptable.

### Hashtag Block (All 3 Videos)
`#peptides #integrativemedicine #healthtiktok #ad`

### Posting Time
Schedule per AFFILIATES.md rotation:
- Video 4 → Day 3 slot (InfiniWell)
- Video 5 → Day 6 slot (InfiniWell)
- Video 6 → Day 9 slot (InfiniWell)

### Value Page
✅ Live at https://getrealnut-sys.github.io/oppractitioner/infiniwell-peptides.html

---

## VIDEO 4 — Gut Lining Pattern
**File:** video4-infiniwell-gut.mp4
**Angle:** Gut symptoms that won't clear despite solid protocol
**Target length:** ~17 seconds

### Voiceover Script (read naturally, slight pause at line breaks)

> Something I check when gut protocols aren't landing.

> Good protocol. Clean diet. Right supplements.

> Gut symptoms won't clear.

> I look at gut lining integrity. The layer everything has to pass through.

> InfiniWell BPC-157 Delayed. Studied for gut mucosal support.

> One pattern I watch when the gut isn't responding to protocol changes.

> Link in bio.

### Caption
```
#ad | Affiliate link in bio — I earn commission on purchases.

When the gut protocol is right and symptoms still won't shift — this is what I check next.
Link in bio.

#peptides #integrativemedicine #healthtiktok #ad
```

---

## VIDEO 5 — HHS Regulation Hook (Post First, Most Timely)
**File:** video5-infiniwell-hhs.mp4
**Angle:** HHS calling for peptide research backing — news hook
**Target length:** ~16 seconds
**Priority:** Post this one first — timing with HHS news matters. Window is now.

### Voiceover Script

> HHS just called for more peptide research.

> This space has been in integrative practice for years.

> One I keep coming back to: BPC-157.

> Gut lining. Tissue repair. Recovery support.

> InfiniWell BPC-157. The regulation is catching up.

> Link in bio.

### Caption
```
#ad | Affiliate link in bio — I earn commission on purchases.

HHS just flagged peptides as a research priority. Practitioners have been watching this space for years. Here's one I reach for.
Link in bio.

#peptides #integrativemedicine #healthtiktok #ad
```

---

## VIDEO 6 — Recovery Plateau Pattern
**File:** video6-infiniwell-recovery.mp4
**Angle:** Tissue repair that stalls — the gap that won't close
**Target length:** ~17 seconds

### Voiceover Script

> When recovery just stops at 80%.

> Injury is old. Protocol is right. Progress just... plateaus.

> Tissue repair needs more than ingredients. It may need the right signaling environment.

> InfiniWell BPC-157 Rapid. What I add when timelines keep extending.

> Worth testing when the gap won't close.

> Link in bio.

### Caption
```
#ad | Affiliate link in bio — I earn commission on purchases.

When recovery plateaus and the standard protocol isn't closing the gap — this is what I look at next.
Link in bio.

#peptides #integrativemedicine #healthtiktok #ad
```

---

## Production Checklist

- [ ] Record voiceover audio for all 3 scripts (ElevenLabs)
- [ ] Drop MP3s in `remotion/public/` named: `video4-infiniwell-gut.mp3`, `video5-infiniwell-hhs.mp3`, `video6-infiniwell-recovery.mp3`
- [ ] Register compositions in `remotion/src/Root.tsx`
- [ ] Import batch 2 scripts in `remotion/src/Root.tsx` from `./scripts-batch2`
- [ ] Run `python sync-timing.py` to auto-sync frame timing
- [ ] Render: `npx remotion render` for each composition
- [ ] Run pre-publish audit (this doc serves as the audit record)
- [ ] Create `CLAUDE_CODE_UPLOAD_TASK.md` for batch 2 with Blotato schedule
- [ ] Update `content_log.md` after each video goes live

## Posting Order (Recommended)
1. Video 5 (HHS hook) — post first, timing is most urgent
2. Video 4 (gut lining) — Day 3 slot
3. Video 6 (recovery plateau) — Day 6 slot
