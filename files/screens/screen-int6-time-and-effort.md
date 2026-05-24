# Screen — Time, effort, and prediction *(INT6)*

**Status:** Spec draft  
**Interstitial:** [`INT6`](../funnel-interstitials-noom-map.md) — education parts **C + D** (Act 4 close / Act 5 open)  
**Stable step id:** TBD — e.g. `time-and-plan`  
**Inputs:** `target_*`, `score_*`, `test_date_*`, `hours_*`, weeks-to-exam (derived)

## Derived personalization

| Token | Source |
|-------|--------|
| `{gap_pts}` | Step 3 target band minus Step 7 score band (midpoint or conservative; document in router) |
| `{weeks}` | Weeks until `test_date_*` |
| `{hours_per_week}` | Timeline math from gap + weeks |
| `{hours_total}` | `{weeks}` × `{hours_per_week}` (or CB ~80 hr reference in footnote) |

## Voice (authoritative — no hedging)

**Parent voice:** “get {possessive} score up” · “improve {possessive} score by **{gap_pts} points**” · “a **{gap_pts}-point** score gain”

**Banned in UI:** **meaningful**, **jump**, **real**, **most**, **some**, **many**, **usually**, **often**, **commonly**, **typical** (unqualified), **families like yours**

**Pattern:** **“It takes…”** / **“That requires…”** — lead with **{subject}’s numbers**, not what “most families” do.

**Cramming:** **“more than a few weekends of cramming”** — not “one weekend” / “a cram weekend.”

---

## Job (primary aha + program proof)

This is the **example** of a required co-mixed insight: one screen, **their number** first, **our proof** second — not an insight after every question.

### Hero pair (locked structure)

Two beats on one screen. **Line 1 = gap. Line 2 = program outcome.** Then timeline / cramming / Continue.

| Beat | Role | Copy (primary) |
|------|------|----------------|
| **1 — Gap** | Personalize from intake | “You’ve got a **{gap_pts}-point** gap to {possessive} goal.” |
| **2 — Proof** | What the program has done for completers | “Students who **complete our 12-week program** improve by an **average of 182 points**.” |

**Alt gap lines (same job):** “**{gap_pts} points** stand between {subject} and **[target band]**.” · “To hit **[target band]**, {subject} needs to **improve by {gap_pts} points**.”

**Supporting (beat 3 — same screen, below hero):** “That takes **more than a few weekends of cramming** — **{weeks} weeks** at **{hours_per_week} hrs/week** on the right gaps.”

| Mom’s aha | Data / proof |
|-----------|----------------|
| Gap + 182 over 12 weeks | **{weeks} wk** × **{hours_per_week} hrs/wk**; CB **~80 hrs guided** → **200+ pt** *(footnote)*; **182 avg completers** *(footnote; 250+ footnote only)* |

**Wording note:** Avoid **“most of our students achieve…”** in UI — reads like a guarantee and skips the **completion** qualifier. Use **average of 182** + *results vary* footnote. Do not say every student hits 182.

**Organization / dusty-book narrative:** Screen 9 [`screen-09-kid-problem.md`](screen-09-kid-problem.md) — not duplicated here.

---

## INT6A — How long (copy checklist)

- [ ] **Hero line 1:** “You’ve got a **{gap_pts}-point** gap to {possessive} goal.”
- [ ] **Hero line 2:** “Students who **complete our 12-week program** improve by an **average of 182 points**.” *(disclaimer adjacent; 250+ footnote only)*
- [ ] **Headline (optional longer):** “**Improving {possessive} score by {gap_pts} points** takes **more than a few weekends of cramming** — and every hour has to be **aimed**, not random.”
- [ ] **Mom aha:** “It takes **{weeks} weeks** of focused work on the right gaps.”
- [ ] Footnote: College Board ~80 hr guided / 200+ pt *(legal sign-off)*
- [ ] **Program stat (UI):** “Students who **complete** the **12-week program** gain an **average of 182 points**.” — **250+ footnote only**; disclaimer adjacent
- [ ] `hours_*` personalization — no “usually”
- [ ] Graph: current → target; label **{gap_pts}**
- [ ] Large gap + short `{weeks}`: “**{gap_pts} points** in **{weeks} weeks** requires **{hours_per_week} focused hrs/week**.”

## Wrap — prediction + contact bridge

- [ ] Banner: “THE LAST SAT PREP PLAN THEY’LL NEED”
- [ ] Headline: path to **[target band]** by **[date]**
- [ ] Closing: “**{hours_per_week} hrs/week** for **{weeks} weeks** gets **{possessive} score up by {gap_pts} points**”
- [ ] CTA → contact gate → INT10 optional → INT11 → report

---

## Tone guardrails

- **Never** “meaningful” — use **`{gap_pts}`**
- **Never** hedge in body — ranges live in **footnotes**
- No score guarantees on timeline graph

## QA

- [ ] `{gap_pts}` fallback when target/score bands missing
- [ ] `test_date_not_planning` — still authoritative on *what it takes*, exploratory only on *whether* they test
