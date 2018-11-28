---
label: Updates
title: What's New
---
<page-intro>October 2018</page-into>

## Experimental

A new [Experimental](/experimental/about/overview) section has been added to the website. Experimental components, designs, patterns, and other resources are work that is still under development.

 **Experimental components, designs, and other resources are presented for testing and feedback. They are not intended for production use.**

<hr class="divider">

**June 4, 2018: V9 Release**

## Website

- Add-ons section has been removed. There is an [Add-ons](getting-started/add-ons) page that now lives under the Getting Started section
- The [Contributing](/getting-started/contributing) page has been moved from the Guidelines to the Getting Started section
- [Data Visualization](/data-visualization/overview/general) has moved from under the components section into its own section

## Components

### New

- [Inline Code Snippet](/components/code-snippet/code)
- [Icon Tooltip](/components/tooltip/code)
- [Definition Tooltip](/components/tooltip/code)
- [Danger Modal](/components/modal/code)
- [Danger Primary Button](/components/button/code)

### Updates (Visual & Interaction)

- [Code snippets](/components/code-snippet/code) now have a new style and new interaction options. There is also a variation with line numbers available.
- [Interactive Tooltip](/components/tooltip/code) (formerly Tooltip) can now contain interactive elements and opens on click
- Updated all inputs so they meet the new WCAG 3:1 color ratio guidelines for defined objects
  - [Date & Time Picker](/components/date-picker/code)
  - [Dropdown](/components/dropdown/code)
  - [Number Input](/components/number-input/code)
  - [Search](/components/search/code)
  - [Select](/components/select/code)
  - [Slider](/components/slider/code)
  - [Text Input](/components/text-input/code)
  - [Text Area](/components/text-input/code)

## Color

Go check out the [Swatches](/guidelines/color/swatches) page to see the new color options and updates.

- Colors have been updated to make them more accessible— changing hex values and roles for some of the swatches
- The new, updated palette is available with Design Kit
- The changes include (bold indicates a new color token):

  - $ui-05 – #5A6872 (passing 4.5:1, high contrast border, secondary icons)
  - $ui-04 – #8897A2 (passing 3:1, now used for emphasis borders)
  - $ui-03 – #DFE3E6 (not passing 3:1, now used for subtle borders)
  - $support-01 - #E0182D (passing 4.5:1)
  - $text-03 - #CDD1D4 (not passing 4,5:1, used only for placeholder text)
  - $field-01 - #F4F7FB (input field background on ui-01)
  - **$field-02 - #FFFFFF (input field background on ui-02)**
  - **$inverse-02 - #272d33 (passing 4,5:1)**

- There are four new hover tokens added to the Carbon palette. They can now be found on the [Swatches](/guidelines/color/swatches) page and are available in the Design Kit and palette plugin

  - $hover-primary – #30588c
  - $hover-primary-text – #294c86
  - $hover-row – #5596e6 at 10% opacity
  - $hover-secondary – #3d70b2
  - $hover-danger – #bd1427

## Icons

- Check out the [Iconography](/guidelines/iconography/library) page to see the new icon style
- All Icons are now `16x16px` (24x24px is no longer being supported).
- The `--glyph` modifier has been deprecated. Most of the glyph variations were replaced with a `--solid modifier`. Check out the [icon migration docs](https://github.com/ibm/carbon-icons/blob/master/docs/migration-guides/migration-v7.md) to see the status of all the icons.

## Design Kit

- Download the latest version of the [Carbon Design Kit & Library](https://github.com/ibm/carbon-design-kit)
- Components on the Component page are now split up into five different artboards: Controls, Content, Navigation, Inputs, and Data Tables
- Library has been made more flexible and customizable
- Kit and library have been updated with the new colors, components, and icon styles.

<hr class="divider">

**May 16, 2018**

## Utilities

There is a new section called Utilities which gives guidance on common pattern handlings.
Unlike the component section, these guidelines offer usage guidance with minimal code documentation. To read more about each of these utilities see the sections below:

- [Common Actions](utilities/common-actions)
- [Disabled States](utilities/disabled-states)
- [Filtering](utilities/filtering)
- [Loading](utilities/loading)
- [Overflow Content](utilities/overflow-content)

## Themes

The [Themes page](style/themes) has been moved to the Style section.

<hr class="divider">

**March 9, 2018**

## Style

### Systematic spacing

We have tokenized our spacing and now offer two systemized scales. The Spacing Scale defines space within a component while the Layout Scale is used to help position elements on a page. Check out the new [Spacing](style/spacing) section to learn more about these scales and read the rest of the spacing guidelines.

## Design Kit

### Sketch Libraries

We have recorded a [Carbon Design Kit with Sketch Libraries Tutorial](https://www.youtube.com/watch?v=Tm-s0Hcbwck&list=PL4BR_VlGD31aVhe1ScKk9UOhbi8YOL0dF) over on our YouTube channel. It goes over how to download the Carbon Sketch Kit, import a Sketch Library, as well as how to get and accept library updates/notifications. It also gives a brief overview of how the Library is organized and how to use the overrides panel and library symbols.

<hr class="divider">

**February 23, 2018**

## Design Kit

### Sketch Libraries

The Carbon Design Kit now includes Sketch Libraries, a better way to share and version symbols across Sketch files. Check out our [Sketch Libraries wiki](https://github.com/ibm/carbon-design-kit/wiki/Sketch-Libraries-Overview) to get a quick tutorial on libraries.

![sketch libraries in the carbon design kit](images/sketch-libraries.png)
_Sketch Libraries in the Carbon Design Kit_

### Sketch Plugins

With the latest release of the Design Kit, we've included the [Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes) plugin, which allows you to load in pre-saved palettes for Sketch. You can import Carbon's four color palettes (Carbon default theme, Data Vis primary, Data Vis secondary, and Data Vis tertiary) into your working Sketch document.

![Sketch Palettes plugin](images/sketch-palettes.png)
_Sketch Palettes plugin_

There's also a variety of other [plugins](https://github.com/ibm/carbon-design-kit/wiki/Suggested-Sketch-Plugins) we recommend to help improve your workflow using Sketch.

<p>Download the latest Kit today!
<a href="https://github.com/ibm/carbon-design-kit" target="_blank">Carbon Design Kit</a></p>

## Carbon Sessions

Interested in getting some 1:1 time with the Carbon team? Carbon Sessions is a chance for anyone using the Carbon Design System to ask questions and get feedback. Sessions happen very Wednesday morning (Central Standard Time). Time slots are around 10 minutes, but feel free to book more than one if you need additional time.

Sign up for a [Carbon Sessions time slot](https://github.com/ibm/design-system-website/wiki/Carbon-Sessions) if you're interested in chatting further!

<hr class="divider">

**February 9, 2018**

## Components

### Dropdown

We're excited to bring some added functionality that enhances our [Dropdown](/components/dropdown) component. Filtering, Multi-select, and Inline Dropdown are new additions to our basic Dropdown component.

**Note: This component is currently only available in [React](http://react.carbondesignsystem.com/?selectedKind=ComboBox&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel).**

![example of Dropdown with Multi-Select](images/dropdown-new.gif)
_Example of Multi-Select Dropdown_

### Small Toggle

Small Toggle is a style variation of our traditional [Toggle](/components/toggle) component. It's more compact in size, which allows them to be used in Data Tables or inline with Form elements.

[example of Small toggle](images/small-toggle.gif) > _Example of Small Toggle_

### Data Vis: Bar Graph

Bar Graph is the newest addition to our Data Visualization collection. It comes in two variations: Bar Graph and Grouped Bar Graph. You can use this component to represent quantitative information, such as comparing the taco sales between Austin taco shops in the month of June.

Read more about the usage of [Bar Graph](/data-visualization/bar-graph/usage), or check out our [CodePen](https://codepen.io/team/carbon/pen/OzBKKN) to view the live demo.

![Bar Graph example](images/usage-bar-graph.png)

### Data Vis: Tooltip

We have created several Data Visualization Tooltip variations to show the value for a specific data point or increment range. Tooltips appear on hover above or below a data representation, depending on the use case.

Read more about the usage of [Data Vis Tooltips](/data-visualization/tooltip/usage), or check out our [CodePen](https://codepen.io/team/carbon/pen/rJWymp) to view the live demo.

![small tooltip in a bar graph](images/usage-small-tooltip.png)

_Small Tooltip used within a Bar Graph_
