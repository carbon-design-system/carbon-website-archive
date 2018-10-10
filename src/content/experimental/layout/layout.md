---
label: Experimental
title: Layout
internal: true
---

<page-intro>
The 2x Grid is the geometric foundation of all the visual elements of IBM Design, from typography to columns, boxes, icons, and illustrations. It provides structure and guidance to creative decision-making.
 </page-intro>

1.  [Mini Unit](#mini-unit)

2.  [2x Grid Fundamentals](#2x-grid-fundamentals)

4.  [Grid Behaviors](#grid-behaviors)

5.  [Grid Influencers](#grid-influencers)

6.  [Sizing Scale](#sizing-scale)


## Mini Unit

The basic unit of 2x Grid geometry is the 8-pixel square Mini Unit. Multiples of mini units compose the dimensions of columns, rows, boxes, along with their margins and padding. The Mini Unit adapts to your content while maintaining a consistent visual rhythm.

`vimeo: https://vimeo.com/292608020`


At [breakpoint boundaries](#breakpoints), Mini Units divide the screen into a fixed master grid, and multiples of Mini Units map to [fluid grid](#fluid-grid) column widths and row heights. [Fixed boxes](#fixed-boxes) are sized in Mini Units, as are the fixed dimension of [hybrid boxes](#hybrid).

[Margin](#margins) and [padding](#padding) are always applied in fixed Mini Unit multiples. Boxes are sized by applying a [sizing scale](#sizing-scale) based on either fixed Mini Units or fluid column widths, along with a core set of [aspect ratios](#aspect-ratio).


## 2x Grid Fundamentals

The core concept of the 2x Grid is to divide or multiply by two, forming a visual rhythm. Fluid grids are built by division, whereas fixed grids are built with multiplication. On breakpoint boundaries, these sizes match. Margins and padding are applied consistently in both cases.

1.  [Columns and Rows](#columns-and-rows)
2.  [Margins](#margins)
3.  [Padding](#padding)
4.  [Gutters](#gutters)
5.  [Breakpoints](#breakpoints)

### Columns and Rows

Columns and rows create key lines that are essential for visual rhythm, especially for typography. Construct columns by either dividing a space into a fluid grid, or by tiling fixed boxes in multiples.

![grid columns](images/2x_grid_columns_new.png)

A [fluid grid](#fluid-grid) divides space by twos. This division is immediately evident in the 2x column structure. Within a breakpoint, the column count is constant and unit size scales with screen size. Choose a column count by starting with one, then divide by two as needed:

| Fluid Grid Columns |
| ------------------- |
| 1 |
| 2 |
| 4 |
| 8 |
| 16 |


<br>

For dense content, use Mini Units for further alignment and spatial guidance.

![grid customization](images/grid_customization.png)

A [fixed grid](#fixed-boxes) starts with a fixed unit size from the [sizing scale](#sizing-scale), then tiles and wraps as needed, like text. To employ the 2x concept, multiply box sizes by two and mix them together to build your layout.

When tiling fixed boxes, the column count is not known in advance, but a grid emerges visually due to the use of a consistent sizing scale. On breakpoint boundaries, fixed sizing scales match column sizes.

[Hybrid grids](#hybrid) are also frequent in practice, and hybrid boxes have properties of both.

### Margins
The margins at the outer edge of the grid are always a fixed size within a breakpoint, even when columns are fluid.

![grid margins](images/2x_grid_margins_new.png)

See [Breakpoints](#breakpoints) for a table of margin sizes.

### Padding
Padding is always a fixed multiple of Mini Units: 16 pixels at all breakpoints.

![grid paddings](images/2x_grid_paddings_new.png)

Always align type to the edge of box padding. Note: some design tools add padding to text boxes by default; check text box padding and remove it if necessary.

![grid paddings sample](images/2x_padding_sample.png)

<br>


Take care not to place your type on the padding:

![spacing guidance](images/alignment_do_not.png)

### Gutters
Grid gutters can be absent as shown above, or present as shown below. The margin around each grid box matches its padding, for a total gutter of 32 pixels.

![grid gutters](images/2x_grid_gutters_new.png)

For closely related content, consider a gutterless grid. Apply gutters when content warrants more separation.

### Breakpoints

Use this set of standard breakpoints to maintain layout integrity across screen sizes.

| Breakpoint | Value (px/rem) | Columns | Size (%) | Size   | Padding | Margin
| ---------- | -------------- | ------- | -------- | ------ | ------- | ------
| Small      | 320 / 20       | 4       | 25%      | 80 px  | 16 px   | 0
| Medium     | 672 / 42       | 8       | 12.5%    | 80 px  | 16 px   | 16 px
| Large      | 1056 / 66      | 16      | 6.25%    | 64 px  | 16 px   | 16 px
| X-Large    | 1312 / 82      | 16      | 6.25%    | 80 px  | 16 px   | 16 px
| Max        | 1584 / 99      | 16      | 6.25%    | 96 px  | 16 px   | 24 px

For best results, test designs and code at each of these standard breakpoints.

Create **Custom Breakpoints** to accommodate special needs, by writing your own media queries and CSS rules. Refer to the grid code package for more information.

`vimeo: https://vimeo.com/292015984`

## Grid Behaviors

In user interfaces, screen size is dictated by the device and the user's chosen window size. We may know content in advance or the content may be dynamic.

Carefully consider the user's goal for their screen space, particularly when displaying dynamic content. For example, when the user resizes their browser, is their goal to:

- **see more things?** Then scale column count by tiling fixed boxes.
- **see more content within each thing?** Then scale boxes and use fixed column counts.

Choose the layout approach that best meets the user's expectation in each case.

1. [Fluid Grid](#fluid-grid)
2. [Fixed Boxes](#fixed-boxes)
3. [Hybrid](#hybrid)
4. [Key Lines](#key-lines)

### Fluid Grid

Fluid grids are ideal for editorial content, dashboards, images, video, data visualizations, etc. In each case, scaling the size of things is more useful to the user than scaling the number of visible things. In a fluid grid, we divide available width in half to create columns, repeating as necessary.

`vimeo: https://vimeo.com/292024522`



At each breakpoint, column count is fixed and column width is a multiple of Mini Units. Row height is a multiple of column size, following recommended aspect ratios. Margin and padding are fixed multiples of Mini Units. In between breakpoints, actual column width is a percentage of the grid area, not a Mini Unit multiple. Content scales fluidly.


### Fixed Boxes

A grid can be formed with Fixed Boxes by tiling cards in an inline block, icons in toolbars, etc. Column count grows with browser width. Tiles wrap to the next line, or are sometimes truncated with an overflow scroll.

`vimeo: https://vimeo.com/292024183`

First choose a base size from the [sizing scale](#sizing-scale), then build up each Box in multiples of the base size, following recommended [aspect ratios](#aspect-ratio). A grid emerges when each tile uses a multiple of a consistent base size. Following this method ensures consistency of tile sizes even across products.


### Hybrid

Hybrid boxes have different scaling rules in each dimension, so they do not use aspect ratios. When a user would resize the browser expecting content to scale in one dimension but not the other, use hybrid boxes.

Use the [sizing scale](#sizing-scale) to size a fixed dimension. Use column-width multiples to size a grid-fluid dimension. Aspect ratios do not apply.

`vimeo: https://vimeo.com/292025098`

| Examples    |  Width         | Height
|-------------|----------------|---------------
| Header      | Fluid (Grid)   | Fixed (m.u.)
| Toolbar     | Fluid (Grid)   | Fixed (m.u.)
| Side Panel  | Fixed          | Fluid (Grid)
| Menu        | Fixed          | Fluid (Content)
| Content     | Fixed          | Fluid (Content)
| Data Table  | Fluid (Grid)   | Fluid (Content)

See [screen regions](#screen-regions) for more discussion on headers, side panels, etc.

### Key Lines

Regardless how your grid is built, ensure the overall layout has visible key lines: vertical and horizontal lines on which multiple objects align.

Horizontal and vertical alignment are equally critical. When present, the eye can follow content more easily, increase the pereption of visual harmony.

![key alignments](images/key_alignments.png)


## Grid Influencers

Within a design system, layouts often follow a common structure, especially with regard to navigation. This section covers which of these UI patterns you'll need, where users will expect to see them on a page and how they’ll affect the content that lives within the responsive grid.

1. [Screen Regions](#screen-regions)
2. [Panel Behavior](#panel-behavior)

### Screen Regions
In a UI layout, users expect to find certain types of content in certain areas. We call these areas Screen Regions. It is especially important for these zones to be consistent across devices, and adapt across breakpoints. [Learn more about Shell on the Experimental UI Shell page.](http://staging.carbondesignsystem.com/experimental/ui-shell/usage)


![Shell Illustation](images/shell_illustration.png)



1. Header
2. Global sidenav
3. Local sidenav

<br><br>

![Dropdown Illustation](images/dropdown_illustration.png)


4. Dropdown menu
5. Content
6. Footer

<br><br>

![Dialog Illustation](images/dialog_illustration.png)


7. Dialog




### Panel Behavior
All vertical panels expand to fill the full height of the browser window.

#### Flexible Panels
 Flexible panels allow for both collapsed and expanded states. The expanded state of a flexible panel is a fixed width that cannot be adjusted by the user. A collapsed flexible panel expands when the user hovers over any portion of it. 

 When flexible panels expand, they either condense both the content and the grid 
 
 `vimeo: https://vimeo.com/292975726`
 
 
 

 or they push content the distance of their width. 

 `vimeo: https://vimeo.com/292976634`


#### Fixed Panels
Fixed panels maintain a static width, cannot be collapsed and also exist outside of the responsive grid. 

`vimeo: https://vimeo.com/292988292`

#### Floating Panels
This panel style floats above the primary content area and does not affect the responsive grid. Floating panels conceal any UI elements below them and must be dismissable by the user. Inline menus, dropdowns and tooltips also float.

`vimeo: https://vimeo.com/292977039`

## Sizing Scale

We provide a sizing scale for both fixed and fluid sizes. Use it to size content as well as negative space. Like a type scale, the sizing scale constrains the range of sizes to improve consistency and rhythm, while still allowing a wide range of sizes. Spacing tokens are used to apply these relationships consistently across UIs.

To use the scale, first choose a fixed or fluid base unit, then multiply it in each dimension, applying aspect ratios as needed.

1. [Fixed Base Unit](#fixed-base-unit)
2. [Fluid Base Unit](#fluid-base-unit)
3. [Scaling Multiple](#scaling-multiple)
4. [Aspect Ratio](#aspect-ratio)
5. [Vertical Rhythm](#vertical-rhythm)
6. [Components](#components)

### Fixed Base Unit

Use this fixed sizing scale, comprised of select Mini Unit multiples, when sizing icons, tiling boxes, and applying vertical margin space in a layout.

![spacers](images/spacers.png)

| Sizing Scale (px) | Mini Units
| ----------------- | ----------
| 8                 | 1x
| 16                | 2x
| 24                | 3x
| 32                | 4x
| 48                | 6x
| 64                | 8x
| 80                | 10x

Choose a size to use as your fixed base unit. (Also see the [breakpoints table](#breakpoints).)

### Fluid Base Unit 

For fluid grids, the column width is the base unit. Just as a box can span multiple columns, its height is a multiple of column width.

Use cases are leading section (i.e. banners) in a webpage, divded section for editorial content, modals, etc.

See the [breakpoints table](#breakpoints) for pixel sizings.

![key heights](images/fixed_fluid_units.png)

### Scaling Multiple

After determining your base size, multiply it as needed for each use. For box sizing, apply an [aspect ratio](#aspect-ratio) too.

`vimeo: https://vimeo.com/292026497`

### Aspect Ratio

When sizing boxes, constrain dimensions to one of the aspect ratios shown below whenever possible. Doing so will heighten the perception of unity between products.

Choose an aspect ratio from the table, then multiply the base unit in each dimension as needed to set width and height, maintaining the ratio in either portrait or landscape.

| Aspect Ratios |
| --------------- |
| 1:1 |
| 2:1 |
| 2:3 |
| 3:2 |
| 4:3 |
| 16:9 |

<br><br>

For example, to size a fluid box with a 2:1 landscape aspect ratio, you could span 4 columns in width and 2 column-widths of height. To size a fixed box with the same aspect ratio, you could start with an 80 pixel base unit, then multiply it by 4 in width and 2 in height, for a fixed box size of 320 by 160.

![aspect ratio](images/apsect_ratios_revised.png)

<br><br>
Aspect ratios do not apply to hybrid boxes, since one dimension is fixed and the other is fluid.

![hybrid box sample](images/hybrid_box_sample.png)


### Vertical Rhythm

Use the fixed sizing scale to set vertical spacing between sections, by adding it to the top or bottom margin of a box:

`vimeo: https://vimeo.com/292028388`

<br>

Take care to apply the intended vertical spacing just once:

![spacing guidance](images/spacing_guidance_new.png)


### Components

Components can be sized like other boxes: either fixed or fluid, and often hybrid, with fixed height and fluid width. When interior space within a component is cramped, use the minor sizing scale; it includes minute increments needed to create appropriate spatial relationships for detail-level designs. 

The minor sizing scale is applied and used within all of our components:


| Token            | rem   | px  | Example                                       |
| ---------------- | ----- | --- | --------------------------------------------- |
| **$spacing-01** | 0.125 | 2   | ![spacing-3xs example](images/spacing-3.svg)  |
| **$spacing-02** | 0.25  | 4   | ![spacing-2xs example](images/spacing-4.svg)  |
| **$spacing-03**  | 0.5   | 8   | ![spacing-xs example](images/spacing-5.svg)   |
| **$spacing-04**  | 0.75  | 12  | ![spacing-sm example](images/spacing-6.svg)   |
| **$spacing-05**  | 1     | 16  | ![spacing-md example](images/spacing-7.svg)   |
| **$spacing-06**  | 1.5   | 24  | ![spacing-lg example](images/spacing-8.svg)   |
| **$spacing-07**  | 2     | 32  | ![spacing-xl example](images/spacing-9.svg)   |
| **$spacing-08** | 2.5   | 40  | ![spacing-2xl example](images/spacing-10.svg) |
| **$spacing-09** | 3     | 48  | ![spacing-3xl example](images/spacing-11.svg) |

<br><br>
When multiple components adhere to the same scale, grid relationships naturally emerge. For example, vertically aligning form fields such as checkboxes and radio buttons produces a grid effect when interior spacing is consistent.


`vimeo: https://vimeo.com/292028752`
