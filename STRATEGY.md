# @oppractitioner — Growth Strategy Playbook
# THIS IS THE BIBLE. These rules do not get re-debated session to session.
# Last updated: 2026-04-16

---

## What This Account Is

**Opinionated Practitioner** — a standalone integrative health account built on a practitioner-POV, pattern-observation voice. Clinical, not medical. Not wellness. Not functional medicine. The voice is: "Here's a pattern I observe in practice. Here's what I reach for." That's it.

Every content decision — script, hashtag, caption, affiliate selection, posting time — flows from that identity. If something doesn't fit a clinical practitioner making observations, it doesn't belong here.

---

## The Funnel (Non-Negotiable Architecture)

```
TikTok Video
  ↓ CTA: "Link in bio."
Bio Link (https://tr.ee/owQ7FM — DO NOT CHANGE)
  ↓
Index Page (https://getrealnut-sys.github.io/oppractitioner/)
  ↓
Value Page (per product — aires-emf.html, bodybio-membrane.html, etc.)
  ↓
Affiliate Link (product site)
```

**Rules:**
- Every video drives to the index page via the bio link. No exceptions in seedling phase.
- Every affiliate product MUST have a live value page BEFORE its first video goes live.
- Value pages go at the repo root (GitHub Pages requirement).
- The bio link is a Linktree Pro shortened URL. Never replace it directly with the index page URL — it's intentional (Linktree Pro analytics + flexibility).

---

## Account Phases

### Phase 1 — Seedling (0–50 published videos)
**Current phase as of 2026-04-16: 1 video published.**

TikTok seeds each new video to a small test audience (~200–500 viewers). Strong completion rate → expanded distribution. Weak completion → video dies. Everything in this phase is about training TikTok's categorization engine to understand this account.

**Priority order:** Completion rate > engagement rate > follower signals

**What changes at 50 videos:**
- TikTok has enough data to match to interest graphs
- Hashtag strategy broadens to 5 tags
- 2/day cadence is comfortable
- Warm audience exists — start leading with TikTok Shop tags when available

### Phase 2 — Growth (50+ videos, targeting 1K followers)

- 2/day with 4+ hour spacing
- 5-hashtag formula (niche + mid-tier + trending + product Shop tag + #ad)
- Lead with TikTok Shop for warm traffic, value page for cold
- Content can reference prior videos (callback patterns)

### Phase 3 — Monetization Optimization (1K+ followers)
- TikTok Shop conversion becomes primary revenue surface
- Link-in-bio remains for cold traffic
- Can test longer video formats (30–45 sec)
- Consider Series content (multi-part pattern breakdowns)

---

## Posting Cadence — Hard Rules

| Situation | Rule |
|---|---|
| Seedling phase, 2–9 affiliates | 1 video/day |
| Seedling phase, 10+ affiliates | 2/day acceptable, 4+ hr spacing |
| Growth phase (50+ videos) | 2/day standard, 4+ hr spacing |
| Any phase | NEVER 3+/day |
| Any phase | NEVER same product back-to-back on consecutive posts |
| Any phase | NEVER go dark 3+ consecutive days — resets category signals |

**Consistency > Volume.** One video every day for 50 days beats five videos in one week then silence.

---

## Content Rotation Rules

With 2 affiliates: A → B → A → B
With 3 affiliates: A → B → C → A → B → C
With 4+ affiliates: Rotate freely, but never same product on back-to-back posts.

**Promo windows override rotation.** If a product has an active commission boost or sitewide discount window, front-load it in that window. Promo math changes the revenue priority. Check CLAUDE.md for active windows every session.

---

## Affiliate Expansion — When and How to Add Products

### Prerequisites before adding any new affiliate:
1. Affiliate link is confirmed active
2. Value page is built and live on GitHub Pages (root of repo)
3. At least one clear content angle exists (what pattern does this product address?)
4. Value page URL is added to the index page and CLAUDE.md

### When to add:
- **Add immediately** if you have a product with a live link and a clear content angle. There is no algorithmic reason to delay. More products = less repetition = better content variety signal.
- **Minimum viable catalog:** 3 affiliates for clean rotation without back-to-back repetition
- **2/day justified:** 10+ affiliates in active rotation

### What makes a good affiliate for this account:
- Fits the integrative health / practitioner pattern-observation framing
- Can be discussed with hedged, observation-based language (no absolute claims)
- Has a legitimate clinical use-case angle, not just a wellness trend
- Commission structure is worthwhile (check rate before building a value page)

---

## Active Affiliates (update this section when affiliates change)
**Full details live in `AFFILIATES.md` — that is the single source of truth for rotation and promo windows.**

| Product | Affiliate Link | Value Page | Promo | Status |
|---|---|---|---|---|
| Aires Lifetune ONE | airestech.com/getreal | aires-emf.html | Commission boost ends 2026-04-17 | 🔴 ACTIVE |
| BodyBio PC | bodybio.com/GETREAL247 | bodybio-membrane.html | 20% off code GETREAL247, ends 2026-04-21 | 🟡 ACTIVE |
| InfiniWell | PENDING | infiniwell.html | PENDING | ⏳ PENDING SETUP |

**When a promo closes:** Update status to STANDARD. When a new promo opens: update date, urgency, and front-load that product in the schedule.

---

## Dispensary & Wholesale Accounts — Post Growth Phase Strategy
*(Implement after week 7 / 50 videos published)*

Some products (dispensary-model, wholesale-only) cannot carry a direct affiliate purchase link. These still belong in the content funnel using a modified value page CTA.

**Standard affiliate funnel:** Video → Value Page → Buy affiliate link

**Dispensary/wholesale funnel:** Video → Value Page (clinical wiki) → "Book a Consultation" CTA

The value page functions as a pattern-context / mechanism explainer (same clinical voice, same format) but the bottom CTA routes to a practitioner session booking page instead of a product purchase.

**Rules for this model:**
- CTA copy: "Book a Consultation" or "Work With This Practitioner" — never reference SHG, Get R.E.A.L., or any other brand on the @oppractitioner pages. The URL can route wherever needed; the visible copy stays brand-neutral.
- Do not build these pages before growth phase — cold traffic will not convert on a consultation CTA. Warm audience (500+ followers, 50+ videos) is the minimum.
- Build the first dispensary/wholesale value page template after the 50-video gate. Use `_template.html` as the base.

---

## Hashtag Rules

### Seedling Phase (0–50 videos)
**Formula:** `[niche] + #integrativemedicine + [broad health] + #ad` — 4 tags total

| Content Type | Formula |
|---|---|
| EMF / Aires | `#emfprotection #integrativemedicine #healthtiktok #ad` |
| Cell Membrane / BodyBio | `#cellhealth #integrativemedicine #guthealth #ad` |
| Gut Health | `#gutmicrobiome #integrativemedicine #guthealth #ad` |
| Cognitive | `#cognitivehealth #integrativemedicine #brainhealth #ad` |
| General Wellness | `#functionalhealth #integrativemedicine #healthtiktok #ad` |

### Growth Phase (50+ videos)
**Formula:** `[niche] + #integrativemedicine + [trending health] + [product Shop tag] + #ad` — 5 tags

### Hard Rules — No Exceptions
- `#integrativemedicine` is the anchor tag. Use it EVERY video in seedling phase.
- NEVER use `#functionalmedicine` — this account is Integrative Health, not functional medicine.
- NEVER use `#fyp`, `#foryou`, `#foryoupage` — entropy, not signal.
- NEVER exceed 5 hashtags total.
- `#ad` always last in the hashtag block, always present.

### Restricted/High-Risk Tags — Never Use
`#autoimmune`, `#IBSrecovery`, `#chronicallyill`, `#inflammation`, `#healingjourney`, `#alternativemedicine`, `#detox`, `#biohacking`

---

## Compliance — Two Layers, Both Must Pass

Every script and caption passes two compliance layers before publishing:

### Layer 1 — FDA/FTC (Legal)
All product claims must be observation-based and hedged. Never absolute.

| ❌ Never Say | ✅ Say Instead |
|---|---|
| "This fixes your gut" | "This may support healthy gut function" |
| "This heals your membranes" | "This can influence membrane integrity" |
| "It treats EMF sensitivity" | "It may help the body adapt to EMF exposure" |
| "This will change everything" | "Worth testing — here's the pattern I see" |
| "The only thing that worked" | "One pattern I keep seeing in practice" |

### Layer 2 — TikTok Suppression (Algorithmic)
These cause silent suppression even with clean language:
- Disease names as treatment claims ("fixes your IBS")
- Testimonial framing ("finally fixed this for me")
- Percentage claims without citations
- Framing against pharmaceuticals
- Extreme before/after language

### FTC Disclosure — Every Post
**First line of every caption:**
`#ad | Affiliate link in bio — I earn commission on purchases.`

Blotato flags: `isBrandedContent: true`, `isAiGenerated: true` on every post.

---

## Script Structure — What Works in Seedling Phase

**Target length:** 15–21 seconds (near-100% completion is the goal)
**Hook:** First 2–3 seconds. 8 words or fewer. Pattern observation, not a question.
- ✅ "One thing I keep seeing with brain fog patients..."
- ✅ "When protocols stall, I check this first."
- ❌ "Have you ever wondered why..."
- ❌ "POV: you've tried everything..."

**Body:** 1–2 pattern observations with hedged language. Clinical, not anecdotal.
**CTA:** "Link in bio. Full breakdown on the page." — every single video.

---

## Caption Structure — Every Post

```
#ad | Affiliate link in bio — I earn commission on purchases.

[1–2 sentence clinical observation. No hype. Pattern-based.]
Link in bio.

[hashtag block — 4 tags in seedling, 5 in growth]
```

---

## Video Production Pipeline

1. Script written → compliance audit → approval
2. Audio recorded via ElevenLabs → saved to `remotion/public/`
3. Timing synced via `remotion/sync-timing.py`
4. Video rendered via Remotion → output to `remotion/out/` (GITIGNORED)
5. Pre-publish audit (SKILL.md template)
6. Upload + schedule via Blotato (Claude Code runs `CLAUDE_CODE_UPLOAD_TASK.md`)
7. `content_log.md` updated when video goes live

**Git rule:** Never use the bash sandbox for git. Always route through Claude Code task files.
**Blotato upload rule:** Never use the bash sandbox for file uploads. Always route through Claude Code.
**remotion/out/ and remotion/node_modules/ are GITIGNORED — never commit them.**

---

## Growth Milestones — What Changes at Each Gate

| Milestone | What Changes |
|---|---|
| 3 affiliates live | Clean A→B→C rotation, no repetition pressure |
| 10 affiliates live | 2/day cadence justified in seedling phase |
| 50 videos published | Enter Growth Phase — 2/day, 5 hashtags, TikTok Shop leads |
| 500 followers | TikTok Shop conversion becomes meaningful |
| 1K followers | Phase 3 strategy (monetization optimization) |
| 10K followers | TikTok Creator Marketplace, brand deal leverage |

---

## What Never Gets Re-Debated

- The bio link is `https://tr.ee/owQ7FM`. Do not change it, do not replace it with the index URL.
- This account is standalone. No SHG, Get R.E.A.L., CLEARED, Coach Maria, or Maria Castro in any output.
- Hashtag anchor is `#integrativemedicine`. Never `#functionalmedicine`.
- All traffic is cold until 500+ followers. Drive to value page, not direct affiliate link.
- Every new affiliate needs a value page before the first video goes live.
- Full creative authority on content — no approval loops needed for captions, hashtags, copy, or scheduling.
