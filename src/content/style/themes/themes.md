---
label: Style
title: Themes
---

<page-intro>**Carbon Themes** are used to customize components to fit the specific needs of a brand or product.</page-intro>

## Introduction to theming

Developers and designers can use Carbon Themes to modify existing components to fit their own specific visual styles and needs. Rather than changing each individual component's css or building modified components from scratch, components can now be easily customized by changing a set of universal variables that seamlessly propagate across all of the components.

---

<a href="http://themes.carbondesignsystem.com/" target="_blank">Explore Themes</a>

### Theme terms

| Term         | Definition                                                                                                     |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| **Theme**    | The set of unique values assigned to the universal variables                                                   |
| **Value**    | A theme's unique styles (ie hex code, line weight etc) assigned to a universal variable                        |
| **Role**     | The systematic usage/s of a value. Roles cannot be changed between themes.                                     |
| **Variable** | The code identifier for a unique role or set of roles. Variables are universal and never change across themes. |

## IBM Cloud theme

The Carbon Design System has a default theme which is based off of the IBM Cloud UI and IBM Design Language. When `carbon-components` is downloaded and installed, they are preset to use the default theme.

The default theme acts as a starting point; from there designers and developers only need to define how their own components and styles deviate from the default. A theme can change all of the values or as little as only one. Those different values are then packaged into a new theme which when called will override the values of the default.

---

[Carbon Themes repo](https://github.com/carbon-design-system/carbon-themes)

## Variables

By using variables developers only need to make a change in one place to see a system wide change. They are used across multiple components and make it easy for components to be systematically updated while keeping global patterns and styles consistent.

All variables come pre-baked into the Carbon component source code. Variables are denoted by the prefix `$` (eg. `$brand-01`).

There are two categories of variables: **color** and **global.**

### Color

Each theme is assigned 25 universal color variables, which are determined by [common roles and usage](/style/color/usage). This allows for uniform color application across themes while giving each theme the freedom to express its own personality.

```scss
//// Carbon
// Color Variables
$brand-01: #3d70b2;
$brand-02: #5596e6;
$brand-03: #41d6c3;
$inverse-01: #ffffff;
$ui-01: #ffffff;
$ui-02: #f4f7fb;
$ui-03: #dfe3e6;
$ui-04: #8897a2;
$ui-05: #5a6872;
$text-01: #152935;
$text-02: #5a6872;
$text-03: #cdd1d4;
$field-01: #ebf0f7;
$support-01: #e0182d;
$support-02: #5aa700;
$support-03: #efc100;
$support-04: #5aaafa;
```

### Global

The second category is global variables. These control more general styling of components, such as layer usage or border width.

```scss
// Global
$use-layer: true;
$input-border: 1px solid transparent;
$input-label-weight: 700;
```

## Theming applied

The following examples demonstrates the relationship between the different theming elements. Each element has a variable, a role, and a value determined by its theme.

### Default theme applied

![Default theme applied](images/theme-1.png)

| Key | Variable      | Role               | Value                 | Theme   |
| --- | ------------- | ------------------ | --------------------- | ------- |
| 1   | $text-01      | Primary text       | #152935               | Default |
| 2   | $text-03      | Hint text          | #cdd1d4               | Default |
| 3   | $input-border | Input border       | 1px solid transparent | Default |
| 4   | $brand-01     | Primary icon       | #3d70b2               | Default |
| 5   | $ui-02        | Default background | #f4f7fb               | Default |
| 6   | $field-01     | Field background   | #152935 @ 10%         | Default |

### Custom theme applied

Here is the same component but with a different theme applied. Notice how only the values and theme items changed. The variables and role are the same for both.

![Custom theme applied](images/theme-2.png)

| Key | Variable      | Role               | Value            | Theme  |
| --- | ------------- | ------------------ | ---------------- | ------ |
| 1   | $text-01      | Primary text       | #272727          | Watson |
| 2   | $text-03      | Hint text          | #777677          | Watson |
| 3   | $input-border | Input border       | 1px solid $ui-04 | Watson |
| 4   | $brand-01     | Primary icon       | #047cc0          | Watson |
| 5   | $ui-02        | Default background | #f6f6f6          | Watson |
| 6   | $field-01     | Field background   | #ffffff          | Watson |
