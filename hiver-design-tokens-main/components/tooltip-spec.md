# Tooltip Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 532-886 (section) → 549:14616 (component)
**Extracted:** 2026-03-08

---

## 1. Overview

A small floating label that appears on hover/focus to provide contextual information about a UI element. Single variant — no configurable properties in the static Figma snapshot.

---

## 2. Dimensions

| Property | Value |
|---|---|
| Height | 24px |
| Width | auto (text-driven) — base example: 56px |
| Border-radius | 4px |
| Padding (inner Base container) | 8px horizontal, 10px vertical |

---

## 3. Anatomy

```
┌──────────────────┐
│     Tooltip      │   ← dark rounded rectangle
└──────────────────┘
        ▲
    (arrow/caret — not in static capture, expected per convention)
```

### Container

| Property | Value |
|---|---|
| Background | `--slateSurfaceDark600` (`#475569`) |
| Border-radius | 4px |
| Box-shadow | `0px 4px 12px 0px var(--slateSurfaceSubtle200, #e2e8f0)` |

### Inner "Base" wrapper

| Property | Value |
|---|---|
| Node ID | 549:14610 |
| Padding | 10px 8px |
| Border-radius | 6px |
| Layout | flex, items-center, justify-center |

### Label

| Property | Value |
|---|---|
| Node ID | 549:14611 |
| Text | "Tooltip" (configurable) |
| Font | Hanken Grotesk Regular |
| Size | 12px |
| Line-height | 18px |
| Color | `--slateSurfaceWhite` (`white`) |
| Token | `Body/xSmall` |
| Width | 40px (base — auto in practice) |

---

## 4. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--slateSurfaceDark600` | `#475569` | Tooltip background |
| `--slateSurfaceWhite` | `#ffffff` | Label text |
| `--slateSurfaceSubtle200` | `#e2e8f0` | Box shadow color |

---

## 5. Typography

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |

---

## 6. Positioning (Expected Behaviour)

The static Figma capture shows the tooltip body only. Standard tooltip placement conventions:

| Placement | Description |
|---|---|
| Top (default) | Above the trigger element, centered horizontally |
| Bottom | Below the trigger element |
| Left | To the left of the trigger |
| Right | To the right of the trigger |

### Caret / Arrow

Not captured in the static Figma frame. Based on design system convention:

| Property | Value |
|---|---|
| Size | 6×6px (rotated 45°) |
| Color | `--slateSurfaceDark600` (`#475569`) |
| Position | Centered on the edge facing the trigger |

---

## 7. Animation

| Property | Value |
|---|---|
| Appear | `opacity: 0 → 1`, `translateY: 4px → 0` |
| Duration | `150ms` |
| Easing | `ease-out` |
| Delay (before show) | `300ms` (debounce hover) |
| Disappear | immediate (0ms delay) |

---

## 8. Z-Index

| Property | Value |
|---|---|
| z-index | `1000` (above all content, below modals) |

---

## 9. CSS Reference

```css
.tooltip {
  position: absolute; /* placed by positioning logic */
  background-color: var(--slateSurfaceDark600, #475569);
  border-radius: 4px;
  box-shadow: 0px 4px 12px 0px var(--slateSurfaceSubtle200, #e2e8f0);
  height: 24px;
  z-index: 1000;
  pointer-events: none;
}

.tooltip__base {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 8px;
  border-radius: 6px;
  height: 100%;
}

.tooltip__label {
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: white;
  white-space: nowrap;
}
```

---

## 10. Accessibility

| Property | Value |
|---|---|
| Role | `tooltip` |
| Trigger attribute | `aria-describedby="<tooltip-id>"` on trigger element |
| Show on | `mouseenter`, `focus` |
| Hide on | `mouseleave`, `blur`, `Escape` key |
| Never auto-dismiss | tooltip stays visible while focused |

---

## 11. Usage Notes

- Tooltips are for **supplementary context only** — never place essential/required information in a tooltip.
- Keep tooltip text concise: 1 short sentence or a label (< 80 characters).
- Do not put interactive content (links, buttons) inside a tooltip.
- Use tooltips on icon-only buttons to expose their accessible label.
- Avoid tooltips on touch devices — use a different pattern (popover, inline hint).
