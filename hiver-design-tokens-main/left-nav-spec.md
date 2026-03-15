# Left Nav — Design Spec
**Node:** `6223:8256` | **File:** `NH9zVKuqGYXraKuomW7niY`

---

## 1. Component Dimensions

| Property | Value |
|----------|-------|
| Width | 208px |
| Height | 809px |
| Background | `--slateSurfaceSubtle100(Hover)` / `#f1f5f9` |
| Layout | flex-col, full-width |

---

## 2. Color Tokens

| Token | Hex | Usage |
|-------|-----|-------|
| `--slateSurfaceSubtle100(Hover)` | `#f1f5f9` | Nav background |
| `--slateSurfaceSubtle200` | `#e2e8f0` | Active nav item background |
| `--slateSurfaceWhite` | `#ffffff` | Search bar background |
| `--slateBorderLight` | `#e2e8f0` | Search border, section dividers |
| `--slateTextTitle` | `#0f172a` | Active item labels, badge counts |
| `--slateTextBody` | `#334155` | Default nav item labels, header title |
| `--slateTextSubtle` | `#64758b` | Section labels, sub-labels, search placeholder |

---

## 3. Typography Styles

| Style | Family | Size | Weight | Line-Height | Letter-Spacing |
|-------|--------|------|--------|-------------|----------------|
| `Label/Medium` | Hanken Grotesk | 16px | 500 (Medium) | 24px | 0 |
| `Label/Small` | Hanken Grotesk | 14px | 500 (Medium) | 20px | 0 |
| `Body/Small` | Hanken Grotesk | 14px | 400 (Regular) | 20px | 0 |
| `Label/xSmall` | Hanken Grotesk | 12px | 500 (Medium) | 18px | 0 |
| Badge count | Inter | 14px | 400 (Regular) | 20px | 0 |

---

## 4. Sub-Elements (in order)

### 4.1 Header
**Node:** `6223:8261`

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 27px |
| Padding | 8px (all sides) |
| Layout | flex-row, justify-between, items-center |

**"Conversations" text**
- Typography: `Label/Medium` (Hanken Grotesk Medium, 16px, line-height 24px)
- Color: `--slateTextBody` / `#334155`

**Edit/Compose icon (right)**
- Size: 16×16px
- Color: inherits from parent

---

### 4.2 Search Bar
**Node:** `6223:8267`

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 28px |
| Padding (outer) | 0 8px |
| Layout | flex-row, items-center |

**Input wrapper** (`6223:8268`)
| Property | Value |
|----------|-------|
| Background | `--slateSurfaceWhite` / `#ffffff` |
| Border | 1px solid `--slateBorderLight` / `#e2e8f0` |
| Border-radius | 6px |
| Padding | 8px 12px 8px 6px |
| Gap (icon → text) | 8px |
| Height | 28px (full) |

**Search icon**
- Size: 14×14px
- Color: `--slateTextSubtle` / `#64758b`

**Placeholder text**
- Content: "Search conversations"
- Typography: `Body/Small` (Hanken Grotesk Regular, 14px, line-height 20px)
- Color: `--slateTextSubtle` / `#64758b`

**Spacing below header / above search:** 13px gap (between header row and search row)

---

### 4.3 "My Work" — Active Nav Item
**Node:** `6223:8273`

| Property | Value |
|----------|-------|
| Width | 192px (8px inset each side from 208px container) |
| Height | 34px |
| Background | `--slateSurfaceSubtle200` / `#e2e8f0` |
| Border-radius | 6px |
| Padding | 8px horizontal |
| Layout | flex-row, items-center, justify-between |
| Margin-top | 8px (pt-8px on parent) |

**Icon**
- Size: 16×16px (inbox/tray icon)

**Label "My Work"**
- Typography: `Label/Small` (Hanken Grotesk Medium, 14px, line-height 20px)
- Color: `--slateTextTitle` / `#0f172a`
- Icon → label gap: 10px

**Badge count "24"**
- Typography: Inter Regular, 14px, line-height 20px
- Color: `--slateTextTitle` / `#0f172a`
- Alignment: text-right

---

### 4.4 Section Labels (Email / Chat)
**Nodes:** `6223:8280` (Email), `6223:8336` (Chat)

| Property | Value |
|----------|-------|
| Width | 100% |
| Height | 36px |
| Padding | 8px 12px 8px 16px |
| Border-bottom | 1px solid `--slateBorderLight` / `#e2e8f0` |
| Margin-top | 12px (pt-12px on parent section) |
| Layout | flex-row, items-center |

**Label text**
- Typography: `Label/Small` (Hanken Grotesk Medium, 14px, line-height 20px)
- Color: `--slateTextSubtle` / `#64758b`

---

### 4.5 Nav Items — Default Row
**Example nodes:** `6223:8285` (Personal), `6223:8299` (Assigned to me)

| Property | Value |
|----------|-------|
| Width | 192px (inside 8px padded parent) |
| Height | 32px |
| Padding | 8px 4px 8px 8px (expandable) or 8px (all, non-expandable) |
| Layout | flex-row, items-center, justify-between |
| Border-radius | none (default), 8px where applied |

**Icon**
- Size: 16×16px
- Position: left

**Label**
- Typography: `Body/Small` (Hanken Grotesk Regular, 14px, line-height 20px)
- Color: `--slateTextBody` / `#334155`
- Icon → label gap: 10px

**Chevron icon (expandable items only)**
- Size: 16×16px
- Position: right
- States:
  - Collapsed: chevron pointing down (default rotation)
  - Expanded: chevron pointing up (scaleY -1) — e.g. Surface Chat
  - Expanded sideways: chevron rotated 90° — e.g. Finance

---

### 4.6 Sub-Labels (Shared Inbox / More)
**Nodes:** `6223:8292` (Shared Inbox), `6223:8315` (More)

| Property | Value |
|----------|-------|
| Width | 192px |
| Height | 26px |
| Padding | 8px horizontal |
| Layout | flex-row, items-center |

**Label text**
- Typography: `Label/xSmall` (Hanken Grotesk Medium, 12px, line-height 18px)
- Color: `--slateTextSubtle` / `#64758b`

---

### 4.7 Indented Child Items (under Surface Chat)
**Nodes:** `6223:8347`–`6223:8366`

| Property | Value |
|----------|-------|
| Width | 192px |
| Height | 32px |
| Padding | 8px 8px 8px 20px (pl-20 for indent) |
| Layout | flex-row, items-center |
| Gap | 10px |

**Items and their typography:**

| Item | Label Style | Count | Count Style |
|------|------------|-------|-------------|
| Unassigned | `Body/Small` Regular, `--slateTextTitle` | 7 | Regular, `--slateTextTitle` |
| Mine | `Label/Small` Medium, `--slateTextBody` | 24 | Medium, `--slateTextTitle` |
| All assigned | `Body/Small` Regular, `--slateTextBody` | — | — |
| Tags | `Body/Small` Regular, `--slateTextBody` | — | — |
| Closed | `Body/Small` Regular, `--slateTextBody` | — | — |

---

## 5. Icon Sizes and Names

All files saved to `~/Desktop/hiver-tokens/icons/`.

| File | Size | Figma Component | Used In | Notes |
|------|------|-----------------|---------|-------|
| `edit.svg` | 16×16 | `110:349` | Header (right) | Pencil-square / compose |
| `search.svg` | 14×14 | `110:382` | Search bar | Magnifying glass |
| `inbox.svg` | 16×16 | `110:359` | My Work, Support, Finance | Tray/inbox shape — `currentColor` |
| `person-inbox.svg` | 16×16 | `3013:9892` | Personal | Composite: person + email envelope |
| `chevron-down.svg` | 16×16 | `110:351` | Personal, Support (collapsed) | Rotated for expanded state |
| `person-check.svg` | 16×16 | `110:292` | Assigned to me | Person + checkmark |
| `surface-chat.svg` | 16×16 | `6223:8342` | Surface Chat | Composite: two chat bubbles |
| `person-question.svg` | 16×16 | `2893:3833` | Unassigned | Person + `?` badge (2 combined paths) |
| `person.svg` | 16×16 | `110:245` | Mine | Single person silhouette |
| `people.svg` | 16×16 | `110:265` | All assigned | Two person silhouettes |
| `tag.svg` | 16×16 | `110:357` | Tags | Price-tag / label shape |
| `check.svg` | 16×16 | `110:267` | Closed | Checkmark (tick) |

**Chevron usage by state:**
- Collapsed row → `chevron-down.svg` (default orientation)
- Expanded row (e.g. Surface Chat) → `chevron-down.svg` with `transform: scaleY(-1)` (points up)
- Expanded sideways (e.g. Finance) → `chevron-down.svg` with `transform: rotate(90deg)`

**Stroke:** All icons use `stroke="currentColor"` — set color via CSS on the parent or directly.

**Stroke width:** `1.3` for 16×16 icons, `1.1` for 14×14 search icon.

> **Component guideline (from Figma):** Use only **14px** and **16px** for icons. 24px is included as a future possibility — avoid it.

---

## 6. Spacing Between Elements

| Gap | Value | Between |
|-----|-------|---------|
| Header → Search | 13px | Inside top sidebar section |
| Top sidebar section → My Work | 8px (`pt-8px`) | Section padding |
| My Work → Email section | 12px (`pt-12px`) | Before section label |
| Email section label → Personal row | 8px (`pt-8px`) | Top of content area |
| Personal row → Shared Inbox label | 0 | Stacked |
| Shared Inbox label → nav items | 0 | Stacked |
| Nav items (within Email) | 0 (no explicit gap) | Stacked rows |
| Email section → Chat section | 12px (`pt-12px`) | Before section label |
| Surface Chat header → child items | 0 | flex-col, no gap |
| Chat child items bottom padding | 12px (`pb-12px`) | Bottom of chat area |
| Icon → label (all rows) | 10px | Horizontal gap |
| Search icon → placeholder | 8px | Horizontal gap |

---

## 7. States

### My Work
- **Active/Default:** bg `--slateSurfaceSubtle200` (#e2e8f0), border-radius 6px, Label/Small Medium, color `--slateTextTitle`
- *(Hover state not shown in this frame — inferred: darker bg or cursor pointer)*

### Nav Items (Personal, Support, Finance, Surface Chat, sub-items)
- **Default:** no background, Body/Small Regular, color `--slateTextBody` (#334155)
- **Active (Mine):** Body/Small **Medium**, color `--slateTextBody`, badge in `--slateTextTitle` — visually differentiated by font weight
- **Expanded:** chevron rotates (Surface Chat → chevron up; Finance → chevron 90°)
- *(Hover: not specified in visible frame — typically slight bg tint)*

### Search Bar
- **Default:** bg white, border `--slateBorderLight`, placeholder in `--slateTextSubtle`
- *(Focus state not shown in this frame)*
