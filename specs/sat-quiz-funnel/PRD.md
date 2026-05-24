# PRD: SAT quiz funnel (Meta → consult)

- **Author:** Brianna / Illuminairy
- **Date:** 2026-05-24
- **Status:** in progress (production `/satplan` spine through INT8)
- **Full plan:** [`../../PLAN-sat-funnel.md`](../../PLAN-sat-funnel.md)
- **Ops playbook:** [`../../files/funnel-analysis.md`](../../files/funnel-analysis.md)

## Gary Tan stack review (go / no-go)

### Problem (acute, paid)

Georgia parents with high-GPA / low-SAT kids need a **credible, specific** path before spending ~$1k+ on tutoring. Cold Meta traffic will not buy from the homepage. They need message match, a personalized plan, and a **low-friction expert conversation** — not a checkout wall.

### User

Parent (buyer), 11th grader (subject). One ICP, one offer: SAT Accelerator.

### Wedge / insight

**GPA–SAT gap diagnosis** + on-screen plan in ~3 minutes, then **free 15-min plan review** with an SAT expert — not “take our quiz” generic DTC.

### Why now

August 2026 SAT window; May score disappointment; self-study failed.

### One metric (until PMF)

**`consult_booked`** — Calendly confirmed (same email as Supabase lead).

Leading indicators: `contact_submit`, `report_view`, `report → calendly_open`. Do **not** optimize Meta on contact alone.

### Smallest shippable test

1. Short LP (done) → assessment spine → contact → instant report → book CTA  
2. PostHog + GA4 on every step  
3. Supabase `leads` + Klaviyo on contact  
4. $200–500 Meta to measure **cost per booked call**, not CPL  

### Go / no-go after ~100 `report_view`

| Signal | Go | Pivot |
|--------|-----|-------|
| LP → start | >20% | Fix ad/LP match |
| Contact → report | >95% | Fix API/render |
| Report → booked | >10% | CTA, report quality, Calendly UX |
| Show rate | >60% | Reminders, qualification |

### Explicit non-goals (v1)

- Stripe on funnel, BNPL, full 18-screen v4 before data  
- SMS-as-only report delivery  
- Overnight autonomous agent loops on production  
- karpathy/autoresearch GPU runner  

## Success metrics

| Metric | Source | Target (hypothesis) |
|--------|--------|---------------------|
| Consult booked | Calendly + `consult_booked` | Primary |
| Report → booked | PostHog | >15% after baseline |
| Cost per booked call | Ads / books | TBD |
| Show → close (enroll) | Human on call | PMF signal post-funnel |

## Scope

### In scope (v1)

- **Production** at Illuminairy `/satplan` through assessment spine → contact → on-screen report → book call  
- Flow: assessment → **contact** → **on-screen report** → book call (may leave)  
- CRM: Supabase `leads`, Klaviyo profile + `SAT Funnel Contact` event  
- Analytics: PostHog + GA4; Meta pixel **bookings only**  
- Reactive interstitials (INT1, INT3, INT8 trilogy, etc.) per [`FUNNEL-MASTER-FLOW.md`](../../files/FUNNEL-MASTER-FLOW.md)  

### Out of scope (v1)

- Ecommerce checkout on funnel  
- Full v4 interstitial arc unless drop-off data requires it  
- National ads before Georgia message-match QA  
- Babel `quizfunnel/prototype/` — deprecated, not shipped  

## Brand / legal

- [`files/illuminairy_brand_kit_brief.md`](../../files/illuminairy_brand_kit_brief.md)  
- No score guarantees; 182 avg / 264 atypical with disclaimers when cited  
- TCPA on contact; privacy link  
- Facts from main repo [`lib/site.ts`](../../../lib/site.ts) when integrated  

## Open questions

- Default assessment path: **spine** vs full v4 (default **spine**; see PLAN)  
- GA4: same property vs funnel-only property  
- Son/neutral triptych art vs reusing daughter strip for all paths until art is ready  
