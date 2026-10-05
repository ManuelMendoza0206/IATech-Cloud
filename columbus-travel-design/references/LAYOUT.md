# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 5px

**Scale:** `5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75` px

| Spacing | Semantic Use |
|---------|-------------|
| 5px | Tight — within a component |
| 10px | Medium — between sibling items |
| 20px | Wide — between sections |
| 40px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `div.position-relative.h-100` | row | — | center | — | 3 |
| `div.position-relative.mob-vh-100` | column | end | — | — | 3 |
| `div.row.align-items-center` | row | — | center | — | 2 |
| `nav#header-navigation.position-relative.d-md-inline-flex` | row | — | — | — | 1 |
| `div.row.h-100` | row | — | center | — | 2 |
| `div.row` | row | — | — | — | 4 |
| `div.row` | row | — | — | — | 1 |
| `div#header-left.position-relative.d-flex` | row | — | center | — | 1 |
| `div#header-right.position-fixed.d-flex` | row | end | center | — | 2 |
| `div.col-lg-7.d-none` | row | end | — | — | 1 |
| `a.d-flex.button-wrapper` | row | — | — | — | 2 |

## Structural Containers

### `<header>` (`header#header.position-absolute.w-100`)

```
display:          block
padding:          40px 37.4976px
children:         2
```

### `<footer>` (`footer#footer.position-relative.z-index-1`)

```
display:          block
children:         1
```

### `<section>` (`section#global-presence.pad-20.z-index-1`)

```
display:          block
padding:          164.995px 20px
children:         1
```

### `<section>` (`section#home-hero.mob-vh-100.pad-20`)

```
display:          block
padding:          20px
max-width:        1440px
children:         1
```

### `<section>` (`section#about-us.pad-inline-20.pad-block-80`)

```
display:          block
padding:          60.0048px 20px
max-width:        1440px
children:         1
```

### `<section>` (`section#counters.z-index-1.bg-cover`)

```
display:          block
max-width:        1440px
children:         1
```

### `<section>` (`section#services.z-index-3`)

```
display:          block
max-width:        1440px
children:         1
```

### `<nav>` (`nav#header-navigation.position-relative.d-md-inline-flex`)

```
display:          flex
flex-direction:   row
justify-content:  —
align-items:      —
children:         1
```

### `<nav>` (`nav.social-menu-class`)

```
display:          block
children:         1
```

## Layout Rules

- **Container max-width:** `1440px` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **5px**
- Never use arbitrary margin/padding values outside the spacing scale

