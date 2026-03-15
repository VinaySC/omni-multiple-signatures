# HOT Design System — AI Prototyping Source of Truth

**Repo:** `shankarm-hiver/hiver-design-tokens`
**Figma source:** `NH9zVKuqGYXraKuomW7niY`
**Font:** [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) — Medium (500) and Regular (400)

This repository is the **single source of truth** for building pixel-accurate Hiver UI prototypes using AI (Claude, Cursor, v0, etc.). It contains design tokens, component specs, and SVG icons — everything an AI needs to produce production-faithful HTML/CSS without guessing values.

---

## Repository Structure

```
hiver-design-tokens/
│
├── semantic-tokens.css          ← PRIMARY: use these in all components
├── primitives.css               ← Base color palette (reference only)
├── typography.css               ← Font scale and line-height tokens
│
├── tokens/                      ← Raw Figma variable exports
│   ├── mode-1/variables.css     ← Default mode (light)
│   ├── primary/variables.css
│   ├── error/variables.css
│   ├── success/variables.css
│   └── warning/variables.css
│
├── components/                  ← Component specs (16 components)
│   ├── button-spec.md
│   ├── input-field-spec.md
│   ├── dropdown-spec.md
│   ├── checkbox-spec.md
│   ├── radio-button-spec.md
│   ├── toggle-switch-spec.md
│   ├── avatar-spec.md
│   ├── badge-spec.md
│   ├── chip-spec.md
│   ├── tooltip-spec.md
│   ├── loader-spec.md
│   ├── skeleton-loader-spec.md
│   ├── lists-spec.md
│   ├── tabular-spec.md          ← Tab navigation (Outlined / Filled / Type3)
│   ├── banners-spec.md          ← Toast / inline banners (6 variants)
│   └── modals-spec.md           ← 10 modal patterns
│
├── icons/                       ← SVG icon library
│   ├── *.svg                    ← General icons
│   └── customer-module/         ← Customer module-specific icons
│       └── *.svg
│
├── components.md                ← Full PAX layout spec
├── customer-module-main-nav-spec.md
├── left-nav-spec.md
└── main-nav-spec.md
```

---

## For AI: How to Read and Use This Repo

### Step 1 — Always load tokens first

Before writing any CSS, fetch and embed the contents of **`semantic-tokens.css`** as a `<style>` block or CSS import. This file contains all resolved color, surface, border, and text tokens as CSS custom properties.

```html
<!-- Embed inline in HTML prototypes -->
<style>
  /* paste full contents of semantic-tokens.css here */
</style>
```

Never hardcode hex values. Always reference CSS variables:

```css
/* ✅ correct */
background-color: var(--slateSurfaceSubtle100-hover, #f1f5f9);
color: var(--slateTextBody, #334155);

/* ❌ wrong */
background-color: #f1f5f9;
color: #334155;
```

### Step 2 — Token naming convention

Tokens follow a `--[palette][Category][Variant]` pattern:

| Prefix | Meaning |
|---|---|
| `--slate` | Neutral chrome — backgrounds, text, borders, icons |
| `--primary` | Brand blue — CTAs, active states, links |
| `--success` | Green — confirmations, validations |
| `--error` | Red — errors, destructive actions |
| `--warning` | Orange — cautions, alerts |
| `--pastelRed` | Muted red — avatars, tags |
| `--pastelLightBlue` | Muted blue — avatars |

Most-used tokens:

| Token | Hex | Use |
|---|---|---|
| `--slateSurfaceWhite` | `#ffffff` | Default component background |
| `--slateSurfaceSubtle` | `#f8fafc` | Page / section background |
| `--slateSurfaceSubtle100-hover` | `#f1f5f9` | Hover states, filled tab container |
| `--slateSurfaceSubtle200` | `#e2e8f0` | Active / pressed states |
| `--slateBorderLight` | `#e2e8f0` | Default border |
| `--slateTextBody` | `#334155` | Primary body text |
| `--slateTextSubtle` | `#64758b` | Secondary / hint text |
| `--primarySurfaceDefault` | `#276cf0` | Primary button, active indicators |
| `--errorSurfaceDefault` | `#b81717` | Danger button, error badge |

### Step 3 — Read the component spec before writing markup

Each file in `components/` is a complete spec. It contains:

- **Variant matrix** — all props and their combinations
- **Exact dimensions** — width, height, padding, gap, border-radius
- **State colors** — per-state token table (Default / Hover / Focus / Active / Disabled)
- **Typography** — which font token applies to each text element
- **CSS reference** — copy-paste-ready CSS block

```
components/button-spec.md      → 5 types × 5 states × 4 icon positions
components/input-field-spec.md → Standard (40px) + compact (32px), all states
components/modals-spec.md      → 10 modal patterns with exact dimensions
components/lists-spec.md       → Menu row items, 12 variants
components/tabular-spec.md     → Outlined, Filled, and Type3 tab strips
components/banners-spec.md     → 6 toast/banner variants
```

### Step 4 — Typography

All text uses **Hanken Grotesk**. Load from Google Fonts:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500&display=swap" rel="stylesheet">
```

| Token | Weight | Size | Line-height | Use |
|---|---|---|---|---|
| `Label/xSmall` | 500 | 12px | 18px | Avatar initials, small labels |
| `Label/Small` | 500 | 14px | 20px | Button labels, form labels |
| `Label/Medium` | 500 | 16px | 24px | Modal titles, section headers |
| `Body/xSmall` | 400 | 12px | 18px | Helper text, badges, chips, toast body |
| `Body/Small` | 400 | 14px | 20px | List items, input values, tab labels |

### Step 5 — SVG icons

Icons are in `icons/` (general) and `icons/customer-module/` (module-specific).

**Allowed sizes: 14px and 16px only. Never 24px in production UI.**

Inline SVG (preferred — allows color via `currentColor`):

```html
<svg width="16" height="16" fill="none" viewBox="0 0 16 16">
  <!-- paste path data from .svg file -->
</svg>
```

Tinting with a token:
```css
.icon { color: var(--slateIconsSubtle, #64758b); }
svg path { fill: currentColor; }
```

---

## Component Quick Reference

| Component | Spec file | Key dimensions |
|---|---|---|
| Button (Primary / Secondary / Danger / Link) | `button-spec.md` | 32px h, 6px radius |
| Input field | `input-field-spec.md` | 40px standard, 32px compact |
| Dropdown | `dropdown-spec.md` | 300px w, 8px radius |
| Checkbox | `checkbox-spec.md` | 16×16px control, 4px radius |
| Radio button | `radio-button-spec.md` | 16×16px control, 50% radius |
| Toggle/Switch | `toggle-switch-spec.md` | Regular 32×16px, Large 40×20px |
| Avatar | `avatar-spec.md` | Default 24×24px, Small 18×18px |
| Badge | `badge-spec.md` | Pill, 0 6px padding, 12px radius |
| Chip | `chip-spec.md` | 22px h, 4px radius, 14px icons |
| Tooltip | `tooltip-spec.md` | 24px h, dark bg `#475569` |
| Loader | `loader-spec.md` | 48×48px spinning ring |
| Skeleton loader | `skeleton-loader-spec.md` | 160×17px gradient shimmer |
| List item | `lists-spec.md` | 232×36–40px, 8px radius |
| Tabs | `tabular-spec.md` | Outlined 36px / Filled 32px |
| Banner / Toast | `banners-spec.md` | 508×80px, 0.5px border |
| Modal | `modals-spec.md` | 400 / 500 / 700px wide |

---

## Screen-Level Specs

| File | What it covers |
|---|---|
| `customer-module-main-nav-spec.md` | 44px vertical nav rail, 8 icons + avatar |
| `components.md` | Full PAX 4-column layout (48px icon rail + 200px nav + content) |
| `left-nav-spec.md` | 208px left nav panel |
| `main-nav-spec.md` | Main navigation top bar |

---

## Ready-to-Use AI Prompt

Copy this prompt, fill in the last section, and paste into Claude, Cursor, or any AI tool.

---

```
You are building a pixel-accurate HTML/CSS prototype for Hiver's HOT Design System.

## Design tokens
Fetch and embed the full contents of:
https://raw.githubusercontent.com/shankarm-hiver/hiver-design-tokens/main/semantic-tokens.css

Paste it as a <style> block at the top of the file.
Never hardcode hex values — always use CSS variables with hex fallbacks:
  var(--slateTextBody, #334155)

## Font
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500&display=swap" rel="stylesheet">
font-family: "Hanken Grotesk", sans-serif;

## Typography scale (use exactly)
Label/Medium  → font-weight:500; font-size:16px; line-height:24px;  (modal titles)
Label/Small   → font-weight:500; font-size:14px; line-height:20px;  (buttons, labels)
Label/xSmall  → font-weight:500; font-size:12px; line-height:18px;  (avatar initials)
Body/Small    → font-weight:400; font-size:14px; line-height:20px;  (body text, inputs)
Body/xSmall   → font-weight:400; font-size:12px; line-height:18px;  (hints, badges)

## Component specs
Read each relevant spec from GitHub before writing any markup:
https://raw.githubusercontent.com/shankarm-hiver/hiver-design-tokens/main/components/[name]-spec.md

Available specs:
button, input-field, dropdown, checkbox, radio-button, toggle-switch,
avatar, badge, chip, tooltip, loader, skeleton-loader,
lists, tabular, banners, modals

## Icons
Repo: https://github.com/shankarm-hiver/hiver-design-tokens/tree/main/icons/
Customer module: .../icons/customer-module/*.svg
Use 14px or 16px only. Embed SVGs inline. Tint with currentColor.

## Output rules
- Single self-contained .html file — no external CSS files, no frameworks
- All assets inline (no external image URLs)
- Match every padding, gap, border-radius, and font size from the spec files exactly
- Include :hover states
- File must open and render correctly directly in a browser

## What to build
[DESCRIBE WHAT YOU WANT HERE]
```

---

### Example: build the "Create a tag" modal

Replace the last line with:

> Build the Hiver "Create a tag" modal (400×272px).
> Read `components/modals-spec.md` for the two-zone modal structure (header bg `#edf1f6`, body bg white with `--slateBorderLight` border).
> Read `components/input-field-spec.md` for the Tag Name input (label + 360×40px input, standard state).
> Read `components/button-spec.md` for Cancel (secondary) and Save (primary blue) buttons at 36px height.
> Add a "Colour" label and a row of 6 circular colour swatches (24×24px each, gap 12px): `#7c3aed`, `#276cf0`, `#f97316`, `#ef4444`, `#22c55e`, `#15803d` — second swatch (blue) shows a selected ring.

---

## Token Cheat Sheet

```css
/* ── Surfaces ───────────────────────────────── */
--slateSurfaceWhite              #ffffff    component bg
--slateSurfaceSubtle             #f8fafc    page bg
--slateSurfaceSubtle100-hover    #f1f5f9    hover bg / filled tab container
--slateSurfaceSubtle200          #e2e8f0    active / pressed bg
--slateSurfaceDark600            #475569    tooltip bg

/* ── Borders ────────────────────────────────── */
--slateBorderLight               #e2e8f0    default border
--slateBorderMild                #edf1f6    modal header bg

/* ── Text ───────────────────────────────────── */
--slateTextTitle                 #0f172a    headings
--slateTextBody                  #334155    primary body
--slateTextSubtle                #64758b    secondary / hint
--slateTextDisabled              #94a3b8    disabled

/* ── Icons ──────────────────────────────────── */
--slateIconsActive               #334155
--slateIconsSubtle               #64758b
--slateIconsDisabled             #94a3b8

/* ── Primary (blue) ─────────────────────────── */
--primarySurfaceDefault          #276cf0    button bg / active state
--primarySurfaceSubtle           #e6effd    subtle highlight
--primaryTextLabel               #0c3e9d    link text

/* ── Success (green) ────────────────────────── */
--successSurfaceSubtle           #d3f4e1
--successBorderLight             #a6e9c3
--successTextBody                #1b6f41

/* ── Error (red) ────────────────────────────── */
--errorSurfaceDefault            #b81717    danger button
--errorSurfaceSubtle             #fce4e4
--errorBorderLight               #f19192
--errorTextBody                  #6d0d0e

/* ── Warning (orange) ───────────────────────── */
--warningSurfaceSubtle           #fbe2d5
--warningTextBody                #933e0f

/* ── Pastel avatars ─────────────────────────── */
--pastelRedBorderDefault         #d04b4f    red avatar bg
--pastelLightBlueSurfaceDefault  #77add9    blue avatar bg
```

---

## Maintainers

Specs are extracted via Figma MCP (`figma-desktop` server) from file `NH9zVKuqGYXraKuomW7niY`.

To add a new component spec:
1. Identify the node ID in Figma
2. Run `get_design_context` + `get_metadata` + `get_screenshot` via the MCP
3. Save as `components/[component-name]-spec.md` following the existing format
4. Commit and push — the file is immediately available as AI context
