# @oppractitioner — Project Brief
# Read this at the start of EVERY session. No exceptions.

---

## Account Identity

| Field | Value |
|---|---|
| Brand name | Opinionated Practitioner (OP = Opinionated Practitioner) |
| TikTok handle | @oppractitioner |
| Practice type | **Integrative Health** — NEVER functional medicine |
| Brand | Standalone. No connection to SHG, Strategic Health Group, Get R.E.A.L., CLEARED, Coach Maria, or Maria Castro. Strip any of these from all outputs. |
| Voice | Clinical, observational, practitioner POV. Pattern-based. No hype. No absolute claims. |
| Hashtag anchor | `#integrativemedicine` — never `#functionalmedicine` |

---

## Infrastructure (Already Built — Do Not Re-Ask)

| Asset | URL / Path | Status |
|---|---|---|
| TikTok bio link | https://tr.ee/owQ7FM | Linktree shortened → index page |
| Link-in-bio index page | https://getrealnut-sys.github.io/oppractitioner/ | Live |
| Aires value page | https://getrealnut-sys.github.io/oppractitioner/aires-emf.html | Live |
| BodyBio value page | https://getrealnut-sys.github.io/oppractitioner/bodybio-membrane.html | Live |
| TikTok in Blotato | Account ID: 38608 | Connected |
| Video files | oppractitioner-site/remotion/out/ | Rendered |

---

## TikTok Profile (Set Once — Do Not Re-Ask)

| Field | Value |
|---|---|
| Display name | The Practitioner's Notes |
| Bio | Pattern observations. What I reach for when protocols stall. Integrative health. |
| Website | https://tr.ee/owQ7FM |
| Category | Health & Beauty |
| Branded content toggle | ON |

---

## Active Affiliate Links & Promo Windows

| Product | Affiliate Link | Promo | Window | Urgency |
|---|---|---|---|---|
| Aires Lifetune ONE | airestech.com/getreal | Commission boost | Ends 2026-04-17 | 🔴 HIGH |
| BodyBio PC | bodybio.com/GETREAL247 | 20% off, code GETREAL247 | Ends 2026-04-21 | 🟡 STANDARD |
| InfiniWell BPC-157 | https://bit.ly/4e3vGOU | 15% commission, no promo code | Rolling | 🟢 ACTIVE |

**Update this table when promo windows open or close.**

---

## Content Architecture

### Video → Value Page → Affiliate Link Flow
- Video CTA: "Link in bio."
- Bio link: https://tr.ee/owQ7FM
- Linktree → index page: https://getrealnut-sys.github.io/oppractitioner/
- Index page → value pages (aires-emf.html, bodybio-membrane.html)
- Value pages → affiliate links

### Batch 1 Videos — Current Status
| File | Product | Compliance | Status | TikTok |
|---|---|---|---|---|
| video1-aires-focus.mp4 | Aires Lifetune ONE | ✅ Pass | ✅ Published 2026-04-16 7PM ET | https://www.tiktok.com/@oppractitioner/video/7629495607832366350 |
| video2-bodybio.mp4 | BodyBio PC | ⚠️ Minor (accepted) | 🕐 Scheduled 2026-04-16 11PM ET | Blotato ID: 8bc06d33 |
| video3-airessleep.mp4 | Aires Lifetune ONE | ⚠️ Minor (accepted) | 🕐 Scheduled 2026-04-17 8AM ET | Blotato ID: 9a75fb43 |

---

## Account Phase

**Seedling (0–50 published videos)** — 1 video published as of 2026-04-16
- 1/day ideal, 2/day acceptable with 4+ hr spacing
- All traffic is cold → drive to value page (index) only
- Hashtag formula: `[niche] + #integrativemedicine + [broad health] + #ad`

---

## Hashtag Formulas (Seedling Phase)

| Product Category | Formula |
|---|---|
| EMF / Aires | `#emfprotection #integrativemedicine #healthtiktok #ad` |
| Cell Membrane / BodyBio | `#cellhealth #integrativemedicine #guthealth #ad` |
| Gut Health | `#gutmicrobiome #integrativemedicine #guthealth #ad` |
| Cognitive | `#cognitivehealth #integrativemedicine #brainhealth #ad` |
| General Wellness | `#functionalhealth #integrativemedicine #healthtiktok #ad` |

---

## Standing Decisions (Do Not Re-Ask These)

- Linktree shortened link `https://tr.ee/owQ7FM` is the TikTok bio link. It routes to the index page. Do not suggest replacing it.
- Brand is standalone. Never connect to GetReal, SHG, or any other Maria Castro property in any output.
- Team has full creative authority on content — do not ask Coach Maria to approve captions, hashtags, copy, or scheduling.
- Video production uses Remotion + ElevenLabs voiceover. Audio files go in `remotion/public/`. Sync timing with `remotion/sync-timing.py`.
- FTC disclosure line: `#ad | Affiliate link in bio — I earn commission on purchases.` — first line of every caption.
- `isAiGenerated: true` on all Blotato posts (Remotion = AI-generated).
- `isBrandedContent: true` on all Blotato posts (all content is affiliate).
- **Git operations: never use the bash sandbox for git. Always create a task file and route through Claude Code on the local machine.**
- **Blotato uploads: never use the bash sandbox for file uploads. Always route through Claude Code.**
- `.gitignore` is in place — `remotion/node_modules/` and `remotion/out/` are excluded from git. Never try to commit those directories.

---

## File Structure

```
oppractitioner-site/
├── CLAUDE.md                     ← this file — read every session
├── CLAUDE_CODE_UPLOAD_TASK.md    ← Blotato upload/schedule task for Claude Code
├── GITHUB_PUSH_TASK.md           ← git push task for Claude Code
├── content_log.md                ← published video count + post IDs
├── index.html                    ← GitHub Pages link-in-bio (root required)
├── aires-emf.html                ← Aires value page (root required)
├── bodybio-membrane.html         ← BodyBio value page (root required)
├── _template.html                ← value page template for new products
├── docs/
│   ├── TIKTOK_SETUP.docx
│   └── audits/                   ← pre-publish audit records per batch
└── remotion/                     ← video production
    ├── src/scripts.ts            ← script data + phrase timing
    ├── src/PhraseVideo.tsx       ← video component
    ├── src/brand.ts              ← brand colors + fonts
    ├── public/                   ← audio files (voice MP3s)
    ├── out/                      ← rendered MP4s ready to upload [GITIGNORED — not in repo]
    └── sync-timing.py            ← auto-sync phrase timing to audio
```

---

## content_log.md

Track every published video here. The TikTok strategy skill reads video count to determine account phase.
See: `content_log.md` in this directory.
