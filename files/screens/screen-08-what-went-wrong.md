# Screen 08 — What went wrong? *(Step 8)*

**Status:** Spec draft — build after Screens 02–07  
**Intake:** Step 8 in [`funnel-intake-questions.md`](../funnel-intake-questions.md)  
**Production target:** `/satplan?step=wrong` (TBD)  
**Show when:** Step 4 ≠ `history_none` (has taken PSAT and/or SAT)  
**Prior:** Step 7 score · **Next:** Step 9 GPA

---

## Question

**What do you think went wrong? (Select all that apply)** *(multiselect · enabled Continue)*

Categories: **Time · Focus · Anxiety · Content · Prep** — full option list in intake spec § Step 8.

Store as `wrong_*[]`. Require ≥1 selection to enable Continue. **No** follow-up “main reason” screen.

---

## Why this step exists

- Parent self-diagnosis before we explain — builds trust
- **`wrong_*[]`** drives INT7 profile router and interstitial personalization (Screen 6 v4 Section B)
- Placed **after score, before GPA** so order is: goal → history → prep behavior → score → *what they think failed* → GPA → timeline

---

## Shell

| Rule | Value |
|------|--------|
| Template | **`QuizStepTemplate`** |
| Body | **`QuizTileGrid`** 2×3 — row 1: Math · Reading & Writing · row 2: Test Anxiety · Ran out of time · row 3: Focus or Stamina · Lack of preparation |
| Footer | **`FunnelCta`** — enabled when ≥1 selected |
| Advance | Continue → Step 9 GPA |

---

## Tile art system (wrong step only)

Unified **“minimal SAT struggle moment”** line icons in `components/sat-plan/wrong-reason-icons.tsx` (not INT13 kid-problem art).

| Option ID | Label | Visual concept |
|-----------|--------|----------------|
| `wrong_cat_math` | Math | Equation row with one step **circled in tomato** (stuck step) |
| `wrong_cat_reading` | Reading & Writing | Passage lines + **tomato underline** + correction mark |
| `wrong_cat_anxiety` | Test Anxiety | Test sheet + **scribble cloud** + shaky check |
| `wrong_cat_time` | Ran out of time | **Nearly-empty timer ring** + unfinished question dots |
| `wrong_cat_focus` | Focus or Stamina | **Low battery** over fading question lines |
| `wrong_cat_prep` | Lack of preparation | Calendar with **skipped days** + dashed incomplete practice sheet |

Rules: thin line SVG illustrations (reference board), 120×72 viewBox, tomato accent only on the mistake, ink → white / cream accent when tile selected. Tile art height 76px.

---

## Build checklist

- [x] Six image tiles (`wrong_cat_*`) — parent-facing labels; unified wrong-reason SVG art
- [x] Multiselect inverted tile pattern (match worries)
- [ ] Back → Step 7 with selections restored
- [ ] Skip path: N/A — step hidden entirely if `history_none`

---

## QA

- [ ] Multiple selections stored as array
- [ ] Interstitial stubs can read `wrong_*` (even before INT7 ships)
