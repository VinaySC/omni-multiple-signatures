# Modal Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 3645-9115
**Extracted:** 2026-03-08

---

## 1. Overview

Dialog/modal overlay used for confirmations, forms, and contextual actions. All modals share a consistent two-part structure: a **header** (title bar) and a **body** (content + footer). 10 distinct modal instances are documented in the Figma section, covering the most common usage patterns.

---

## 2. Shared Anatomy

```
┌────────────────────────────────────────────────────┐
│  [⚠ icon]  Title                              [✕]  │  ← Header
├────────────────────────────────────────────────────┤
│                                                      │
│  Body content                                        │  ← Body
│  (text, inputs, radios, banners, etc.)               │
│                                                      │
│                          [Cancel]  [Primary Action]  │  ← Footer
└────────────────────────────────────────────────────┘
```

---

## 3. Dimensions

### Widths

| Width | Used for |
|---|---|
| 400px | Simple confirms, short forms (Add Members, Mark Away, Create Tag, Discard Draft) |
| 500px | Forms with more content, info modals with banners (SLA Settings, Sign In, Disconnect, Delete KB) |
| 700px | Wide content modals (AI Summarizer) |

### Heights (driven by content)

| Modal | Width | Height |
|---|---|---|
| Mark user as away | 400px | 184px |
| Discard shared draft | 400px | 184px |
| Add Members | 400px | 184px |
| Add a note | 400px | 220px |
| SLA Settings | 500px | 220px |
| Profile Updated (success) | 400px | 208px |
| Create a tag | 400px | 272px |
| Sign in with work email | 500px | 304px |
| Disconnect Personal Inbox | 500px | 284px |
| AI Summarizer | 700px | 284px |
| Delete Knowledge Base | 500px | 368px |

---

## 4. Header

| Property | Value |
|---|---|
| Height | 48px |
| Padding | 12px 16px |
| Background | `#edf1f6` (blue-gray surface) |
| Border-radius (top) | 6px 6px 0 0 |
| Layout | flex, items-center, justify-between |

### Title

| Property | Value |
|---|---|
| Font | Hanken Grotesk Medium |
| Size | 16px |
| Line-height | 24px |
| Color | `--slateTextBody` (`#334155`) |
| Token | `Label/Medium` |

### Optional Header Icon (left of title)

| Property | Value |
|---|---|
| Container | 32×32px frame |
| Icon | 14×14px |
| Used in | "Discard shared draft?", "Delete Knowledge Base" (warning icon) |

### Close Button

| Property | Value |
|---|---|
| Node ID | Instance named "Close" |
| Icon size | 14×14px |
| Position | absolute right: 16px (or justified via flex) |
| Color | `--slateTextBody` |
| Top offset | 17px from header top |

---

## 5. Body

| Property | Value |
|---|---|
| Background | `#ffffff` |
| Border | 1px solid `#e2e8f0` (`--slateBorderLight`) |
| Border-radius | 12px |
| Padding | 20px |
| Gap (between sections) | 20px |
| Layout | flex-col, items-end |

---

## 6. Footer (Action Buttons)

All modals end with a right-aligned button group. Patterns:

### Standard (Cancel + Primary)

| Property | Value |
|---|---|
| Layout | flex, items-center, gap 16px |
| Width | 220px |
| Position | right-aligned |
| Cancel button | Secondary style: white bg, `--slateBorderLight` border, `--slateTextBody` label |
| Primary button | Blue fill `--primarySurfaceDefault` (`#276cf0`), white label |
| Button height | 36px |
| Button padding | 4px 12px |
| Button border-radius | 6px |
| Button font | Hanken Grotesk Medium 14px/20px |

### Destructive (Cancel + Danger)

Used when the primary action is irreversible (Delete, Discard, Disconnect):

| Property | Value |
|---|---|
| Primary button bg | Red (danger), e.g. `--errorSurfaceDefault` (`#b81717`) or `#ef4444` |
| Primary button label | white |

---

## 7. All 10 Modal Instances

### 7.1 Mark user as away (3645:9309)

| Property | Value |
|---|---|
| Width × Height | 400 × 184px |
| Title | "Mark user as away?" |
| Header icon | None |
| Body | Short warning text (40px) |
| Buttons | Cancel | **Mark as away** (blue) |

---

### 7.2 Discard shared draft (3645:9235)

| Property | Value |
|---|---|
| Width × Height | 400 × 184px |
| Title | "Discard shared draft?" |
| Header icon | Warning icon (32×32px, left of title) |
| Body | Short warning text |
| Buttons | Cancel | **Discard** (red/danger) |

---

### 7.3 Add Members (3645:9200)

| Property | Value |
|---|---|
| Width × Height | 400 × 184px |
| Title | "Add Members" |
| Body | Input field (360×40px) |
| Buttons | Cancel | **Add** (blue) |

---

### 7.4 Add a note (3645:9116)

| Property | Value |
|---|---|
| Width × Height | 400 × 220px |
| Title | "Add a note" |
| Body | Textarea (360×140px) with toolbar row (format icons: 3 icon buttons 26×26px each) |
| Buttons | Cancel | **Save** (blue) — right-aligned inside textarea area |
| Toolbar icons | 3 icons at 16×16px inside 26×26px clickable frames |

---

### 7.5 SLA Settings (3645:9156)

| Property | Value |
|---|---|
| Width × Height | 500 × 220px |
| Title | "SLA Settings" |
| Body | Radio group (label + 2 radio options, total ~96px) |
| Buttons | Cancel | **Update** (blue) |

**Radio group layout:**
- Group label: 219×20px, Hanken Grotesk Regular 14px, `--slateTextBody`
- Radio items: 24×24px control + label, flex-row, gap: 4px
- Two radio options stacked, gap 28px vertically

---

### 7.6 Profile Updated / Success (3645:9179)

| Property | Value |
|---|---|
| Width × Height | 400 × 208px |
| Title | Hidden (no visible title text — header has only close icon) |
| Body | Centered content: 44×44px success icon + "Profile Updated" heading (16px Medium) + body text (40px, 2 lines) |
| Button | **Setup Shared Inbox Now** (full-width 200×36px, blue) |
| Layout | Centered vertically and horizontally |

**Centered success layout:**
```
        [ ✓ icon 44×44 ]
        Profile Updated
    Lorem ipsum body text…
  [ Setup Shared Inbox Now ]
```

---

### 7.7 Create a tag (3645:9213)

| Property | Value |
|---|---|
| Width × Height | 400 × 272px |
| Title | "Create a tag" |
| Body | Input field with label (360×60px) + Colour picker row |
| Colour picker | 6 color swatches, each 24×24px, gap 12px, border-radius 4px (full circle in practice) |
| Buttons | Cancel | **Save** (blue) |

**Colour swatches:** Purple, Blue, Orange/Red, Red, Green, Dark green (6 options, selected has ring indicator).

---

### 7.8 Sign in with work email (3645:9297)

| Property | Value |
|---|---|
| Width × Height | 500 × 304px |
| Title | "Sign in with your own work email" |
| Body | Description text (460×60px, 3 lines) + Info banner (460×80px, Toast Component) |
| Buttons | Cancel | **Sign in** (blue) |

---

### 7.9 Disconnect Personal Inbox (3645:9250)

| Property | Value |
|---|---|
| Width × Height | 500 × 284px |
| Title | "Disconnect Personal Inbox" |
| Body | Description text (460×60px) + Secondary banner (460×60px) |
| Buttons | Cancel | **Delete** (red/danger) |

---

### 7.10 Delete Knowledge Base (3645:9271)

| Property | Value |
|---|---|
| Width × Height | 500 × 368px |
| Title | "Delete Knowledge Base" |
| Header icon | Warning icon (32×32px) |
| Body | Description text (460×60px) + Input field with label (460×64px) + Secondary banner (460×60px) |
| Buttons | Cancel | **Delete** (red/danger) |

---

## 8. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `#edf1f6` | — | Modal header background (hardcoded in this file) |
| `--slateTextBody` | `#334155` | Header title, body text, secondary button label |
| `--slateTextSubtle` | `#64758b` | Body description text |
| `--slateBorderLight` | `#e2e8f0` | Body border, secondary button border |
| `--slateSurfaceWhite` | `#ffffff` | Secondary button bg, body bg |
| `--primarySurfaceDefault` | `#276cf0` | Primary button bg |
| `--slateSurfaceWhite` | `#ffffff` | Primary button label |
| `--errorSurfaceDefault` | `#b81717` | Danger button bg |

---

## 9. Typography

| Element | Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|---|
| Header title | `Label/Medium` | Hanken Grotesk | Medium (500) | 16px | 24px |
| Body text | `Body/Small` | Hanken Grotesk | Regular (400) | 14px | 20px |
| Button label | `Label/Small` | Hanken Grotesk | Medium (500) | 14px | 20px |
| Success heading | `Label/Medium` | Hanken Grotesk | Medium (500) | 16px | 24px (centered) |

---

## 10. Overlay / Backdrop

Not captured in the static Figma section. Standard convention:

| Property | Value |
|---|---|
| Backdrop | `rgba(0, 0, 0, 0.4)` |
| Modal position | centered in viewport |
| z-index | `1100` (above tooltips) |
| Entry animation | `opacity 0→1, scale 0.95→1, 150ms ease-out` |
| Exit animation | `opacity 1→0, 100ms ease-in` |

---

## 11. Accessibility

| Property | Value |
|---|---|
| Role | `dialog` on modal container |
| `aria-modal` | `true` |
| `aria-labelledby` | ID of header title |
| Focus management | Move focus to first interactive element on open; restore on close |
| Escape key | Closes modal (same as Cancel) |
| Focus trap | Tab cycles within modal only |

---

## 12. Usage Notes

- Always include a visible title in the header — even for success/confirmation states.
- Use **400px** for simple yes/no confirmations and short single-input forms.
- Use **500px** when the body needs more reading room or embeds a banner.
- Use **700px** for wide content (rich text editors, multi-column forms).
- Destructive actions (Delete, Discard, Disconnect) use a red/danger primary button and should have a warning icon in the header.
- For actions requiring typed confirmation (Delete Knowledge Base), embed an input field with a specific phrase to confirm.
- Never stack two modals — use a drawer or inline pattern instead.
