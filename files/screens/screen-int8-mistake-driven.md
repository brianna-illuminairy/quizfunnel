# Screen — INT8 mistake-driven (`prep-failed-mistake-driven`)

**Production:** `components/sat-plan/sat-plan-int8-mistake-driven.tsx` · copy `lib/sat-plan-funnel/int8-mistake-driven-copy.ts` · facts `lib/site.ts` → `satMistakeDrivenResearch`

## Placement

- **Tested:** after `wrong`; before `sat-changed`
- **Never-tested:** after `prep-failed-guided`; before `sat-changed` (no `wrong` step)

## Data available at this step

| Field | Used in intro |
|--------|----------------|
| `student_first_name` | “For students like Max” |
| `test_history` | SAT / PSAT / not yet |
| `prep_method` | “using Khan Academy and …” |
| `target_score` | “still need to reach 1300–1400” (tested) or “aiming for …” (not yet) |
| `recent_score` | Available on tested path (collected before prep) |
| `wrong_reasons` | Available on tested path (collected on prior step) — optional echo in copy later |

## Copy rules

- [x] **Above graphic:** one lecture-unlikely sentence only; “For students like {name}” / your son / daughter; history + prep + target clauses; no em dash; no “your student”
- [x] Tested + concrete target: “still need to reach {band}” (goal gap, not claimed current score)
- [x] Never-tested / PSAT-only: “aiming for {band}”
- [x] **Below graphic:** needs-tutor closing — he/she/they/you + correct verb agreement; identify → teach → practice until independent
- [x] No diagnosis profile label, Bloom block, or 100–250 point claim on this screen

## QA strings (example)

Parent, name Max, SAT once, Khan + Bluebook, target 1400–1500 — **intro:**

> For students like Max, who've already taken the SAT once, using Khan Academy and Bluebook, and still need to reach 1400–1500, lecture-based learning is unlikely to move the needle.

**closing (son):**

> He needs someone to identify what he's getting wrong, teach him so he understands it, and then practice with him until he can solve them on his own.

## Nav

- [ ] Back → guided; Continue → score or sat-changed
