---

title: Checkbox
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class                         | Property         | SCSS        |
| ----------------------------- | ---------------- | ----------- |
| `.bx--checkbox:checked`       | background-color | $brand-01   |
| `.bx--checkbox-label::before` | border           | $ui-05      |
| `.bx--checkbox-label::before` | fill             | $ui-01      |
| `.bx--checkbox-label::after`  | checkmark        | $inverse-01 |
| `.bx--checkbox-label`         | color            | $text-01    |

<image-component  caption="Disabled and normal checkbox states" fixed="default">

![Disabled and normal checkbox states](images/checkbox-style-1.png)

</image-component>

## Typography

Checkbox headings and labels should be sentence case, with only the first word in a phrase and any proper nouns capitalized. Checkbox headings and labels should not exceed three words.

| Class                 | Font-size (px/rem) | Font-weight    | Type style       |
| --------------------- | ------------------ | -------------- | ---------------- |
| `.bx--label`          | 14 / 0.875         | SemiBold / 600 | `.bx--type-zeta` |
| `.bx--checkbox-label` | 14 / 0.875         | Normal / 400   | -                |

## Structure

| Class                                 | Property       | px / rem  | Spacing token |
| ------------------------------------- | -------------- | --------- | ------------- |
| `.bx--checkbox-label::before`         | height & width | 18 / 2.75 | -             |
| `.bx--checkbox-label::before`         | border         | 2 / -     | -             |
| `.bx--checkbox-label`                 | padding-left   | 8 / 0.5   | $spacing-xs   |
| `.bx--form-item.bx--checkbox-wrapper` | margin-bottom  | 16 / 1    | $spacing-md   |

<image-component fixed="default" caption="Structure and spacing measurements for checkbox | px / rem">

![Structure and spacing measurements for checkbox](images/checkbox-style-3.png)

</image-component>
