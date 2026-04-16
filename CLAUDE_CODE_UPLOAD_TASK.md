# Claude Code Task — Upload + Schedule Batch 1 TikTok Videos
# @oppractitioner | Run this file with: claude --task CLAUDE_CODE_UPLOAD_TASK.md

## Context
Three Remotion-rendered TikTok videos are ready to post for @oppractitioner.
The Blotato MCP is connected. TikTok account ID in Blotato: **38608**.
This task uses the Blotato MCP tools to upload and schedule all three videos.

**Time-critical:** 
- Video 1 and Video 3 (Aires) must post before end of day April 17, 2026 (commission boost expires)
- Video 2 (BodyBio) should post today April 16 as second post, 4+ hours after Video 1

---

## Video Files
All located at: `C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion\out\`

| Variable | Value |
|---|---|
| VIDEO_1 | `video1-aires-focus.mp4` |
| VIDEO_2 | `video2-bodybio.mp4` |
| VIDEO_3 | `video3-airessleep.mp4` |
| TIKTOK_ACCOUNT_ID | `38608` |

---

## Upload + Schedule Instructions

For each video, execute these steps IN ORDER. Do not proceed to the next video until the current one is confirmed uploaded.

### Step 1 — Get presigned upload URL
Call: `mcp__blotato__blotato_create_presigned_upload_url`
- Parameters: `{ "accountId": 38608 }` (or whatever the tool requires — check schema)
- Save the returned presigned URL and media key/filename for this video

### Step 2 — Upload the video file
Using the presigned URL from Step 1, perform an HTTP PUT with the video file:
```bash
curl -X PUT "<PRESIGNED_URL>" \
  --upload-file "C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\remotion\out\<VIDEO_FILENAME>" \
  -H "Content-Type: video/mp4"
```
Confirm 200 OK before proceeding.

### Step 3 — Create the scheduled post
Call: `mcp__blotato__blotato_create_post`

---

## Video 1 — Aires Focus (POST TODAY ASAP)

**File:** `video1-aires-focus.mp4`

**Caption:**
```
#ad | Affiliate link in bio — I earn commission on purchases.
One pattern I keep running into: can't focus at home, focus fine everywhere else. Same house. Same router. Kept landing on EMF in the home workspace. What I reach for.
Link in bio.

#emfprotection #integrativemedicine #healthtiktok #ad
```

**Post parameters:**
```json
{
  "accountId": 38608,
  "platform": "tiktok",
  "caption": "#ad | Affiliate link in bio — I earn commission on purchases.\nOne pattern I keep running into: can't focus at home, focus fine everywhere else. Same house. Same router. Kept landing on EMF in the home workspace. What I reach for.\nLink in bio.\n\n#emfprotection #integrativemedicine #healthtiktok #ad",
  "scheduledTime": "2026-04-16T14:00:00-04:00",
  "privacyLevel": "PUBLIC_TO_EVERYONE",
  "disabledComments": false,
  "disabledDuet": false,
  "disabledStitch": false,
  "isBrandedContent": true,
  "isYourBrand": false,
  "isAiGenerated": true
}
```

> Note: scheduledTime = today April 16, 2:00 PM ET. If already past 2 PM ET when running, set to next available time (ASAP).

---

## Video 2 — BodyBio PC (POST TODAY, 4–6 HRS AFTER VIDEO 1)

**File:** `video2-bodybio.mp4`

**Caption:**
```
#ad | Affiliate link in bio — I earn commission on purchases.
Client doing everything right. Labs still flat. Often the issue is membrane function — that's where I start. Code GETREAL247 for 20% off this week.
Link in bio.

#cellhealth #integrativemedicine #guthealth #ad
```

**Post parameters:**
```json
{
  "accountId": 38608,
  "platform": "tiktok",
  "caption": "#ad | Affiliate link in bio — I earn commission on purchases.\nClient doing everything right. Labs still flat. Often the issue is membrane function — that's where I start. Code GETREAL247 for 20% off this week.\nLink in bio.\n\n#cellhealth #integrativemedicine #guthealth #ad",
  "scheduledTime": "2026-04-16T19:00:00-04:00",
  "privacyLevel": "PUBLIC_TO_EVERYONE",
  "disabledComments": false,
  "disabledDuet": false,
  "disabledStitch": false,
  "isBrandedContent": true,
  "isYourBrand": false,
  "isAiGenerated": true
}
```

> Note: scheduledTime = today April 16, 7:00 PM ET. 5 hours after Video 1. Adjust if Video 1 posts later than 2 PM — always maintain 4+ hour gap.

---

## Video 3 — Aires Sleep (POST APRIL 17, MORNING)

**File:** `video3-airessleep.mp4`

**Caption:**
```
#ad | Affiliate link in bio — I earn commission on purchases.
Client's sleep falls apart. No obvious trigger. Three months earlier: mesh WiFi upgrade. Nobody connected the two. Worth testing when nothing else explains the pattern.
Link in bio.

#emfprotection #integrativemedicine #healthtiktok #ad
```

**Post parameters:**
```json
{
  "accountId": 38608,
  "platform": "tiktok",
  "caption": "#ad | Affiliate link in bio — I earn commission on purchases.\nClient's sleep falls apart. No obvious trigger. Three months earlier: mesh WiFi upgrade. Nobody connected the two. Worth testing when nothing else explains the pattern.\nLink in bio.\n\n#emfprotection #integrativemedicine #healthtiktok #ad",
  "scheduledTime": "2026-04-17T08:00:00-04:00",
  "privacyLevel": "PUBLIC_TO_EVERYONE",
  "disabledComments": false,
  "disabledDuet": false,
  "disabledStitch": false,
  "isBrandedContent": true,
  "isYourBrand": false,
  "isAiGenerated": true
}
```

> Note: scheduledTime = April 17, 8:00 AM ET. Last day of Aires commission boost — do NOT miss this window.

---

## After All 3 Are Scheduled

1. Confirm all 3 posts show status "scheduled" in Blotato — call `blotato_get_post_status` for each
2. Log results to `C:\Users\mia22\AI_Social_Media_Manager_SHG-LLC\oppractitioner-site\content_log.md`:
   - Video title, post date/time, Blotato post ID, TikTok scheduled status
3. Report back: post IDs, scheduled times, any errors

---

## Blotato MCP Tool Reference

If the tool parameters differ from what's above, check the actual schema and adapt. The critical fields are:
- `accountId` (TikTok account in Blotato = 38608)
- `caption` (include full text with hashtags)
- `scheduledTime` (ISO 8601 with timezone offset)
- `isBrandedContent: true` (affiliate content = branded content per TikTok)
- `isAiGenerated: true` (Remotion = AI-generated video)

If Blotato's `create_post` requires the media to be attached separately from the text post, use `blotato_create_visual` to attach the uploaded video file first, then reference it in `create_post`.

---

## Error Handling

- If presigned URL upload returns non-200: retry once, then report the error — do not skip to next video
- If scheduling returns an error about `scheduledTime` being in the past: bump to next available slot (minimum 10 minutes from now) and reschedule
- If TikTok account 38608 is not found: call `blotato_list_accounts` to confirm the correct account ID and adjust
