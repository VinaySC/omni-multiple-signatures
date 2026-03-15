# Toggle / Switch Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 334-1103
**Extracted:** 2026-03-08

---

## 1. Overview

Toggle switch for binary on/off states. Two sizes (Regular, Large) with 4 interaction states each, and both selected/unselected for each — 16 variants total.

---

## 2. Variant Matrix

**Properties:**
- **Size**: Regular | Large
- **Selected**: True | False
- **State**: Default | Hover | Disabled | Focus

Total: 2 × 2 × 4 = **16 variants**

---

## 3. Dimensions

| Size | Track Width | Track Height | Thumb Size | Thumb Offset (off) | Thumb Offset (on) |
|---|---|---|---|---|---|
| Regular | 32px | 16px | 12px | left: 2px | left: 18px |
| Large | 40px | 20px | 16px | left: 2px | left: 22px |

| Property | Regular | Large |
|---|---|---|
| Track border-radius | 8px (full pill) | 10px (full pill) |
| Thumb border-radius | 50% | 50% |
| Thumb color | `--slateTextWhite` | `--slateTextWhite` |
| Thumb box-shadow | `0 1px 3px rgba(0,0,0,0.2)` | `0 1px 3px rgba(0,0,0,0.2)` |

---

## 4. States

### Selected = False (Off)

| State | Track Background | Thumb Color | Notes |
|---|---|---|---|
| Default | `--slateSurfaceSubtle300` (`#cbd5e1`) | white | |
| Hover | `--slateSurfaceSubtle400` | white | Slightly darker track |
| Disabled | `--slateSurfaceSubtle200` at 40% | white at 40% | Cursor: not-allowed |
| Focus | `--slateSurfaceSubtle300` | white | Focus ring around track |

### Selected = True (On)

| State | Track Background | Thumb Color | Notes |
|---|---|---|---|
| Default | `--primarySurfaceDefault` (`#f97316`) | white | |
| Hover | `--primarySurfaceHover` | white | Slightly darker |
| Disabled | `--primarySurfaceDefault` at 40% | white | Cursor: not-allowed |
| Focus | `--primarySurfaceDefault` | white | Focus ring around track |

---

## 5. Focus Ring

| Property | Value |
|---|---|
| Style | `box-shadow: 0 0 0 2px <bg-color>, 0 0 0 4px <focus-color>` |
| Focus color (off) | `--slateBorderFocus` |
| Focus color (on) | `--primaryBorderFocus` |

---

## 6. Transition

| Property | Value |
|---|---|
| Thumb position | `transition: left 150ms ease-in-out` |
| Track color | `transition: background-color 150ms ease-in-out` |

---

## 7. With Label (optional)

When paired with a label:

| Property | Value |
|---|---|
| Layout | flex-row, items-center |
| Gap | 8px |
| Label position | right of toggle |
| Label font | Hanken Grotesk Regular 14px/20px (`Body/Small`) |
| Label color | `--slateTextDefault` |
| Disabled label color | `--slateTextDefault` at 40% |

---

## 8. Color Tokens

| Token | Usage |
|---|---|
| `--primarySurfaceDefault` | On track background |
| `--primarySurfaceHover` | On + hover track |
| `--primaryBorderFocus` | On focus ring |
| `--slateSurfaceSubtle300` | Off track background |
| `--slateSurfaceSubtle400` | Off + hover track |
| `--slateBorderFocus` | Off focus ring |
| `--slateTextWhite` | Thumb color |
| `--slateTextDefault` | Label text |

---

## 9. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Label | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |

---

## 10. Accessibility

| Property | Value |
|---|---|
| Role | `switch` |
| aria-checked | `true` / `false` |
| Keyboard | Space to toggle |
| Minimum touch target | 44×44px (padding around 32/16px track) |

---

## 11. Usage Notes

- Use **Regular** size as the default.
- Use **Large** size when the toggle is a primary control on the page (e.g., feature enable).
- Toggles take effect immediately — no submit button needed. Add a confirmation for destructive toggles.
- Always pair with a clear label describing the ON state.
