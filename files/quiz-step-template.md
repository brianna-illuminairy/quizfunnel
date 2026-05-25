# Quiz funnel — reusable components

**Design rule:** New screens swap **content inside fixed containers**, not new page layouts.

**Layout lock (Illuminairy):** Step files may only change copy and `bodyVariant`. Shell, spacing, and `funnel.css` are locked — see Illuminairy `components/sat-plan/LAYOUT.lock.md`. Enforced by `npm run funnel:layout-guard`.

## Component map

| Component | File | Owns |
|-----------|------|------|
| `FunnelCta` | `funnel-cta.jsx` | Primary button (landing + quiz). Arrow optional. |
| `FunnelShell` | `funnel-shell.jsx` | Back, wordmark, progress, step label, scroll, footer slot |
| `QuizStepTemplate` | `quiz-step-template.jsx` | Shell + headline / hint / body slots + default Continue |
| `QuizTileGrid` | `quiz-tile-grid.jsx` | 2×n multiselect tiles (body slot only) |
| `Landing` | `app.jsx` | LP copy + hero; uses `FunnelCta` |

**Do not** call `FunnelShell` from `screens/*` — use `QuizStepTemplate`.

## Layers

```
┌─ QuizStepTemplate ───────────────────────────────────────┐
│  FunnelShell (chrome)                                    │
│    headline slot                                         │
│    hint slot (optional)                                  │
│    quiz-step-body ← your screen (grid, inputs, copy)     │
│    footer ← FunnelCta (default) or custom footer         │
└──────────────────────────────────────────────────────────┘
```

## New screen checklist

1. Add step to `funnel-state.js` (`STEPS`).
2. Create `screens/your-step.jsx` with **only**:
   - Copy (headline, hint)
   - Body UI (reuse `QuizTileGrid`, or new body component)
   - State + `onContinue` handler
3. Wire route in `app.jsx`.
4. If new body pattern, add CSS under `.quiz-step-body` (not new shell rules).

## Example (multiselect)

```jsx
<QuizStepTemplate
  stepId="worries"
  headline="What's got you worried?"
  hint="Select all that apply"
  bodyVariant="tile-grid"
  continueDisabled={selected.length === 0}
  onContinue={handleContinue}
  onBack={onBack}
>
  <QuizTileGrid
    options={OPTIONS}
    selectedIds={selected}
    onToggle={toggle}
    groupLabel="…"
    hintId="quiz-step-hint-worries"
    renderIcon={(id) => <WorryIcon id={id} />}
  />
</QuizStepTemplate>
```

## Advance behavior (all quiz screens)

Every screen uses **`QuizStepTemplate`** → **`FunnelShell`** (back, wordmark, **same progress bar**, step label) + optional **`FunnelCta`** in the footer slot. Only headline, hint, and body change per screen. Sizing: shared `funnel-quiz-body` **360px** column + layout rules in [funnel-layout-rules.md](funnel-layout-rules.md).

| Screen type | `FunnelCta` | User action |
|-------------|-------------|-------------|
| **Multiselect** (e.g. worries) | Shown; **enabled** when ≥1 selected | Tap options → tap **Continue** |
| **Single select** (one question per step) | Shown; **always disabled** (grayed) | Tap option → **auto-advance** to next step (~300ms) |

**Do not** build combined multi-question steps on one URL. Legacy Screen 02 score/GPA/retake specs are **deprecated** — see [`funnel-intake-questions.md`](funnel-intake-questions.md).

### Template props (Illuminairy)

| Prop | Values | Notes |
|------|--------|-------|
| `bodyVariant` | `tile-grid` \| `option-list` \| `copy` | **Required.** Replaces deprecated `bodyClassName`. |
| `headlineTier` | `hero` (default) \| `compact` | **`copy` steps only.** Controls headline size in `funnel.css` — do not add per-screen `:has(.int8-…)` headline rules. |

### Copy interstitial pattern (INT8 proof, guided, self-study, etc.)

One layout for every education beat:

1. **`QuizStepTemplate`** — `bodyVariant="copy"`, **no `hint`** (reserved row collapses automatically).
2. **`headline` / `headlineNode`** — title only; use `headlineTier="compact"` only when a tall graphic needs a shorter title (group class, INT2/INT3/INT12).
3. **Body** — wrapper `quiz-step-trust-content` + paragraphs **`quiz-step-copy`** (16px tokens). **Do not** put intro paragraphs in the `hint` slot (hint is 15px / narrow — for question steps only).
4. **Media** — outer wrapper **`quiz-step-trust-graphic`**; spacing from `--quiz-gap-copy-media` only.
5. **Copy strings** — `lib/sat-plan-funnel/*-copy.ts`; screen-specific CSS only for the graphic/chart, not typography.

Different stories (Bloom proof vs guided plan) swap **body components and copy**, not shell spacing or font sizes.

| Mode | `onContinue` | `continueDisabled` |
|------|--------------|-------------------|
| Multiselect | handler | `true` until valid selection |
| Auto-advance | `() => {}` or no-op | `true` always (button visible, grayed) |

Body components (`QuizTileGrid`, `QuizOptionList`, etc.) call funnel `goTo(nextStep)` on the final single-select tap — not via the CTA click.

---

## Body patterns

| Pattern | Component / CSS |
|---------|-----------------|
| Multiselect grid | `QuizTileGrid` + `.quiz-tile-grid` |
| Single select list | `QuizOptionList` + `.quiz-option-list` |
| Stub / interstitial | `quiz-step-eyebrow` + `quiz-step-copy` |
| Image / chart / video | Outer wrapper **`quiz-step-trust-graphic`** — spacing via `--quiz-gap-copy-media` only |

## Landing

Landing stays on `.page` (centered column, different hero). It still uses **`FunnelCta`** so the button matches quiz steps.
