---
label: Guidelines
title: Layer
tabs: ['Overview', 'Usage']
---

## Component usage

| Layer             | Components                                                |
| ----------------- | --------------------------------------------------------- |
| **Base**          | Detail page header without tabs                           |
| **Flat**          | Interior left nav, Detail page header with tabs, Tables   |
| **Raised**        | Modules, Cards                                            |
| **Overlay**       | Overflow menu, dropdowns, tooltips                        |
| **Sticky Nav**    | Global header (on scroll), Detail page header (on scroll) |
| **Temporary Nav** | Global left nav                                           |
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
| **Sticky Nav**    | `@include layer('global-header')` |
| **Temporary Nav** | `@include layer('left-nav')`      |
| **Pop-out**       | `@include layer('pop-out')`       |
