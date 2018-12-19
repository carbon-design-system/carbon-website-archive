---
label: Guidelines
title: Layer
tabs: ['Overview', 'Usage']
---

## Component usage

| Layer             | Components                                                |
| ----------------- | --------------------------------------------------------- |
| **Base**          | Detail page header without tabs                           |
| **Flat**          | Interior left nav, detail page header with tabs, tables   |
| **Raised**        | Modules, cards                                            |
| **Overlay**       | Overflow menu, dropdowns, tooltips                        |
| **Sticky nav**    | Global header (on scroll), detail page header (on scroll) |
| **Temporary nav** | Global left nav                                           |
| **Pop-out**       | Modals                                                    |

<layer-usage></layer-usage>

## Code usage

To use in code, just include the layer mixin like so with the appropriate layer value from the table below:

```scss
@include layer('raised');
```

| Layer             | Mixin value                       |
| ----------------- | --------------------------------- |
| **Base**          | `@include layer('raised')`        |
| **Flat**          | `@include layer('flat')`          |
| **Raised**        | `@include layer('raised')`        |
| **Overlay**       | `@include layer('overlay')`       |
| **Sticky nav**    | `@include layer('global-header')` |
| **Temporary nav** | `@include layer('left-nav')`      |
| **Pop-out**       | `@include layer('pop-out')`       |
