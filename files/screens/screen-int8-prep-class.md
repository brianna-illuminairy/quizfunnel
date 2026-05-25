# Screen — Survey prep class doesn’t help *(INT8 · prep_class branch)*

**Status:** Shipped in production (Illuminairy `/satplan`) — 4-beat trilogy + assets  
**Interstitial:** [`INT8`](../funnel-interstitials-noom-map.md) — education part **B**  
**Steps (group class):** `prep-failed-group-class` → `prep-failed-proof` → `prep-failed-guided`  
**Steps (self-study):** `prep-failed-self-study` → `prep-failed-proof` → `prep-failed-guided`  
**Steps (legacy plateau):** `prep-failed-plateau` — deep-link only  
**Trigger:** `prep_class` → group-class slide; all other prep (incl. little/none) → self-study slide. `history_none` → self-study slide (no prep Q).

## Job (one aha per screen)

| Step | Mom’s aha |
|------|-----------|
| Group class fail | One curriculum, different weaknesses — scores stall in the 1100s–1200s |
| Self-study fail | Already studied hard — effort without targeted gap diagnosis |
| Plateau (legacy) | Group class / prep path story — triptych **crowd** panel |
| Proof | **+{gap}** with 1:1 tutoring + Bloom two-sigma + bar chart |
| ~~Mentors~~ | *(removed from spine — tap-through pairs deferred until auto-play)* |
| Guided | Diagnostic-driven prep — topic map + personalized plan |

---

## Copy checklist (production)

### Self-study fail (`prep-failed-self-study`) — slide 2

See [`screen-int8-self-study-fail.md`](screen-int8-self-study-fail.md).

### Group class fail (`prep-failed-group-class`) — slide 1

See [`screen-int8-group-class-fail.md`](screen-int8-group-class-fail.md).

### Plateau (`prep-failed-plateau`) — self-study slide 1
- [x] Headline: “That explains a lot.”
- [x] Triptych visual (girl strip if daughter or Me)
- [x] Group-class plateau copy (parent voice, no capability praise without GPA)

### Proof (`prep-failed-proof`)
- [x] Headline: “+{gap} more points with 1:1 tutoring.” (self-study path +142; group-class path +112)
- [x] **Above chart:** Bloom two-sigma sentence (`proofBloomCopy`)
- [x] 3-bar chart — Bloom card title; ~40 / ~70 / ~182 from `lib/site.ts`
- [x] **Below chart:** College Board retake avg vs Illuminairy program avg (`proofAfterChartCopy`; 142 pts higher than self-study on self-study path)
- [x] Serves trilogy slide 2 **and** is always followed by guided → mistake-driven (no short exit)

### Mentors (`prep-failed-mentors`)
- [x] Tap-through pairs + reveal + bridge copy
- [x] Continue disabled until reveal

### Guided (`prep-failed-guided`) — slide 3

See [`screen-int8-diagnostic-driven.md`](screen-int8-diagnostic-driven.md).

- [x] Guided headline + subhead match `prep-failed-guided` / diagnostic-driven copy
- [x] Intro: 28 skill areas — fastest path to score lift (voice-specific)
- [x] Body: diagnostic → rank → targeted focus
- [x] Graphic: topic map + personalized score plan + 1100→1240→1360

### Data / brand
- [x] No score guarantees; Bloom cited as research, not promise
- [x] No competitor brand names in body

### Not yet (spec vs ship)
- [ ] Full four-beat “survey-style class” prose from original spec (partially covered in plateau follow-up)
- [ ] Bridge to INT12 (“test itself changed”) — INT12 not built
- [ ] Dedicated 680×510 panel PNGs (optional; triptych crop live)

---

## QA

- [ ] 390×844 Meta IAB — full trilogy fits without scroll
- [ ] Daughter + Me → `prep-paths-triptych-daughter.png`
- [ ] Son + other → default triptych
- [ ] `npm run agent:verify` with `FUNNEL_LAYOUT_UNLOCK=1`

## Dev URLs

- `/satplan?step=prep-failed-self-study`
- `/satplan?step=prep-failed-group-class`
- `/satplan?step=prep-failed-plateau`
- `/satplan?step=prep-failed-proof`
- `/satplan?step=prep-failed-mentors`
- `/satplan?step=prep-failed-guided`
