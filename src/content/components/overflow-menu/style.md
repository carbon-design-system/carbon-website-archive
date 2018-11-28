---
label: Component
title: Overflow Menu
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class                                                                              | Property         | SCSS          | HEX                    |
| ---------------------------------------------------------------------------------- | ---------------- | ------------- | ---------------------- |
| `.bx--overflow-menu-options`                                                       | background-color | $ui-01        | #ffffff                |
| `.bx--overflow-menu-options__option:hover`                                         | background-color | $hover-row    | #5596e6 at 10% opacity |
| `.bx--overflow-menu-options__btn`                                                  | color            | $text-01      | #152935                |
| `.bx--overflow-menu-options__option--danger .bx--overflow-menu-options__btn:hover` | background-color | $hover-danger | #bd1427                |
| `.bx--overflow-menu-options__option--danger`                                       | border-top       | $ui-04        | #8897a2                |
| `.bx--overflow-menu__icon`                                                         | fill             | $ui-05        | #5a6872                |

<div class="image-grid">
  <div>
    <img src="images/overflow-menu-style-1.png" alt="Overflow menu text hover example"/>
  </div>
  <div>
    <img src="images/overflow-menu-style-2.png" alt="Overflow menu warning hover example"/>
  </div>
</div>

_Text and warning hover examples for Overflow Menu_

## Typography

Overflow Menu text should be set in set in sentence case with the first letter of the first word capitalized.

| Property                          | Font-size (px/rem) | Font-weight  | Type styles |
| --------------------------------- | ------------------ | ------------ | ----------- |
| `.bx--overflow-menu-options__btn` | 14 / 0.875         | Normal / 400 | -           |

## Layer

| Class                        | Layer, Elevation | Box-shadow                     |
| ---------------------------- | ---------------- | ------------------------------ |
| `.bx--overflow-menu-options` | Overlay, 8       | 0 4px 8px 0 rgba(0, 0, 0, 0.1) |

## Structure

The height of an Overflow Menu is determined by the amount of content in the menu. The Overflow Menu icon can be found in the [iconography](/guidelines/iconography/library) library.

| Class                                        | Property                    | px / rem    | Spacing token |
| -------------------------------------------- | --------------------------- | ----------- | ------------- |
| `.bx--overflow-menu-options__btn`            | padding-top, padding-bottom | 8 / 0.5     | $spacing-xs   |
| `.bx--overflow-menu-options__btn`            | padding-right, padding-left | 16 / 1      | $spacing-md   |
| `.bx--overflow-menu__icon`                   | padding                     | 16 / 1      | $spacing-md   |
| `.bx--overflow-menu-options`                 | width                       | 180 / 11.25 | -             |
| `.bx--overflow-menu-options__option--danger` | border-top                  | 1px         | -             |

<div class="image-component">
    <img src="images/overflow-menu-style-3.png" alt="Structure and spacing measurements for an overflow menu" />
</div>