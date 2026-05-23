# Funnel layout rules (all screens)

**Non-negotiable.** Apply to every new quiz/assessment step in the prototype (and on Next.js port).

**Template:** New screens start from [`quiz-step-template.md`](quiz-step-template.md) + `QuizStepTemplate` in `quiz-step-template.jsx` — only headline, hint, and body change per screen.

**Meta traffic:** Design for **390×844** standard mobile; **must** QA in Instagram/Facebook in-app browser before launch — see [`research/meta-in-app-browser-qa.md`](research/meta-in-app-browser-qa.md). Reels/Story safe zones do **not** apply to HTML.

## 1. Primary CTA — visible + thumb-friendly

### What “above the fold” means here

The user must **always see** the primary CTA without hunting below unrelated empty space.

**Do not** pin the CTA to the viewport bottom with a huge flex gap when the question content is short (that was a layout bug).

### Quiz shell pattern (`funnel-shell--quiz`)

| Layer | Behavior |
|-------|----------|
| Shell | `max-height: 100dvh`, `overflow: hidden` |
| Chrome | Header, progress, step label — fixed above scroll |
| `funnel-main` | Scrolls when content is tall |
| `funnel-quiz-body` | **Centered column** `max-width: 360px` — headline, answers, CTA share one axis |
| `funnel-footer` | **Directly under** the last answer (~16px gap); `position: sticky; bottom: 0` so it stays in the thumb zone when the user scrolls a long step |

### CTA placement — best practice (by context)

| Context | Pattern | Why |
|---------|---------|-----|
| **Mobile quiz (short step)** | CTA in flow, ~16–24px below last tile | Visual grouping; no dead lagoon band; thumb reaches grid → Continue in one motion |
| **Mobile quiz (long step)** | Same + **sticky bottom** on CTA | After scrolling options, action stays in lower third (iOS/Material “bottom action” zone) |
| **Desktop** | Same centered column; CTA after content | Mouse users expect action below the task; no need to glue to physical bottom of monitor |
| **Landing (Screen 00)** | Flowing CTA under hero (approved) | Message match; one scroll narrative — see `screen-00-landing.md` |

**Thumb zone (phones):** roughly lower 40% of the screen — sticky CTA is fine when scrolling; **avoid** floating it far below unrelated content on tall viewports.

### Landing (Screen 00)

Approved exception: **single flowing page**, CTA directly under score cards. See `files/screens/screen-00-landing.md`.

---

## 2. Screen 1 — worries grid (`?step=worries`)

Reference: `Downloads/screen-2/Screen 2.html`

| Rule | Value |
|------|--------|
| Column | `funnel-quiz-body` **360px max**, centered in `funnel-main` |
| Grid | 2×3, `gap: 8px`, `width: 100%` of column |
| Art stage | `--tile-art-h: 62px`; `worry-ico-box` max **54×124px**, centered on every tile |
| Label gap | `--tile-label-gap: 10px` between art and tile label |
| Unselected | Cream `#f3e8d2` |
| Selected | Ink background, white label, tomato corner ✓ only when selected |
| CTA gap | `margin-top: 16px` on footer (not viewport-bottom dock) |

---

## 3. Do not regress

- No footer as a **sibling** of `flex: 1` main (creates empty space + off-center CTA).
- No `aspect-ratio` tiles without `max-height`.
- No `width: 100%` on inner white score readouts.
- No always-visible checkbox on unselected tiles.

---

## 4. Review checklist (every quiz screen)

- [ ] Grid and CTA share the same centered column (not left-aligned grid + full-bleed button)
- [ ] ~16px between last answer and Continue on phone and desktop
- [ ] Tall content: CTA sticks to bottom while scrolling; short content: no huge empty band
- [ ] **390×844 Safari** — CTA visible and aligned
- [ ] **Instagram + Facebook in-app browser** (real device) — CTA not hidden under app chrome
- [ ] Sticky CTA uses `max(16px, env(safe-area-inset-bottom))` — do not rely on insets alone
- [ ] Primary button ≥ 48px tap height
