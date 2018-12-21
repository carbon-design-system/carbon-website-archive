---
label: Component
title: Date picker
tabs: ['Code', 'Usage', 'Style']
---

## Usage

| Type               | Purpose                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------- |
| Range date picker  | To select a range of dates, accompanied by a calendar widget.                               |
| Single date picker | When a user needs to select one date, accompanied by a calendar widget.                     |
| Simple date picker | When the date is known by the user, and they don't need a calendar to anticipate the dates. |

<div class="image-grid">
  <div>
    <img src="images/date-picker-usage-1.png" alt="Range date picker"/>
  </div>
  <div>
    <img src="images/date-picker-usage-2.png" alt="Single date picker"/>
  </div>
  <div>
    <img src="images/date-picker-usage-3.png" alt="Simple date picker"/>
  </div>
</div>

_Types of date pickers_

## General guidelines

### Labels

Both date and time pickers are accompanied by labels, and follow the same accessibility guidelines for all [forms](/components/form).

### Format

For date pickers, use placeholder text so users input the date in the correct format. It can be formatted in a variety of ways. See the Date Picker code [documentation](https://github.com/ibm/carbon-components/tree/master/src/components/date-picker) for more info.

## Interaction

### Calendar widget

It is recommended to use the date picker with a calendar widget when the user is browsing between a range of dates. We can aid the user in making the proper choices by providing a visual reference of dates for them to choose from. The calendar widget appears once the user has interacted with the date input field (typically on `:focus`).

![Selecting a dates from the range date picker](images/date-picker-usage-4.gif)

_Selecting dates from the range date picker_

### Simple date picker

The simple date picker provides the user with a text input in which they can input month/day/year. Simple date pickers are typically used when the date is known by the user, such as a birthday or credit card expiration.

## Time picker

Time pickers provide the user with a text input in which they can input hours/minutes. Additionally, they can be accompanied by an “AM/PM” selection and a time zone selection, which is styled as an [inline select](/components/select).

<div class="image-component">
    <img src="images/time-picker-usage-1.png" alt="Time picker examples" />
</div>

_Time picker used to set deployment time_
