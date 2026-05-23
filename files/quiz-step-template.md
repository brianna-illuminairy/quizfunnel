# Quiz funnel — reusable components

**Design rule:** New screens swap **content inside fixed containers**, not new page layouts.

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
  bodyClassName="quiz-step--tile-grid"
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

## Body patterns

| Pattern | Component / CSS |
|---------|-----------------|
| Multiselect grid | `QuizTileGrid` + `.quiz-tile-grid` |
| Single select list | `.quiz-options` (legacy) |
| Stub / interstitial | `quiz-step-eyebrow` + `quiz-step-copy` |

## Landing

Landing stays on `.page` (centered column, different hero). It still uses **`FunnelCta`** so the button matches quiz steps.
