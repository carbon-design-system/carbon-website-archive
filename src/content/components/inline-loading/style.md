---
title: Inline loading
tabs: ['Code', 'Usage', 'Style']
---

## Color

| Class                            | Property | SCSS     |
| -------------------------------- | -------- | -------- |
| `.bx--loading__svg`              | stroke   | $ui-05   |
| `.bx--inline-loading__checkmark` | stroke   | $ui-05   |
| `.bx--inline-loading__text`      | color    | $text-01 |

## Structure

| Property  | px  | rem |
| --------- | --- | --- |
| Spinner   | 16  | 1   |
| Checkmark | 16  | 1   |

| Class                            | Property      | px / rem |
| -------------------------------- | ------------- | -------- |
| `.bx--inline-loading__animation` | width, height | 16 / 2   |

<image-component fixed="default">

![Inline loading spinner structure measurements](images/inline-loading-style-1.png)

</image-component>

<image-component fixed="default">

![Inline loading states](images/inline-loading-style-2.png)

</image-component>

<image-component fixed="default" caption="Structure measurements for small and large loading spinner | px / rem">

![Inline loading spinner in context example](images/inline-loading-style-3.png)

</image-component>

## Typography

Button text should be set in sentence case, with only the first word in a phrase and any proper nouns capitalized.

| Class                       | Font-size (px/rem) | Font-weight   | Type style       |
| --------------------------- | ------------------ | ------------- | ---------------- |
| `.bx--inline-loading__text` | 14 / 0.875         | Regular / 400 | `.bx--type-zeta` |

### Placement

The inline loading component should appear during any user action loading. If button is used to trigger the action, the inline loading component should replace that button.

<image-component fixed="default" caption="Example of a inline loading in product context">

![Inline loading spinner animated_in context example](images/inline-loading-animated.gif)

</image-component>
