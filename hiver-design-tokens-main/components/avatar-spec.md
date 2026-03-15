# Avatar Component Spec
**Figma File:** NH9zVKuqGYXraKuomW7niY
**Node ID:** 528-993
**Extracted:** 2026-03-08

---

## 1. Overview

Monogram avatar showing a user's initial letter. Two sizes (Default, Small) × two online states (Online, Offline) = **4 variants**.

---

## 2. Variant Matrix

| Variant | Size | Online | Node ID |
|---|---|---|---|
| Default + Online | 24×24px | true | 528:991 |
| Default + Offline | 24×24px | false | 632:1496 |
| Small + Online | 18×18px | true | 632:1571 |
| Small + Offline | 18×18px | false | 632:1578 |

---

## 3. Dimensions

| Size | Width | Height | Border-radius |
|---|---|---|---|
| Default | 24px | 24px | 60px (full circle) |
| Small | 18px | 18px | 45px (full circle) |

---

## 4. Background Color

| Token | Hex | Usage |
|---|---|---|
| `--pastelLightBlueSurfaceDefault` | `#77add9` | Avatar background (default blue) |
| `--pastelRedBorderDefault` | `#d04b4f` | Avatar background (red variant, e.g. in Main Nav) |

> Actual background color depends on the assigned user color. The component accepts any pastel color token.

---

## 5. Monogram Label

| Property | Default size | Small size |
|---|---|---|
| Character | Single letter (e.g. "A") | Single letter |
| Font | Hanken Grotesk Medium | Hanken Grotesk Medium |
| Weight | 500 | 500 |
| Size | 12px | 9px |
| Line-height | 18px | 13.5px |
| Color | `--slateSurfaceWhite` (`white`) | `--slateSurfaceWhite` (`white`) |
| Token | `Label/xSmall` | — (sub-xSmall) |
| Alignment | center (flex items-center justify-center) | center |

---

## 6. Online Indicator

### Default size

| Property | Value |
|---|---|
| Asset | `imgOnline` SVG (green dot) |
| Size | 8 × 8px |
| Position | absolute |
| Left | `calc(50% + 8px)` |
| Top | `calc(50% + 8px)` |
| Transform | `translate(-50%, -50%)` |

### Small size

| Property | Value |
|---|---|
| Asset | `imgOnline1` SVG (green dot, scaled) |
| Size | 7.5 × 7.5px |
| Position | absolute |
| Left | `calc(50% + 6.75px)` |
| Top | `calc(50% + 6.75px)` |
| Transform | `translate(-50%, -50%)` |

---

## 7. Offline Indicator

### Default size

| Property | Value |
|---|---|
| Asset | `imgOffline` SVG (gray dot) |
| Size | 8 × 8px |
| Position | absolute |
| Left | `calc(50% + 8px)` |
| Top | `calc(50% + 8px)` |
| Transform | `translate(-50%, -50%)` |

### Small size

| Property | Value |
|---|---|
| Asset | `imgOffline1` SVG (gray dot) |
| Size | 7.5 × 7.5px |
| Position | absolute |
| Left | `calc(50% + 5.75px)` |
| Top | `calc(50% + 5.75px)` |
| Transform | `translate(-50%, -50%)` |

---

## 8. Asset URLs (Figma localhost — session only)

| Asset | URL |
|---|---|
| Online indicator (Default) | `http://localhost:3845/assets/e98bc9afdccca3cd299311510ef66e24dc157910.svg` |
| Offline indicator (Default) | `http://localhost:3845/assets/3f38907600c89dc201a3dba1ac337c6fda27ae59.svg` |
| Online indicator (Small) | `http://localhost:3845/assets/80d24565a0035da10533e9decd70aa00527543ef.svg` |
| Offline indicator (Small) | `http://localhost:3845/assets/bc5102fece7696a2b78af9874309164e945e21a9.svg` |

---

## 9. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `--pastelLightBlueSurfaceDefault` | `#77add9` | Default avatar background |
| `--slateSurfaceWhite` | `#ffffff` | Monogram text |

---

## 10. Typography

| Token | Font | Weight | Size | Line-height |
|---|---|---|---|---|
| `Label/xSmall` | Hanken Grotesk | Medium (500) | 12px | 18px |

---

## 11. CSS Reference

```css
/* Default size */
.avatar {
  width: 24px;
  height: 24px;
  border-radius: 60px;
  background-color: var(--pastelLightBlueSurfaceDefault, #77add9);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Small size */
.avatar--small {
  width: 18px;
  height: 18px;
  border-radius: 45px;
}

.avatar__label {
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: white;
}

.avatar--small .avatar__label {
  font-size: 9px;
  line-height: 13.5px;
}

.avatar__status {
  position: absolute;
  width: 8px;
  height: 8px;
  left: calc(50% + 8px);
  top: calc(50% + 8px);
  transform: translate(-50%, -50%);
}

.avatar--small .avatar__status {
  width: 7.5px;
  height: 7.5px;
  left: calc(50% + 6.75px);
  top: calc(50% + 6.75px);
}
```

---

## 12. Usage Notes

- Avatar backgrounds use pastel color tokens assigned per user (blue, red, green, purple, etc.).
- The status indicator (online/offline) is always positioned at the bottom-right of the avatar.
- Use the 24px (Default) avatar in most contexts: nav rails, comments, assignee fields.
- Use the 18px (Small) avatar in dense UIs: table cells, compact lists, chips.
- Always provide `aria-label` with the user's name for screen readers.
- When no photo is available, fall back to monogram. When a photo is set, replace the colored background + letter with the photo (circular crop).
