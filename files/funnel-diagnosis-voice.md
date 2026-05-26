# Funnel diagnosis voice

Shift interstitial copy from **presentation** (anonymous cohorts) to **diagnosis** (we listened; here is the pattern for this family).

Production helpers: Illuminairy [`lib/sat-plan-funnel/diagnosis-copy.ts`](../../lib/sat-plan-funnel/diagnosis-copy.ts), [`prep-labels.ts`](../../lib/sat-plan-funnel/prep-labels.ts).

## Three opener patterns

| Pattern | Example |
|---------|---------|
| **Mirror intake** | "Based on what you shared…" / "You said he prepared with Group class." |
| **Profile cohort** | "Students with his profile (The Prepared-but-Stuck Retaker) typically…" |
| **Pattern authority** | "The pattern we usually see here is…" *(after mirror, before the fix)* |

## Allowed signals per step

Only reference answers the user has **already submitted** on that screen.

| Step region | Available signals | Do not use yet |
|-------------|-------------------|----------------|
| INT1 trust | `worries[]`, `test_taker`, `target_score` | score, wrong, GPA |
| INT8 (before `wrong`) | `prep_method`, `test_taker`, `target_score`, `test_history`, `recent_score` | `wrong_reasons` |
| Mistake-driven | + `wrong_reasons[]` | — |
| INT3 retake | + `test_history` | score on first view *(optional later)* |
| INT2, INT12, INT6 | + `recent_score`, `wrong_reasons`, `gpa_band`, `test_date` | — |
| Report | all intake fields | — |

## Before / after (group class fail)

**Before:** "students stuck in the 1100s and 1200s usually aren't struggling with everything equally."

**After:** "Based on what you shared (group class and a goal of 1300–1400), the pattern we usually see here is the same few skill gaps costing points, not weakness in every topic."

## Profile labels (logic-only INT7)

`diagnosisProfileId()` in code — no INT7 screen in spine. Labels: Thorough Achiever, High Ceiling, Stuck Retaker, Lost in the Middle, Tutor Hours No Plan, Anxious Performer, Specific Leaks, Focused Improver (fallback).

## Brand guardrails

- No SAT score guarantees; program stats stay in `lib/site.ts` **after** the mirror line.
- No fake precision (never invent a score from a band).
- Layout lock on step components — copy-only changes in `*-copy.ts` files.

## QA grep

```bash
rg "students stuck in the 1100|plateaued in the 1100" lib/sat-plan-funnel/
```

Expect zero matches after ship.
