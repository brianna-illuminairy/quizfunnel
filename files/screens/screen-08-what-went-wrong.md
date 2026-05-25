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

Dashboard readouts in `components/sat-plan/wrong-reason-icons.tsx` — same white mini-panel pattern as Screen 1 worries (`ico-wrong-*` + `funnel.css`).

| Option ID | Label | Widget |
|-----------|--------|--------|
| `wrong_cat_math` | Math | `MATH` · 2x² + 3x **?** · tomato underline |
| `wrong_cat_reading` | Reading & Writing | `READING` · passage lines · italic *who,* |
| `wrong_cat_anxiety` | Test Anxiety | `HEART RATE` · spike · **142** BPM |
| `wrong_cat_time` | Ran out of time | `TIME LEFT` · **0:14** MIN · low progress bar |
| `wrong_cat_focus` | Focus or Stamina | `BATTERY` · **12%** fill |
| `wrong_cat_prep` | Lack of preparation | `PRACTICE TESTS` · **0** / 8 TAKEN · empty slots |

Rules: mono uppercase `.lbl`, display `.val` in tomato, white panel on cream tile; selected tile keeps cream panel. Tile art height 76px.

---

## Build checklist

- [x] Six image tiles (`wrong_cat_*`) — parent-facing labels; dashboard `ico-wrong-*` widgets
- [x] Multiselect inverted tile pattern (match worries)
- [ ] Back → Step 7 with selections restored
- [ ] Skip path: N/A — step hidden entirely if `history_none`

---

## QA

- [ ] Multiple selections stored as array
- [ ] Interstitial stubs can read `wrong_*` (even before INT7 ships)
