# Screen — You’re in good hands *(INT1)*

**Status:** Built in Illuminairy (`?step=trust`) — lead + CTA in `int1-trust-copy.ts`

**Live copy (2026-05):**

- `recent_test` worry → “You're looking for help after a recent score came back too low.”
- Proof → “Most parents came to us to build a plan after their first SAT score came back too low.” (no “Families aiming for…” line)
- CTA → “Let's build {your son's | Max's | …} plan to hit **1400+**.”  
**Placement:** After `who` + `target` — seq **4** · `?step=trust`  
**Interstitial:** [`INT1`](../funnel-interstitials-noom-map.md)

---

## What this screen does

**One job:** Mom feels **seen** (her worry + her goal), trusts we’ve **done this before**, and wants the next questions.

**Formula:**

1. **Pain** — name what she’s worried about *(from `worries[]` — only if checked)*  
2. **Proof** — we’ve helped parents like her with that  
3. **Mechanism** — **custom plans** *(not generic prep)*  
4. **Goal** — **{target band}** for **{son/daughter/they}**  
5. **Bridge** — let’s figure out what **{subject}** needs  

Not a lecture. Not 182 stats here (INT6). Not “retake failed” unless **history** later says so.

---

## Primary template *(router fills tokens)*

> **We’ve helped [N] moms like you [pain_clause] — with custom plans that get their [child] to [target band] on the SAT.**  
> **Let’s figure out what {subject} needs.**

| Token | Source |
|-------|--------|
| `[N]` | Real count — **TBD**; hide entire “[N] moms” clause until verified |
| `[pain_clause]` | From **primary** `worries` id — table below |
| `[child]` | `daughter` / `son` / `student` / `them` from `who` |
| `[target band]` | Step 3 `target_*` label |
| `{subject}` | she / he / you / they from `who` |

**Optional eyebrow:** “You’re in good hands.” *(above or drop if lead is strong)*

**Optional credential (one line, small):** Georgia Tech mentors · **1450+** on the Digital SAT *(match `lib/site.ts`)*

**CTA:** Continue → **history**

---

## `[pain_clause]` by `worries` id

Use **highest-priority checked** id only. If **none** or multiselect without clear lead:

> **get a clear path to the SAT score they’re aiming for**

| `id` | Tile label | `[pain_clause]` |
|------|------------|-----------------|
| `stuck_score` | **Planning a retake** | **stop worrying about the retake** — and go in with a plan built for {subject} |
| `recent_test` | Recent score | **when the last score didn’t match what they know {subject} can do** |
| `upcoming_not_ready` | Upcoming test | **when the test date is closer than the prep** |
| `target_schools_low` | Below range | **when the score sits below where {subject} wants to apply** |
| `early_deadlines` | App deadlines | **when application deadlines and the SAT have to line up** |
| `not_prepped` | Haven’t started | **when they haven’t started and need a place to begin** |

**Priority if multiple checked:** `target_schools_low` → `stuck_score` → `upcoming_not_ready` → `early_deadlines` → `recent_test` → `not_prepped`

### `stuck_score` semantics *(locked)*

| Means | Does **not** mean |
|-------|-------------------|
| **Planning to retake** the SAT | Already retook and score “wouldn’t budge” |
| Forward-looking worry on INT1 | Past failure diagnosis *(that’s **INT3** when `history_twice+`)* |

**Tile label:** “Planning a retake” · id stays `stuck_score` for now.

---

## Full examples

### Planning retake + daughter + 1400–1500

> **We’ve helped [N] moms like you stop worrying about the retake — with custom plans that get their daughter to 1400–1500 on the SAT.**  
> **Let’s figure out what she needs.**

### Below-range schools + son + 1300–1400 *(no N yet)*

> **We’ve helped parents like you when the score sits below where their son wants to apply — with custom plans that get them to 1300–1400 on the SAT.**  
> **Let’s figure out what he needs.**

### Generic fallback *(no worries checked — edge case)*

> **We build custom SAT plans that get students to [target band] — starting with a few questions about where {subject} is today.**  
> **Let’s figure out what {subject} needs.**

---

## Voice / legal

| OK | Not OK |
|----|--------|
| “Working toward **[target band]**” / “get **to** [band]” | “**Will** score [band]” / guarantees |
| “Moms like you” if Meta audience is moms; else “**parents like you**” | “Accepted to target schools” |
| `[N]` with real methodology + footnote | Placeholder **XX** in production |
| *Results vary* if any outcome hint | **182 avg** on INT1 |

---

## QA

- [ ] `[target band]` required  
- [ ] `[pain_clause]` only from checked `worries[]` ids  
- [ ] `stuck_score` = **planning retake**, never “score wouldn’t budge” on INT1  
- [ ] INT3 (“retook without changing approach”) only after **history** confirms prior SAT attempts  
