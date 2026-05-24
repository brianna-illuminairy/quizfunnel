# Screen 03 — Target score *(Step 3)*

**Status:** Shipped in Illuminairy (`?step=target`) — mobile QA pending  
**Intake:** Step 3 in [`funnel-intake-questions.md`](../funnel-intake-questions.md)  
**Production target:** Illuminairy `/satplan?step=target`  
**Layout rules:** [`funnel-layout-rules.md`](../funnel-layout-rules.md)  
**Template:** [`quiz-step-template.md`](../quiz-step-template.md)  
**Prior step:** [screen-02-who.md](screen-02-who.md) (`?step=who`)  
**Next step:** Step 4 — INT1 trust ([`screen-int1-trust.md`](screen-int1-trust.md)) · `?step=trust`

---

## Purpose

Lock an **aspirational target band** before diagnosis questions. Headline uses **{subject}** pronoun from Step 2 (`he` / `she` / `you` / `they`).

---

## Question

**What score is {subject} aiming for?** *(single select · auto-advance)*

| Label | `id` |
|-------|------|
| 1200–1300 | `target_1200_1300` |
| 1300–1400 | `target_1300_1400` |
| 1400–1500 | `target_1400_1500` |
| 1500+ | `target_1500_plus` |
| Not sure yet | `target_not_sure` |

Store as `target_score` in funnel state.

### Headline by `test_taker`

| `test_taker` | Headline |
|--------------|----------|
| `test_taker_daughter` | What score is she aiming for? |
| `test_taker_son` | What score is he aiming for? |
| `test_taker_self` | What score are you aiming for? |
| `test_taker_other` | What score are they aiming for? |
| *(missing)* | What score are you aiming for on the SAT? |

---

## Shell

| Rule | Value |
|------|--------|
| Template | **`QuizStepTemplate`** |
| `bodyVariant` | `option-list` |
| Footer | **`FunnelCta`** — visible, **`continueDisabled={true}`** |
| Body | **`QuizOptionList`** — five full-width rows |
| Advance | Tap option → ~300ms → Step 4 (INT1 trust) |

---

## Progress chrome

| Element | Copy |
|---------|------|
| Step label | `QUESTION 3 OF 14` |

---

## Build checklist

- [x] Five options, single tap each
- [x] Auto-advance; grayed Continue
- [x] `target_score` persisted
- [x] Headline personalized from `test_taker`
- [x] Back returns to `who` with selection restored
- [ ] Mobile 390×844 — five options fit viewport without scroll

---

## Illuminairy

| Piece | Location |
|-------|----------|
| Step | `components/sat-plan/sat-plan-target.tsx` |
| Options | `lib/sat-plan-funnel/target-score-options.ts` |
| Headline | `lib/sat-plan-funnel/personalization.ts` |
| Router | `who` → `target` → `trust-stub` (INT1 placeholder) |

---

## QA

- [ ] Change `test_taker` on Step 2 → Step 3 headline updates
- [ ] `?step=target-stub` redirects to `target` (legacy alias)
