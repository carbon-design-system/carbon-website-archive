---
title: Link
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class       | Property | SCSS      |
| ----------- | -------- | --------- |
| `.bx--link` | color    | $brand-01 |

### States

| Class                             | Property | SCSS                |
| --------------------------------- | -------- | ------------------- |
| `.bx--link:hover`                 | color    | $hover-primary-text |
| `.bx--link[aria-disabled='true']` | color    | $brand-01           |

<image-component fixed="default" caption="Normal, hover disabled Link states">

![Example of normal, hover, and disabled link states](images/link-style-1.png)

</image-component>

## Typography

Link text should be set in set in sentence case with the first letter of each word capitalized. Links should not exceed three words.

| Property    | Font-size (px/rem) | Font-weight     | Text style       |
| ----------- | ------------------ | --------------- | ---------------- |
| `.bx--link` | 14 / 0.875         | Semi-Bold / 600 | `.bx--type-zeta` |

## Structure

### Recommended

Links can be grouped horizontally or vertically and must be underlined. The following specs are not built into the Link component but are recommended by design as the proper distance between grouped Links.

| Class       | Property      | px / rem | Spacing token |
| ----------- | ------------- | -------- | ------------- |
| `.bx--link` | line-height   | 24 / 1.5 | -             |
| `.bx--link` | padding-right | 16 / 1   | $spacing-md   |

<image-component fixed="default" caption="Structure and spacing measurements for Link | px / rem">

![Link structure and spacing measurements](images/link-style-2.png)

</image-component>
