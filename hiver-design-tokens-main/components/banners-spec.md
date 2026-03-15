# Banners / Toast Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 572-1371 → frame 1169:1331 (Toast Component)
**Extracted:** 2026-03-08

---

## 1. Overview

Inline banner/toast notification used to communicate feedback, status, or warnings. Six semantic variants. Supports optional left icon, heading, body text, up to two action buttons, and a close (right icon). In Figma this component is named **Toast Component** — it functions as both a persistent inline banner and a transient toast notification depending on context.

---

## 2. Variant Matrix

**Property:** `Property1` = Success | Info | Secondary | Contrast | Error | Warning

**Additional boolean props:**
- `leftIcon`: True | False
- `leftButton`: True | False
- `rightButton`: True | False
- `rightIcon` (close): True | False

Total named variants: **6** (one per semantic type). Icon/button booleans add further flexibility.

---

## 3. Dimensions

| Property | Value |
|---|---|
| Width | 508px |
| Height | 80px |
| Padding | 12px |
| Gap (between sections) | 12px |
| Border-radius | 8px |
| Border | 0.5px solid |
| Layout | flex-row, items-center |

---

## 4. Anatomy

```
┌─────────────────────────────────────────────────────┐
│ [Icon]  Heading                  [Btn] [Btn]  [✕]  │
│         Body description text                        │
└─────────────────────────────────────────────────────┘
```

### Left Icon slot
| Property | Value |
|---|---|
| Container | 24×24px, flex items-center justify-center, padding 10px |
| Icon size | 14×14px |

### Text block
| Property | Value |
|---|---|
| Layout | flex-col, items-start, justify-center |
| Flex | 1 0 0 (fills remaining width) |
| Min-width | 316px (with buttons present) |

### Heading
| Property | Value |
|---|---|
| Font | Hanken Grotesk Medium |
| Size | 14px |
| Line-height | 20px |
| Token | `Label/Small` |
| White-space | nowrap |

### Body text
| Property | Value |
|---|---|
| Font | Hanken Grotesk Regular |
| Size | 12px |
| Line-height | 18px |
| Color | `--slateTextBody` (`#334155`) — same across all variants |
| Token | `Body/xSmall` |

### Action Buttons (optional, up to 2)
| Property | Value |
|---|---|
| Height | 32px |
| Padding | 4px 12px |
| Border-radius | 6px |
| Font | Hanken Grotesk Medium 14px/20px (`Label/Small`) |
| Color | Variant-specific (see table below) |
| Background | transparent (ghost-style, no fill) |

### Close (Right Icon)
| Property | Value |
|---|---|
| Icon size | 14×14px |
| Alignment | `align-self: flex-start` (top of banner) |

---

## 5. Variant Colors

### Success (Property1=Success)

| Element | Token | Hex |
|---|---|---|
| Background | `--successSurfaceSubtle` | `#d3f4e1` |
| Border | `--successBorderLight` | `#a6e9c3` |
| Heading text | `--successTextBody` | `#1b6f41` |
| Body text | `--slateTextBody` | `#334155` |
| Button label | `--successTextTitle` | `#114a2b` |
| Icon color | `--successTextBody` | `#1b6f41` |

### Info (Property1=Info)

| Element | Token | Hex |
|---|---|---|
| Background | `--infoSurfaceSubtle` | `#dbeafe` (approx) |
| Border | `--infoBorderLight` | `#93c5fd` (approx) |
| Heading text | `--infoTextBody` | `#1e40af` (approx) |
| Body text | `--slateTextBody` | `#334155` |
| Button label | `--infoTextTitle` | `#1e3a8a` (approx) |

### Secondary (Property1=Secondary)

| Element | Token | Hex |
|---|---|---|
| Background | `--slateSurfaceSubtle100` | `#f1f5f9` |
| Border | `--slateBorderLight` | `#e2e8f0` |
| Heading text | `--slateTextBody` | `#334155` |
| Body text | `--slateTextBody` | `#334155` |
| Button label | `--slateTextBody` | `#334155` |

### Contrast (Property1=Contrast)

| Element | Token | Hex |
|---|---|---|
| Background | `--slateSurfaceDark` (dark navy) | `#1e293b` (approx) |
| Border | `--slateBorderDark` | `#334155` (approx) |
| Heading text | white | `#ffffff` |
| Body text | `--slateTextSubtle` (light) | `#94a3b8` (approx) |
| Button label | white | `#ffffff` |

### Error (Property1=Error)

| Element | Token | Hex |
|---|---|---|
| Background | `--errorSurfaceSubtle` | `#fce4e4` |
| Border | `--errorBorderLight` | `#f19192` |
| Heading text | `--errorTextBody` | `#6d0d0e` |
| Body text | `--slateTextBody` | `#334155` |
| Button label | `--errorTextTitle` | `#480909` |
| Icon color | `--errorTextBody` | `#6d0d0e` |

### Warning (Property1=Warning)

| Element | Token | Hex |
|---|---|---|
| Background | `--warningSurfaceSubtle` | `#fef3c7` (approx) |
| Border | `--warningBorderLight` | `#fde68a` (approx) |
| Heading text | `--warningTextBody` | `#92400e` (approx) |
| Body text | `--slateTextBody` | `#334155` |
| Button label | `--warningTextTitle` | `#78350f` (approx) |

---

## 6. Color Tokens (confirmed from Figma code output)

| Token | Hex | Usage |
|---|---|---|
| `--successSurfaceSubtle` | `#d3f4e1` | Success background |
| `--successBorderLight` | `#a6e9c3` | Success border |
| `--successTextBody` | `#1b6f41` | Success heading |
| `--successTextTitle` | `#114a2b` | Success button label |
| `--errorSurfaceSubtle` | `#fce4e4` | Error background |
| `--errorBorderLight` | `#f19192` | Error border |
| `--errorTextBody` | `#6d0d0e` | Error heading |
| `--errorTextTitle` | `#480909` | Error button label |
| `--slateTextBody` | `#334155` | Body text (all variants) |

---

## 7. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Heading | `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |
| Body text | `Body/xSmall` | Hanken Grotesk | Regular (400) | 12px | 18px |
| Button label | `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |

---

## 8. CSS Reference

```css
.banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: 0.5px solid;
  width: 508px;
}

.banner--success {
  background-color: var(--successSurfaceSubtle, #d3f4e1);
  border-color: var(--successBorderLight, #a6e9c3);
}

.banner--error {
  background-color: var(--errorSurfaceSubtle, #fce4e4);
  border-color: var(--errorBorderLight, #f19192);
}

.banner__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.banner__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0;
}

.banner__heading {
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
}

.banner--success .banner__heading { color: var(--successTextBody, #1b6f41); }
.banner--error   .banner__heading { color: var(--errorTextBody, #6d0d0e); }

.banner__body {
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: var(--slateTextBody, #334155);
}

.banner__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 4px 12px;
  border-radius: 6px;
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  flex-shrink: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.banner--success .banner__btn { color: var(--successTextTitle, #114a2b); }
.banner--error   .banner__btn { color: var(--errorTextTitle, #480909); }

.banner__close {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  align-self: flex-start;
  cursor: pointer;
}
```

---

## 9. Usage Notes

- Use **Success** after a completed action (save, send, import).
- Use **Info** for neutral informational messages that don't require action.
- Use **Secondary** for tips, hints, or contextual help text within a form or panel.
- Use **Contrast** for dark-mode or sidebar contexts where high contrast is needed.
- Use **Error** for validation failures, destructive confirmations, or system errors.
- Use **Warning** for non-blocking alerts (quota approaching, deprecated feature).
- When used as a **toast** (transient), auto-dismiss after 5s; always show a close button.
- When used as a **banner** (persistent), keep it visible until the user acts or dismisses.
- The banner is also embedded inside Modal dialogs (e.g. "Disconnect Personal Inbox", "Delete Knowledge Base") to provide contextual warnings without a separate toast.
