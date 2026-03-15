# Main Nav — Design Spec
**Node:** `6231:19899` | **File:** `NH9zVKuqGYXraKuomW7niY`

---

## 1. Component Dimensions

| Property | Value |
|----------|-------|
| Width | 44px |
| Height | 812px |
| Background | `--slateSurfaceSubtle200` / `#e2e8f0` |
| Layout | flex-col, items-center, **justify-between** |
| Padding | 0 8px 12px 8px (no top padding, 12px bottom, 8px sides) |

The nav uses `justify-between` to push the top icon group to the top and the bottom group to the bottom. Inner content width = 44 − 16 = **28px** (top section) / **24px** (bottom section, centered).

---

## 2. Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--slateSurfaceSubtle200` | `#e2e8f0` | Nav background |
| `--slateSurfaceSubtle300` | `#cbd5e1` | Active nav item background |
| `--slateSurfaceWhite` | `#ffffff` | Avatar text color |
| `--pastelRedBorderDefault` | `#d04b4f` | User avatar background (example user) |
| `#E42525` | — | Notification dot fill (hardcoded red) |
| `#EDF1F6` | — | Notification/online dot ring stroke (hardcoded) |
| `#2DBB6D` | — | Online status dot fill (hardcoded green) |
| `#F1F5F9` | — | Online dot outer circle bg (hardcoded) |

> Note: Avatar background color (`--pastelRedBorderDefault`) is user-specific and will vary per user.

---

## 3. Typography

| Style | Family | Size | Weight | Line-Height | Usage |
|-------|--------|------|--------|-------------|-------|
| `Label/xSmall` | Hanken Grotesk | 12px | 500 (Medium) | 18px | Avatar initial |

---

## 4. Structure & Sub-Elements

### Layout Overview

```
Main Nav (44×812, flex-col, justify-between)
├── TOP SECTION (gap: 10px)
│   ├── Logo area
│   └── Nav icons (gap: 16px)
│       ├── Surface Chat [ACTIVE]
│       ├── Notifications (+ red dot)
│       ├── Conversations
│       ├── Reporting
│       └── Settings
└── BOTTOM SECTION (gap: 16px)
    ├── Bottom icons (gap: 16px)
    │   ├── Help
    │   └── Comment
    └── User Avatar (+ online dot)
```

---

### 4.1 Top Section
**Node:** `6231:19927` | Width: 28px | Height: 244px | Layout: flex-col, gap: 10px

---

#### 4.1.1 Logo
**Node:** `6231:19928` | Width: 28px | Height: 46px

| Property | Value |
|----------|-------|
| Padding | pt: 11px, pb: 10px |
| Layout | flex-col, items-center, justify-center |

**Logo image (`6231:19935`)**
| Property | Value |
|----------|-------|
| Width | 24px |
| Height | 25px |
| Border-radius | 3.36px |
| Background | `rgba(255,255,255,0)` (transparent) |
| Content | Hiver logo PNG (sprite crop) |

---

#### 4.1.2 Nav Icons — Top Group
**Node:** `6231:19936` | Width: 28px | Height: 188px | Layout: flex-col, **gap: 16px**, items-center

---

##### Row 1 — Surface Chat (Active state)
**Node:** `6231:19937`

| Property | Value |
|----------|-------|
| Width | 28px |
| **Height** | **28px** (active items are 4px taller than default 24px) |
| Background | `--slateSurfaceSubtle300` / `#cbd5e1` |
| Border-radius | 6px |
| Padding | 4px 5px |
| Layout | flex-row, items-center, justify-center, gap: 10px |
| Icon | `surface-chat.svg` — 16×16px |

---

##### Row 2 — Notifications / Bell (Default + Badge)
**Node:** `6231:19943`

| Property | Value |
|----------|-------|
| Width | 28px |
| Height | 24px |
| Background | none (default) |
| Border-radius | 6px |
| Padding | 4px 5px |
| Layout | flex-row, items-center, justify-center, gap: 10px |
| Icon | `bell.svg` — 16×16px |

**Notification badge dot**
| Property | Value |
|----------|-------|
| File | `notif-dot.svg` |
| Rendered size | 5×5px |
| Position | absolute, left: 13px, top: 4px (from row container) |
| Fill | `#E42525` (red) |
| Ring stroke | `#EDF1F6`, stroke-width: 1.6 (creates white outline) |
| Overflow | SVG viewBox 8.2×8.2 accounts for stroke bleed |

---

##### Row 3 — Conversations
**Node:** `6231:19952`

| Property | Value |
|----------|-------|
| Width | 28px |
| Height | 24px |
| Background | none (default) |
| Border-radius | 6px |
| Padding | 4px 5px |
| Layout | flex-row, items-center, justify-center, gap: 10px |
| Icon | `conversations.svg` — 16×16px (two overlapping squares) |

---

##### Row 4 — Reporting / Chart
**Node:** `6231:19956`

| Property | Value |
|----------|-------|
| Width | 28px |
| Height | 24px |
| Background | none (default) |
| Border-radius | 6px |
| Padding | 4px 5px |
| Layout | flex-row, items-center, justify-center, gap: 10px |
| Icon | `chart.svg` — 16×16px (bar chart in rounded rect) |

---

##### Row 5 — Settings / Gear
**Node:** `6231:19960`

| Property | Value |
|----------|-------|
| Width | 28px |
| Height | 24px |
| Background | none (default) |
| Border-radius | 6px |
| Padding | 4px 5px |
| Layout | flex-row, items-center, justify-center, gap: 10px |
| Icon | `settings.svg` — 16×16px (composite: gear with center circle) |

---

### 4.2 Bottom Section
**Node:** `6231:19978` | Width: 24px | Height: 104px | Layout: flex-col, **gap: 16px**

> The bottom section (24px) is narrower than the top (28px). Both are centered within the 44px container via `items-center`.

---

#### 4.2.1 Bottom Icons Group
**Node:** `6231:19979` | Width: 24px | Height: 64px | Layout: flex-col, **gap: 16px**, items-center, justify-center

##### Help
**Node:** `6231:19980`

| Property | Value |
|----------|-------|
| Width | 24px |
| Height | 24px |
| Background | none |
| Border-radius | 6px |
| Padding | 4px 5px |
| Icon | `help.svg` — 16×16px (question mark in chat bubble) |

##### Comment / Chat
**Node:** `6231:19985`

| Property | Value |
|----------|-------|
| Width | 24px |
| Height | 24px |
| Background | none |
| Border-radius | 6px |
| Padding | 4px 5px |
| Icon | `comment.svg` — 16×16px (speech bubble) |

---

#### 4.2.2 User Avatar
**Node:** `6231:19990` (component: `List Elements`)

| Property | Value |
|----------|-------|
| Width | 24px |
| Height | 24px |
| Background | `--pastelRedBorderDefault` / `#d04b4f` (user-specific) |
| Border-radius | 60px (fully circular) |
| Layout | flex-col, items-center, justify-center |

**Initial text**
| Property | Value |
|----------|-------|
| Content | User initial (e.g. "A") |
| Typography | `Label/xSmall` — Hanken Grotesk Medium, 12px, line-height 18px |
| Color | `--slateSurfaceWhite` / `#ffffff` |

**Online status dot**
| Property | Value |
|----------|-------|
| File | `online-dot.svg` |
| Rendered size | 8×8px |
| Position | absolute, bottom-right corner of avatar: `left: calc(50% + 8px)`, `top: calc(50% + 8px)`, then `translate(-50%, -50%)` → effectively at (16px, 16px) from avatar origin |
| Outer circle | `#F1F5F9` (bg bleed) |
| Inner fill | `#2DBB6D` (green) |
| Ring stroke | `#EDF1F6`, stroke-width: 1 |

---

## 5. Icon Sizes and Names

All icon files in `~/Desktop/hiver-tokens/icons/`.

| File | Size | Figma Component | Used In | Notes |
|------|------|-----------------|---------|-------|
| `surface-chat.svg` | 16×16 | `6223:8342` (frame) | Surface Chat nav item | Composite: two chat bubbles |
| `bell.svg` | 16×16 | `110:336` | Notifications | Bell with clapper |
| `conversations.svg` | 16×16 | `110:328` | Conversations nav item | Two overlapping rounded squares |
| `chart.svg` | 16×16 | `110:334` | Reporting nav item | Bar chart in rounded rect |
| `settings.svg` | 16×16 | `510:180` | Settings nav item | Composite: gear + center circle |
| `help.svg` | 16×16 | (frame) | Help (bottom) | Composite: `?` in chat bubble |
| `comment.svg` | 16×16 | (frame) | Comment (bottom) | Speech bubble |
| `notif-dot.svg` | 8.2×8.2 | `Ellipse 58` | Bell badge | Red circle, white ring; rendered at 5×5 |
| `online-dot.svg` | 8×8 | `Online` | Avatar status | Green circle, white ring; rendered at 8×8 |

> **Component guideline (from Figma):** Use only **14px** and **16px** for icons. 24px is reserved for future use — avoid it.

All icons use `stroke="currentColor"` except `notif-dot.svg` and `online-dot.svg` which use hardcoded semantic colors (red/green).

---

## 6. Spacing Between Elements

| Gap | Value | Between |
|-----|-------|---------|
| Logo → Nav icons | 10px (`gap-[10px]` on top section) | Logo area and nav icon group |
| Between nav icon rows (top) | 16px (`gap-[16px]` on `6231:19936`) | Each nav icon row |
| Between bottom icons | 16px (`gap-[16px]` on `6231:19979`) | Help and Comment rows |
| Bottom icons → Avatar | 16px (`gap-[16px]` on `6231:19978`) | Icon group and avatar |
| Top section → Bottom section | flex `justify-between` fills remaining height | Pushes groups to top/bottom edges |
| Outer bottom padding | 12px (`pb-12px`) | Bottom of nav to component edge |
| Outer side padding | 8px (`px-8px`) | Left/right of nav content |
| Logo inner top padding | 11px | Top of logo section |
| Logo inner bottom padding | 10px | Bottom of logo section |
| Icon → edge (padding) | 5px horizontal, 4px vertical (`px-5 py-4`) | All nav icon rows |

---

## 7. States

### Nav Icon Rows

| State | Background | Height | Border-radius |
|-------|-----------|--------|---------------|
| Default | none | 24px | 6px (on hover target) |
| **Active** | `--slateSurfaceSubtle300` / `#cbd5e1` | **28px** | 6px |
| Hover | *(not specified in frame — infer lighter bg)* | 24px | 6px |

> The active state is visually distinct by both the background fill and the slightly taller row height (28px vs 24px). The icon itself does not change; only the container changes.

### Notification Badge
- Appears/disappears based on unread count
- Always red (`#E42525`), position is absolute top-right of the bell icon
- White ring separates it from the nav background

### User Avatar
- Always visible at bottom
- Online indicator (green dot) toggles based on user presence status
- Avatar background color is user-specific (assigned from a palette; example shown: `--pastelRedBorderDefault`)
