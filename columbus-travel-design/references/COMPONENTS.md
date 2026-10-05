# Component Reference

> Repeated DOM patterns detected by structural analysis. Each component appeared 3+ times.

## Detected Components

| Component | Category | Instances | Key Classes |
|-----------|----------|-----------|-------------|
| **Text Default** | unknown | 11× | `.text-default` |
| **Text Hover** | unknown | 11× | `.text-hover` |
| **Align Items Center** | card | 4× | `.align-items-center`, `.button`, `.c-dark-blue` |
| **Font 500** | unknown | 4× | `.font-500`, `.line-height1`, `.text-140` |
| **Fit Img** | card | 4× | `.fit-img`, `.service-item-img-wrapper` |
| **H 100** | card | 4× | `.h-100`, `.w-100`, `.wp-post-image` |
| **Text 120** | unknown | 4× | `.text-120` |
| **C White** | unknown | 4× | `.c-white`, `.font-500`, `.position-absolute` |
| **Align Items Center** | card | 4× | `.align-items-center`, `.bg-dark-blue`, `.border-radius-50` |
| **Align Items Center** | card | 4× | `.align-items-center`, `.d-flex`, `.h-100` |
| **C White** | unknown | 4× | `.c-white`, `.font-500`, `.pad-inline-40` |
| **Col 12** | unknown | 4× | `.col-12`, `.col-lg-3`, `.col-md-6` |
| **Ps 0** | unknown | 4× | `.ps-0`, `.ps-lg-4`, `.ruler-map-panel` |
| **Arrow Wrapper** | unknown | 3× | `.arrow-wrapper`, `.position-relative` |
| **Hole** | unknown | 3× | `.hole` |
| **Img** | unknown | 3× |  |
| **Inner** | unknown | 3× | `.inner`, `.max-content`, `.pad-block-80` |
| **Counter Number** | unknown | 3× | `.counter-number`, `.font-500`, `.line-height1` |
| **Desc** | unknown | 3× | `.desc`, `.font-400`, `.ms-4` |
| **Mob Vh 100** | card | 3× | `.mob-vh-100`, `.overflow-hidden`, `.position-absolute` |

## Cards

### Align Items Center

**Instances found:** 4

**CSS classes:** `.align-items-center` `.button` `.c-dark-blue` `.d-flex` `.font-500` `.justify-content-center`

**HTML structure:**

```html
<span class="button line-height1 d-flex align-items-center justify-content-center position-relative text-18 c-dark-blue font-500"> PLAN YOUR TRIP </span>
```

**Base styles (from design tokens):**

```css
.align-items-center {
  background: #000000;
  border: 1px solid #3b3b3b;
  border-radius: 30px;
  padding: 10px;
}```

### Fit Img

**Instances found:** 4

**CSS classes:** `.fit-img` `.service-item-img-wrapper`

**HTML structure:**

```html
<div class="fit-img service-item-img-wrapper" style="border-radius: 107px; height: 46.6667%; width: 26.2857%; translate: none; rotate: none; scale: none; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"> <picture><source srcset="https://columbus-travel.com/wp-content/uploads/2026/04/columbus-travel-service-executive-travel-main-1-2048x1366.jpg.webp" type="image/webp"><img width="368" height="900" src="https://columbus-travel.com/wp-content/uploads/2026/04/columbus-travel-service-executive-travel-main-1-2048x1366.jpg.webp" class="h-100 w-100 wp-post-image" alt="" decoding="asyn
```

**Base styles (from design tokens):**

```css
.fit-img {
  background: #000000;
  border: 1px solid #3b3b3b;
  border-radius: 30px;
  padding: 10px;
}```

### H 100

**Instances found:** 4

**CSS classes:** `.h-100` `.w-100` `.wp-post-image`

**HTML structure:**

```html
<img width="368" height="900" src="https://columbus-travel.com/wp-content/uploads/2026/04/columbus-travel-service-executive-travel-main-1-2048x1366.jpg.webp" class="h-100 w-100 wp-post-image" alt="" decoding="async" srcset="https://columbus-travel.com/wp-content/uploads/2026/04/columbus-travel-service-executive-travel-main-1-2048x1366.jpg.webp 2048w, https://columbus-travel.com/wp-content/uploads/2026/04/columbus-travel-service-executive-travel-main-1-768x512.jpg.webp 768w, https://columbus-travel.com/wp-content/uploads/2026/04/columbus-travel-service-executive-travel-main-1-1536x1025.jpg.webp
```

**Base styles (from design tokens):**

```css
.h-100 {
  background: #000000;
  border: 1px solid #3b3b3b;
  border-radius: 30px;
  padding: 10px;
}```

### Align Items Center

**Instances found:** 4

**CSS classes:** `.align-items-center` `.bg-dark-blue` `.border-radius-50` `.d-flex` `.justify-content-center` `.main-plus-button`

**HTML structure:**

```html
<div class="plus-button main-plus-button border-radius-50 d-flex justify-content-center align-items-center bg-dark-blue"> <a href="https://columbus-travel.com/service/executive-travel/" class="plus-button-link d-flex align-items-center justify-content-center w-100 h-100" title="Learn more about Executive Travel" style="opacity: 0;"> <span class="d-none"> Learn more about Executiv…</span> <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9165 4.16663V22.9166H4.1665V27.0833H22.9165V45.8333H27.0832V
```

**Base styles (from design tokens):**

```css
.align-items-center {
  background: #000000;
  border: 1px solid #3b3b3b;
  border-radius: 30px;
  padding: 10px;
}```

### Align Items Center

**Instances found:** 4

**CSS classes:** `.align-items-center` `.d-flex` `.h-100` `.justify-content-center` `.plus-button-link` `.w-100`

**HTML structure:**

```html
<a href="https://columbus-travel.com/service/executive-travel/" class="plus-button-link d-flex align-items-center justify-content-center w-100 h-100" title="Learn more about Executive Travel" style="opacity: 0;"> <span class="d-none"> Learn more about Executiv…</span> <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9165 4.16663V22.9166H4.1665V27.0833H22.9165V45.8333H27.0832V27.0833H45.8332V22.9166H27.0832V4.16663H22.9165Z" fill="#FEF8ED"></path> </svg> </a>
```

**Base styles (from design tokens):**

```css
.align-items-center {
  background: #000000;
  border: 1px solid #3b3b3b;
  border-radius: 30px;
  padding: 10px;
}```

### Mob Vh 100

**Instances found:** 3

**CSS classes:** `.mob-vh-100` `.overflow-hidden` `.position-absolute` `.service-item` `.w-100` `.z-index-2`

**HTML structure:**

```html
<div data-service-index="1" class="service-item position-absolute mob-vh-100 w-100 z-index-2 overflow-hidden"> <div class="fit-img service-item-img-wrapper" style="translate: none; rotate: none; scale: none; opacity: 0; visibility: hidden; transform: translate(0%, 100%);"> <picture><source srcset="https://columbus-travel.com/wp-content/uploads/2025/07/Image-Flights-2048x1127.jpg.webp" type="image/webp"><img width="1400" height="900" src="https://columbus-travel.com/wp-content/uploads/2025/07/Image-Flights-2048x1127.jpg.webp" class="h-100 w-100 wp-post-image" alt="" decoding="async" srcset="htt
```

**Base styles (from design tokens):**

```css
.mob-vh-100 {
  background: #000000;
  border: 1px solid #3b3b3b;
  border-radius: 30px;
  padding: 10px;
}```

## Other Components

### Text Default

**Instances found:** 11

**CSS classes:** `.text-default`

**HTML structure:**

```html
<span class="text-default">About</span>
```

**Base styles (from design tokens):**

```css
.text-default {
  background: #000000;
  padding: 5px;
}```

### Text Hover

**Instances found:** 11

**CSS classes:** `.text-hover`

**HTML structure:**

```html
<span class="text-hover">About</span>
```

**Base styles (from design tokens):**

```css
.text-hover {
  background: #000000;
  padding: 5px;
}```

### Font 500

**Instances found:** 4

**CSS classes:** `.font-500` `.line-height1` `.text-140`

**HTML structure:**

```html
<div class="text-140 font-500 line-height1"> + </div>
```

**Base styles (from design tokens):**

```css
.font-500 {
  background: #000000;
  padding: 5px;
}```

### Text 120

**Instances found:** 4

**CSS classes:** `.text-120`

**HTML structure:**

```html
<h2 class="text-120">Columbus Services&nbsp;&nbsp;</h2>
```

**Base styles (from design tokens):**

```css
.text-120 {
  background: #000000;
  padding: 5px;
}```

### C White

**Instances found:** 4

**CSS classes:** `.c-white` `.font-500` `.position-absolute` `.service-desc` `.text-18` `.z-index-10`

**HTML structure:**

```html
<div class="service-desc text-18 font-500 c-white z-index-10 position-absolute" style="opacity: 0;"> <div class="plus-button main-plus-button border-radius-50 d-flex justify-content-center align-items-center bg-dark-blue"> <a href="https://columbus-travel.com/service/executive-travel/" class="plus-button-link d-flex align-items-center justify-content-center w-100 h-100" title="Learn more about Executive Travel" style="opacity: 0;"> <span class="d-none"> Learn more about Executiv…</span> <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-r
```

**Base styles (from design tokens):**

```css
.c-white {
  background: #000000;
  padding: 5px;
}```

### C White

**Instances found:** 4

**CSS classes:** `.c-white` `.font-500` `.pad-inline-40` `.service-title` `.text-100`

**HTML structure:**

```html
<h3 data-index="0" class="service-title text-100 font-500 c-white pad-inline-40" style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 0;">Executive Travel</h3>
```

**Base styles (from design tokens):**

```css
.c-white {
  background: #000000;
  padding: 5px;
}```

### Col 12

**Instances found:** 4

**CSS classes:** `.col-12` `.col-lg-3` `.col-md-6` `.mb-3` `.mb-lg-0`

**HTML structure:**

```html
<div class="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0" style="translate: none; rotate: none; scale: none; transform: translate(0px, 10px); opacity: 0;"> <div class="ruler-map-panel ps-0 ps-lg-4 transition" data-country="CY" aria-hidden="true" role="button" tabindex="0" style="cursor: pointer;"> <h3 class="ruler-map-panel-title text-24 line-height1 c-baby-blue mb-3 mb-lg-4"> Cyprus </h3> <div class="ruler-map-panel-content c-dark-blue line-height1-2 text-16"> <p><strong>Mantovani Travel</strong></p> <p>Spyrou Kyprianou 21, Limassol 4042, Cypr…</p> <p><a href="mailto:operations@columbus-travel.com">
```

**Base styles (from design tokens):**

```css
.col-12 {
  background: #000000;
  padding: 5px;
}```

### Ps 0

**Instances found:** 4

**CSS classes:** `.ps-0` `.ps-lg-4` `.ruler-map-panel` `.transition`

**HTML structure:**

```html
<div class="ruler-map-panel ps-0 ps-lg-4 transition" data-country="CY" aria-hidden="true" role="button" tabindex="0" style="cursor: pointer;"> <h3 class="ruler-map-panel-title text-24 line-height1 c-baby-blue mb-3 mb-lg-4"> Cyprus </h3> <div class="ruler-map-panel-content c-dark-blue line-height1-2 text-16"> <p><strong>Mantovani Travel</strong></p> <p>Spyrou Kyprianou 21, Limassol 4042, Cypr…</p> <p><a href="mailto:operations@columbus-travel.com">operations@columbus-travel.com</a></p> </div> </div>
```

**Base styles (from design tokens):**

```css
.ps-0 {
  background: #000000;
  padding: 5px;
}```

### Arrow Wrapper

**Instances found:** 3

**CSS classes:** `.arrow-wrapper` `.position-relative`

**HTML structure:**

```html
<span class="arrow-wrapper position-relative"> <svg class="hole" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.8" d="M34.2568 0C53.2876 0 68.7156 15.4273 68.7158 34.458C68.7158 53.4889 53.2877 68.917 34.2568 68.917H0V0H34.2568ZM33.5908 5.23438C17.545 5.23442 4.53733 18.3181 4.53711 34.458C4.53711 50.5981 17.5448 63.6826 33.5908 63.6826C49.6369 63.6826 62.6445 50.5981 62.6445 34.458C62.6443 18.3181 49.6367 5.23438 33.5908 5.23438Z" fill="#fff"></path> </svg> <span class="border-radius-50 arrow position-absolute overflow-hidden"> <svg
```

**Base styles (from design tokens):**

```css
.arrow-wrapper {
  background: #000000;
  padding: 5px;
}```

### Hole

**Instances found:** 3

**CSS classes:** `.hole`

**HTML structure:**

```html
<svg class="hole" width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg"> <path opacity="0.8" d="M34.2568 0C53.2876 0 68.7156 15.4273 68.7158 34.458C68.7158 53.4889 53.2877 68.917 34.2568 68.917H0V0H34.2568ZM33.5908 5.23438C17.545 5.23442 4.53733 18.3181 4.53711 34.458C4.53711 50.5981 17.5448 63.6826 33.5908 63.6826C49.6369 63.6826 62.6445 50.5981 62.6445 34.458C62.6443 18.3181 49.6367 5.23438 33.5908 5.23438Z" fill="#fff"></path> </svg>
```

**Base styles (from design tokens):**

```css
.hole {
  background: #000000;
  padding: 5px;
}```

### Img

**Instances found:** 3

**HTML structure:**

```html
<img width="583" height="160" src="https://columbus-travel.com/wp-content/uploads/2025/07/Rectangle-7-1.jpg.webp" class="" alt="" decoding="async" srcset="https://columbus-travel.com/wp-content/uploads/2025/07/Rectangle-7-1.jpg.webp 960w, https://columbus-travel.com/wp-content/uploads/2025/07/Rectangle-7-1-768x190.jpg.webp 768w" sizes="(max-width: 960px) 100vw, 960px">
```

**Base styles (from design tokens):**

```css
.img {
  background: #000000;
  padding: 5px;
}```

### Inner

**Instances found:** 3

**CSS classes:** `.inner` `.max-content` `.pad-block-80`

**HTML structure:**

```html
<div class="inner max-content pad-block-80"> <div class="d-flex align-items-end flex-wrap"> <div class="text-140 font-500 line-height1"> + </div> <div class="text-140 font-500 line-height1 counter-number" data-target="430">0</div> <div class="desc text-18 font-400 ms-4"> Contracted Vessels …</div> </div> </div>
```

**Base styles (from design tokens):**

```css
.inner {
  background: #000000;
  padding: 5px;
}```

### Counter Number

**Instances found:** 3

**CSS classes:** `.counter-number` `.font-500` `.line-height1` `.text-140`

**HTML structure:**

```html
<div class="text-140 font-500 line-height1 counter-number" data-target="430">0</div>
```

**Base styles (from design tokens):**

```css
.counter-number {
  background: #000000;
  padding: 5px;
}```

### Desc

**Instances found:** 3

**CSS classes:** `.desc` `.font-400` `.ms-4` `.text-18`

**HTML structure:**

```html
<div class="desc text-18 font-400 ms-4"> Contracted Vessels </div>
```

**Base styles (from design tokens):**

```css
.desc {
  background: #000000;
  padding: 5px;
}```

## Component Rules

- Match class names exactly from the patterns above
- Each component instance must be visually identical to others of its type
- Do not add extra wrappers or change the DOM structure
- Use `#3b3b3b` for all dividers within components

