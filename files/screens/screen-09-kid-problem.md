# Screen 9 — The kid problem nobody talks about *(INT13)*

**Status:** Spec draft  
**Interstitial:** [`INT13`](../funnel-interstitials-noom-map.md) — **B → C bridge** (Act 3b)  
**Stable step id:** `kid-problem`  
**URL:** `/satplan?step=kid-problem`  
**Placement:** After prep-failure screens (INT8, **Screen 7** / INT12) · Before affirmative **INT9**

## Strategic job

Turn **“I’ll buy a prep book and a study schedule”** parents into customers by naming what they **already lived** — book on the desk, Khan tab open, schedule abandoned — **without** ripping competitors or shaming the kid.

**Tone:** Positive, educated, neutral facts. Obvious conclusion; no macho flex.

---

## One aha + one anchor

| Mom’s aha | Anchor |
|-----------|--------|
| **“We handed her the materials — then they gathered dust.”** | SAT prep is a **project** most teens can’t self-run; optional CB **~20–60 pt** retake band without new approach *(footnote)* |

---

## Copy checklist

### Headline
- [ ] “The **kid problem** nobody talks about.”

### Opening (disarming — every parent nods)
- [ ] Prep book + Khan + printed schedule — worked **a week or two**
- [ ] Then life; materials **unused**; prep became **solo homework**
- [ ] “That’s not failure. It’s **normal**.”

### Body (four beats — structure, not character)
- [ ] SAT prep = **project**, not a class with attendance
- [ ] Good materials **don’t prioritize** — easy topics win over high-value gaps
- [ ] **Clarity** beats motivation — “study SAT” is too vague
- [ ] Distraction = **competing priorities**, not moral failure

### Personalization (`prep_*`)
- [ ] `prep_books` — book wasn’t wrong; **follow-through** was hard
- [ ] `prep_khan` — useful, but tabs don’t assign **today’s three tasks**
- [ ] `prep_own_nothing` — free resources fine; **sustainability** separates movers
- [ ] `prep_class` / `prep_tutor` — still need **plan between sessions**

### Spouse one-liner
- [ ] “Materials were fine — missing **today’s tasks** and someone checking they happened.”

### Bridge → Screen 10+ (INT9)
- [ ] Light: **guided prep + clear plan** manages the project — not “try harder”
- [ ] **No product pitch** on this screen

### Tone guardrails
- [ ] No competitor names; no insults; kid **capable**, parent **seen**
- [ ] Stats footnoted, **matter-of-fact** (tutor voice, not infomercial)
- [ ] **Banned in UI copy:** **jump**, **real** (as intensifier) — see [`funnel-interstitials-noom-map.md`](../funnel-interstitials-noom-map.md) voice section

### CTA
- [ ] Continue

---

## Build notes (Illuminairy)

- `QuizStepTemplate` — insight body only, no form
- Router: after `sat-changed` (Screen 7) and INT8 branches when enabled; before `INT9` step
- Analytics: `interstitial_id=kid-problem`, `education_part=B_bridge`

---

## QA

- [ ] Parent who **only** tried book/Khan feels understood, not attacked
- [ ] Does not duplicate full INT6 time/182 stat beat (that stays on INT6)
- [ ] Does not duplicate INT8 class/tutor takedown tone — this screen is **warm**
