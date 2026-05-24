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
| Body | **`QuizTileGrid`** — 6 tiles: Ran out of time · Struggled with stamina · Overthought · Math · Reading & writing · Not enough preparation |
| Footer | **`FunnelCta`** — enabled when ≥1 selected |
| Advance | Continue → Step 9 GPA |

---

## Build checklist

- [x] Six image tiles (`wrong_cat_*`) — parent-facing labels above; same art as INT13
- [x] Multiselect inverted tile pattern (match worries)
- [ ] Back → Step 7 with selections restored
- [ ] Skip path: N/A — step hidden entirely if `history_none`

---

## QA

- [ ] Multiple selections stored as array
- [ ] Interstitial stubs can read `wrong_*` (even before INT7 ships)
