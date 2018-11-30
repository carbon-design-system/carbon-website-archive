---
label: Component
title: Form
tabs: ['Code', 'Usage', 'Style']
---

## Color

Form inputs come in two different colors. The default input color is `$field-01` and is used on `$ui-01` page backgrounds. The light version input color is `$field-02` and is used on `$ui-02` page backgrounds. For full color specs, refer to each specific component.

![Example of form fields in the two colors](images/form-style-3.png)
_Example of light fields with $field-02 (left) and the default version with $field-01 (right)_

### States

**Active:** Placeholder text should remain when the user clicks into the text input and gets a cursor. Once the user starts typing the hint text is replaced with the user input text.

**Help text:** Help text appears below the label when the input is active. Help text remains visible while the input is focused and disappears after focus away.

**Error:** Error messages appear below the input field and are always present while invalid.

**Disabled:** Disabled state appears at 50% opacity and has a `.not-allowed` cursor on hover.

## Typography

Form headings and labels should be set in sentence case with the first letter of the first word capitalized. Please refer to the [Text Input](/components/text-input), [Dropdown](/components/dropdown), [Checkbox](/components/checkbox), [Radio button](/components/radio-button), [Toggle](/component/toggle), [Button](/component/button) pages for specific typography details on each component.

| Property                       | Font-size (px/rem) | Font-weight     | Type style          |
| ------------------------------ | ------------------ | --------------- | ------------------- |
| Heading                        | 28 / 1.75          | Light / 300     | `.bx--type-beta`    |
| `.bx--label`                   | 14 / 0.875         | Semi-Bold / 600 | `.bx--type-zeta`    |
| `.bx--text-input`              | 14 / 0.875         | Normal / 400    | -                   |
| `.bx--text-input::placeholder` | 14 / 0.875         | Normal / 400    | -                   |
| `.bx--form-requirement`        | 12 / 0.75          | Normal / 40     | `.bx--type-caption` |
| `.bx--form__helper-text`       | 12 / 0.75          | Normal / 400    | `.bx--type-caption` |

## Structure

Forms are made up of several different components. The order in which these elements are arranged is flexible, but should always follow the spacing guidelines below.

Forms can be one column or two. The width of each column varies based on the content and layout of the design. On mobile, forms can only have one column.

All icons can be found on the [iconography](/guidelines/iconography/library) library page.

### Recommended

| Space between        | Property      | px / rem  | Spacing token |
| -------------------- | ------------- | --------- | ------------- |
| Inputs               | margin-bottom | 24 / 1.5  | $spacing-lg   |
| Non-input components | margin-bottom | 32 / 2    | $spacing-xl   |
| Grid gutter          | -             | 20 / 1.25 | -             |

![Structure and spacing measurements for a double column form ](images/form-style-2.png)
_Structure and spacing measurements for a double column Form | px / rem_

---

---

> ![Structure and spacing measurements for a single column form](images/form-style-1.png)

_Structure and spacing measurements for a single column Form | px / rem_
