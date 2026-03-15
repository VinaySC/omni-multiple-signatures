# Customer Module — Main Nav Spec
**Figma File:** OAZQ6Qjhsg5tbw4JKHBLg5
**Node ID:** 163:1544 (frame "Main") / 163:1546 (frame "Main Nav")
**Extracted:** 2026-03-07

---

## 1. Outer Container ("Main" — 163:1544)

| Property | Value |
|---|---|
| Width | 1440px |
| Height | 812px |
| Background | `bg-white` / `#ffffff` |
| Position | relative |

---

## 2. Main Nav Rail ("Main Nav" — 163:1546)

| Property | Value |
|---|---|
| Width | 44px |
| Height | 812px |
| Position | absolute, left: 0, top: 0 |
| Background token | `--slate/surface/subtle_200` |
| Background hex | `#e2e8f0` |
| Layout | flex-col |
| Justify | justify-between (top group ↕ bottom group) |
| Align | items-center |
| Padding-left | 8px |
| Padding-right | 8px |
| Padding-bottom | 12px |
| Padding-top | 0 |
| Usable content width | 28px (44 − 8 − 8) |

---

## 3. Top Section (163:1574)

| Property | Value |
|---|---|
| Layout | flex-col |
| Gap | 10px |
| Align | items-start |
| Width | 100% (28px) |

### 3.1 Logo Area (163:1575)

| Property | Value |
|---|---|
| Layout | flex-col, items-center, justify-center |
| Width | 100% (28px) |
| Padding-top | 11px |
| Padding-bottom | 10px |
| Logo image ("image 8" — 163:1582) size | 24 × 25px |
| Logo image offset | x: 2px, y: 11px (within Group 8) |

### 3.2 Nav Items Container (163:1583)

| Property | Value |
|---|---|
| Layout | flex-col |
| Gap between items | 16px |
| Align | items-center |
| Width | 100% (28px) |

---

## 4. Nav Items — All States

Each nav item shares this base layout:

| Property | Value |
|---|---|
| Layout | flex, gap: 10px, items-center, justify-center |
| Padding | px: 5px, py: 4px |
| Border-radius | 6px |
| Width | 100% (28px) |
| Height (explicit) | 28px (only set when active or on items 1 & 4) |

### States

| State | Background | Notes |
|---|---|---|
| Default | none (transparent) | |
| Active | `--slate/surface/subtle_300` / `#cbd5e1` | Height explicitly 28px |
| Hover | Not defined in static snapshot; expected to match active bg on hover | |

---

## 5. Top Nav Items (top-to-bottom order)

| # | Node ID | Figma Name | State | Icon Size | Icon Asset | Notes |
|---|---|---|---|---|---|---|
| 1 | 163:1584 | Frame 163743 | Default | 14px | `imgFrame` (SVG) | Inbox/all mail icon |
| 2 | 163:1590 | Frame 163744 | Default | 16px | `imgVector5` (Icon instance) | Notification bell; has red badge |
| 3 | 163:1599 | Frame 163741 | Default | 16px | `imgVector6` (Icon instance) | Archive/copy icon |
| 4 | 163:1603 | Frame 163745 | **Active** | 14px | `imgFrame1` (SVG) | Bar chart / Customer analytics — bg `--slate/surface/subtle_300` |
| 5 | 163:1609 | Frame 163740 | Default | 16px | `imgVector7` (Icon instance) | Analytics / reports |
| 6 | 163:1613 | Frame 163742 | Default | 16px | `imgFrame2` (SVG via Icon) | Settings gear |

### Item 2 — Notification Badge (163:1594 "Ellipse 58")

| Property | Value |
|---|---|
| Shape | Ellipse (circle) |
| Size | 5 × 5px |
| Position | absolute, left: 13px, top: 4px (relative to nav item) |
| Color | Rendered via `imgEllipse58` SVG (red fill) |

---

## 6. Bottom Section (163:1631)

| Property | Value |
|---|---|
| Layout | flex-col |
| Gap | 16px |
| Align | items-start |
| Position | y: 696, height: 104px total |

### 6.1 Bottom Icon Group (163:1632)

| Property | Value |
|---|---|
| Layout | flex-col |
| Gap | 16px |
| Align | items-center, justify-center |
| Width | 100% |

| # | Node ID | Figma Name | State | Icon Size | Icon Asset | Notes |
|---|---|---|---|---|---|---|
| 7 | 163:1633 | Frame 163742 | Default | 16px | `imgFrame3` (SVG) | Help / Support icon |
| 8 | 163:1638 | Frame 163743 | Default | 16px | `imgFrame4` (SVG) | Chat / message icon |

### 6.2 Avatar / User Switcher (163:1643 "List Elements")

| Property | Value |
|---|---|
| Component | `Element Type=Avatar, Active=True` |
| Size | 24 × 24px |
| Shape | rounded-full (border-radius: 60px) |
| Background token | `--pastel-red/border/default` |
| Background hex | `#d04b4f` |
| Label text | "A" |
| Label font | Hanken Grotesk Medium |
| Label size | 12px |
| Label line-height | 18px |
| Label color token | `--slate/surface/white` |
| Label color hex | `white` |

#### Online Indicator (163:1643 → "Online")

| Property | Value |
|---|---|
| Size | 8 × 8px |
| Position | absolute, left: calc(50% + 8px), top: calc(50% + 8px) |
| Asset | `imgOnline` (SVG — green dot) |

---

## 7. Spacing Summary

| Spacing | Value |
|---|---|
| Logo top padding (inside logo container) | 11px |
| Logo bottom padding (inside logo container) | 10px |
| Gap between logo container and nav items | 10px (from parent flex-col gap) |
| Gap between nav items | 16px |
| Gap between bottom icon group items | 16px |
| Gap between top section and bottom section | justify-between (full remaining height) |
| Nav rail horizontal padding (each side) | 8px |
| Nav rail bottom padding | 12px |
| Nav item inner padding | 4px vertical, 5px horizontal |

---

## 8. Typography Tokens

| Token Name | Font Family | Weight | Size | Line-Height | Letter-Spacing |
|---|---|---|---|---|---|
| `Label/xSmall` | Hanken Grotesk | Medium (500) | 12px | 18px | 0 |
| `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px | 0 |
| `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px | 0 |

---

## 9. Color Tokens (used in Main Nav)

| Token Name | Hex Value | Usage |
|---|---|---|
| `--slate/surface/subtle_200` | `#e2e8f0` | Nav rail background |
| `--slate/surface/subtle_300` | `#cbd5e1` | Active nav item background |
| `--slate/surface/white` | `white` | Avatar label text |
| `--pastel-red/border/default` | `#d04b4f` | Avatar background |
| `Other / Clickable` | `#FFFFFF` | Clickable element color |

---

## 10. Icon Sizes

> Per Figma component description: **Use only 14px and 16px. Avoid 24px.**

| Size | Used on |
|---|---|
| 14px | Nav items 1, 4 (custom SVG Frame icons — not the Icon component) |
| 16px | Nav items 2, 3, 5, 6, 7, 8 (Icon component instances and SVG frames) |

---

## 11. Visual Screenshot Reference

The captured screenshot shows (top → bottom):
1. **Hiver logo** — orange hexagon, 24 × 25px
2. **Nav item 1** — Inbox icon (14px), default
3. **Nav item 2** — Notification bell (16px) + red notification dot (5px)
4. **Nav item 3** — Archive/copy icon (16px), default
5. **Nav item 4** — Bar chart / Customer icon (14px), **ACTIVE** (gray bg `#cbd5e1`)
6. **Nav item 5** — Analytics icon (16px), default
7. **Nav item 6** — Settings gear (16px), default
8. *(spacer — justify-between)*
9. **Nav item 7** — Help/support icon (16px), default
10. **Nav item 8** — Chat/message icon (16px), default
11. **Avatar** — "A" monogram, red bg (#d04b4f), green online dot

---

## 12. Notes

- The Main Nav is a **fixed 44px wide vertical rail** on the left edge of the 1440px frame.
- All icon-containing nav items are 28px tall when active; height is auto (driven by padding) when default.
- The nav uses `justify-between` to push the bottom group (help, chat, avatar) to the bottom.
- Hover states are not captured in this static snapshot. Based on design system convention, hover likely applies `--slate/surface/subtle_300` background (same as active), or a lighter `--slate/surface/subtle_200` tint.
- Icon names are rendered as SVG assets; the Icon component's accepted icon variants include: `SM_Inbox`, `Notification`, `Archive`, `Analytics`, `Settings`, `Help`, `Conversation`, etc.
- The hidden frame 163:1547 is an original/reference layer not rendered in production.
