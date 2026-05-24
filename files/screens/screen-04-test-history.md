# Screen — Test history *(Step 4)*

**Status:** Built in Illuminairy (`?step=history`) — 2026-05-23  
**Placement:** After INT1 trust — seq **5** in master flow · `?step=history`  
**Spec:** [`funnel-intake-questions.md`](../funnel-intake-questions.md) Step 4

---

## Question

**Has {subject} taken the SAT or PSAT before?** *(single select · auto-advance)*

| Option | `id` | Branch |
|--------|------|--------|
| No — neither SAT nor PSAT | `history_none` | → **INT8** (`prep-failed-stub`) — skip prep/hours/score/wrong; self-study vs tutor bar · then GPA |
| PSAT only | `history_psat_only` | → prep (`?step=prep`) |
| Once | `history_once` | → prep |
| Twice | `history_twice` | → **INT3** (`?step=int3-retake`) → prep |
| Three or more times | `history_three_plus` | → **INT3** → prep |

**Headline pronouns:** she / he / you / they from Step 2.

**CTA:** Auto-advance on tap (grayed Continue).

---

## QA

- [ ] Headline matches `test_taker`
- [ ] `history_none` routes to INT8 (never-tested mirror copy), then GPA; tested paths → prep → INT8 → GPA
- [ ] Answer persisted as `test_history` in session state
- [ ] Fits 390×844 without scroll
