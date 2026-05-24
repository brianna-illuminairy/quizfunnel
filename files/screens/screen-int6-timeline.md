# Screen — Timeline until test *(INT6-timeline)*

**Status:** Spec draft  
**Placement:** **Next screen immediately after** `test-date` Q — not batched with other insights  
**Interstitial:** [`INT6-timeline`](../funnel-interstitials-noom-map.md) — education part **C**  
**Stable step id:** `timeline`

## Trigger

Always follows **test date** question on tested and never-tested paths.

## Derived inputs

| Token | Source |
|-------|--------|
| `{days}` | Calendar days until selected `test_date_*` |
| `{weeks}` | Rounded weeks until exam |
| `{date_label}` | Human date from intake |

## Job (one screen, one aha)

| Mom’s aha | Copy direction |
|-----------|----------------|
| “That’s **{weeks} weeks** — **{days} days** — until **[date_label]**.” | Countdown lands the urgency |
| “For a runway like that, a **typical** guided plan runs **{hours_per_week} hrs/week** on **their** gaps — not random review.” | Tie to timeline, not 182 yet (182 lives on **`plan-path`** after schools) |

**Do not** pack gap + 182 + graph on this screen — that’s **`plan-path`**.

## Copy checklist

- [ ] Headline uses **{weeks}** and/or **{days}** from their date pick
- [ ] “Typical” / hrs-week band — **footnote** for CB ~80 hr reference if cited
- [ ] `test_date_not_sure` variant — softer: “Once you pick a date, we’ll map weeks to hours”
- [ ] `test_date_not_planning` — exploratory tone only
- [ ] Single Continue → **schools** Q (tested path)

## QA

- [ ] Never appears back-to-back with another I (must follow Q `test-date` only)
