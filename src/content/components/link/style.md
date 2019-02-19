---
title: Link
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class       | Property | Color token |
| ----------- | -------- | ----------- |
| `.bx--link` | color    | `$interactive-01` |

### Interactive states

| Class                             | Property   | Color token           |
| --------------------------------- | ---------- | --------------------- |
| `:hover`                          | text color | `$hover-primary-text` |
| `:active`                         | text color | `$text-01` |
| `:focus`                          | border     | `$focus` |
| `:visited`                        | text color | `$visited`        |
| `:disabled`                       | text color | `$disabled-02`        |

<image-component fixed="default" caption="Normal, hover, disabled link states">

![Example of enabled, hover, and disabled link states](images/link-style-1.png)

</image-component>

## Typography

Link text should be set in set in sentence case with the first letter of each word capitalized. Links should not exceed three words.

| Property    | Font-size (px/rem) | Font-weight     | Text style       |
| ----------- | ------------------ | --------------- | ---------------- |
| `.bx--link` | 14 / 0.875         | Regular / 400   | `$body-short-01` |

## Structure

### Recommended

Links can be grouped horizontally or vertically and must be underlined. The following specs are not built into the Link component but are recommended by design as the proper distance between grouped Links.

| Class       | Property      | px / rem | Spacing token |
| ----------- | ------------- | -------- | ------------- |
| `.bx--link` | padding-right | 16 / 1   | `$spacing-05` |

<image-component fixed="default" caption="Structure and spacing measurements for Link | px / rem">

![Link structure and spacing measurements](images/link-style-2.png)

</image-component>
