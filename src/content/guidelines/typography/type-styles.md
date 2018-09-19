---
label: Guidelines
title: Typography
tabs: ['Overview', 'Type Styles']
---

## Carbon type styles

Carbon uses a double-stranded heading hierarchy which abstracts the HTML document hierarchy (`h1`, `h2`, etc.) from the visual hierarchy of the layout. This layer of abstraction is important to maintaining the document outline of a page for tools like screen readers. In Carbon, this abstracted layer is known as type styles. Each type style has an assigned CSS classname. These classes are independent of location or type of element.

Type styles are simply pre-set configurations of typographic elements (font-size, weight, line-height, etc) and are most commonly used as headers. Selecting the appropriate type style is determined by layout or template structure. Products may have several levels of architecture or areas that require varying typographic hierarchies.

To use a type style insert the `.bx--type-x` classname associated with each style (ie `.bx--type-alpha`).

<type-styles-table />
