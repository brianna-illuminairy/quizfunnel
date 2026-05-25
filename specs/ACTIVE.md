# Active spec

**Current:** [`sat-quiz-funnel/SPEC.md`](sat-quiz-funnel/SPEC.md)  
**PRD:** [`sat-quiz-funnel/PRD.md`](sat-quiz-funnel/PRD.md)  
**Plan:** [`../PLAN-sat-funnel.md`](../PLAN-sat-funnel.md)  
**Memory:** [`../memory-bank/activeContext.md`](../memory-bank/activeContext.md)

## Sprint focus (2026-05-25)

**Phase A UI is shipped** in Illuminairy `/satplan` through the **book** step (full spine + tail screens). Focus shifts to:

1. **Phase B** — lead API, Supabase, Klaviyo, TCPA on contact, Calendly webhook  
2. **QA** — Meta IAB 390×844, Lighthouse per `files/funnel-performance.md`  
3. **Polish backlog** — son/neutral triptych, optional INT5/9/10, schools-step removal if approved

### Recently shipped (Illuminairy)

| Beat | `?step=` |
|------|----------|
| Wrong Q tiles | `wrong` |
| INT12 digital vs paper | `sat-changed` |
| INT2 GPA paradox | `gpa-paradox` |
| INT8 quartet | `prep-failed-*` |

### Permanent removals

- Study-hours Q (2026-05-24)
- INT13 kid-problem (2026-05) — do not reintroduce without explicit request

### Acceptance notes

- INT8: group-class **or** self-study → proof → guided → mistake-driven; Bloom on proof; bars from `lib/site.ts`
- Girl triptych when who = daughter or Me
- INT12 sits **after wrong** on tested path (not only on wrong-id `showIf`)
- Contrast asset sizes: [`../files/funnel-contrast-assets.md`](../files/funnel-contrast-assets.md)
