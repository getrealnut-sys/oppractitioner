# Whisper Transcript Findings — Night of Apr 17
# What the audio actually says vs. what was in the scripts.
# This is why V5 body drifted and V7/V8/V9 were "the worst."

## ── HEADLINE ──────────────────────────────────────────────────────────────
# Every mismatch Maria reported is confirmed. Scripts were out of sync with
# what ElevenLabs actually spoke. The word-count sync script cannot fix this
# — the on-screen text is wrong, not just the timing.

## ── V4 — InfiniWell Gut ──────────────────────────────────────────────────
# Audio duration: 27.80s (vs. totalFrames 911 = 30.37s — 60-frame CTA hold)
# What ElevenLabs actually said:
#   "Something I check when gut protocols aren't landing. Good protocol,
#    clean diet, right supplements. Gut symptoms won't clear. I look at gut
#    lining integrity. The layer everything has to pass through. Infinity well
#    BPC157. Delayed, studied for gut mucosal support. One pattern I watch
#    when the gut isn't responding to protocol changes. Lincoln Bio."
#
# ISSUES:
#   - "InfiniWell" was pronounced "Infinity well" — audio problem, not script
#   - "Link in bio" was pronounced "Lincoln Bio" — audio problem
#   - V4 needs an ElevenLabs re-gen with phonetic pronunciation (ih-FINN-ih-well)
#     OR we accept the pronunciation and update script to match what was spoken
#   - Timing drift: acceptable (<30s, word-count works at this length)

## ── V5 — InfiniWell HHS ──────────────────────────────────────────────────
# Audio duration: 20.36s (vs. totalFrames 689 = 22.97s)
# What ElevenLabs actually said:
#   "HHS just called for more peptide research. This space has been AN
#    integrative practice for years. One I keep coming back to, BPC157, gut
#    lining, tissue repair, recovery support, infiniwell, BPC157, the
#    regulation is catching up. Link in bio."
#
# ISSUES:
#   - Script said "IN integrative practice" — audio says "AN integrative practice"
#   - ElevenLabs ran "Gut lining. Tissue repair. Recovery support." into the
#     product name as ONE breath — no pause where the script has a tile break
#   - This is your "body section timing off" — tiles were designed for pauses
#     that don't exist in the audio
#   - Fix: merge those 3 tiles into 2 (or 1) to match actual breath structure

## ── V6 — InfiniWell Recovery ─────────────────────────────────────────────
# Audio duration: 21.48s (vs. totalFrames 721 = 24.03s)
# What ElevenLabs actually said:
#   "When recovery just stops at 80%, injury is old, protocol is right,
#    progress just, plateaus, tissue repair needs more than ingredients. It
#    may need the right signaling environment, infinival BPC 157 rapid. What
#    I add when timelines keep extending, worth testing when the gap won't
#    close. Link in bio."
#
# ISSUES:
#   - "InfiniWell" pronounced "infinival" — audio problem
#   - Overall pacing matches script better than V5

## ── V7 — Pendulum Akkermansia (THE BIG ONE) ──────────────────────────────
# Audio duration: 86.22s (vs. totalFrames 2661 = 88.70s)
# What ElevenLabs actually said — THIS IS LONGER + DIFFERENT than the script:
#
#   "The gut strain almost no PROBIOTIC protocol includes.
#    One pattern I keep running into with metabolic stall cases,
#    client is doing everything right, clean diet, decent sleep,
#    solid probiotic stack for MONTHS, but the labs won't budge,
#    INSULIN RESISTANCE PLATEAUS, weight plateaus, satiety feels broken.
#    NINE TIMES OUT OF 10, WHEN I DIG INTO HISTORY, I FIND TWO THINGS.
#    See section birth, or a heavy antibiotic course SOMEWHERE in the
#    last 10 years, often both.
#    HERE'S WHAT NOBODY TOLD THEM. There's a specific gut organism,
#    ACRIMANSIA MUSINIFALA, that lives in the mucus layer of the gut.
#    It regulates metabolic signaling, INSULIN RESPONSE, SATIETY HORMONES.
#    And it's one of the first strains wiped out by antibiotics and rarely
#    seated at birth without a vaginal passage.
#    For years, nobody could supplement it. Acrimansia is an obligate
#    anaerobic. Dies the second it hits oxygen.
#    Pendulum figured out a delivery system that keeps it viable through
#    MANUFACTURING AND into the gut.
#    When I see the pattern, metabolic stall, antibiotic history, protocol
#    that just won't move, this is where I start now.
#    Not a fix, a keystone strain that MAY SUPPORT WHAT THE OTHER PROBIOTICS
#    CAN'T REACH.
#    FULL PATTERN BREAKDOWN AT tr.e slash owq7fm. TYPE IT, LINK WON'T BE CLICKABLE."
#
# ISSUES (ALL OF THESE FIX THE "WAY OFF" COMPLAINT):
#   - Script hook: "The gut strain almost no protocol includes"
#     Audio says:  "The gut strain almost no PROBIOTIC protocol includes"
#     → Confirmed Maria's report exactly
#   - Script splits "client presentation" into 3 tiles, audio is 1 long beat
#   - Audio adds "for MONTHS" clause not in script
#   - Audio adds "insulin resistance plateaus" not in script
#   - Audio adds "Here's what nobody told them" bridge not in script
#   - Audio adds "insulin response, satiety hormones" elaboration
#   - CTA is much longer than script: "Full pattern breakdown at tr.ee slash
#     owq7fm. Type it, link won't be clickable."
#   - Script CTA tile only holds "tr.ee/owQ7FM" — audio narrates a full sentence
#
# Also: ElevenLabs mispronounced "Akkermansia muciniphila" as
#   "Acrimansia musinifala" and "C-section" as "See section."
#   → V7 needs an ElevenLabs re-gen with phonetic guide, OR we match script
#     text to the mispronunciation (not recommended — breaks authority)

## ── V8 — Alight Mycotoxins (THE ONE THAT WAS "WORST") ────────────────────
# Audio duration: 94.98s (vs. totalFrames 2920 = 97.33s)
# What ElevenLabs actually said — HOOK IS COMPLETELY DIFFERENT:
#
#   "FIND IN SOME BUILDINGS, SICK IN OTHERS.
#    One pattern that comes up in about a third of my chronic inflammation cases.
#    Client has tried EVERY PROTOCOL. Anti-histamines, gut work, nervous system
#    regulation, ELIMINATION DIET.
#    Some things help for a week, then the symptoms come back,
#    USUALLY IN THE SAME PLACES, USUALLY AT THE SAME TIMES.
#    Here's what I asked them to track, which rooms, which buildings,
#    WHICH DAYS OF THE WEEK.
#    Within two weeks, the map is obvious.
#    Find at work, sick at home, OR FIND IN THE NEW OFFICE, SICK IN THE CAR,
#    OR FIND A VACATION. Back to square one in the bedroom.
#    This is almost always a micotoxin load pattern, not mold generally,
#    a specific micotoxin FROM A SPECIFIC BUILDING MATERIAL PRODUCING A
#    SPECIFIC SYMPTOM CLUSTER.
#    Ocarotoxin FROM WATER DAMAGE DRYWALL looks different from aflotoxin
#    FROM CONTAMINATED FOOD. Gliotoxin FROM INDOOR GROWTH looks different
#    from tricotacines.
#    Eight micotoxins, eight symptom profiles. Broad spectrum treatment
#    KEEPS MISSING BECAUSE THE TARGET IS SPECIFIC.
#    A LIGHT FORMULA IS publishes micotoxin-specific clinical guides.
#    Each one covers the source mold, the organ at targets, the
#    differentiating symptom profile.
#    Matching the pattern to the specific micotoxin is where most of my
#    cases break open, worth testing when the protocol keeps working
#    and then stopping.
#    Full pattern breakdown at tr.e slash owq7fm. Type it, not clickable,
#    you'll need to type it."
#
# ISSUES (WHY V8 WAS "WORST"):
#   - Script hook: "Fine at work. Sick at home."
#     Audio says:  "Find in some buildings, sick in others."
#     → This is why V8 hook text was "missing" — it wasn't missing, it was the
#       WRONG TEXT. ElevenLabs spoke one hook, the tile displayed another.
#   - Script tile 7 "Fine at work. Sick at home. Fine on vacation. Back to
#     square one in the bedroom" — audio version is "Find at work, sick at
#     home, OR find in the new office, sick in the car, OR find a vacation.
#     Back to square one in the bedroom." Completely different structure.
#   - Script mycotoxin list tile "Ochratoxin. Aflatoxin. Gliotoxin.
#     Trichothecenes." — audio version attaches source material to each:
#     "Ochratoxin FROM water damage drywall ... Aflatoxin FROM contaminated
#     food ... Gliotoxin FROM indoor growth ... trichothecenes"
#   - Script product name "Alight Formulas" — audio says "A light formula is"
#     → ElevenLabs parsed the brand as "a light" — critical brand pronunciation
#       failure. V8 needs ElevenLabs re-gen with "Alight" pronounced correctly.
#   - CTA is longer than script tile can show in 60 frames

## ── V9 — BodyBio PC Mold Detox (THE WORST OF ALL) ────────────────────────
# Audio duration: 80.68s CONFIRMED PARTIAL (Whisper transcribed to 80.68s,
#   mutagen-reported file length was 85.3s — so either 4.6s of trailing
#   silence/unintelligible audio, OR Whisper cut off at "slash" and missed
#   "owq7fm" entirely).
#
# Maria must play the last 5 seconds of video9-voice.mp3 before V9 renders.
# If CTA cuts off without saying "owq7fm" → V9 needs ElevenLabs re-gen.
#
# What ElevenLabs actually said (up to where Whisper stopped):
#   "Most stalled mold detox protocols have the same missing step.
#    PATTERN I KEEP RUNNING INTO, CLIENT IS DOING EVERYTHING BY THE BOOK,
#    binders, glutathione, sauna, maybe CSM.
#    Some symptoms shift, then nothing.
#    Protocol drags ON for months, sometimes years.
#    WHEN I WALK BACK THROUGH THE SEQUENCE, one thing is almost always
#    skipped, cell membrane repair.
#    HERE'S THE MECHANISM. Micotoxins are lipophilic. They store in cell
#    membranes. If the membrane is damaged FROM YEARS OF EXPOSURE,
#    INFLAMMATION, OXIDATIVE STRESS, the binders never get a full release.
#    Toxins keep recycling. The protocol keeps running. Nothing moves.
#    PHOSPHATE ITALKOLEIN IS THE PHOSPHOLIPID THE BODY USES TO REBUILD THAT
#    MEMBRANE LAYER. BODY BY OPC IS THE FORM I REACH FOR. RESEARCH ON PC AND
#    MOLD RECOVERY CONTEXT HAS BEEN BUILDING FOR YEARS. NOT AS A REPLACEMENT
#    FOR BINDERS, AS THE FLOOR BINDERS ARE STANDING ON.
#    Usually introduced two to four weeks before the binding protocol starts,
#    OR ALONGSIDE IT IF THE CLIENT CAN'T WAIT.
#    Most of the stalled cases I see, THIS IS THE MISSING SEQUENCE STEP.
#    Worth testing when nothing is moving.
#    Full pattern breakdown at tr.e.e. slash [TRUNCATED]"
#
# ISSUES (WHY V9 WAS "WORST OF ALL"):
#   - Script tile 2 splits "Everything by the book." and "Binders. Glutathione.
#     Sauna. Maybe CSM." — audio runs it all as one beat PLUS adds "Pattern I
#     keep running into, client is doing..."
#   - Script missing entire bridge: "When I walk back through the sequence"
#   - Script missing: "Here's the mechanism"
#   - Script missing whole elaboration: "Phosphatidylcholine is the
#     phospholipid... Research on PC and mold recovery context has been
#     building for years"
#   - "BodyBio PC" pronounced "Body by OPC" — audio error
#   - "Phosphatidylcholine" pronounced "Phosphate italkolein" — audio error
#   - CTA potentially truncated — REQUIRES MARIA VERIFICATION

## ── RECOMMENDATION: PATH FORWARD ─────────────────────────────────────────

# NIGHT-OF (complete overnight):
# (A) Rebuild scripts-batch2.ts V5 + V6 tile splits to match actual audio beats
# (B) Rebuild scripts-batch3.ts V7 + V8 tiles text to match what was spoken
# (C) New sync script: whisper-based, reads the JSON transcripts, places tile
#     startFrames on actual word-start timestamps rather than guessing by word
#     count. This is the permanent fix.
# (D) Move V7 chart to its own tile (addresses "chart really small" feedback)

# MORNING-OF (Maria actions before any render):
# (1) Play last 5 seconds of video9-voice.mp3. Confirm CTA says
#     "tr.ee slash owq7fm. Type it, link won't be clickable" OR similar
#     complete URL statement. If cut off → V9 gets ElevenLabs CTA re-gen.
# (2) Decide: live with audio mispronunciations (Infinity well, Acrimansia,
#     Body by OPC, A light formula) OR re-gen those audios with phonetic
#     guidance. Claude recommends re-gen for V7, V8, V9 product names only —
#     brand authority matters. V4/V6 can keep "Infinity well"/"infinival"
#     as-is since the tile displays "InfiniWell" correctly.
# (3) Review the rebuilt scripts Claude delivers.
# (4) Render + schedule Apr 18-23.
