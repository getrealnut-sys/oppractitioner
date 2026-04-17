# @oppractitioner — Batch 3 Voiceover Scripts
# Product: Aires Lifetune ONE (V7) + BodyBio PC (V8)
# Post dates: Apr 19 (V7) + Apr 21 (V8)
# Purpose: Fill rotation gaps between InfiniWell batch 2 posts

---

## Pre-Publish Audit

### Video 7 — Aires Travel
| Check | Result |
|---|---|
| Disease treatment claim | ✅ None |
| Absolute outcome claim | ✅ None ("worth testing") |
| Before/after framing | ✅ None |
| Testimonial language | ✅ None |
| FTC disclosure | ✅ First line of caption |
| isBrandedContent | ✅ true |
| isAiGenerated | ✅ true |
| Hashtag anchor | ✅ #integrativemedicine |

### Video 8 — BodyBio Absorption
| Check | Result |
|---|---|
| Disease treatment claim | ✅ None |
| Absolute outcome claim | ✅ None ("worth checking") |
| Before/after framing | ✅ None |
| Testimonial language | ✅ None |
| FTC disclosure | ✅ First line of caption |
| isBrandedContent | ✅ true |
| isAiGenerated | ✅ true |
| Hashtag anchor | ✅ #integrativemedicine |

---

## VIDEO 7: Aires Lifetune ONE — Travel Pattern
**Composition:** Video7-AiresTravel
**Post date:** Apr 19 2026 8:00 AM ET
**Affiliate:** airestech.com/getreal (post-4/17, no active promo code)

### Voiceover Script

> One thing I check with clients who travel constantly.
>
> Feel fine at home. Fall apart on the road.
>
> Hotels, airports, cabins — zero control over EMF load.
>
> Sleep disrupted. Recovery slow. No obvious cause.
>
> Aires Lifetune ONE. Small enough to pack. Worth testing.
>
> Link in bio.

**ElevenLabs file:** `video7-voice.mp3` → drop in `remotion/public/`

### Caption
```
#ad | Affiliate link in bio — I earn commission on purchases.

One thing I check with clients who travel constantly — sleep falls apart on the road, fine at home. Hotels and airports are zero-control EMF environments. Small enough to pack, worth testing.
Link in bio.

#emfprotection #integrativemedicine #healthtiktok #ad
```

---

## VIDEO 8: BodyBio PC — Supplement Absorption Pattern
**Composition:** Video8-BodyBioAbsorption
**Post date:** Apr 21 2026 8:00 AM ET
**Affiliate:** bodybio.com/GETREAL247 | Code: GETREAL247
**⚠️ Promo window closes Apr 21** — confirm window is still active same day before scheduling. Remove promo from caption if closed.

### Voiceover Script

> When supplements just aren't landing.
>
> Good stack. Right doses. Not much shifting.
>
> Before adding more, I check the absorption layer.
>
> Cell membranes control what enters the cell.
>
> BodyBio PC. Membrane support before anything else.
>
> Worth checking when the protocol is right but nothing moves.
>
> Link in bio.

**ElevenLabs file:** `video8-voice.mp3` → drop in `remotion/public/`

### Caption (with active promo)
```
#ad | Affiliate link in bio — I earn commission on purchases.

When supplements aren't landing — before adding more to the stack, I check the absorption layer. Cell membrane integrity controls what actually enters the cell.
Link in bio.

#cellhealth #integrativemedicine #guthealth #ad
```

### Caption (if promo expired)
```
#ad | Affiliate link in bio — I earn commission on purchases.

When supplements aren't landing — before adding more to the stack, I check the absorption layer. Cell membrane integrity controls what actually enters the cell.
Link in bio.

#cellhealth #integrativemedicine #guthealth #ad
```
*(Caption is the same — just don't add promo code to CLAUDE_CODE_RENDER_BATCH3.md blotato call if window is closed)*

---

## Production Checklist

- [ ] Record V7 in ElevenLabs → save as `video7-voice.mp3`
- [ ] Record V8 in ElevenLabs → save as `video8-voice.mp3`
- [ ] Drop both files into `remotion/public/`
- [ ] Run `CLAUDE_CODE_RENDER_BATCH3.md` in Claude Code (handles sync → render → upload → schedule)
- [ ] Confirm Blotato post IDs, update `content_log.md`
- [ ] Verify BodyBio promo window status before Apr 21 post
