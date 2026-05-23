# QA — Landing (Screen 00) + Screen 1 (Worries)

**Date:** 2026-05-23  
**URL:** `http://localhost:8765/Landing.html`  
**Viewports tested (automated):** 390×844, 390×640, 375×667  

---

## Screen 00 — Landing

| Check | 390×844 | 390×640 (IAB-ish) | Notes |
|-------|---------|-------------------|--------|
| Headline “High GPA, low SAT?” | Pass | Pass | Present, readable |
| Sub + credibility line | Pass | Pass | College Board line visible |
| Score cards hero | Pass | Pass | 1180 / 1400, OUT OF RANGE / COMPETITIVE |
| CTA “Get my answers” | Pass | **Scroll** | Flowing layout — not viewport-pinned (approved) |
| Micro “Free · 2 min…” | Pass | **Scroll** | Below CTA; bottom ~714px |
| CTA wired to assessment | Pass | — | Goes to `?step=worries` (not `alert`) |
| No quiz chrome on landing | Pass | Pass | No progress bar / Continue |
| `viewport-fit=cover` | Pass | — | In `Landing.html` |
| Full-width CTA in column | Pass | Pass | x=24, w=342 on 390px |

**Landing CTA position (390×844):** top y≈614, bottom≈683 → **in viewport** (~161px below CTA to micro).

**Landing on short height (390×640):** CTA + micro extend past 640px → user **must scroll**. Expected for approved **flowing** LP; flag for **Meta IAB** manual test (may need tighter hero or sticky LP CTA later).

**Verdict:** Pass at **standard mobile** (390×844). Document scroll on very short chrome for IG/FB manual QA.

---

## Screen 01 — What’s got you worried?

| Check | 390×844 | 375×667 | Notes |
|-------|---------|---------|--------|
| QUESTION 1 OF 14 | Pass | Pass | Uppercase step label |
| Headline + hint | Pass | Pass | |
| 6 tiles, 2×3 grid | Pass | Pass | All six present |
| Inverted selection + tomato corner ✓ | Pass | Pass | Multiselect 3+ tiles OK |
| No white checkbox when unselected | Pass | Pass | |
| Continue visible without hunting | Pass | Pass | y≈605, bottom≈659 on 844 |
| Grid + CTA same column | Pass | Pass | CTA x=48, w=294 (390); w=279 (375) |
| Back → landing | Pass | — | |
| Continue → chapter stub | Pass | — | (prior run) |
| Continue disabled when none selected | Not re-tested | — | Clear session to verify |

**Tile layout (390×844):**

- Column tiles x=24 / x=199, width≈167, gap=8  
- Art + label rhythm: fixed art row (62px) + 10px label gap (CSS)  
- App deadlines: visual pass in automation; **confirm on device** label not touching list  

**Verdict:** Pass at **390×844** and **375×667** for layout rules. **In review** for Brianna visual sign-off (tile art, copy).

---

## Bugs fixed before / during QA (already in build)

| Issue | Fix |
|-------|-----|
| `?step=landing` ignored stale session | `funnel-state.js` always syncs URL → storage |
| Quiz shell too tall on IAB first paint | `100svh` on `.funnel-shell--quiz` |
| CTA flush in IAB when inset=0 | `max(16px, env(safe-area-inset-bottom))` |

---

## Manual only (required before Meta spend)

- [ ] Instagram in-app browser — LP + Screen 1  
- [ ] Facebook in-app browser — LP + Screen 1  
- [ ] Real iPhone: App deadlines tile spacing  
- [ ] Cold-ad click: LP message match + one-tap into quiz  

Scripts: [`meta-in-app-browser-qa.md`](meta-in-app-browser-qa.md)

---

## How to re-run

```bash
cd "/Users/briannazajicek/Documents/Illuminairy/quizfunnel/prototype"
python3 -m http.server 8765
```

- Landing: `http://localhost:8765/Landing.html`  
- Screen 1: `http://localhost:8765/Landing.html?step=worries`  
- Reset state: DevTools → Application → delete `illuminairy_funnel_v1`

Hard refresh after CSS/JS changes (`styles.css?v=qa-svh`, `funnel-state.js?v=qa-router`).
