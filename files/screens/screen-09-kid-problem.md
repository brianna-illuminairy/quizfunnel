# Screen 9 — Prep blockers *(INT13)*

**Status:** Shipped (tile multiselect)  
**Interstitial:** [`INT13`](../funnel-interstitials-noom-map.md)  
**Stable step id:** `kid-problem`  
**URL:** `/satplan?step=kid-problem`  
**Placement:** After INT8 (tested path) · Before `score`

## Strategic job

Capture **what gets in the way** on self-study prep (not a long essay). Selections stored on `kid_problem_blocks` for report + future follow-up screens.

## UI

| Element | Spec |
|---------|------|
| Headline | Voice-aware: “What gets in **{possessive}** way most on SAT prep?” |
| Hint | Select all that apply |
| Body | 2×3 **image tile multiselect** (same pattern as worries) |
| CTA | Continue (disabled until ≥1 selected) |

## Options (6)

| id | Label |
|----|--------|
| `kid_block_time` | Time |
| `kid_block_focus` | Focus or stamina |
| `kid_block_anxiety` | Anxiety |
| `kid_block_math` | Math |
| `kid_block_reading` | Reading |
| `kid_block_prep` | Lack of preparation |

Illustrations: CSS mini-art in `kid-problem-icons.tsx` + `funnel.css` (`.ico-kid-*`).

## Routing

- Show when self-study prep selected and **not** `prep_class` (`shouldShowKidProblem`).
- Continue → `score`.
- Follow-up branch: `kid-problem-follow-up.ts` (stub; not wired yet).

## Removed (2026-05-24)

- Long-form copy (“The kid problem nobody talks about”, paragraph-per-sentence layout, em dashes).

## QA

- [ ] 390×844: six tiles + headline + CTA fit without scroll
- [ ] Multiselect + analytics `answer_ids`
- [ ] Selected state inverts tile art (ink background)
