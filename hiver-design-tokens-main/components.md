# Hiver PAX — Component Specifications
> Source of truth for AI-generated UI. All tokens reference `tokens/mode-1/variables.css` and `typography.css`.
> Last updated: 2026-03-04

---

## Layout Structure

PAX uses a 4-column layout:

```
[Icon Rail] [Nav Panel] [Conversation List] [Thread View] [Detail Panel]
   48px        200px          280px              flex          280px
```

- **Icon Rail** — far left, dark background (`--slate950`), icon-only navigation
- **Nav Panel** — expandable, dark background (`--slate950`), text nav items
- **Conversation List** — white surface, scrollable list of conversation rows
- **Thread View** — main content area, light background (`--slate100`)
- **Detail Panel** — right sidebar, white surface, customer/chat metadata

---

## 1. Sidebar — Icon Rail

**Dimensions:** 48px wide, full height
**Background:** `--slate950`
**Layout:** Vertical stack of icon buttons, centered

### Icon Button
- Size: 36×36px, border-radius: `--radius-md` (6px)
- Default: icon color `oklch(1 0 0 / 0.45)`
- Hover: background `oklch(1 0 0 / 0.08)`
- Active: background `oklch(1 0 0 / 0.12)`, icon color white
- Notification badge: 8px circle, `--red500`, top-right corner of icon

---

## 2. Sidebar — Nav Panel

**Dimensions:** 200px wide, full height
**Background:** `--slate950`
**Font:** `--font-family` (Hanken Grotesk)

### Top Section
- App logo: Hiver orange logomark, top left
- Page title: "Conversations" — `--label-medium-size` (16px), weight 500, color white
- Edit/compose icon button: top right

### Search Bar
- Height: 32px
- Background: `oklch(1 0 0 / 0.07)`
- Border-radius: `--radius-md`
- Placeholder: "Search conversations" — `--body-small-size` (14px), color `oklch(1 0 0 / 0.35)`
- Icon: search icon, left-padded

### Nav Section Label
- Text: e.g. "Email", "Chat"
- Font: `--body-xsmall-size` (12px), weight 400
- Color: `oklch(1 0 0 / 0.40)`
- Padding: 12px 12px 4px

### Nav Item — Default
- Height: 32px, padding: 0 8px
- Border-radius: `--radius-md`
- Font: `--body-small-size` (14px), weight 400
- Color: `oklch(1 0 0 / 0.65)`
- Icon: 16px, left of label, same color
- Count badge: right-aligned (see Badge component)

### Nav Item — Active
- Background: `oklch(1 0 0 / 0.10)`
- Color: white, weight 500
- Left border: none (background change only)

### Nav Item — Hover
- Background: `oklch(1 0 0 / 0.06)`
- Color: `oklch(1 0 0 / 0.85)`

### Nav Item — Expandable (with chevron)
- Chevron icon right-aligned
- Chevron rotates 180° when expanded
- Children indented by 16px

### Count Badge (nav)
- Font: `--body-xsmall-size` (12px), weight 500
- Color: `oklch(1 0 0 / 0.45)`
- No background (plain number)
- Aligned to right edge of nav item

---

## 3. Section Header (Conversation Group)

Appears above grouped conversations in the list.

**Structure:** `[Type] · [Assignment] [Count] [Collapse arrow]`

**Examples:**
- `Live · Mine  3 ↑`
- `Live · Unassigned  3 ↑`
- `Async · Mine  4 ↑`

**Specs:**
- Height: 32px, padding: 0 16px
- Background: `--slate50`
- Border-bottom: 1px solid `--slate200`
- Font: `--body-xsmall-size` (12px), weight 500
- Color: `--slate600`
- Count: same font, `--slate500`
- Collapse arrow: `--slate400`, rotates on collapse
- Sticky: yes (stays at top while scrolling)

---

## 4. Conversation Row

The primary list item in the conversation panel.

**Dimensions:** Full width, min-height 64px, padding: 10px 16px
**Border-bottom:** 1px solid `--slate150`

### Layout (top to bottom):
```
[Channel Icon]  [Sender Name]        [Timestamp]
                [Preview text]              [● unread]
```

### Elements:

**Channel Icon**
- 16×16px icon (email, chat, etc.)
- Color: `--slate400`
- Positioned left, vertically centered

**Sender Name**
- Font: `--label-small-size` (14px), weight 500
- Color: `--slate900`
- Unread: weight 600
- Read: weight 400, color `--slate700`
- Truncated with ellipsis if overflow

**Timestamp**
- Font: `--body-xsmall-size` (12px), weight 400
- Color: `--slate400`
- Right-aligned on same row as sender name

**Preview Text**
- Font: `--body-xsmall-size` (12px), weight 400
- Color: `--slate500`
- Single line, truncated with ellipsis
- Unread: color `--slate700`

**Draft Badge**
- Text: "Draft"
- Font: `--body-xsmall-size` (12px), weight 500
- Color: `--orange500`
- Appears inline before preview text
- No background

**Unread Dot**
- Size: 7px circle
- Color: `--blue500`
- Position: right side of row, vertically centered with preview

### States:
- **Default (read):** background white
- **Unread:** background white, sender bold, dot visible
- **Hover:** background `--slate50`
- **Selected:** background `--blue50`, left border 2px solid `--blue500`

---

## 5. Avatar

Used for customer/user representation.

**Sizes:**
- Small: 24×24px, font 10px
- Medium: 30×30px, font 12px
- Large: 36×36px, font 14px

**Shape:** Full circle (border-radius 999px)
**Font:** weight 500, color white
**Content:** First letter of name, or first two initials

**Background colors** (assigned per user, from token palette):
- `--blue500`
- `--green500`
- `--primaryPurple500`
- `--orange500`
- `--red500`
- `--pastelYellow500`
- `--slate500`

---

## 6. Tag / Badge

Used for labeling conversations (e.g. Finance, Active).

**Structure:** `[Label text] [× close button]` (optional close)

**Specs:**
- Height: 20px
- Padding: 2px 8px
- Border-radius: `--radius-full` (999px)
- Font: `--body-xsmall-size` (12px), weight 500
- Close button: × character, 10px, same color, margin-left 4px

**Variants:**

| Variant   | Background           | Text color             |
|-----------|----------------------|------------------------|
| Default   | `--slate150`         | `--slate600`           |
| Finance   | `--primaryPurple50`  | `--primaryPurple600`   |
| Active    | `--green50`          | `--green600`           |
| Urgent    | `--red50`            | `--red500`             |
| Pending   | `--pastelYellow50`   | `oklch(0.594 0.118 99.305)` |
| Draft     | none (text only)     | `--orange500`          |

---

## 7. Button

**Variants:**

### Primary
- Background: `--blue500`
- Color: white
- Hover: `--blue600`
- Height: 32px, padding: 0 16px
- Border-radius: `--radius-md`
- Font: `--label-small-size` (14px), weight 500

### Ghost / Secondary
- Background: white
- Border: 1px solid `--slate200`
- Color: `--slate600`
- Hover: background `--slate50`
- Same dimensions as Primary

### Send Button (composer)
- Text: "Send"
- Background: white
- Border: 1px solid `--slate200`
- Color: `--slate700`
- Height: 32px, padding: 0 16px
- Border-radius: `--radius-md`
- Font: `--label-small-size` (14px), weight 500
- Position: bottom-right of composer

---

## 8. Reply Composer

Located at the bottom of the thread view.

**Specs:**
- Background: white
- Border-top: 1px solid `--slate200`
- Min-height: 80px
- Padding: 12px 16px

### Input Area
- Font: `--body-small-size` (14px), weight 400
- Color: `--slate700`
- Placeholder: "Shift + Enter for new line. Type '/' to search for chat templates and send quick replies"
- Placeholder color: `--slate400`
- No border on input itself

### Toolbar (bottom of composer)
- Height: 36px
- Border-top: 1px solid `--slate150`
- Left side: emoji icon (😊), attachment icon (📎) — 20px, color `--slate400`
- Right side: Send button (Ghost variant)
- Icons spaced 8px apart

---

## 9. Detail Panel — Right Sidebar

**Width:** 280px
**Background:** white
**Border-left:** 1px solid `--slate200`

### Panel Header
- Title: e.g. "Surface Chat"
- Font: `--label-medium-size` (16px), weight 500
- Color: `--slate900`
- Close icon: top right, `--slate400`
- Padding: 16px

### Detail Row
- Layout: `[Icon] [Label]` left, `[Value]` right
- Label font: `--body-small-size` (14px), weight 400, color `--slate500`
- Value font: `--body-small-size` (14px), weight 400, color `--slate800`
- Icon: 16px, color `--slate400`
- Height: 36px
- Border-bottom: 1px solid `--slate100`

### Collapsible Section
- Header: section title + chevron
- Title font: `--label-small-size` (14px), weight 500, color `--slate800`
- Chevron: `--slate400`, rotates on collapse
- Padding: 12px 16px
- Border-bottom: 1px solid `--slate200`

### Link Value
- Color: `--blue500`
- Underline on hover

---

## Usage for AI Generation

When generating Hiver UI, always:
1. Load color tokens from `tokens/mode-1/variables.css`
2. Load typography from `typography.css`
3. Reference this file for component structure and token mapping
4. Use Hanken Grotesk from Google Fonts
5. Default to 4-column PAX layout unless specified otherwise
