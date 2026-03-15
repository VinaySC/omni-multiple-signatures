# Chip Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 2014-3151
**Extracted:** 2026-03-08

---

## 1. Overview

A compact inline tag/label component used for filters, attributes, and dismissible selections. Supports optional left and right icons — 4 icon variants total.

---

## 2. Variant Matrix

**Properties:**
- **leftIcon**: true | false
- **rightIcon**: true | false

| Variant | leftIcon | rightIcon | Node ID |
|---|---|---|---|
| Both icons | true | true | 532:803 |
| Left only | true | false | — |
| Right only | false | true | — |
| No icons | false | false | — |

---

## 3. Dimensions

| Property | Value |
|---|---|
| Height | 22px (2px top + 18px label + 2px bottom) |
| Min-width | auto (text-dependent) |
| Padding | 2px 6px |
| Gap | 4px |
| Border-radius | 4px |

---

## 4. Layout

| Property | Value |
|---|---|
| Display | flex |
| Direction | row |
| Align | items-center |
| Justify | justify-center |
| Gap | 4px |

---

## 5. Sub-components

### 5.1 Left Icon

| Property | Value |
|---|---|
| Node ID | 532:790 |
| Size | 14 × 14px |
| Type | Icon component (frame) |
| Default icon shown | Settings/gear icon (rotated 90°) |
| Color | `--slateTextBody` |
| Overflow | hidden |

### 5.2 Label

| Property | Value |
|---|---|
| Node ID | 532:782 |
| Text | "Label" (configurable) |
| Font | Hanken Grotesk Regular |
| Size | 12px |
| Line-height | 18px |
| Color | `--slateTextBody` (`#334155`) |
| Token | `Body/xSmall` |
| White-space | nowrap |

### 5.3 Right Icon

| Property | Value |
|---|---|
| Node ID | 532:795 |
| Size | 14 × 14px |
| Type | Icon component (close/dismiss / 3-dots ellipsis) |
| Color | `--slateTextBody` |
| Overflow | hidden |

---

## 6. Colors

| Token | Hex | Usage |
|---|---|---|
| `--slateSurfaceSubtle` | `#f8fafc` | Chip background |
| `--slateTextBody` | `#334155` | Label text, icon color |

---

## 7. Hover / Interactive State

| State | Background | Notes |
|---|---|---|
| Default | `--slateSurfaceSubtle` (`#f8fafc`) | |
| Hover | `--slateSurfaceSubtle200` (`#e2e8f0`) | Slightly darker |
| Active | `--slateSurfaceSubtle300` (`#cbd5e1`) | Pressed |
| Selected | `--primarySurfaceSubtle` | Blue tint when chip is selected/active |
| Disabled | transparent, 40% opacity | Non-interactive |

> Hover/active states not captured in static Figma snapshot. Values inferred from design system convention.

---

## 8. Asset URLs (Figma localhost — session only)

| Asset | URL |
|---|---|
| Left icon frame | `http://localhost:3845/assets/d975dc75dc889133437de14fb3191193d1c314d4.svg` |
| Right icon vector 1 | `http://localhost:3845/assets/14acd5147e6a6491d7355bdf52320742c948612e.svg` |
| Right icon vector 2 | `http://localhost:3845/assets/91fd268bf07fb3d6d97746722efab7eec9d53b50.svg` |

---

## 9. Typography

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 10. Icon Sizing Note

> Per Figma component description: **Use only 14px and 16px icons. Avoid 24px.**

Chips use **14px** icons exclusively.

---

## 11. CSS Reference

```css
.chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: var(--slateSurfaceSubtle, #f8fafc);
}

.chip__icon {
  width: 14px;
  height: 14px;
  overflow: hidden;
  flex-shrink: 0;
}

.chip__label {
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--slateTextBody, #334155);
  white-space: nowrap;
}
```

---

## 12. Usage Notes

- Use chips for **filters**, **tags**, **attributes**, and **multi-select tokens** (e.g. label tags on a conversation).
- The right icon is typically a **dismiss/close** button — make it independently clickable with its own `aria-label`.
- The left icon provides visual context for the chip's category (e.g. label color dot, assignee avatar, filter type icon).
- For filter chips that can be toggled, use a border or background-change to indicate selected state.
- Do not use chips as primary navigation or CTAs — use buttons instead.
