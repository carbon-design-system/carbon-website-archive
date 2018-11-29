---
label: Component
title: Accordion
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class                         | Property   | SCSS             | HEX     |
| ----------------------------- | ---------- | ---------------- | ------- |
| `.bx--accordion__title`       | color      | $text-01         | #152935 |
| `.bx--accordion__content`     | color      | $text-01         | #152935 |
| `.bx--accordion__arrow`       | fill       | $ui-05           | #5a6872 |
| `.bx--accordion__arrow:hover` | fill       | $hover-secondary | #3d70b2 |
| `.bx--accordion__item`        | border-top | $ui-04           | #8897a2 |

## Typography

All Accordion labels are set in sentence case and should not exceed three words. Set body text appropriately based on content.

| Class                     | Font-size (px/rem) | Font-weight  | Text style |
| ------------------------- | ------------------ | ------------ | ---------- |
| `.bx--accordion__title`   | 16 / 1             | Normal / 400 | p          |
| `.bx--accordion__content` | 14 / 0.875         | Normal / 400 | -          |

## Structure

There is no limit to the height of an open row, however, the padding specs below should be followed. The width of an Accordion varies based on the content, layout, and page design. The chevron icon can be found on the [iconography](/guidelines/iconography/library) library page. Avoid having any text within 16px / 1rem of the Accordion's sides. Additionally, include padding between labels, body copy, and separation lines to provide breathing room between elements.

| Class                          | Property                   | px/rem     | Spacing token |
| ------------------------------ | -------------------------- | ---------- | ------------- |
| `.bx--accordion__heading`      | height                     | 40 / 2.5   | -             |
| `.bx--accordion__arrow`        | width                      | 10 / 0.635 | -             |
| `.bx--accordion__item`         | border-top                 | 1          | -             |
| `.bx--accordion__title`        | margin-left                | 16 / 1     | $spacing-md   |
| `.bx--accordion__content`      | padding-right, padding-top | 16 / 1     | $spacing-md   |
| `.bx--accordion__content`      | padding-left               | 40 / 2.5   | $spacing-2xl  |
| `.bx--accordion__item--active` | padding-bottom             | 24 / 1.5   | $spacing-lg   |

![Structure and spacing measurements for Accordion](images/accordion-style-1.png)
_Structure and spacing measurements for Accordion | px / rem_
