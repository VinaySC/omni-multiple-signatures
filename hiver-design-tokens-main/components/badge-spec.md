# Badge Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 707-1826
**Extracted:** 2026-03-08

---

## 1. Overview

Numeric count badge used to indicate unread counts, notification quantities, or priority levels. Three semantic types: **Default**, **Primary**, **Important**.

---

## 2. Variant Matrix

**Property:**
- **Type**: Default | Primary | Important

| Type | Node ID | Background | Text Color |
|---|---|---|---|
| Default | 707:1833 | `--slateSurfaceSubtle100` (`#f1f5f9`) | `--slateTextBody` (`#334155`) |
| Primary | 707:1834 | `--primarySurfaceDefault` (`#276cf0`) | white |
| Important | 707:1835 | `--errorSurfaceDefault` (`#b81717`) | white |

---

## 3. Dimensions

| Property | Value |
|---|---|
| Height | 18px (auto, driven by 12px text + 3px vertical padding each side) |
| Min-width | 18px (pill minimum) |
| Padding | 0px 6px (horizontal only) |
| Border-radius | 12px (full pill) |
| Layout | flex, items-center |

---

## 4. Label

| Property | Value |
|---|---|
| Default text | "+99" |
| Font | Hanken Grotesk Regular |
| Size | 12px |
| Line-height | 18px |
| Token | `Body/xSmall` |
| White-space | nowrap |

---

## 5. Color Tokens

| Token | Hex | Type | Usage |
|---|---|---|---|
| `--slateSurfaceSubtle100` | `#f1f5f9` | Default bg | Neutral count (hover surface) |
| `--primarySurfaceDefault` | `#276cf0` | Primary bg | Primary count (blue) |
| `--errorSurfaceDefault` | `#b81717` | Important bg | Error/urgent count (red) |
| `--slateTextBody` | `#334155` | Default text | Text on light bg |
| `--slateSurfaceWhite` | `#ffffff` | Primary/Important text | Text on colored bg |

> Note: `--primarySurfaceDefault` in this file is `#276cf0` (blue). This differs from the orange `#f97316` used in the Customer Module — these may be different product areas within Hiver's design system.

---

## 6. Semantic Meaning

| Type | When to use |
|---|---|
| Default | Neutral counts — general item quantities, totals |
| Primary | Informational counts — unread messages, new items |
| Important | Urgent counts — errors, overdue items, critical notifications |

---

## 7. Typography

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 8. CSS Reference

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0 6px;
  border-radius: 12px;
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
}

.badge--default {
  background-color: var(--slateSurfaceSubtle100, #f1f5f9);
  color: var(--slateTextBody, #334155);
}

.badge--primary {
  background-color: var(--primarySurfaceDefault, #276cf0);
  color: white;
}

.badge--important {
  background-color: var(--errorSurfaceDefault, #b81717);
  color: white;
}
```

---

## 9. Usage Notes

- Badges are **read-only** display elements — they are not interactive on their own.
- Place badges inline after a label or as an overlay on an icon (e.g. nav rail notification bell).
- When count exceeds 99, display "+99" not the full number.
- For zero counts, hide the badge (do not show "0").
- When used as an icon overlay (like the notification bell in Main Nav), use a 5×5px red dot variant instead of the full badge — see `customer-module-main-nav-spec.md §5 Item 2`.
- `aria-label` the parent element with the count (e.g., `aria-label="12 unread messages"`).
