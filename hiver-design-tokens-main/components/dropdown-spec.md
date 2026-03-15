# Dropdown Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 149-4785
**Extracted:** 2026-03-08

---

## 1. Overview

Dropdown (select/menu) component with 16 variants across 4 properties. Fixed width 300px; height varies by content and variant.

---

## 2. Variant Matrix

**Properties:**
- **Style**: Default | Avatar | Checkbox | Radio
- **Search**: True | False
- **Button**: True | False

Total: 4 × 2 × 2 = **16 variants**

| Style | Search | Button | Approx Height |
|---|---|---|---|
| Default | False | False | 136px |
| Default | False | True | 168px |
| Default | True | False | 168px |
| Default | True | True | 200px |
| Avatar | False | False | 136px |
| Avatar | False | True | 168px |
| Avatar | True | False | 168px |
| Avatar | True | True | 200px |
| Checkbox | False | False | 168px |
| Checkbox | False | True | 200px |
| Checkbox | True | False | 200px |
| Checkbox | True | True | 232px |
| Radio | False | False | 136px |
| Radio | False | True | 168px |
| Radio | True | False | 168px |
| Radio | True | True | 200px |

---

## 3. Dimensions

| Property | Value |
|---|---|
| Width | 300px |
| Min height | 136px |
| Max height (with search + button) | 288px |
| Border-radius | 8px |
| Border | 1px solid `--slateBorderDefault` |
| Box shadow | `0 4px 16px rgba(0,0,0,0.12)` |

---

## 4. Anatomy

```
┌──────────────────────────────────┐
│ [Search input]         (Search=True only)  │
├──────────────────────────────────┤
│ ○/☐/◉  Item label       [avatar] │  ← row
│ ○/☐/◉  Item label       [avatar] │
│ ○/☐/◉  Item label       [avatar] │
├──────────────────────────────────┤
│ [Action button]     (Button=True only)    │
└──────────────────────────────────┘
```

---

## 5. Sub-components

### 5.1 Search Input (Search=True)

| Property | Value |
|---|---|
| Height | 32px |
| Padding | 8px 12px |
| Border-bottom | 1px solid `--slateBorderDefault` |
| Placeholder text | "Search..." |
| Placeholder color | `--slateTextPlaceholder` |
| Icon | Search icon (16px), `--slateTextSubtle` |
| Font | Hanken Grotesk Regular 14px/20px |

### 5.2 List Items

| Property | Value |
|---|---|
| Item height | 36px |
| Padding | 8px 12px |
| Gap (icon/avatar + label) | 8px |
| Font | Hanken Grotesk Regular 14px/20px |
| Label color | `--slateTextDefault` |

#### States per item

| State | Background |
|---|---|
| Default | transparent |
| Hover | `--slateSurfaceSubtle100` |
| Selected/Active | `--slateSurfaceSubtle200` |
| Disabled | transparent, text at 40% opacity |

### 5.3 Action Button (Button=True)

| Property | Value |
|---|---|
| Height | 32px |
| Border-top | 1px solid `--slateBorderDefault` |
| Padding | 8px 12px |
| Label | Configurable (e.g. "Apply", "Clear") |
| Font | Hanken Grotesk Medium 14px/20px |
| Color | `--primaryTextDefault` |

---

## 6. Style Variants

### Default
Plain text list items.

### Avatar
Each item has a 20×20px circular avatar on the left.

| Property | Value |
|---|---|
| Avatar size | 20 × 20px |
| Avatar border-radius | 50% |
| Avatar background | `--slateSurfaceSubtle200` (placeholder) |

### Checkbox
Each item has a checkbox control on the left. Allows multi-select.

| Property | Value |
|---|---|
| Checkbox size | 16 × 16px |
| Checked color | `--primarySurfaceDefault` |
| Border | 1px solid `--slateBorderDefault` |
| Border-radius | 4px |

### Radio
Each item has a radio button on the left. Single-select.

| Property | Value |
|---|---|
| Radio size | 16 × 16px |
| Selected fill | `--primarySurfaceDefault` |
| Border | 1px solid `--slateBorderDefault` |
| Border-radius | 50% |

---

## 7. Color Tokens

| Token | Usage |
|---|---|
| `--slateTextDefault` | Item label text |
| `--slateTextSubtle` | Search icon, placeholder |
| `--slateTextPlaceholder` | Search placeholder text |
| `--slateBorderDefault` | Container border, separators |
| `--slateSurfaceSubtle100` | Item hover bg |
| `--slateSurfaceSubtle200` | Item selected bg |
| `--primarySurfaceDefault` | Checkbox/radio checked fill |
| `--primaryTextDefault` | Action button label |
| `--slateSurfaceWhite` | Container background |

---

## 8. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Items | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Search | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Button | `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |

---

## 9. Usage Notes

- Dropdown is a **controlled popup**; it does not include the trigger button.
- Use `Checkbox` style for multi-select scenarios.
- Use `Radio` style for single-select with visible current selection.
- Use `Avatar` style for user/assignee pickers.
- `Search=True` should be enabled when the list exceeds ~8 items.
- Max visible items before scroll: ~5 (140px list area at 36px/item ≈ 3-4 items).
