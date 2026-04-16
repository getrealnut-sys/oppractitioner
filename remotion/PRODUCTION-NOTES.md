# @oppractitioner Remotion — Production Notes

## First-Time Setup

Open terminal in this folder (`oppractitioner-remotion/`) and run:

```bash
npm install
```

Then launch Remotion Studio:

```bash
npm run dev
```

Browser opens at `localhost:3000`. You'll see all 3 compositions in the left panel:
- `Video1_AiresFocus` — Aires EMF + Focus (~17 sec)
- `Video2_BodyBio` — BodyBio PC Cell Membrane (~18 sec)
- `Video3_AiresSleep` — Aires Sleep + WiFi (~18 sec)

---

## Sync Timing to ElevenLabs Audio

The `startFrame` values in `src/scripts.ts` are **estimated** at natural reading pace.
After generating voiceover in ElevenLabs/Blotato:

1. Drop the audio file into `public/` as `video1-vo.mp3` (or similar)
2. Add it to the composition temporarily:
   ```tsx
   <Audio src={staticFile('video1-vo.mp3')} volume={1} />
   ```
3. Scrub the timeline in Remotion Studio
4. Find when each phrase is spoken (look at the timestamp in seconds)
5. Convert: `frame = Math.round(seconds * 30)`
6. Update `startFrame` in `src/scripts.ts` for each phrase
7. Remove the temp audio reference

This is a one-time calibration per script. Once synced, the visuals lock perfectly to voice.

---

## Adding Ambient Music (Optional)

Get a royalty-free dark ambient track from [Pixabay](https://pixabay.com/music/search/dark%20ambient/) (free, no attribution required).

Drop the file into `public/` as `ambient.mp3`.

In `src/Root.tsx`, set `hasAudio: true` for any composition:

```tsx
defaultProps={{
  phrases: video1AiresFocus.phrases,
  hasAudio: true,   // ← enable this
}}
```

Music plays at volume `0.12` — barely perceptible, clinical tone underneath.

---

## Rendering a Final Video

```bash
# Video 1 (Aires Focus)
npm run render:v1

# Video 2 (BodyBio)
npm run render:v2

# Video 3 (Aires Sleep)
npm run render:v3
```

Output lands in `out/` as `.mp4` files ready for Blotato upload.

---

## Adding a New Script (Future Videos)

1. Open `src/scripts.ts`
2. Add a new `ScriptData` object following the same pattern
3. Export it and add to `ALL_SCRIPTS`
4. Register in `src/Root.tsx` with a new `<Composition />` block
5. Add an npm render script to `package.json`

That's the full pipeline. One value page → multiple video scripts from different angles.

---

## Green Highlight Rules (Voice Consistency)

Green (`#7DF9C2`) goes on **payoff words only** — the specific thing that makes the viewer pause.
Never highlight more than one phrase per frame.

- ✅ "EMF in the home workspace." — the variable being isolated
- ✅ "Fog cleared." — the outcome
- ✅ "Membrane." — the root pattern word
- ✅ "Labs shift in four to six weeks." — the observable result
- ❌ Don't highlight the hook — it's all white, full attention
- ❌ Don't highlight the product name — the box does that work

---

## Font Installation

Space Grotesk and IBM Plex Mono are loaded via Google Fonts CDN in production.
For local Remotion Studio rendering, install them on your system if they aren't already:
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

Fallbacks: DM Sans (display) and DM Mono (mono) — both already installed in the
@oppractitioner GitHub Pages site, so they'll already be on your machine.
