# Button Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 93-930
**Extracted:** 2026-03-08

---

## 1. Overview

Buttons are 32px tall. Five button types, each with 5 states × 4 icon variants = 20 symbols per group.

---

## 2. Button Types

| Type | Figma Property | Notes |
|---|---|---|
| Primary | `Button=Primary` | Filled, high-emphasis |
| Secondary | `Button=Secondary` | Outlined/bordered, medium-emphasis |
| Link Primary | `Button/Link=Primary` | Text only, no border/bg |
| Link Secondary | `Button/Link=Secondary` | Text only, subdued |
| Danger | `Button=Danger` | Destructive action |

---

## 3. States

| State | Description |
|---|---|
| Default | Resting state |
| Hover | Cursor over button |
| Active / Pressed | Mouse down |
| Focus | Keyboard focus ring visible |
| Disabled | Non-interactive, reduced opacity |

---

## 4. Icon Variants

| Variant | Description | Approx Width |
|---|---|---|
| Icon=None | Label only | ~59px |
| Icon=Left | Icon before label | ~83px |
| Icon=Right | Icon after label | ~83px |
| Icon=Only | Icon, no label | ~38px |

All variants: **Height = 32px**

---

## 5. Dimensions

| Property | Value |
|---|---|
| Height | 32px |
| Border-radius | 6px |
| Padding (horizontal) | 12px |
| Padding (vertical) | 6px |
| Icon size | 16px |
| Gap (icon + label) | 6px |
| Icon-only width | 32px |
| Label-only width | ~59px (text-dependent) |
| Icon + label width | ~83px (text-dependent) |

---

## 6. Color Tokens

### Primary Button

| State | Background | Border | Label |
|---|---|---|---|
| Default | `--primarySurfaceDefault` (`#f97316`) | none | `--slateTextWhite` (`#ffffff`) |
| Hover | `--primarySurfaceHover` | none | `--slateTextWhite` |
| Active | `--primarySurfaceActive` | none | `--slateTextWhite` |
| Focus | `--primarySurfaceDefault` | `--primaryBorderFocus` (ring) | `--slateTextWhite` |
| Disabled | `--primarySurfaceDefault` at 40% opacity | none | `--slateTextWhite` at 40% |

### Secondary Button

| State | Background | Border | Label |
|---|---|---|---|
| Default | transparent | `--slateBorderDefault` (`#e2e8f0`) | `--slateTextDefault` |
| Hover | `--slateSurfaceSubtle100` | `--slateBorderDefault` | `--slateTextDefault` |
| Active | `--slateSurfaceSubtle200` | `--slateBorderDefault` | `--slateTextDefault` |
| Focus | transparent | `--primaryBorderFocus` (ring) | `--slateTextDefault` |
| Disabled | transparent | `--slateBorderDefault` at 40% | `--slateTextDefault` at 40% |

### Danger Button

| State | Background | Border | Label |
|---|---|---|---|
| Default | `--dangerSurfaceDefault` (`#ef4444`) | none | `--slateTextWhite` |
| Hover | `--dangerSurfaceHover` | none | `--slateTextWhite` |
| Active | `--dangerSurfaceActive` | none | `--slateTextWhite` |
| Focus | `--dangerSurfaceDefault` | `--dangerBorderFocus` (ring) | `--slateTextWhite` |
| Disabled | `--dangerSurfaceDefault` at 40% | none | `--slateTextWhite` at 40% |

### Link Primary

| State | Background | Border | Label |
|---|---|---|---|
| Default | transparent | none | `--primaryTextDefault` |
| Hover | transparent | none | `--primaryTextHover` |
| Active | transparent | none | `--primaryTextActive` |
| Focus | transparent | `--primaryBorderFocus` (ring) | `--primaryTextDefault` |
| Disabled | transparent | none | `--primaryTextDefault` at 40% |

### Link Secondary

| State | Background | Border | Label |
|---|---|---|---|
| Default | transparent | none | `--slateTextSubtle` |
| Hover | transparent | none | `--slateTextDefault` |
| Active | transparent | none | `--slateTextDefault` |
| Focus | transparent | `--slateBorderFocus` (ring) | `--slateTextSubtle` |
| Disabled | transparent | none | `--slateTextSubtle` at 40% |

---

## 7. Typography

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |

---

## 8. Focus Ring

| Property | Value |
|---|---|
| Style | `box-shadow: 0 0 0 2px <focus-color>` |
| Offset | 2px outside border |
| Primary focus color | `--primaryBorderFocus` |
| Danger focus color | `--dangerBorderFocus` |

---

## 9. Full Variant Matrix (per type)

Each button type has **20 variants**: 5 states × 4 icon positions.

Total symbols in section: **100** (5 types × 20).

---

## 10. Usage Notes

- Use `Primary` for the single most important action on a screen.
- Use `Secondary` for supporting actions alongside primary.
- Use `Danger` for irreversible destructive actions (delete, remove).
- Use `Link` variants for low-emphasis inline actions.
- Icon-only buttons must include an accessible `aria-label`.
- Never place two `Primary` buttons side-by-side.
