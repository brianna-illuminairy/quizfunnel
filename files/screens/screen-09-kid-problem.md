# Screen 9 — Prep blockers *(INT13)* — **REMOVED**

**Status:** Removed from production funnel (2026-05). **Do not reintroduce unless Brianna explicitly requests.**

Previously included:
- `int13-kid-problem` — interstitial “The kid problem nobody talks about.”
- `kid-problem` — 6-tile multiselect (`kid_problem_blocks`)

**Current routing:** After INT8 (tested path) → `score` directly. Legacy URLs `?step=int13-kid-problem` and `?step=kid-problem` redirect to `score`.

Component source archived in git history; `kid_problem_blocks` answer key retained for old sessions / report summary only.
