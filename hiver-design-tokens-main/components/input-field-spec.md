# Input Field Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 334-1101
**Extracted:** 2026-03-08

---

## 1. Overview

Text input field with label, optional prefix/suffix elements, helper/error text, and compact variant. 70+ variants across states, placeholder, element position, and size.

---

## 2. Variant Matrix

**Properties:**
- **State**: Default | Hover | Focus | Invalid | Validated | Disabled
- **Placeholder**: True | False
- **Element**: None | Before | After
- **Compact**: True | False

Total: 6 × 2 × 3 × 2 = **72 variants**

---

## 3. Dimensions

### Standard (Compact=False)

| Property | Value |
|---|---|
| Width | 240px |
| Height | 40px |
| Border-radius | 6px |
| Border | 1px solid |
| Padding | 10px 12px |
| Padding with element Before | 10px 12px 10px 36px |
| Padding with element After | 10px 36px 10px 12px |

### Compact (Compact=True)

| Property | Value |
|---|---|
| Width | 238–240px |
| Height | 32px |
| Border-radius | 6px |
| Border | 1px solid |
| Padding | 6px 12px |
| Padding with element | same offset as standard |

### With Validation / Error Message

When `State=Invalid` or `State=Validated`, an inline message appears below:

| Property | Value |
|---|---|
| Additional height | +18–20px (message line) |
| Total height (standard) | 58–60px |
| Total height (compact) | 50–52px |
| Gap (input + message) | 4px |

---

## 4. States

| State | Border | Background | Text color | Notes |
|---|---|---|---|---|
| Default | `--slateBorderDefault` | `--slateSurfaceWhite` | `--slateTextDefault` | |
| Hover | `--slateBorderHover` | `--slateSurfaceWhite` | `--slateTextDefault` | |
| Focus | `--primaryBorderDefault` | `--slateSurfaceWhite` | `--slateTextDefault` | Focus ring outside |
| Invalid | `--dangerBorderDefault` | `--slateSurfaceWhite` | `--slateTextDefault` | Error icon + message |
| Validated | `--successBorderDefault` | `--slateSurfaceWhite` | `--slateTextDefault` | Success icon + message |
| Disabled | `--slateBorderDefault` | `--slateSurfaceSubtle100` | `--slateTextDefault` at 40% | Cursor: not-allowed |

---

## 5. Focus Ring

| Property | Value |
|---|---|
| Style | `box-shadow: 0 0 0 3px <focus-color>` |
| Color | `--primaryBorderFocus` (rgba, low opacity) |

---

## 6. Placeholder vs Value

### Placeholder=True

| Property | Value |
|---|---|
| Text color | `--slateTextPlaceholder` |
| Font | Hanken Grotesk Regular 14px/20px |

### Placeholder=False (has value)

| Property | Value |
|---|---|
| Text color | `--slateTextDefault` |
| Font | Hanken Grotesk Regular 14px/20px |

---

## 7. Element Variants

### Element=Before (prefix)

| Property | Value |
|---|---|
| Position | absolute, left: 12px, vertically centered |
| Type | Icon (16px) or text prefix (e.g. "$", "+1") |
| Icon color | `--slateTextSubtle` |
| Input padding-left | 36px |
| Separator | none (icon floats inside input) |

### Element=After (suffix)

| Property | Value |
|---|---|
| Position | absolute, right: 12px, vertically centered |
| Type | Icon (16px) — clear button, search, show/hide password |
| Icon color | `--slateTextSubtle` |
| Input padding-right | 36px |

### Element=None

No prefix or suffix element. Standard padding applies.

---

## 8. Label

| Property | Value |
|---|---|
| Position | above input |
| Margin-bottom | 6px |
| Font | Hanken Grotesk Medium 14px/20px |
| Color | `--slateTextDefault` |
| Token | `Label/Small` |
| Required marker `*` | `--dangerTextDefault`, after label |
| Disabled label color | `--slateTextDefault` at 40% |

---

## 9. Helper / Error / Success Text

| Property | Value |
|---|---|
| Position | below input |
| Margin-top | 4px |
| Font | Hanken Grotesk Regular 12px/18px |
| Token | `Body/xSmall` |
| Helper text color | `--slateTextSubtle` |
| Error text color | `--dangerTextDefault` |
| Success text color | `--successTextDefault` |

### Validation Icons (inline, right of input)

| State | Icon | Color |
|---|---|---|
| Invalid | Alert / error circle | `--dangerTextDefault` |
| Validated | Check circle | `--successTextDefault` |

Icon size: 16px, positioned as Element=After.

---

## 10. Color Tokens

| Token | Usage |
|---|---|
| `--slateBorderDefault` | Default/disabled border |
| `--slateBorderHover` | Hover border |
| `--primaryBorderDefault` | Focus border |
| `--primaryBorderFocus` | Focus ring shadow |
| `--dangerBorderDefault` | Invalid border |
| `--successBorderDefault` | Validated border |
| `--slateSurfaceWhite` | Input background |
| `--slateSurfaceSubtle100` | Disabled background |
| `--slateTextDefault` | Input value text |
| `--slateTextPlaceholder` | Placeholder text |
| `--slateTextSubtle` | Prefix/suffix icon color |
| `--dangerTextDefault` | Error message, required marker |
| `--successTextDefault` | Success message |

---

## 11. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Label | `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |
| Input value | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Placeholder | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Helper/Error text | `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 12. Compact vs Standard Comparison

| Property | Standard | Compact |
|---|---|---|
| Height | 40px | 32px |
| Vertical padding | 10px | 6px |
| Use case | Forms, settings | Toolbars, filters, dense UIs |

---

## 13. Accessibility

| Property | Value |
|---|---|
| `<label>` element | Always associate via `for`/`id` |
| `aria-required` | `true` when Required=True |
| `aria-invalid` | `true` when State=Invalid |
| `aria-describedby` | Point to helper/error text id |
| Autocomplete | Set appropriate `autocomplete` attribute |

---

## 14. Usage Notes

- Always include a visible label — never rely on placeholder text as the label.
- Error messages should be specific (e.g. "Enter a valid email" not just "Invalid").
- Use `Element=Before` for unit/currency prefix; use `Element=After` for clear/visibility actions.
- Use `Compact` in table cells, toolbars, and filter bars where vertical space is limited.
- Max-width is design-dependent; the 240px component width is a base — expand to fill containers.
