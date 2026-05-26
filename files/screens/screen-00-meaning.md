# Screen 00 — What would a stronger SAT score mean for you?

**Status:** Shipped (Illuminairy `/satplan`)  
**URL:** `https://illuminairy.com/satplan?step=meaning` · local `http://localhost:3000/satplan?step=meaning`  
**Layout rules:** [`files/funnel-layout-rules.md`](../funnel-layout-rules.md) — **read before changing CSS**

## Performance

See [`../funnel-performance.md`](../funnel-performance.md).

- [ ] Step transition from landing feels instant (no blank shell)
- [ ] Meta IAB smoke: IG + FB in-app browser, 390×844
- [ ] Sticky Continue visible without scrolling past options on 390×844

## Must-haves (do not ship without)

1. **Continue CTA always visible** — sticky footer (`funnel-shell--quiz`). See layout rules §1.
2. **Option-list multiselect** — stacked rows, Hims-style; `bodyVariant="option-list"` (not tile grid).
3. **Continue disabled** until at least one option selected.

## Options (order)

| # | Label | `id` |
|---|--------|------|
| 1 | More college options | `college_options` |
| 2 | Less stress before applications | `less_stress` |
| 3 | More confidence on test day | `test_confidence` |
| 4 | A score that matches their GPA | `match_gpa` |
| 5 | Peace of mind before deadlines | `peace_of_mind` |
| 6 | Feeling ready, not guessing | `feel_ready` |

## Code (Illuminairy)

| File | Role |
|------|------|
| `components/sat-plan/sat-plan-meaning.tsx` | Step UI + state |
| `lib/sat-plan-funnel/meaning-options.ts` | Option constants |
| `components/sat-plan/quiz-option-list.tsx` | Multiselect list body |

## Review checklist

- [ ] Headline: *What would a stronger SAT score mean for you?*
- [ ] Hint: *Select all that apply*
- [ ] Back → landing · Continue → worries
- [ ] Progress label: **QUESTION 1 OF 12**
- [ ] Answers persist in `sessionStorage` as `answers.meaning[]`

## Next step

- [screen-01-worries.md](screen-01-worries.md) · `?step=worries` · **Question 2 of 12**
