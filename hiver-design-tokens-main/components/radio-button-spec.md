# Radio Button Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 334-1104
**Extracted:** 2026-03-08

---

## 1. Overview

Radio button component for single-selection within a group. The Figma section shows group-level frames containing 2–3 radio options each. Each individual radio symbol is 71×92px (includes label and optional helper text).

---

## 2. Variant Matrix

**Properties:**
- **Required**: True | False
- **Selected index**: 1 | 2 | 3

Total: 2 × 3 = **6 group variants**

| Required | Selected | Description |
|---|---|---|
| False | 1 | First option selected, no required mark |
| False | 2 | Second option selected, no required mark |
| False | 3 | Third option selected, no required mark |
| True | 1 | First option selected, required asterisk shown |
| True | 2 | Second option selected, required asterisk shown |
| True | 3 | Third option selected, required asterisk shown |

---

## 3. Individual Radio Item Dimensions

| Property | Value |
|---|---|
| Symbol width | 71px |
| Symbol height | 92px |
| Radio control size | 16 × 16px |
| Border-radius | 50% (circle) |
| Gap (control + label) | 8px |
| Layout | flex-row, items-center |
| Item padding | 4px 0 |

---

## 4. States (per item)

| State | Control Border | Control Fill | Label Color |
|---|---|---|---|
| Default (unselected) | `--slateBorderDefault` | transparent | `--slateTextDefault` |
| Default (selected) | `--primaryBorderDefault` | `--primarySurfaceDefault` (dot) | `--slateTextDefault` |
| Hover (unselected) | `--slateBorderHover` | `--slateSurfaceSubtle100` | `--slateTextDefault` |
| Hover (selected) | `--primaryBorderHover` | `--primarySurfaceDefault` (dot) | `--slateTextDefault` |
| Focus | `--primaryBorderFocus` (ring) | — | `--slateTextDefault` |
| Disabled (unselected) | `--slateBorderDefault` at 40% | transparent | `--slateTextDefault` at 40% |
| Disabled (selected) | `--primaryBorderDefault` at 40% | `--primarySurfaceDefault` at 40% | `--slateTextDefault` at 40% |
| Invalid | `--dangerBorderDefault` | transparent | `--slateTextDefault` |

---

## 5. Anatomy

```
○  Option label
   Helper text (optional)

◉  Option label               ← selected
   Helper text (optional)

○  Option label
   Helper text (optional)
```

### Control (circle)

| Property | Value |
|---|---|
| Outer circle size | 16 × 16px |
| Border | 1.5px solid (see states) |
| Border-radius | 50% |
| Background | transparent (unselected) / white (selected outer) |

### Selected dot (inner)

| Property | Value |
|---|---|
| Dot size | 6 × 6px |
| Color | `--primarySurfaceDefault` |
| Position | centered within outer circle |
| Border-radius | 50% |

---

## 6. Label

| Property | Value |
|---|---|
| Font | Hanken Grotesk Regular 14px/20px |
| Color | `--slateTextDefault` |
| Token | `Body/Small` |

### Required Marker

| Property | Value |
|---|---|
| Character | `*` |
| Color | `--dangerTextDefault` |
| Font | same as label |
| Position | after group label (not per item) |

---

## 7. Helper Text

| Property | Value |
|---|---|
| Font | Hanken Grotesk Regular 12px/18px |
| Color | `--slateTextSubtle` |
| Token | `Body/xSmall` |
| Margin-top | 2px (below label) |

---

## 8. Group Layout

| Property | Value |
|---|---|
| Direction | flex-col |
| Gap between items | 8px |
| Group label font | Hanken Grotesk Medium 14px/20px (`Label/Small`) |
| Group label color | `--slateTextDefault` |
| Group label margin-bottom | 8px |

---

## 9. Color Tokens

| Token | Usage |
|---|---|
| `--primarySurfaceDefault` | Selected dot fill, selected border |
| `--primaryBorderDefault` | Selected outer circle border |
| `--primaryBorderFocus` | Focus ring |
| `--slateBorderDefault` | Unselected border |
| `--slateBorderHover` | Hover border (unselected) |
| `--slateSurfaceSubtle100` | Hover background |
| `--slateTextDefault` | Label text |
| `--slateTextSubtle` | Helper text |
| `--dangerBorderDefault` | Invalid state border |
| `--dangerTextDefault` | Required asterisk |

---

## 10. Usage Notes

- Only one radio in a group can be selected at a time.
- Always provide a visible group label.
- Use `Required=True` when the field is mandatory — show the `*` on the group label.
- Radio groups should have at least 2 options; use a toggle/checkbox for binary choices.
- Minimum touch target: 24×24px around the control.
