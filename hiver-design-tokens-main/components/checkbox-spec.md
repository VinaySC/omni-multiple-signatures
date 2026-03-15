# Checkbox Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 334-1102
**Extracted:** 2026-03-08

---

## 1. Overview

Checkbox with label and optional helper text. Supports checked, unchecked, and indeterminate states. 52+ variants across boolean properties and interaction states.

---

## 2. Variant Matrix

**Properties:**
- **Checked**: True | False
- **Indeterminate**: True | False
- **Required**: True | False
- **Invalid**: True | False
- **State**: Default | Hover | Active | Focus | Disabled

> Note: `Checked=True` and `Indeterminate=True` are mutually exclusive in practice (indeterminate implies partially checked). `Invalid` applies to the unchecked/required unfilled case.

Total active variants: **52+** (some combinations excluded, e.g. Indeterminate + Invalid)

---

## 3. Dimensions

| Property | Value |
|---|---|
| Symbol width | 62–68px (label-width dependent) |
| Symbol height | 24px |
| Control size | 16 × 16px |
| Border-radius | 4px |
| Border width | 1.5px |
| Gap (control + label) | 8px |
| Layout | flex-row, items-center |

---

## 4. States

### Unchecked

| State | Border | Background | Check color |
|---|---|---|---|
| Default | `--slateBorderDefault` | transparent | — |
| Hover | `--slateBorderHover` | `--slateSurfaceSubtle100` | — |
| Active | `--primaryBorderDefault` | `--primarySurfaceSubtle` | — |
| Focus | `--slateBorderDefault` + focus ring | transparent | — |
| Disabled | `--slateBorderDefault` at 40% | transparent | — |

### Checked

| State | Border | Background | Check color |
|---|---|---|---|
| Default | `--primaryBorderDefault` | `--primarySurfaceDefault` | white |
| Hover | `--primaryBorderHover` | `--primarySurfaceHover` | white |
| Active | `--primaryBorderActive` | `--primarySurfaceActive` | white |
| Focus | `--primaryBorderDefault` + focus ring | `--primarySurfaceDefault` | white |
| Disabled | `--primaryBorderDefault` at 40% | `--primarySurfaceDefault` at 40% | white |

### Indeterminate

| State | Border | Background | Dash color |
|---|---|---|---|
| Default | `--primaryBorderDefault` | `--primarySurfaceDefault` | white |
| Hover | `--primaryBorderHover` | `--primarySurfaceHover` | white |
| Focus | `--primaryBorderDefault` + focus ring | `--primarySurfaceDefault` | white |
| Disabled | `--primaryBorderDefault` at 40% | `--primarySurfaceDefault` at 40% | white |

### Invalid (unchecked + required)

| State | Border | Background |
|---|---|---|
| Default | `--dangerBorderDefault` | transparent |
| Hover | `--dangerBorderHover` | `--dangerSurfaceSubtle` |
| Focus | `--dangerBorderDefault` + focus ring | transparent |

---

## 5. Check Mark

| Property | Value |
|---|---|
| Icon | Checkmark (✓) — 10×8px |
| Color | `--slateTextWhite` (white) |
| Position | centered in 16×16 control |

### Indeterminate Mark (dash)

| Property | Value |
|---|---|
| Shape | Horizontal line, 8×2px |
| Color | `--slateTextWhite` (white) |
| Position | centered in 16×16 control |

---

## 6. Focus Ring

| Property | Value |
|---|---|
| Style | `box-shadow: 0 0 0 2px white, 0 0 0 4px <focus-color>` |
| Unchecked focus | `--slateBorderFocus` |
| Checked / Indeterminate focus | `--primaryBorderFocus` |
| Invalid focus | `--dangerBorderFocus` |

---

## 7. Label

| Property | Value |
|---|---|
| Font | Hanken Grotesk Regular 14px/20px |
| Color | `--slateTextDefault` |
| Token | `Body/Small` |
| Disabled color | `--slateTextDefault` at 40% |

### Required Marker

| Property | Value |
|---|---|
| Character | `*` |
| Color | `--dangerTextDefault` |
| Position | immediately after label text |

---

## 8. Helper / Error Text (below checkbox)

| Property | Value |
|---|---|
| Margin-top | 4px |
| Font | Hanken Grotesk Regular 12px/18px |
| Helper color | `--slateTextSubtle` |
| Error color | `--dangerTextDefault` |
| Token | `Body/xSmall` |

---

## 9. Color Tokens

| Token | Usage |
|---|---|
| `--primarySurfaceDefault` | Checked/indeterminate background |
| `--primarySurfaceHover` | Checked hover bg |
| `--primarySurfaceActive` | Checked active bg |
| `--primarySurfaceSubtle` | Unchecked active bg |
| `--primaryBorderDefault` | Checked border |
| `--primaryBorderHover` | Checked hover border |
| `--primaryBorderFocus` | Checked focus ring |
| `--slateBorderDefault` | Unchecked border |
| `--slateBorderHover` | Unchecked hover border |
| `--slateSurfaceSubtle100` | Unchecked hover bg |
| `--dangerBorderDefault` | Invalid border |
| `--dangerBorderHover` | Invalid hover border |
| `--dangerSurfaceSubtle` | Invalid hover bg |
| `--dangerTextDefault` | Error text, required asterisk |
| `--slateTextDefault` | Label text |
| `--slateTextSubtle` | Helper text |
| `--slateTextWhite` | Check/dash mark color |

---

## 10. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Label | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Helper/Error | `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 11. Usage Notes

- Use `Indeterminate` for "select all" controls where some (but not all) children are checked.
- Use `Invalid=True` with an error message when validation fails (e.g., required checkbox not checked on form submit).
- Checkboxes are independent — use radio buttons when only one option can be selected.
- Keyboard: Space to toggle checked state.
- `aria-checked="mixed"` for indeterminate state.
