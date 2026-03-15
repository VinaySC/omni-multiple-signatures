# Tabs (Tabular) Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 707-1847 (canvas) → section 709:110
**Extracted:** 2026-03-08

---

## 1. Overview

Tab navigation component for switching between content panels. Three visual styles — **Outlined**, **Filled**, and **Type3** — with individual tab states for each. The Figma section also includes individual Tab item primitives (Tab1, Tab2) for use in custom tab bars.

---

## 2. Tab Strip Types

| Type | Node ID | Style | Height | Container bg |
|---|---|---|---|---|
| Outlined | 708:1406 | Underline indicator, full-width border-bottom | 36px tabs | transparent |
| Filled | 709:37 | Pill-shaped tabs inside rounded container | 32px tabs | `--slateSurfaceSubtle100` |
| Type3 | 6237:87 | Same as Filled, 3 tabs | 32px tabs | `--slateSurfaceSubtle100` |

---

## 3. Tab1 — Outlined Style

### Container (Type=Outlined)

| Property | Value |
|---|---|
| Width | 960px (full-width) |
| Border-bottom | 1px solid `--slateBorderLight` (`#e2e8f0`) |
| Gap between tabs | 20px |
| Layout | flex-row, items-center |
| Background | transparent |

### Individual Tab Item (Tab1States)

| Property | Value |
|---|---|
| Node IDs | 708:1385 (Active), 708:1386 (Hover), 708:1387 (Default) |
| Height | 36px |
| Padding | 8px 12px |
| Gap | 4px |
| Layout | flex, items-center, justify-center |

#### States

| State | Label Color | Bottom Border | Background |
|---|---|---|---|
| Default | `--slateTextSubtle` (`#64758b`) | none | transparent |
| Hover | `--slateTextSubtle` (`#64758b`) | none | transparent |
| Active | `--slateTextBody` (`#334155`) | 2px solid `--slateTextBody` | transparent |

#### Typography (Tab1)

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |

#### Optional Badge (on each tab)

| Property | Value |
|---|---|
| Component | Badge, `Type=Default` |
| Background | `--slateSurfaceSubtle100` (`#f1f5f9`) |
| Text color | `--slateTextBody` (`#334155`) |
| Font size | 12px |
| Padding | 0 6px |
| Border-radius | 12px |
| Visibility | Always shown per Figma; toggle via `visibility` CSS property |

---

## 4. Tab2 — Filled Style

### Container (Type=Filled / Type3)

| Property | Value |
|---|---|
| Background | `--slateSurfaceSubtle100` (`#f1f5f9`) |
| Padding | 4px |
| Border-radius | 12px |
| Layout | flex-row, items-center |

### Individual Tab Item (Tab2States)

| Property | Value |
|---|---|
| Node IDs | 709:24 (Active), 709:23 (Hover), 709:22 (Default) |
| Height | 32px |
| Width | 122px (Filled 2-tab) |
| Padding | 0 8px |
| Border-radius | 8px |
| Text align | center |

#### States

| State | Background | Label Color |
|---|---|---|
| Default | `--slateSurfaceSubtle100` (`#f1f5f9`) — same as container | `--slateTextSubtle` (`#64758b`) |
| Hover | `--slateSurfaceSubtle200` (`#e2e8f0`) | `--slateTextSubtle` (`#64758b`) |
| Active | white (`#ffffff`) | `--slateTextBody` (`#334155`) |

> Active tab appears to "pop" because it has a white background against the gray container.

#### Typography (Tab2)

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |

---

## 5. Type3 (Filled, 3 tabs)

Same as Filled, but with 3 tab items instead of 2. Width of each tab adjusts to fill container proportionally.

| Property | Value |
|---|---|
| Node ID | 6237:87 |
| Width | 374px (full strip) |
| Individual tab | ~118px each |
| All other properties | Same as Filled |

---

## 6. Summary: Which type to use

| Scenario | Tab Type |
|---|---|
| Primary page-level navigation (e.g. Inbox sections) | **Outlined** |
| Secondary in-panel view switcher (e.g. list vs grid) | **Filled** |
| Compact switcher with 3 equal options | **Type3** |

---

## 7. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--slateBorderLight` | `#e2e8f0` | Outlined strip bottom border |
| `--slateTextBody` | `#334155` | Active tab label, active indicator |
| `--slateTextSubtle` | `#64758b` | Default/Hover tab label |
| `--slateSurfaceSubtle100` | `#f1f5f9` | Filled container bg, default tab bg, badge bg |
| `--slateSurfaceSubtle200` | `#e2e8f0` | Filled hover tab bg |
| `--slateSurfaceWhite` | `#ffffff` | Active tab bg (Filled/Type3) |

---

## 8. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Tab1 label | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Tab2 label | `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |
| Badge count | `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 9. CSS Reference

### Outlined

```css
.tabs--outlined {
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid var(--slateBorderLight, #e2e8f0);
}

.tab--outlined {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 36px;
  padding: 8px 12px;
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--slateTextSubtle, #64758b);
  border-bottom: 2px solid transparent;
  cursor: pointer;
}

.tab--outlined.active {
  color: var(--slateTextBody, #334155);
  border-bottom-color: var(--slateTextBody, #334155);
}
```

### Filled

```css
.tabs--filled {
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border-radius: 12px;
  background-color: var(--slateSurfaceSubtle100, #f1f5f9);
}

.tab--filled {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 8px;
  border-radius: 8px;
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--slateTextSubtle, #64758b);
  cursor: pointer;
  transition: background-color 150ms ease, color 150ms ease;
}

.tab--filled.active {
  background-color: #ffffff;
  color: var(--slateTextBody, #334155);
}

.tab--filled:hover:not(.active) {
  background-color: var(--slateSurfaceSubtle200, #e2e8f0);
}
```

---

## 10. Accessibility

| Property | Value |
|---|---|
| Role | `tablist` on container, `tab` on each item |
| `aria-selected` | `true` on active tab |
| `aria-controls` | ID of associated tab panel |
| Keyboard | Left/Right arrow to navigate, Enter/Space to select |
| Focus | Visible focus ring on each tab |
