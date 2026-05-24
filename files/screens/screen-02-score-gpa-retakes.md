# Screen 02 — Score, GPA, and retakes

> **⛔ DEPRECATED — do not build.** Product reverted the combo-screen idea. **Next screen = Step 2 Who only:** [`screen-02-who.md`](screen-02-who.md) + [`funnel-intake-questions.md`](../funnel-intake-questions.md). Kept for history only.

**Status:** Superseded by [funnel-intake-questions.md](../funnel-intake-questions.md) (intake reordered; one question per step).  
**v4 reference:** Screen 3 in [illuminairy_funnel_v4_final.md](../illuminairy_funnel_v4_final.md)  
**Production target:** Illuminairy `?step=score-gpa-retakes` (replace `chapter1-stub`)  
**Layout rules:** [funnel-layout-rules.md](../funnel-layout-rules.md)  
**Template:** [quiz-step-template.md](../quiz-step-template.md)  
**Prior step:** [screen-01-worries.md](screen-01-worries.md)  
**Next step (v4):** How they prepped last time (single select, auto-advance)

---

## Purpose

Capture three bands in one funnel step so later interstitials can branch on **GPA–SAT gap** (e.g. GPA ≥ 3.5 band and SAT below 1300). Parent uses **approximate ranges only** — no exact score typing.

**No insight / education on this screen** — GPA–SAT gap copy lives on **v4 Screen 6** interstitial, not here (see competitor “reject” notes below).

---

## Routing

| | |
|---|---|
| **Enters from** | Screen 01 — Continue on `worries` |
| **Skips** | v4 chapter divider (Path A) |
| **Exits to** | v4 Screen 4 — how they prepped (auto-advance on retakes tap) |
| **Back (header)** | From sub-question 1 with no chips → `worries`. From sub-question 2+ → previous sub-question (see Back) |

---

## Progress chrome

| Element | Copy |
|---------|------|
| Section label | `WHY THEY SCORED LOW` |
| Step label | `QUESTION 2 OF 14` |
| Progress bar fill | ~14% (static for entire wizard; chips show micro-progress) |

Do **not** use “Chapter” in parent-facing UI.

---

## Shell (shared template — no one-off layout)

| Rule | Value |
|------|--------|
| Template | **`QuizStepTemplate`** only |
| Chrome | **`FunnelShell`** — same back, wordmark, **progress bar**, step label as worries |
| Footer | **`FunnelCta`** — visible, **`continueDisabled={true}`** (grayed) entire step |
| Body | **`QuizCapturedChips`** (new) + **`QuizOptionList`** (new) for **one active question** |
| Column | `funnel-quiz-body` **360px max** |

---

## Body layout (wizard)

```
┌─ QuizStepTemplate ─────────────────────────────┐
│  FunnelShell: back · progress · QUESTION 2/14  │
│  headline (optional)                           │
│  ┌─ QuizCapturedChips ─────────────────────┐   │
│  │ [SAT 1100–1200 ✎] [GPA 3.8–4.0 ✎]      │   │  ← grows left→right; empty on load
│  └─────────────────────────────────────────┘   │
│  ┌─ active question label ──────────────────┐   │
│  │ What was their most recent SAT score?   │   │  ← only ONE question block visible
│  └─────────────────────────────────────────┘   │
│  ┌─ QuizOptionList (5 or 3 rows) ──────────┐   │
│  │  … stacked full-width rows …            │   │
│  └─────────────────────────────────────────┘   │
│  FunnelCta (grayed Continue)                   │
└────────────────────────────────────────────────┘
```

Answered questions **do not stay visible** as option lists — only as chips.

---

## Summary chips

| Chip prefix | Example | Source question |
|-------------|---------|-----------------|
| `SAT` | `SAT 1100–1200` | Q1 |
| `GPA` | `GPA 3.8–4.0` | Q2 |
| `Retakes` | `Retakes · Twice` | Q3 |

- Each chip has a small **edit control** (✎ icon or “Edit” — visual design TBD).
- Chips wrap on narrow viewports; min tap target on edit ≥ 44px including icon hit area.
- **No** bare numbers without domain prefix.

---

## Copy — active questions

### Q1 — SAT (single select)

**What was their most recent SAT score?**

| Label | `id` |
|-------|------|
| Below 1000 | `sat_below_1000` |
| 1000–1100 | `sat_1000_1100` |
| 1100–1200 | `sat_1100_1200` |
| 1200–1300 | `sat_1200_1300` |
| 1300+ | `sat_1300_plus` |

### Q2 — GPA (single select)

**What’s their approximate GPA?**

| Label | `id` |
|-------|------|
| Below 3.0 | `gpa_below_3` |
| 3.0–3.5 | `gpa_3_3_5` |
| 3.5–3.8 | `gpa_3_5_3_8` |
| 3.8–4.0 | `gpa_3_8_4` |
| 4.0+ | `gpa_4_plus` |

### Q3 — Retakes (single select)

**How many times have they taken it?**

| Label | `id` |
|-------|------|
| Once | `retakes_once` |
| Twice | `retakes_twice` |
| Three or more | `retakes_three_plus` |

### Page headline (optional)

**Tell us about their scores** — or question-only (no headline); chips carry context after Q1.

### Hint (optional)

Tap the closest range — exact numbers aren’t required.

---

## Interaction spec (locked)

### Forward flow

1. **Load:** no chips; **Q1 SAT** active; grayed Continue.
2. **SAT tap:** SAT chip appears; Q1 UI **removed**; **Q2 GPA** active (~300ms transition).
3. **GPA tap:** GPA chip appears; Q2 UI removed; **Q3 retakes** active.
4. **Retakes tap:** Retakes chip appears briefly (optional) → patch state → **`goTo` Screen 4** (~300ms). No CTA tap.

### Chip edit (rewind + re-walk forward)

Same behavior as competitor “edit goal score → go back to that step → come forward again,” applied to any chip on this screen:

| Action | Result |
|--------|--------|
| Tap **edit on SAT chip** | Remove SAT chip; clear **GPA + retakes** chips and stored values; show **Q1 SAT** again |
| Tap **edit on GPA chip** | Remove GPA chip; clear **retakes** chip and value; show **Q2 GPA** again (SAT chip stays) |
| Tap **edit on Retakes chip** | Only if shown before auto-advance fires — remove retakes chip; show **Q3** again |

After re-selecting on the reopened question: **same forward flow** from that point (chip → next question → … → auto-advance on retakes).

**Do not** open an inline dropdown on the chip — always rewind to the full question UI (competitor pattern).

### Header Back

| Current sub-question | Back behavior |
|---------------------|---------------|
| Q1, no chips | → `worries` |
| Q2 | → Q1 (SAT chip cleared if was set; same as edit SAT from Q2) |
| Q3 | → Q2 (GPA chip cleared; SAT chip kept) |

### Option UI

- **Stacked full-width rows**, ≥48px, cream → ink selected.
- **Not** 2×3 grids (reference competitor uses grids; we reject for 5-band IAB).
- `role="radiogroup"` + `aria-checked` on rows.

### CTA

- **`FunnelCta` always visible, always disabled** — layout consistency only; exit is always option tap.

---

## State

### Step id

`score-gpa-retakes`

### Internal wizard index (UI only)

`activeQuestion: "sat" | "gpa" | "retakes"`

### Answers (persisted)

```ts
{
  satBand?: string;      // sat_* id
  gpaBand?: string;      // gpa_* id
  retakeCount?: string;  // retakes_* id
}
```

Patch complete object on retakes tap before `goTo`. Clear downstream fields on chip edit / Back as specified above.

---

## Analytics

| Event | When | Properties |
|-------|------|------------|
| `intake_step_view` | Step mount | `step_id`, `layout: wizard-chips` |
| `intake_sub_answer` | Each forward tap | `field`, `value`, `sub_index` 1–3 |
| `intake_sub_edit` | Chip edit tap | `field` reopened |
| `intake_step_complete` | Retakes tap → navigate | `sat_band`, `gpa_band`, `retake_count` |

---

## Competitor reference — borrow / reject

| Reference pattern | Verdict |
|-------------------|---------|
| Summary chips + edit (✎) | **Borrow** — rewind to question, re-walk forward |
| One active question in body | **Borrow** |
| Chips persist, answered Q hidden | **Borrow** (stricter than reference screenshot 1) |
| Insight box mid-intake (+75 pts, testimonial) | **Reject** → v4 Screen 6 |
| “10 SPOTS LEFT”, fake scarcity | **Reject** — brand rules |
| Booking headline on diagnostic step | **Reject** |
| 2×3 option grids | **Reject** — use stacked rows |
| Separate URL per sub-question | **Optional A/B** — default is one URL wizard |

---

## Must-haves

1. Same **`QuizStepTemplate` / `FunnelShell` / `FunnelCta`** as all quiz steps.
2. **One active question** — answered groups collapse to chips only.
3. **Chip edit** = rewind to that question, clear downstream, re-walk forward.
4. **Auto-advance** on retakes tap; grayed Continue throughout.
5. **No** insight/education copy on this screen.
6. **360px** column, **48px+** rows, IAB QA.

---

## Out of scope

- Visual design of chips (pill styling TBD in brand tokens)
- Target score question (reference `TARGET 1400+` — not in v4 Screen 3; add elsewhere if needed)
- Three separate URL steps (A/B fallback only)

---

## QA checklist

- [ ] Forward: SAT → GPA → retakes → auto-advance without CTA tap
- [ ] After each answer, **previous question UI is gone** (only chip remains)
- [ ] Edit SAT from Q3: clears GPA + retakes, re-asks from SAT
- [ ] Edit GPA from Q3: clears retakes only, re-asks GPA
- [ ] Header Back from Q2 → Q1; from Q1 → worries
- [ ] Grayed Continue visible entire step
- [ ] 390×844 + IG/FB IAB

---

## Implementation map (when building)

| Piece | Location |
|-------|----------|
| Step | `components/sat-plan/steps/score-gpa-retakes-step.tsx` |
| Chips | `components/sat-plan/quiz-captured-chips.tsx` (new) |
| Options | `components/sat-plan/quiz-option-list.tsx` (new) |
| State / router | `lib/sat-plan-funnel/`, `sat-plan-funnel.tsx` |
| CSS | `app/satplan/funnel.css` — `.quiz-captured-chips`, `.quiz-option-list` |
