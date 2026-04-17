# @oppractitioner — Content Log

The TikTok strategy skill reads this file to determine account phase (seedling = 0–50 published videos).
Update this every time a video goes live on TikTok.

---

## Published Videos

| # | Video | Product | TikTok Post Date | Blotato Post ID | Notes |
|---|---|---|---|---|---|
| 1 | video1-aires-focus.mp4 | Aires Lifetune ONE | 2026-04-16 7:00 PM ET | 851202c1-381f-4159-8c72-2b517d6c61a5 | Published — https://www.tiktok.com/@oppractitioner/video/7629495607832366350 |

---

## Scheduled (Not Yet Live)

| Video | Product | Scheduled Date/Time (ET) | Blotato Post ID |
|---|---|---|---|
| video2-bodybio.mp4 | BodyBio PC | 2026-04-16 11:00 PM ET | 8bc06d33-6a0f-491f-aed7-52ffda2a1f97 |
| video3-airessleep.mp4 | Aires Lifetune ONE | 2026-04-17 8:00 AM ET | 9a75fb43-6fcc-478b-8a21-484a288f12e8 |
| video5-infiniwell-hhs.mp4 | InfiniWell BPC-157 | 2026-04-18 8:00 AM ET | 4c9cc579 |
| video4-infiniwell-gut.mp4 | InfiniWell BPC-157 | 2026-04-20 8:00 AM ET | 9e03f8b2 |
| video6-infiniwell-recovery.mp4 | InfiniWell BPC-157 | 2026-04-22 8:00 AM ET | 8a3dd024 |

---

## Pending Production (Audio needed)

| Video | Product | Target Post Date | Notes |
|---|---|---|---|
| video7-aires-travel.mp4 | Aires Lifetune ONE | 2026-04-19 8:00 AM ET | ElevenLabs audio not yet recorded |
| video8-bodybio-absorption.mp4 | BodyBio PC | 2026-04-21 8:00 AM ET | ElevenLabs audio not yet recorded |

---

## Timing Audit Notes

**Batch 2 (V4, V5, V6):** Rendered 2026-04-16 by Claude Code.
- pydub sync did not run (Python 3.14 + no ffmpeg). Timing was recalculated from MP3 bitrate (320kbps).
- totalFrames corrected to match actual audio: V4=~427, V5=~339, V6=~351.
- startFrames remain original estimates — **review first live post (Apr 18) for card sync quality**.
- If timing is off, re-render with `sync-timing-universal.py` after ffmpeg install or use mutagen sync.

**Fix in place:** `sync-timing-universal.py` replaces pydub — pure Python, no ffmpeg, Python 3.14 compatible.

---

## How to Update

After Claude Code runs the render task, it will fill in the Blotato Post IDs in the Scheduled section.
When each video goes live on TikTok, move it from Scheduled → Published and increment the # count.
