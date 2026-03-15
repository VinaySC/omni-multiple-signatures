# Skeleton Loader Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 689-7
**Extracted:** 2026-03-08

---

## 1. Overview

A placeholder loading state used to represent content that hasn't loaded yet. Renders as a rounded pill with a gradient that simulates a shimmer effect. Two variants: **Default** and **Variant2** (alternate shimmer phase).

---

## 2. Variant Matrix

**Property:** `Property1` = Default | Variant2

| Variant | Node ID | Width | Height | Notes |
|---|---|---|---|---|
| Default | 689:6 | 160px | 17px | Primary shimmer state |
| Variant2 | 689:8 | 160px | 17px | Alternate phase for animation |

---

## 3. Dimensions

| Property | Value |
|---|---|
| Width | 160px (base) |
| Height | 17px |
| Border-radius | 8px (full pill at 17px height) |
| Overflow | hidden |

> Width is configurable — stretch to fill container width for paragraph/heading skeletons.

---

## 4. Background Gradient

```css
background-image: linear-gradient(
  93.99deg,
  var(--slateSurfaceSubtle200, #e2e8f0) 19.28%,
  var(--slateSurfaceDefault, #94a3b8) 118.16%
);
```

| Property | Value |
|---|---|
| Direction | 93.99° (nearly horizontal, slight upward tilt) |
| Start color | `--slateSurfaceSubtle200` (`#e2e8f0`) at 19.28% |
| End color | `--slateSurfaceDefault` (`#94a3b8`) at 118.16% |
| Effect | Light to medium gray sweep |

---

## 5. Shimmer Animation

The two variants (Default, Variant2) represent two phases of a shimmer sweep. In production, animate using a moving gradient:

```css
@keyframes shimmer {
  0% {
    background-position: -320px 0;
  }
  100% {
    background-position: 320px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--slateSurfaceSubtle200, #e2e8f0) 25%,
    var(--slateSurfaceSubtle100, #f1f5f9) 50%,
    var(--slateSurfaceSubtle200, #e2e8f0) 75%
  );
  background-size: 640px 100%;
  animation: shimmer 1.5s infinite linear;
}
```

| Property | Value |
|---|---|
| Duration | 1.5s |
| Easing | `linear` |
| Iteration | infinite |
| Direction | left → right |

---

## 6. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--slateSurfaceSubtle200` | `#e2e8f0` | Gradient start (base color) |
| `--slateSurfaceDefault` | `#94a3b8` | Gradient end (highlight sweep) |
| `--slateSurfaceSubtle100` | `#f1f5f9` | Optional lighter shimmer highlight |

---

## 7. Common Skeleton Patterns

### Text line (single)
```css
.skeleton-text {
  height: 17px;
  border-radius: 8px;
  width: 160px; /* or 100% */
}
```

### Heading
```css
.skeleton-heading {
  height: 20px;
  border-radius: 8px;
  width: 240px;
}
```

### Paragraph (multiple lines)
```html
<div class="skeleton" style="width: 100%; height: 17px;"></div>
<div class="skeleton" style="width: 85%; height: 17px; margin-top: 8px;"></div>
<div class="skeleton" style="width: 70%; height: 17px; margin-top: 8px;"></div>
```

### Avatar placeholder
```css
.skeleton-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
```

### Table row
```css
.skeleton-cell {
  height: 17px;
  border-radius: 8px;
  width: 80%;
}
```

---

## 8. CSS Reference

```css
.skeleton {
  height: 17px;
  width: 160px;
  border-radius: 8px;
  overflow: hidden;
  background-image: linear-gradient(
    93.99deg,
    var(--slateSurfaceSubtle200, #e2e8f0) 19.28%,
    var(--slateSurfaceDefault, #94a3b8) 118.16%
  );
}

/* Animated version */
.skeleton--animated {
  background: linear-gradient(
    90deg,
    var(--slateSurfaceSubtle200, #e2e8f0) 25%,
    var(--slateSurfaceSubtle100, #f1f5f9) 50%,
    var(--slateSurfaceSubtle200, #e2e8f0) 75%
  );
  background-size: 640px 100%;
  animation: shimmer 1.5s infinite linear;
}

@keyframes shimmer {
  0%   { background-position: -320px 0; }
  100% { background-position: 320px 0; }
}
```

---

## 9. Accessibility

| Property | Value |
|---|---|
| `aria-busy` | `true` on the container while loading |
| `aria-label` | "Loading..." on the skeleton container |
| `role` | `status` (optional, on wrapping region) |
| Screen reader | Hide individual skeleton elements; announce loading state at container level |

---

## 10. Usage Notes

- Use skeleton loaders instead of the spinner (Hot_Loader) when the **layout is known** — skeletons reduce perceived load time by setting layout expectations.
- Use the spinner (Hot_Loader) when the **layout is unknown** or the loading is a blocking full-page transition.
- Match skeleton block sizes to the actual content they represent (same height and approximate width).
- Stagger animation start times slightly (e.g. `animation-delay: 0.1s` per row) to create a more natural wave effect.
- Do not show skeletons for operations expected to complete in under 300ms.
- Replace skeletons with real content using a smooth `opacity` transition: `transition: opacity 200ms ease`.
