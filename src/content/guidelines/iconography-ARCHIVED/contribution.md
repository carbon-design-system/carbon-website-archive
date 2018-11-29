---
label: Guidelines
title: Iconography
tabs: ['Library', 'Usage', 'Contribution']
---

## Adding icons

<p>If you would like to add an UI icon to our library, please submit a pull request in the Carbon Design Kit <a href="https://github.com/ibm/carbon-design-kit" target=blank>GitHub repo.</a></p>

**If you're not comfortable with making a Pull Request, please submit an issue in the repo with the icon attached.**

1. Correctly export icon
2. Name icon to Carbon specifications
3. Prep SVG XML code
4. Submit icon to [carbon-icons](https://github.com/ibm/carbon-icons) repo
5. Test SVGs

## Exporting SVGs

### Best practices

- **Square icons:** create an artboard for an individual icon that is 24 x 24 pixels (or 16 x 16 pixels for glyphs)
- **Rectangular icons:** make sure the width or the height of the artboard is 24 pixels (16 pixels for glyphs).
- Each artboard and the artwork within it must be aligned to the pixel grid.
- Icons should be at whole pixels. No decimals in x and y coordinates or width and height fields.
- All strokes must be expanded.
- All strokes must be full pixels.
- No padding when exporting icons (internal and external padding can be added with CSS).
- Combine all possible shapes and paths.
- Ungroup icon layers completely. It should be on the top-most layer in your artboard.
- Make sure to properly name layers and artboards (these names will also be exported into the code).

### How to export SVGs from Sketch

1. Draw an artboard that is the same size as your icon (at least one side should be 24px or 16px exactly). The artboard should hug the edges of the icon.
2. Place the icon squarely on the artboard making sure its aligned to the pixel grid.
3. Convert all strokes to outlines `(Shift + ⌘ + O)`
4. Select any overlapping shapes and click the Union icon from the top navigation, to merge all of the shapes together.
5. Make sure the icon is at `#000000` and has no additional styling.
6. Select the entire artboard (not just the icon).
7. Click `Make Exportable` at the bottom of the right toolbar in Sketch.
8. In the `Export` widget select SVG in the format dropdown.
9. Click `Export 'Artboard-Name'`.
10. Name icon with the `#name--modifier` convention. (ex. copy.svg, copy--glyph.svg, add.svg, add--glyph.svg).

<!--<div data-insert-component="Video" data-props="icon-sketch.mp4"></div>-->

### How to export SVGs from Adobe Illustrator

1. Draw an artboard that is the same size as your icon (at least one side should be 24px or 16px exactly). The artboard should hug the edges of the icon.
2. Place the icon squarely on the artboard making sure its aligned to the pixel grid.
3. Expand all strokes `(Object > Expand)`.
4. Select all overlapping shapes and click the Unite icon in the Pathfinder panel, to merge all of the shapes together.
5. Make sure the icon is at `#000000` and has no additional styling.
6. Select `“File”` from the top navigation.
7. Select `Save A Copy...` which will open a dialog.
8. On the `Format` dropdown select SVG (svg).
9. Below `Format` select `Use Artboard` then select either all or a range of artboards depending on your need.
10. Click `Save`.
11. The `SVG Options` dialog will then open.
12. Make sure the preferences are the same as in the image below.

![export an icon from illustrator](images/icon-contribution-3.png)

<!--<div data-insert-component="Video" data-props="icon-illustrator.mp4"></div>-->

## Developer guidelines

### Naming SVG files

We use the following naming convention for SVG filenames:

- `name`: icon name (ex. `add.svg`)
- `name--outline`: icon with an outline (ex. `add--outline.svg`)
- `name--glyph`: icon that is a glyph (ex. `add--glyph`)
- `name--new`: new icon that replaces a deprecated icon

### Prepping SVG XML code

It's the goal of this library to make sure icons can be modified with CSS to change it's **color** (`fill`) and **size** (`width`, `height`).

<p>Run SVG XML code through <a href="https://jakearchibald.github.io/svgomg/" target=blank>SVGOMG</a>
Inspect the code and make sure that your XML doesn't include the following:</p>

- `<style>` tags
- `<g>` tags
- `class` attributes
- `stroke` attributes
- `stroke-width` attributes

### Submitting new SVGs

1. Fork the <a href="https://github.com/ibm/carbon-icons" target=blank>carbon-icons</a> repo.
2. Close the fork.
3. Add new SVG file(s) to <a href="https://github.com/ibm/carbon-icons/tree/master/src/svg" target=blank>svg</a> folder. SVG subfolders are deprecated as of version `3.0.0`.
4. Submit a pull request
5. Do not commit built files (files created from `npm run build` script).

### Testing SVGs

1. `npm run build` to build new SVG sprite files.
2. `npm test` to run unit tests
3. `npm start` and go to [localhost:3000](http://localhost:3000/), make sure added icons are rendering correctly
4. Optional: Go to [localhost:3000/test](http://localhost:3000/test) and test styling of icon manually using CSS.

Unit tests are run against built SVG sprite files (carbon-icons.svg and sprite.svg).
Do not commit built files to pull requests.
