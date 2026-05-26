# Screen 02 — Who’s taking the SAT? *(Step 2)*

**Status:** Shipped in Illuminairy (`?step=who`) — mobile QA pending  
**Intake:** Step 2 in [`funnel-intake-questions.md`](../funnel-intake-questions.md)  
**Production target:** Illuminairy `/satplan?step=who`  
**Layout rules:** [`funnel-layout-rules.md`](../funnel-layout-rules.md)  
**Template:** [`quiz-step-template.md`](../quiz-step-template.md)  
**Prior step:** [screen-01-worries.md](screen-01-worries.md) (`?step=worries`) · entry after [screen-00-meaning.md](screen-00-meaning.md)  
**Next step:** Step 4 — INT1 trust ([`screen-int1-trust.md`](screen-int1-trust.md)) · `?step=trust`

---

## Purpose

One question only: set **who** is taking the test so all later copy uses the right pronouns (`{subject}`, `{possessive}`). No chapter divider. No combined score/GPA/retake wizard.

**Supersedes:** [screen-02-score-gpa-retakes.md](screen-02-score-gpa-retakes.md) and variant A/B docs (combo screen — **do not build**).

---

## Question

**Who’s taking the SAT?** *(single select · auto-advance)*

| Label | `id` | Copy after this |
|-------|------|-----------------|
| My daughter | `test_taker_daughter` | your daughter / she / her |
| My son | `test_taker_son` | your son / he / his |
| Me | `test_taker_self` | you / your |
| Someone else | `test_taker_other` | they / their |

Store as `test_taker` in funnel state.

---

## Shell

| Rule | Value |
|------|--------|
| Template | **`QuizStepTemplate`** |
| Chrome | **`FunnelShell`** — back → `worries`; progress; step label |
| Footer | **`FunnelCta`** — visible, **`continueDisabled={true}`** (grayed) |
| Body | **`QuizOptionList`** — four full-width rows |
| Advance | Tap option → ~300ms → Step 3 (target score) |

---

## Progress chrome

| Element | Copy |
|---------|------|
| Section label | TBD — or omit until chapter labels ship |
| Step label | `QUESTION 2 OF N` *(N = dynamic path length; see intake spec)* |

Do **not** use “Chapter 1” on this screen.

---

## Build checklist

- [x] Four options, single tap each
- [x] Auto-advance; grayed Continue never required
- [x] `test_taker` persisted (sessionStorage + router state)
- [x] Back returns to `worries` with selection restored if applicable
- [ ] Mobile 390×844 — one question + options; no wizard chips

---

## Illuminairy (when implementing)

| Piece | Location |
|-------|----------|
| Step | `components/sat-plan/steps/who-step.tsx` (name TBD) |
| Router | `lib/sat-plan-funnel/state.ts` — after `worries`, before `target` |

---

## QA

- [ ] Each option updates pronoun preview on Step 3 headline (smoke test after Step 3 exists)
- [ ] No child name field on this or any intake step
