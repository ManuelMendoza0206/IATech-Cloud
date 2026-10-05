# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **GSAP v3.12.5** | animation |  |
| **ScrollTrigger** | scroll |  |
| **Web Animations API (5 active)** | animation |  |

## Scroll Journey

The page is **19.107px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 3.095px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 6.008px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 9.104px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 12.199px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 15.112px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 18.207px

![Scroll 100%](../screens/scroll/scroll-100.png)

## CSS Keyframes (17 extracted)

### `@keyframes arrowDiagonalSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper:hover .arrow svg`, `#form .button-wrapper svg g path.forward`, `.services-accordion-wrapper .right .circle:hover svg`, `.more-jobs-btn:hover svg path`

```css
@keyframes arrowDiagonalSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  50% {
    transform: translate(-15px, 15px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowReverseSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper .arrow svg`, `#form .button-wrapper svg g path.reverse`, `.services-accordion-wrapper .right .circle svg`, `.more-jobs-btn:not(:hover) svg path`

```css
@keyframes arrowReverseSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  50% {
    transform: translate(15px, -15px);
    opacity: 0;
  }
  100% {
    transform: translate(0px, 0px);
    opacity: 1;
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowDiagonalSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper:hover .arrow svg`, `#form .button-wrapper svg g path.forward`, `.services-accordion-wrapper .right .circle:hover svg`, `.more-jobs-btn:hover svg path`

```css
@keyframes arrowDiagonalSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  50% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowReverseSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper .arrow svg`, `#form .button-wrapper svg g path.reverse`, `.services-accordion-wrapper .right .circle svg`, `.more-jobs-btn:not(:hover) svg path`

```css
@keyframes arrowReverseSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  50% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowDiagonalSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper:hover .arrow svg`, `#form .button-wrapper svg g path.forward`, `.services-accordion-wrapper .right .circle:hover svg`, `.more-jobs-btn:hover svg path`

```css
@keyframes arrowDiagonalSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  50% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowReverseSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper .arrow svg`, `#form .button-wrapper svg g path.reverse`, `.services-accordion-wrapper .right .circle svg`, `.more-jobs-btn:not(:hover) svg path`

```css
@keyframes arrowReverseSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  50% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowReverseSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper .arrow svg`, `#form .button-wrapper svg g path.reverse`, `.services-accordion-wrapper .right .circle svg`, `.more-jobs-btn:not(:hover) svg path`

```css
@keyframes arrowReverseSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  50% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowDiagonalSlide`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `.button-wrapper:hover .arrow svg`, `#form .button-wrapper svg g path.forward`, `.services-accordion-wrapper .right .circle:hover svg`, `.more-jobs-btn:hover svg path`

```css
@keyframes arrowDiagonalSlide {
  0% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
  49% {
    opacity: 0;
    transform: translate(15px, -15px);
  }
  50% {
    opacity: 0;
    transform: translate(-15px, 15px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes progress-bar-stripes`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.progress-bar-animated`

```css
@keyframes progress-bar-stripes {
  0% {
    background-position-x: 1rem;
  }
}
```

> Background color/gradient shift · Background position (shimmer/scroll)

### `@keyframes placeholder-glow`

Duration: `2s` · Easing: `ease-in-out` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.placeholder-glow .placeholder`

```css
@keyframes placeholder-glow {
  50% {
    opacity: 0.2;
  }
}
```

> Opacity fade

### `@keyframes placeholder-wave`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.placeholder-wave`

```css
@keyframes placeholder-wave {
  100% {
    -webkit-mask-position-x: -200%;
    -webkit-mask-position-y: 0%;
  }
}
```

### `@keyframes swiper-preloader-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader, .swiper:not`

```css
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes arrowSlideRight`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `#newsletter-form .wpforms-submit.arrow-submit:hover svg`

```css
@keyframes arrowSlideRight {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  49% {
    opacity: 0;
    transform: translateX(15px);
  }
  50% {
    opacity: 0;
    transform: translateX(-15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes arrowSlideLeft`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `forwards`

Used by: `#newsletter-form .wpforms-submit.arrow-submit svg`

```css
@keyframes arrowSlideLeft {
  0% {
    opacity: 1;
    transform: translateX(0px);
  }
  49% {
    opacity: 0;
    transform: translateX(-15px);
  }
  50% {
    opacity: 0;
    transform: translateX(15px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes pulseShadow`

Duration: `2.5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `header #menu-toggle`

```css
@keyframes pulseShadow {
  0%, 100% {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 14px;
  }
  50% {
    box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 14px;
  }
}
```

> Shadow pulse/glow effect

### `@keyframes spinner-border`

```css
@keyframes spinner-border {
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes spinner-grow`

```css
@keyframes spinner-grow {
  0% {
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: none;
  }
}
```

> Fade + motion enter animation

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: 0.2s;
transition: 0.3s;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
transition: background-position 0.15s ease-in-out;
transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
transition: opacity 0.15s linear;
transition: height 0.35s;
transition: width 0.35s;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
transition: var(--bs-navbar-toggler-transition);
```

## How to Recreate This Motion Design

### Step 1 — Install Dependencies

```bash
npm install gsap
npm install gsap
```

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **GSAP ScrollTrigger** — scroll-linked animations (product rotation, parallax) use `ScrollTrigger.scrub` for frame-perfect scroll sync
- **Duration scale:** `0.2s` · `0.3s` · `0.15s` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`3095px`) → `screens/scroll/scroll-017.png`
- **33%** (`6008px`) → `screens/scroll/scroll-033.png`
- **50%** (`9104px`) → `screens/scroll/scroll-050.png`
- **67%** (`12199px`) → `screens/scroll/scroll-067.png`
- **83%** (`15112px`) → `screens/scroll/scroll-083.png`
- **100%** (`18207px`) → `screens/scroll/scroll-100.png`

