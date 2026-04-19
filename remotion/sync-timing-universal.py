#!/usr/bin/env python3
"""
sync-timing-universal.py ? Universal timing sync for @oppractitioner
Pure Python. No ffmpeg. No pydub. Works on Python 3.14+.

Algorithm:
  1. mutagen reads actual MP3 duration from file headers (no audio decoding)
  2. Word count per phrase determines proportional speaking duration
  3. Inter-phrase gap (PAUSE_S seconds) is inserted before each card transition
  4. totalFrames = audio_frames + END_HOLD_FRAMES (3s hold on last card)

Why word-count works for ElevenLabs TTS:
  - ElevenLabs speaks at ~130?150 WPM (consistent within a session)
  - Word count ? phrase duration to within ~10% error
  - Error is much smaller than human perception threshold for card transitions

Usage:
  pip install mutagen --break-system-packages
  python sync-timing-universal.py [batch2|batch3|all]

  If no argument given, runs all batches.
"""

import sys, os, re

# --- DEPENDENCIES -------------------------------------------------------------
try:
    from mutagen.mp3 import MP3
except ImportError:
    print("Installing mutagen...")
    import subprocess
    subprocess.run([sys.executable, "-m", "pip", "install", "mutagen",
                    "--break-system-packages", "-q"], check=True)
    from mutagen.mp3 import MP3

# --- CONSTANTS ----------------------------------------------------------------
FPS           = 30
PAUSE_S       = 0.35   # gap between cards (seconds) ? ElevenLabs natural pause
END_HOLD_S    = 2.0    # hold after last word before video ends
END_HOLD_FR   = int(END_HOLD_S * FPS)

SRC    = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(SRC, 'public')
SRCDIR = os.path.join(SRC, 'src')

# --- BATCH CONFIGS ------------------------------------------------------------
# Each entry maps to a typescript file + a list of (composition_id, audio_file, phrase_count)
# phrase_count must match the number of phrase objects in the script data (hook + phrases + cta).

BATCHES = {
    'batch2': {
        'ts_file': os.path.join(SRCDIR, 'scripts-batch2.ts'),
        'videos': [
            {
                'composition': 'Video4-InfiniWellGut',
                'audio':       os.path.join(PUBLIC, 'video4-voice.mp3'),
                # Phrases in order ? paste text from scripts-batch2.ts for accurate word count
                'phrases': [
                    "Something I check when gut protocols aren't landing.",
                    "Good protocol. Clean diet. Right supplements.",
                    "Gut symptoms won't clear.",
                    "I look at gut lining integrity. The layer everything has to pass through.",
                    "InfiniWell BPC-157 Delayed. Studied for gut mucosal support.",
                    "One pattern I watch when the gut isn't responding to protocol changes.",
                    "Link in bio.",
                ],
            },
            {
                'composition': 'Video5-InfiniWellHHS',
                'audio':       os.path.join(PUBLIC, 'video5-voice.mp3'),
                'phrases': [
                    "HHS just called for more peptide research.",
                    "This space has been in integrative practice for years.",
                    "One I keep coming back to: BPC-157.",
                    "Gut lining. Tissue repair. Recovery support.",
                    "InfiniWell BPC-157. The regulation is catching up.",
                    "Link in bio.",
                ],
            },
            {
                'composition': 'Video6-InfiniWellRecovery',
                'audio':       os.path.join(PUBLIC, 'video6-voice.mp3'),
                'phrases': [
                    "When recovery just stops at 80%.",
                    "Injury is old. Protocol is right. Progress just... plateaus.",
                    "Tissue repair needs more than ingredients. It may need the right signaling environment.",
                    "InfiniWell BPC-157 Rapid. What I add when timelines keep extending.",
                    "Worth testing when the gap won't close.",
                    "Link in bio.",
                ],
            },
        ],
    },
    'batch4': {
        'ts_file': os.path.join(SRCDIR, 'scripts-batch4.ts'),
        'videos': [
            # -- V4 InfiniWell Gut Lining --------------------------------------
            {
                'composition': 'Video4-InfiniWellGut-HookA',
                'audio':       os.path.join(PUBLIC, 'video4-hookA.mp3'),
                'phrases': [
                    "One pattern I keep running into when the gut protocol is already right.",
                    "Client has done the work. Elimination diet. Clean protein. Right binders. Right probiotics.",
                    "Six months in. Gut symptoms still show up.",
                    "The thing I check next is the gut lining itself. The layer everything has to pass through.",
                    "If the epithelium is chronically inflamed, nothing added downstream clears the pattern.",
                    "Body keeps opening tight junctions. Food particles keep triggering the immune layer.",
                    "InfiniWell BPC-157 Delayed Release. Studied for mucosal repair. May support the tight-junction reset the protocol is waiting on.",
                    "Most gut protocols assume the lining is intact. When it isn't, every input reaches a closed door.",
                    "Not a replacement for the protocol. The floor the protocol is standing on.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video4-InfiniWellGut-HookB',
                'audio':       os.path.join(PUBLIC, 'video4-hookB.mp3'),
                'phrases': [
                    "Everyone keeps stacking more gut supplements. The issue isn't what's missing. It's what's not absorbing.",
                    "Client has done the work. Elimination diet. Clean protein. Right binders. Right probiotics.",
                    "Six months in. Gut symptoms still show up.",
                    "The thing I check next is the gut lining itself. The layer everything has to pass through.",
                    "If the epithelium is chronically inflamed, nothing added downstream clears the pattern.",
                    "Body keeps opening tight junctions. Food particles keep triggering the immune layer.",
                    "InfiniWell BPC-157 Delayed Release. Studied for mucosal repair. May support the tight-junction reset the protocol is waiting on.",
                    "Most gut protocols assume the lining is intact. When it isn't, every input reaches a closed door.",
                    "Not a replacement for the protocol. The floor the protocol is standing on.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video4-InfiniWellGut-HookC',
                'audio':       os.path.join(PUBLIC, 'video4-hookC.mp3'),
                'phrases': [
                    "Client doing everything right. Clean diet. Right supplements. Gut symptoms won't clear.",
                    "Elimination diet. Clean protein. Right binders. Right probiotics.",
                    "Six months in. Gut symptoms still show up.",
                    "The thing I check next is the gut lining itself. The layer everything has to pass through.",
                    "If the epithelium is chronically inflamed, nothing added downstream clears the pattern.",
                    "Body keeps opening tight junctions. Food particles keep triggering the immune layer.",
                    "InfiniWell BPC-157 Delayed Release. Studied for mucosal repair. May support the tight-junction reset the protocol is waiting on.",
                    "Most gut protocols assume the lining is intact. When it isn't, every input reaches a closed door.",
                    "Not a replacement for the protocol. The floor the protocol is standing on.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            # -- V5 InfiniWell Peptide Regulatory Window -----------------------
            {
                'composition': 'Video5-InfiniWellPeptideWindow-HookA',
                'audio':       os.path.join(PUBLIC, 'video5-hookA.mp3'),
                'phrases': [
                    "One peptide I've been watching practitioners reach for long before it was news.",
                    "HHS flagged peptides as a research priority this year. In clinical practice, this space has been active for a decade.",
                    "One compound keeps coming back. Not because of the hype. Because the pattern keeps showing up.",
                    "The compound is BPC-157. Pentadecapeptide ? fifteen amino acids ? derived from a protective sequence in gastric juice.",
                    "Three clinical surfaces the research keeps returning to: gut mucosal support, soft-tissue repair, recovery signaling.",
                    "InfiniWell BPC-157. Two release profiles. Delayed release for gut-lining cases. Rapid release for soft-tissue and recovery.",
                    "Fifteen amino acids. A protective sequence the stomach already makes. The body recognizes it before the research catches up.",
                    "Not a fix. A variable worth testing when a case has plateaued.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video5-InfiniWellPeptideWindow-HookB',
                'audio':       os.path.join(PUBLIC, 'video5-hookB.mp3'),
                'phrases': [
                    "Everyone's discovering peptides this year. In clinical practice, this one has been the baseline for years.",
                    "HHS flagged peptides as a research priority this year. In clinical practice, this space has been active for a decade.",
                    "One compound keeps coming back. Not because of the hype. Because the pattern keeps showing up.",
                    "The compound is BPC-157. Pentadecapeptide ? fifteen amino acids ? derived from a protective sequence in gastric juice.",
                    "Three clinical surfaces the research keeps returning to: gut mucosal support, soft-tissue repair, recovery signaling.",
                    "InfiniWell BPC-157. Two release profiles. Delayed release for gut-lining cases. Rapid release for soft-tissue and recovery.",
                    "Fifteen amino acids. A protective sequence the stomach already makes. The body recognizes it before the research catches up.",
                    "Not a fix. A variable worth testing when a case has plateaued.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video5-InfiniWellPeptideWindow-HookC',
                'audio':       os.path.join(PUBLIC, 'video5-hookC.mp3'),
                'phrases': [
                    "The peptide that finally shows up in tissue-repair cases no protocol touches.",
                    "HHS flagged peptides as a research priority this year. In clinical practice, this space has been active for a decade.",
                    "One compound keeps coming back. Not because of the hype. Because the pattern keeps showing up.",
                    "The compound is BPC-157. Pentadecapeptide ? fifteen amino acids ? derived from a protective sequence in gastric juice.",
                    "Three clinical surfaces the research keeps returning to: gut mucosal support, soft-tissue repair, recovery signaling.",
                    "InfiniWell BPC-157. Two release profiles. Delayed release for gut-lining cases. Rapid release for soft-tissue and recovery.",
                    "Fifteen amino acids. A protective sequence the stomach already makes. The body recognizes it before the research catches up.",
                    "Not a fix. A variable worth testing when a case has plateaued.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            # -- V6 InfiniWell Recovery Plateau -------------------------------
            {
                'composition': 'Video6-InfiniWellRecoveryPlateau-HookA',
                'audio':       os.path.join(PUBLIC, 'video6-hookA.mp3'),
                'phrases': [
                    "One pattern in tissue-repair cases that plateau at about eighty percent and stop.",
                    "Injury is old. Sometimes years old. Protocol is well-designed. Right amino acids. Right mineral cofactors.",
                    "Progress comes in the first phase. Then it stalls. Body lands at seventy-five percent of baseline function.",
                    "What I watch for is the difference between inputs and signaling.",
                    "You can add every nutrient on the list and still stall if the body isn't receiving a repair signal.",
                    "InfiniWell BPC-157 Rapid. Same pentadecapeptide. Faster-release format. Targeted at soft tissue.",
                    "Nutrients build. Signaling decides. The protocol stalls when the build is right and the signal is missing.",
                    "Not a forever protocol. A test input when the last twenty percent won't come back.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video6-InfiniWellRecoveryPlateau-HookB',
                'audio':       os.path.join(PUBLIC, 'video6-hookB.mp3'),
                'phrases': [
                    "Most recovery protocols add more nutrients. In the plateau cases, nutrients aren't the missing variable.",
                    "Injury is old. Sometimes years old. Protocol is well-designed. Right amino acids. Right mineral cofactors.",
                    "Progress comes in the first phase. Then it stalls. Body lands at seventy-five percent of baseline function.",
                    "What I watch for is the difference between inputs and signaling.",
                    "You can add every nutrient on the list and still stall if the body isn't receiving a repair signal.",
                    "InfiniWell BPC-157 Rapid. Same pentadecapeptide. Faster-release format. Targeted at soft tissue.",
                    "Nutrients build. Signaling decides. The protocol stalls when the build is right and the signal is missing.",
                    "Not a forever protocol. A test input when the last twenty percent won't come back.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video6-InfiniWellRecoveryPlateau-HookC',
                'audio':       os.path.join(PUBLIC, 'video6-hookC.mp3'),
                'phrases': [
                    "Injury is old. Protocol is right. Recovery plateaus at eighty percent.",
                    "Injury is old. Sometimes years old. Protocol is well-designed. Right amino acids. Right mineral cofactors.",
                    "Progress comes in the first phase. Then it stalls. Body lands at seventy-five percent of baseline function.",
                    "What I watch for is the difference between inputs and signaling.",
                    "You can add every nutrient on the list and still stall if the body isn't receiving a repair signal.",
                    "InfiniWell BPC-157 Rapid. Same pentadecapeptide. Faster-release format. Targeted at soft tissue.",
                    "Nutrients build. Signaling decides. The protocol stalls when the build is right and the signal is missing.",
                    "Not a forever protocol. A test input when the last twenty percent won't come back.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            # -- V7 Pendulum ? HOLD (scaffold only, no render) -----------------
            {
                'composition': 'Video7-PendulumMetabolicStall-HookA',
                'audio':       os.path.join(PUBLIC, 'video7-hookA.mp3'),
                'phrases': [
                    "One pattern I keep running into with metabolic-stall cases who do everything right.",
                    "Clean diet. Decent sleep. Solid probiotic stack for months.",
                    "Labs will not budge. Insulin resistance plateaus. Weight plateaus. Satiety feels broken.",
                    "Nine times out of ten, when I dig into history, I find two things. C-section birth. Or a heavy antibiotic course somewhere in the last decade. Often both.",
                    "There is a specific gut organism almost nobody knew how to supplement until recently. Akkermansia muciniphila.",
                    "Lives in the mucus layer. Regulates metabolic signaling, insulin response, satiety hormones.",
                    "For years nobody could put it in a capsule. Akkermansia is an obligate anaerobe. Dies the second it hits oxygen.",
                    "Pendulum Akkermansia. Delivery system that keeps it viable through manufacturing and into the gut.",
                    "Not a fix. A keystone strain that may support what the rest of the protocol cannot reach.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video7-PendulumMetabolicStall-HookB',
                'audio':       os.path.join(PUBLIC, 'video7-hookB.mp3'),
                'phrases': [
                    "Every probiotic stack has Lactobacillus and Bifidobacterium. The strain the metabolic research points at keeps getting skipped.",
                    "Clean diet. Decent sleep. Solid probiotic stack for months.",
                    "Labs will not budge. Insulin resistance plateaus. Weight plateaus. Satiety feels broken.",
                    "Nine times out of ten, when I dig into history, I find two things. C-section birth. Or a heavy antibiotic course somewhere in the last decade. Often both.",
                    "There is a specific gut organism almost nobody knew how to supplement until recently. Akkermansia muciniphila.",
                    "Lives in the mucus layer. Regulates metabolic signaling, insulin response, satiety hormones.",
                    "For years nobody could put it in a capsule. Akkermansia is an obligate anaerobe. Dies the second it hits oxygen.",
                    "Pendulum Akkermansia. Delivery system that keeps it viable through manufacturing and into the gut.",
                    "Not a fix. A keystone strain that may support what the rest of the protocol cannot reach.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video7-PendulumMetabolicStall-HookC',
                'audio':       os.path.join(PUBLIC, 'video7-hookC.mp3'),
                'phrases': [
                    "Client is doing everything right. Labs won't budge. Insulin resistance plateaus. Weight plateaus.",
                    "Clean diet. Decent sleep. Solid probiotic stack for months.",
                    "Labs will not budge. Insulin resistance plateaus. Weight plateaus. Satiety feels broken.",
                    "Nine times out of ten, when I dig into history, I find two things. C-section birth. Or a heavy antibiotic course somewhere in the last decade. Often both.",
                    "There is a specific gut organism almost nobody knew how to supplement until recently. Akkermansia muciniphila.",
                    "Lives in the mucus layer. Regulates metabolic signaling, insulin response, satiety hormones.",
                    "For years nobody could put it in a capsule. Akkermansia is an obligate anaerobe. Dies the second it hits oxygen.",
                    "Pendulum Akkermansia. Delivery system that keeps it viable through manufacturing and into the gut.",
                    "Not a fix. A keystone strain that may support what the rest of the protocol cannot reach.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            # -- V8 Alight Formulas Mycotoxin Mapping -------------------------
            {
                'composition': 'Video8-AlightMycotoxins-HookA',
                'audio':       os.path.join(PUBLIC, 'video8-hookA.mp3'),
                'phrases': [
                    "One pattern in about a third of my chronic-inflammation cases that keeps coming up.",
                    "Client has tried every protocol. Antihistamines. Gut work. Nervous system regulation. Elimination diet.",
                    "Some things help for a week. Then the symptoms come back. Usually in the same places. Usually at the same times.",
                    "Here is what I ask them to track. Which rooms. Which buildings. Which days of the week.",
                    "Within two weeks the map is obvious. Fine at work. Sick at home. Fine on vacation. Back to square one in the bedroom.",
                    "This is almost always a mycotoxin load pattern. Not mold generally. A specific mycotoxin.",
                    "Ochratoxin from water-damaged drywall looks different from aflatoxin from contaminated food. Gliotoxin from indoor growth looks different from trichothecenes.",
                    "Eight mycotoxins. Eight symptom profiles. Broad-spectrum treatment keeps missing because the target is specific.",
                    "Alight Formulas Mycotoxin Guides. Eight mycotoxin-specific guides. Source mold. Organ targeted. Differentiating symptom profile.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video8-AlightMycotoxins-HookB',
                'audio':       os.path.join(PUBLIC, 'video8-hookB.mp3'),
                'phrases': [
                    "Everyone treats mold illness with broad-spectrum protocols. Eight mycotoxins, eight symptom profiles ? the target is specific.",
                    "Client has tried every protocol. Antihistamines. Gut work. Nervous system regulation. Elimination diet.",
                    "Some things help for a week. Then the symptoms come back. Usually in the same places. Usually at the same times.",
                    "Here is what I ask them to track. Which rooms. Which buildings. Which days of the week.",
                    "Within two weeks the map is obvious. Fine at work. Sick at home. Fine on vacation. Back to square one in the bedroom.",
                    "This is almost always a mycotoxin load pattern. Not mold generally. A specific mycotoxin.",
                    "Ochratoxin from water-damaged drywall looks different from aflatoxin from contaminated food. Gliotoxin from indoor growth looks different from trichothecenes.",
                    "Eight mycotoxins. Eight symptom profiles. Broad-spectrum treatment keeps missing because the target is specific.",
                    "Alight Formulas Mycotoxin Guides. Eight mycotoxin-specific guides. Source mold. Organ targeted. Differentiating symptom profile.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video8-AlightMycotoxins-HookC',
                'audio':       os.path.join(PUBLIC, 'video8-hookC.mp3'),
                'phrases': [
                    "Fine in some buildings. Sick in others. Same person.",
                    "Client has tried every protocol. Antihistamines. Gut work. Nervous system regulation. Elimination diet.",
                    "Some things help for a week. Then the symptoms come back. Usually in the same places. Usually at the same times.",
                    "Here is what I ask them to track. Which rooms. Which buildings. Which days of the week.",
                    "Within two weeks the map is obvious. Fine at work. Sick at home. Fine on vacation. Back to square one in the bedroom.",
                    "This is almost always a mycotoxin load pattern. Not mold generally. A specific mycotoxin.",
                    "Ochratoxin from water-damaged drywall looks different from aflatoxin from contaminated food. Gliotoxin from indoor growth looks different from trichothecenes.",
                    "Eight mycotoxins. Eight symptom profiles. Broad-spectrum treatment keeps missing because the target is specific.",
                    "Alight Formulas Mycotoxin Guides. Eight mycotoxin-specific guides. Source mold. Organ targeted. Differentiating symptom profile.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            # -- V9 BodyBio PC Mold Detox Floor -------------------------------
            {
                'composition': 'Video9-BodyBioMoldDetox-HookA',
                'audio':       os.path.join(PUBLIC, 'video9-hookA.mp3'),
                'phrases': [
                    "Most stalled mold detox protocols I see have the same missing step in the sequence.",
                    "Client is doing everything by the book. Binders. Glutathione. Sauna. Maybe CSM.",
                    "Some symptoms shift early. Then nothing. Protocol drags for months. Sometimes years.",
                    "When I walk back through the sequence, one thing is almost always skipped. Cell membrane repair.",
                    "Mycotoxins are lipophilic. They store in cell membranes. If the membrane is damaged, binders never get a full release.",
                    "Toxins keep recycling. Protocol keeps running. Nothing moves.",
                    "BodyBio PC. The phospholipid the body uses to rebuild the membrane layer. The floor binders stand on.",
                    "Usually introduced two to four weeks before the binding protocol starts, or alongside it.",
                    "Not as a replacement for binders. As the floor the binders are standing on.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video9-BodyBioMoldDetox-HookB',
                'audio':       os.path.join(PUBLIC, 'video9-hookB.mp3'),
                'phrases': [
                    "Everyone adds more binders when detox stalls. The issue isn't binder strength. It's where the toxins are stored.",
                    "Client is doing everything by the book. Binders. Glutathione. Sauna. Maybe CSM.",
                    "Some symptoms shift early. Then nothing. Protocol drags for months. Sometimes years.",
                    "When I walk back through the sequence, one thing is almost always skipped. Cell membrane repair.",
                    "Mycotoxins are lipophilic. They store in cell membranes. If the membrane is damaged, binders never get a full release.",
                    "Toxins keep recycling. Protocol keeps running. Nothing moves.",
                    "BodyBio PC. The phospholipid the body uses to rebuild the membrane layer. The floor binders stand on.",
                    "Usually introduced two to four weeks before the binding protocol starts, or alongside it.",
                    "Not as a replacement for binders. As the floor the binders are standing on.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
            {
                'composition': 'Video9-BodyBioMoldDetox-HookC',
                'audio':       os.path.join(PUBLIC, 'video9-hookC.mp3'),
                'phrases': [
                    "Binders. Glutathione. Sauna. Protocol dragging for months. Nothing is clearing anymore.",
                    "Client is doing everything by the book. Binders. Glutathione. Sauna. Maybe CSM.",
                    "Some symptoms shift early. Then nothing. Protocol drags for months. Sometimes years.",
                    "When I walk back through the sequence, one thing is almost always skipped. Cell membrane repair.",
                    "Mycotoxins are lipophilic. They store in cell membranes. If the membrane is damaged, binders never get a full release.",
                    "Toxins keep recycling. Protocol keeps running. Nothing moves.",
                    "BodyBio PC. The phospholipid the body uses to rebuild the membrane layer. The floor binders stand on.",
                    "Usually introduced two to four weeks before the binding protocol starts, or alongside it.",
                    "Not as a replacement for binders. As the floor the binders are standing on.",
                    "tr dot ee slash owQ7FM. Type it into your browser.",
                ],
            },
        ],
    },
    'batch3': {
        'ts_file': os.path.join(SRCDIR, 'scripts-batch3.ts'),
        'videos': [
            {
                'composition': 'Video7-PendulumMetabolicStall',
                'audio':       os.path.join(PUBLIC, 'video7-voice.mp3'),
                'phrases': [
                    "The gut strain almost no protocol includes.",
                    "Pattern I keep running into with metabolic stall.",
                    "Clean diet. Decent sleep. Solid probiotic stack.",
                    "Labs won't budge. Weight plateaus. Satiety feels broken.",
                    "Nine times out of ten, history shows C-section birth.",
                    "Or a heavy antibiotic course in the last decade. Often both.",
                    "A specific gut organism ? Akkermansia muciniphila.",
                    "Lives in the mucus layer. Regulates metabolic signaling.",
                    "Wiped out by antibiotics. Rarely seeded without vaginal birth.",
                    "For years, nobody could supplement it. Obligate anaerobe. Dies on contact with oxygen.",
                    "Pendulum Akkermansia. Delivery system that keeps it viable to the gut.",
                    "Not a fix. A keystone strain.",
                    "tr.ee slash owQ7FM.",
                ],
            },
            {
                'composition': 'Video8-AlightMycotoxins',
                'audio':       os.path.join(PUBLIC, 'video8-voice.mp3'),
                'phrases': [
                    "Fine at work. Sick at home.",
                    "Comes up in about a third of my chronic inflammation cases.",
                    "They've tried everything. Antihistamines. Gut work. Nervous system.",
                    "Some things help for a week. Then the symptoms come back.",
                    "What I ask them to track ? which rooms. Which buildings.",
                    "Within two weeks, the map is obvious.",
                    "Fine at work. Sick at home. Fine on vacation. Back to square one in the bedroom.",
                    "This is almost always a mycotoxin load pattern.",
                    "Not mold generally. A specific mycotoxin. From specific materials.",
                    "Ochratoxin. Aflatoxin. Gliotoxin. Trichothecenes.",
                    "Eight mycotoxins. Eight symptom profiles. Broad-spectrum misses.",
                    "Alight Formulas Mycotoxin Guides. Source mold. Target organ. Differentiating profile.",
                    "Worth testing when the protocol keeps stopping.",
                    "tr.ee slash owQ7FM.",
                ],
            },
            {
                'composition': 'Video9-BodyBioMoldDetoxFloor',
                'audio':       os.path.join(PUBLIC, 'video9-voice.mp3'),
                'phrases': [
                    "Most stalled mold detox protocols have the same missing step.",
                    "Everything by the book. Binders. Glutathione. Sauna. Maybe CSM.",
                    "Some symptoms shift. Then nothing.",
                    "Protocol drags for months. Sometimes years.",
                    "One thing almost always skipped. Cell membrane repair.",
                    "Mycotoxins are lipophilic. They store in cell membranes.",
                    "If the membrane is damaged ? binders never get a full release.",
                    "Toxins recycle. Protocol runs. Nothing moves.",
                    "BodyBio PC. The floor binders stand on.",
                    "Usually introduced two to four weeks before binders.",
                    "Worth testing when nothing is moving.",
                    "tr.ee slash owQ7FM.",
                ],
            },
        ],
    },
}

# --- HELPERS ------------------------------------------------------------------

def word_count(text):
    """Count words in a phrase string."""
    return len(text.split())


def get_audio_duration_s(audio_path):
    """Return MP3 duration in seconds using mutagen (no decoding, no ffmpeg)."""
    audio = MP3(audio_path)
    return audio.info.length


def compute_start_frames(total_audio_s, phrases):
    """
    Distribute startFrames proportionally by word count.
    Inserts PAUSE_S gap before each card (simulates natural TTS pauses).
    Returns list of startFrames, one per phrase.
    """
    words = [word_count(p) for p in phrases]
    total_words = sum(words)
    num_phrases = len(phrases)

    # Total pause time across all inter-phrase gaps
    total_pause_s = PAUSE_S * (num_phrases - 1)
    # Time available for actual speech
    speech_s = max(0.0, total_audio_s - total_pause_s)

    start_frames = []
    cursor_s = 0.0
    for i, w in enumerate(words):
        start_frames.append(int(round(cursor_s * FPS)))
        phrase_duration_s = (w / total_words) * speech_s
        cursor_s += phrase_duration_s
        if i < num_phrases - 1:
            cursor_s += PAUSE_S

    return start_frames


def ms_to_frame(ms):
    return int(round(ms / 1000 * FPS))


def update_ts_file(ts_path, composition_id, new_start_frames, total_frames):
    """
    Rewrite startFrame values and totalFrames for one composition in a .ts file.
    Operates on raw string to avoid any TS parsing dependency.
    """
    with open(ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    comp_pattern = rf"compositionId: '{re.escape(composition_id)}'"
    comp_match = re.search(comp_pattern, content)
    if not comp_match:
        print(f"  [WARN]  Could not find '{composition_id}' in {os.path.basename(ts_path)}")
        return False

    start_pos = comp_match.start()
    next_comp = re.search(r"compositionId:", content[comp_match.end():])
    end_pos = comp_match.end() + next_comp.start() if next_comp else len(content)
    block = content[start_pos:end_pos]

    # Update totalFrames
    old_block = block
    block = re.sub(r'totalFrames:\s*\d+', f'totalFrames: {total_frames}', block, count=1)

    # Update startFrames in order (reverse to preserve offsets)
    frame_matches = list(re.finditer(r'startFrame:\s*\d+', block))
    expected = len(new_start_frames)
    if len(frame_matches) != expected:
        print(f"  [WARN]  {len(frame_matches)} startFrames in TS vs {expected} computed ? "
              f"applying {min(len(frame_matches), expected)}")
    count = min(len(frame_matches), expected)
    for i in range(count - 1, -1, -1):
        m = frame_matches[i]
        block = block[:m.start()] + f'startFrame: {new_start_frames[i]}' + block[m.end():]

    new_content = content[:start_pos] + block + content[end_pos:]
    with open(ts_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    changed = block != old_block
    return changed


# --- MAIN ---------------------------------------------------------------------

def sync_batch(batch_name, batch_cfg):
    ts_path = batch_cfg['ts_file']
    print(f"\n{'-'*52}")
    print(f"  {batch_name.upper()} -> {os.path.basename(ts_path)}")
    print(f"{'-'*52}")

    any_changed = False
    for video in batch_cfg['videos']:
        comp   = video['composition']
        audio  = video['audio']
        phrases = video['phrases']

        print(f"\n  >  {comp}")

        if not os.path.exists(audio):
            print(f"     [WARN]  Audio not found: {os.path.basename(audio)} ? skipping")
            print(f"        Drop {os.path.basename(audio)} into remotion/public/ then re-run.")
            continue

        duration_s = get_audio_duration_s(audio)
        total_frames = int(round(duration_s * FPS)) + END_HOLD_FR
        start_frames = compute_start_frames(duration_s, phrases)

        print(f"     Duration : {duration_s:.2f}s -> {total_frames} frames")
        print(f"     Phrases  : {len(phrases)}")
        for i, (sf, ph) in enumerate(zip(start_frames, phrases)):
            words = ph.split()
            preview = " ".join(words[:6]) + ("..." if len(words) > 6 else "")
            print(f'     [{i+1}] frame {sf:4d}  ({sf/FPS:.2f}s)  "{preview}"')

        changed = update_ts_file(ts_path, comp, start_frames, total_frames)
        if changed:
            print(f"     [OK]  Updated {os.path.basename(ts_path)}")
            any_changed = True
        else:
            print(f"     [done]   No change needed")

    return any_changed


def main():
    arg = sys.argv[1].lower() if len(sys.argv) > 1 else 'all'

    print(f"\n@oppractitioner Timing Sync (mutagen - no ffmpeg - Python 3.14 safe)")

    batches_to_run = (
        BATCHES.items() if arg == 'all'
        else [(arg, BATCHES[arg])] if arg in BATCHES
        else None
    )

    if batches_to_run is None:
        print(f"Unknown batch '{arg}'. Use: batch2, batch3, batch4, or all")
        sys.exit(1)

    total_changed = False
    for name, cfg in batches_to_run:
        changed = sync_batch(name, cfg)
        total_changed = total_changed or changed

    print(f"\n{'='*52}")
    if total_changed:
        print("  [OK]  Timing sync complete. Render now:")
        print("      npx remotion render src/index.ts <CompositionId> out/<file>.mp4")
    else:
        print("  [done]   All timing values already up to date (or audio files missing).")
    print(f"{'='*52}\n")


if __name__ == '__main__':
    main()
