# Screen — Test history *(Step 4)*

**Status:** Built in Illuminairy (`?step=history`) — 2026-05-23  
**Placement:** After INT1 trust — seq **5** in master flow · `?step=history`  
**Spec:** [`funnel-intake-questions.md`](../funnel-intake-questions.md) Step 4

---

## Question

**Tell us about {possessive} prior SAT attempts** *(single select · auto-advance; PSAT-only remains an option)*

Hint when Step 1 included **Recent score** (`recent_test`): *You mentioned a recent score — we'll ask for that on the next step.*

| Option | `id` | Branch |
|--------|------|--------|
| Not yet — no SAT or PSAT | `history_none` | → **INT8 quartet** — skip prep/score/wrong · then sat-changed → GPA |
| PSAT only (not SAT yet) | `history_psat_only` | → prep (`?step=prep`) |
| SAT once | `history_once` | → prep |
| SAT twice | `history_twice` | → **INT3** (`?step=int3-retake`) → prep |
| SAT 3+ times | `history_three_plus` | → **INT3** → prep |

**Headline pronouns:** she / he / you / they from Step 2.

**CTA:** Auto-advance on tap (grayed Continue).

---

## QA

- [ ] Headline matches `test_taker`
- [ ] `history_none` routes to INT8 (never-tested mirror copy), then sat-changed; tested paths → score → prep → INT8 → wrong → sat-changed → GPA
- [ ] Answer persisted as `test_history` in session state
- [ ] Fits 390×844 without scroll
