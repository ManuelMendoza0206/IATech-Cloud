# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 3 | default, hover, focus |
| Role Button | 3 | default, hover, focus |
| Link | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: all;
transition: 0.3s linear;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `✕`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On focus:**

```css
/* outline: rgb(0, 0, 0) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(0, 0, 0) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Button 2 — `Accept all`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On focus:**

```css
/* outline: rgb(38, 34, 98) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(38, 34, 98) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

### Button 3 — `Customize`

**States:**

- Default: `../screens/states/button-3-default.png`
- Hover: `../screens/states/button-3-hover.png`
- Focus: `../screens/states/button-3-focus.png`

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

## Role Button Interactions

### Role Button 1 — `Cyprus

Mantovani Travel

Spyrou Kyprian`

**States:**

- Default: `../screens/states/role-button-1-default.png`
- Hover: `../screens/states/role-button-1-hover.png`
- Focus: `../screens/states/role-button-1-focus.png`

**On focus:**

```css
/* outline: rgb(33, 37, 41) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(33, 37, 41) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s linear`

### Role Button 2 — `India

Columbus Travel India

101, Plot `

**States:**

- Default: `../screens/states/role-button-2-default.png`
- Hover: `../screens/states/role-button-2-hover.png`
- Focus: `../screens/states/role-button-2-focus.png`

**On focus:**

```css
/* outline: rgb(33, 37, 41) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(33, 37, 41) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s linear`

### Role Button 3 — `Philippines

Columbus Travel Manila

8th`

**States:**

- Default: `../screens/states/role-button-3-default.png`
- Hover: `../screens/states/role-button-3-hover.png`
- Focus: `../screens/states/role-button-3-focus.png`

**On focus:**

```css
/* outline: rgb(33, 37, 41) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(33, 37, 41) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s linear`

## Link Interactions

### Link 1 — `About
About`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On focus:**

```css
/* outline: rgb(231, 227, 217) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(231, 227, 217) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s linear`

### Link 2 — `Services
Services`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On focus:**

```css
/* outline: rgb(231, 227, 217) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(231, 227, 217) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s linear`

### Link 3 — `Flights
Flights`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On focus:**

```css
/* outline: rgb(231, 227, 217) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(231, 227, 217) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s linear`

## Interaction Rules

- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

