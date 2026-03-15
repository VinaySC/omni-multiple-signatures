# Loader (Hot_Loader) Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 1242-3050
**Extracted:** 2026-03-08

---

## 1. Overview

Circular spinning loader ("Hot_Loader") used to indicate indeterminate loading states. Composed of 4 static animation-frame variants (Variant=1 through Variant=4) that form a CSS spin animation when cycled.

---

## 2. Variant Matrix

**Property:** `Variant` = 1 | 2 | 3 | 4

| Variant | Node ID | Description | Rotation |
|---|---|---|---|
| Variant=1 | 1242:3052 | Darkest segment top-left | 0° |
| Variant=2 | 1242:3055 | Rotated ~90° | 90° |
| Variant=3 | 1242:3058 | Rotated ~180° | 180° |
| Variant=4 | 1242:3061 | Rotated ~270° | 270° |

The 4 variants are static keyframe captures of a single spinning ring. In production, implement as a CSS `@keyframes` rotation animation rather than switching between variants.

---

## 3. Dimensions

| Property | Value |
|---|---|
| Width | 48 × 48px |
| Height | 48 × 48px |
| Position | relative |

---

## 4. Visual Appearance

The loader is a **circular ring** with a gradient sweep from dark to transparent, creating the illusion of motion:

| Property | Value |
|---|---|
| Shape | Circle / donut ring |
| Stroke width | ~6px |
| Colors | Gradient from dark slate (`#334155`) to transparent/light (`#94a3b8` fading out) |
| Background | transparent |

### SVG Assets (session-local URLs)

| Asset | URL |
|---|---|
| Ring base layer | `http://localhost:3845/assets/2f9b392d3592efda5ce42193d258933ccdb3e87d.svg` |
| Ring gradient layer | `http://localhost:3845/assets/b360afb16c5c94d83d80e6912dff1cf73c7e287f.svg` |

The component stacks two absolute SVG images (both `size-full`): a base ring and a gradient overlay, composited to create the sweep effect.

---

## 5. Animation

In production, implement as a CSS rotation:

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.loader {
  animation: spin 800ms linear infinite;
}
```

| Property | Value |
|---|---|
| Duration | 800ms |
| Easing | `linear` |
| Direction | clockwise (`rotate(0→360deg)`) |
| Iteration | infinite |

---

## 6. Also in Section: Instance Usage

The Figma section (1242:3050) also contains a standalone `Hot_Loader` instance at position (434, 352) — same 48×48px — demonstrating the component in context.

---

## 7. CSS Reference

```css
.loader {
  position: relative;
  width: 48px;
  height: 48px;
  animation: spin 800ms linear infinite;
}

.loader__svg {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
```

---

## 8. Inline SVG Implementation

For a pure-CSS loader matching the visual style (gradient ring, no external assets):

```css
.loader-ring {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #334155;
  border-right-color: #64748b;
  animation: spin 800ms linear infinite;
}
```

Or using `conic-gradient`:

```css
.loader-ring {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #334155 0%,
    #94a3b8 70%,
    transparent 100%
  );
  -webkit-mask: radial-gradient(
    farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px)
  );
  mask: radial-gradient(
    farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px)
  );
  animation: spin 800ms linear infinite;
}
```

---

## 9. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--slateTextBody` | `#334155` | Ring dark end |
| `--slateSurfaceDefault` | `#94a3b8` | Ring light/fade end |

---

## 10. Usage Notes

- Display the loader when a page section or component is fetching data with an unknown completion time.
- Center the loader within its container using `display: flex; align-items: center; justify-content: center`.
- For inline loading (e.g. inside a button), use a smaller size (20–24px) scaled proportionally.
- Pair with a descriptive `aria-label="Loading"` or `role="status"` + `aria-live="polite"`.
- For determinate progress (known percentage), use a progress bar instead.
