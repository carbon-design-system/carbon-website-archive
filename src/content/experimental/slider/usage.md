---
label: Experimental
title: Slider
tabs: ['Code', 'Usage']
---

## Types of sliders

The _slider_ in its basic form should be accompanied by a label and a number input that doubles as a display for the slider's current value. The basic slider does **not** include discrete values, as the slider represents a percentage of 0-100. In this case it is not necessary for a user to choose a specific value, but instead generally increase or decrease an input. For example, the user increases the slider amount and the volume of the music gets louder. The more complex versions should be used for selecting a specific value within a value range.


## Interaction

Users can choose a numerical value by:

- Entering the exact value into the text field.
- Moving the slider handle with their mouse, which automatically updates the value in the text input.
- Using the ↑ ↓ ← → arrow keys automatically updates the value in the text input and moves the slider handle to the corresponding value.
- The **step size increment** is how many increments the inputted value and slider handle will jump when using the arrow keys. Make sure to set the step size increments to reasonable values.
- ↑ ↓ ← → changes the value by one step size increment. (_Example: Pressing `→` changes the inputted value from 59 to 60, increasing the value by 1 unit._)
- `Shift` + ↑ ↓ ← → changes the value by 10 step size increments. (_Example: Typing `Shift + →` changes the value from 60 to 70, increasing the inputted value by 10 units._)


## Best practices

- The slider label should indicate what value the slider is changing.
- Range values are used to describe the range in numbers.
- Do not use for ranges that are extremely large _(ex. 1-1000)_.
- Do not use for ranges that are too small _(ex. 1-3)_.
