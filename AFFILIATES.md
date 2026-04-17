# @oppractitioner — Affiliate Tracker & Posting Rotation
# Update this file whenever an affiliate is added, a promo window changes, or rotation shifts.
# This is the single source of truth for affiliate status. CLAUDE.md references this file.

---

## Active Affiliates

| # | Product | Category | Affiliate Link | Promo Code | Commission | Promo Window | Value Page | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | Aires Lifetune ONE | EMF / Environmental | airestech.com/getreal | — | Commission boost active | Ends 2026-04-17 | aires-emf.html | 🔴 HIGH — window closing |
| 2 | BodyBio PC | Cell Membrane / Gut | bodybio.com/GETREAL247 | GETREAL247 (20% off) | Standard | Ends 2026-04-21 | bodybio-membrane.html | 🟡 ACTIVE |
| 3 | InfiniWell BPC-157 | Peptides / Recovery | https://bit.ly/4e3vGOU | — | 15%, 30-day cookie, paid 15th monthly | None active | infiniwell-peptides.html | ✅ ACTIVE |

---

## Posting Rotation

Current rotation with 3 affiliates (once InfiniWell is confirmed):

```
Day 1 → Aires
Day 2 → BodyBio
Day 3 → InfiniWell BPC-157
Day 4 → Aires
Day 5 → BodyBio
Day 6 → InfiniWell BPC-157
...repeat
```

**Override rule:** If a product has an active promo window, front-load it that week regardless of rotation position. Resume normal rotation after the window closes.

**Current rotation priority (2026-04-16):**
- Aires is 🔴 HIGH urgency — commission boost ends TOMORROW (2026-04-17). Post first.
- BodyBio is 🟡 STANDARD — ends 2026-04-21. Post second.
- InfiniWell — slot in as Day 3 once affiliate link is confirmed.

---

## Affiliate Expansion Pipeline

Products under consideration, not yet confirmed:

| Product | Category | Notes | Status |
|---|---|---|---|
| — | — | Pipeline clear | — |

---

## Adding a New Affiliate — Checklist

Before any new affiliate goes into rotation:

- [ ] Affiliate link confirmed active
- [ ] Commission rate documented in this file
- [ ] Promo code / window documented (if any)
- [ ] Value page built and pushed to GitHub Pages (root of repo)
- [ ] Value page linked from index.html
- [ ] index.html pushed via Claude Code (GITHUB_PUSH_TASK.md)
- [ ] Affiliate added to this tracker + STRATEGY.md
- [ ] CLAUDE.md affiliate table updated
- [ ] Rotation updated in this file

---

## Dispensary & Wholesale Accounts — Strategy Note
*(Implement post growth phase — after week 7 / 50 videos)*

Some products cannot be promoted with a direct affiliate link (dispensary-model or wholesale-only accounts). These still work in the content funnel with a modified value page CTA:

**Standard affiliate funnel:**
Video → Value Page → Affiliate Link (buy now)

**Dispensary/wholesale funnel:**
Video → Value Page → "Book a Consultation" (practitioner session booking)

The value page for these products functions as a clinical wiki (pattern context, mechanism, use case) with no direct purchase link. The CTA routes to the practitioner's session booking page instead.

**Brand separation note:** The booking link should be framed as "Book a Consultation" or "Work With This Practitioner" — do not reference SHG, Get R.E.A.L., or any other property name on the @oppractitioner value pages. The session URL can route wherever needed; the visible CTA copy stays brand-neutral.

**Timeline:** Build the first dispensary value page template after the 50-video / growth phase gate. Do not implement before then — cold traffic won't convert on a consultation CTA.

---

## Promo Window Log

Track all promo windows here for historical reference.

| Product | Promo | Window | Outcome |
|---|---|---|---|
| Aires Lifetune ONE | Commission boost | 2026-04-?? → 2026-04-17 | Active |
| BodyBio PC | 20% off GETREAL247 | 2026-04-?? → 2026-04-21 | Active |
