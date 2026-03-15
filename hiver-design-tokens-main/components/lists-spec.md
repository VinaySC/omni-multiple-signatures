# Lists Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 2950-2209 → frame 528:1684 (Lists), 550:14862 (Lists_Description)
**Extracted:** 2026-03-08

---

## 1. Overview

Row-level list item used in menus, dropdowns, sidebars, and selection lists. Two sub-types:
- **Lists** — single label line (36–40px height)
- **Lists_Description** — label + description line (54–58px height)

Three interaction states × 2 left element options × 2 right element options = **12 variants each**.

---

## 2. Variant Matrix

**Properties:**
- **State**: Default | Hover | Active
- **Left Element**: True | False
- **Right Element**: True | False

| # | Node ID | State | Left | Right | Height |
|---|---|---|---|---|---|
| 1 | 528:1676 | Default | False | False | 36px |
| 2 | 528:1673 | Hover | False | False | 36px |
| 3 | 528:1672 | Active | False | False | 36px |
| 4 | 528:1680 | Default | True | False | 40px |
| 5 | 528:1674 | Hover | True | False | 40px |
| 6 | 528:1682 | Active | True | False | 40px |
| 7 | 528:1677 | Default | False | True | 40px |
| 8 | 528:1675 | Hover | False | True | 40px |
| 9 | 528:1678 | Active | False | True | 40px |
| 10 | 528:1683 | Default | True | True | 40px |
| 11 | 528:1681 | Hover | True | True | 40px |
| 12 | 528:1679 | Active | True | True | 40px |

---

## 3. Dimensions

| Property | No Elements | With Elements |
|---|---|---|
| Width | 232px | 232px |
| Height | 36px | 40px |
| Padding | `10px 8px` | `8px` (all sides) |
| Gap (inner) | — | 12px |
| Border-radius | 8px | 8px |

### Lists_Description heights

| Left Element | Right Element | Height |
|---|---|---|
| True | True | 54px |
| True | False | 54px |
| False | True | 58px |
| False | False | 58px |

---

## 4. States

| State | Background Token | Background Hex |
|---|---|---|
| Default | `--slateSurfaceWhite` | `#ffffff` |
| Hover | `--slateSurfaceSubtle100` | `#f1f5f9` |
| Active | `--slateSurfaceSubtle100` | `#f1f5f9` |

> Default and Active share the same visual background in this component; Active is typically differentiated by the left element state (checkbox checked, radio selected, etc.).

---

## 5. Label

| Property | Value |
|---|---|
| Text | "Label" (configurable) |
| Font | Hanken Grotesk Regular |
| Size | 14px |
| Line-height | 20px |
| Color | `--slateTextBody` (`#334155`) |
| Token | `Body/Small` |
| White-space | nowrap |

### Lists_Description — Description line

| Property | Value |
|---|---|
| Font | Hanken Grotesk Regular |
| Size | 12px |
| Line-height | 18px |
| Color | `--slateTextSubtle` (`#64758b`) |
| Token | `Body/xSmall` |

---

## 6. Left Element (Left Element=True)

The left element is a 24×24px slot. Supported element types:

| Element Type | Node ID | Size | States |
|---|---|---|---|
| Avatar (Default) | 528:4703 / 528:4702 | 24×24px | Active / Inactive |
| Avatar (Small) | 632:2103 / 632:2105 | 18×18px | Active / Inactive |
| Icon | 528:4701 | 24×24px | Active only |
| Radio | 528:4699 / 528:4700 | 24×24px | Active / Inactive |
| Checkbox | 528:4697 / 528:4698 | 24×24px | Active / Inactive |

### Checkbox (within list element)

| Property | Active | Inactive |
|---|---|---|
| Control size | 14×14px | 14×14px |
| Border-radius | 3px | 3px |
| Background | `--primarySurfaceDefault` (`#276cf0`) | `--slateSurfaceWhite` |
| Border | 2px `--primarySurfaceDefault` | 1px `--slateBorderDefault` (`#94a3b8`) |
| Checkmark | white SVG mark (8×6px) | — |

### Radio (within list element)

| Property | Active | Inactive |
|---|---|---|
| Control size | 24×24px | 24×24px |
| Active: outer ring | 20.83% inset SVG (blue circle) | SVG from `imgRadioCheckbox` |
| Active: inner dot | 41.67% inset SVG (white dot) | — |

---

## 7. Right Element (Right Element=True)

| Property | Value |
|---|---|
| Size | 14×14px |
| Type | Icon (chevron right / checkmark) |
| Color | `--slateTextBody` |
| Position | flex-shrink-0, end of row |

---

## 8. Layout Structure

```
┌─────────────────────────────────────────┐
│ [LeftEl]  Label text            [RightEl]│  ← 8px padding all sides
└─────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────┐
│ [LeftEl]  Label text            [RightEl]│
│           Description text               │  ← Lists_Description
└─────────────────────────────────────────┘
```

---

## 9. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--slateSurfaceWhite` | `#ffffff` | Default background |
| `--slateSurfaceSubtle100` | `#f1f5f9` | Hover / Active background |
| `--slateTextBody` | `#334155` | Label text, right icon |
| `--slateTextSubtle` | `#64758b` | Description text |
| `--primarySurfaceDefault` | `#276cf0` | Checkbox/radio active fill |
| `--slateBorderDefault` | `#94a3b8` | Checkbox inactive border |

---

## 10. Typography

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 11. CSS Reference

```css
.list-item {
  display: flex;
  align-items: center;
  width: 232px;
  border-radius: 8px;
  background-color: var(--slateSurfaceWhite, #ffffff);
  cursor: pointer;
}

/* No elements */
.list-item--plain {
  height: 36px;
  padding: 10px 8px;
}

/* With elements */
.list-item--with-elements {
  height: 40px;
  padding: 8px;
  gap: 12px;
}

.list-item:hover,
.list-item--hover {
  background-color: var(--slateSurfaceSubtle100, #f1f5f9);
}

.list-item--active {
  background-color: var(--slateSurfaceSubtle100, #f1f5f9);
}

.list-item__label {
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--slateTextBody, #334155);
  white-space: nowrap;
  flex: 1;
}

.list-item__description {
  font-size: 12px;
  line-height: 18px;
  color: var(--slateTextSubtle, #64758b);
}

.list-item__left {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.list-item__right {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
```

---

## 12. Usage Notes

- Use lists for **menus, command palettes, dropdowns, sidebars, and multi-select panels**.
- `Left Element=Avatar` for user/assignee pickers.
- `Left Element=Checkbox` for multi-select lists (checked = active state).
- `Left Element=Radio` for single-select lists (selected = active state).
- `Left Element=Icon` for labeled menu items with category icons.
- `Right Element=True` for items that navigate deeper (chevron) or confirm selection (checkmark).
- Lists_Description is preferred when items need disambiguation (e.g. email addresses, long names).
- Maximum visible list height before scroll: ~5 items (~200px).
