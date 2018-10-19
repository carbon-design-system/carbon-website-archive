# Content

## File Structure

All markdown files live inside of the `src/content` folder and follow the site navigation. They live inside a folder that is named the same as the file unless it is a page with tabbed navigation. "Tabbed" pages _(for example Getting Starter > Developers)_ should have all the pages inside the same folder, with the file name matching the page title.

```
src
├── content
   ├── getting-started
      ├── designers
          ├── images
                ├── image1.png
                ├── image2.png
          ├── designers.md
```

or

```
src
├── content
   ├── getting-started
      ├── developers
          ├── angular.md
          ├── other-frameworks.md
          ├── react.md
          ├── vanilla.md
```

## Frontmatter

The top of each markdown file has required frontmatter fields to display the header for the page.

```
---
label: Small label text above title
title: Page Title
tabs: ['Tab 1', 'Tab 2', 'Tab 3'']
internal: true
---
```

Required fields are:

- `title`: The title of the page
- `label`: The label of the page _(not required on top level pages, e.g., Resources, if title and label are the same only title will display)_

Non-required fields are:

- `tabs`: An array of the page tabs (in the desired order), tab name should match markdown file name.
- `internal: true` Used to designate internal only content.

## Markdown

    ### This generates an H2 heading with an underline

    ### This generates an H3 heading (blue).

    #### This generates an H4 heading.

    **This is bold text.**

    _This is italic text or an image caption._

    This is a normal paragraph with a [link](http://www.link.com).

    > This is a block quote.

### Link

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ).

`[Carbon](http://www.carbondesignsystem.com/)`

If you need a link to open in a new window you will have to use standard html to target the new window.

`<a href="http://www.carbondesignsystem.com" target="_blank">Carbon</a></p>`

### Images

Images will render as full width responsive images by default. Use blockquote in front of an image to render a smaller image for text to wrap around.

100% width standard image
`![image alt text](images/image.png)`

Smaller image w/ text wrapping
`> ![tone](images/content-general-2.png)`

![Example](https://user-images.githubusercontent.com/2753488/45236528-b02cb980-b2a1-11e8-9e81-af4ec353d3e9.png)

#### Image Component

Image components are used on component pages under the Style and Usage tabs to display an image with padding around it and a light background color. See the tooltip page for an examples

```
<div class="image-component">
    <img src="images/tooltip-style-1.png" alt="Closed and open states for a Tooltip" />
</div>
```

#### Image Grid

Image grids are used on component pages, usually under the "Style" tab to display a group of images in a grid. See the button page for an example.

```
<div class="image-grid">
  <div>
    <img src="images/button-style-7.png" alt="Structure for a Primary Button"/>
  </div>
  <div>
    <img src="images/button-style-8.png" alt="Structure for a small Primary Button"/>
  </div>
</div>
```

### Lists

    * This is a bulleted list
    * List item 2

    1. This is an ordered list
    2. List item 2

### Tables

    | COL 1      | COL 2   |  COL 3     |
    |------------|---------|------------|
    | Row 1A     | Row 1B  | Row 1C     |
    | Row 2A     | Row 2B  | Row 2C     |
    | Row 3A     | Row 3B  | Row 3C     |

### Code & syntax highlighting

We support inline code and code blocks.

    Inline `code` has `back-ticks around` it.


    ```
    Blocks of code are fenced by lines with three back-ticks

    ```

## Custom Markdown Components

The carbon website has a handful of custom markdown components available for use inside any markdown file. Some are meant to be global and others were created for very specific use cases.

### Video

```
  `video: https://www.youtube.com/embed/2Xc9gXyf2G4`
  `youtube: https://www.youtube.com/watch?v=2Xc9gXyf2G4`
  `youtube: 2Xc9gXyf2G4`

  `vimeo: https://vimeo.com/5299404`
  `vimeo: 5299404`

  `videoPress: https://videopress.com/v/kUJmAcSf`
  `videoPress: kUJmAcSf`

  `twitch: https://player.twitch.tv/?channel=dakotaz`
  `twitch: https://player.twitch.tv/?autoplay=false&video=v273436948`
  `twitch: 273436948`
  `twitchLive: dakotaz`
```

### Global Components:

- `<page-intro>`
- `<page-intro> **Bold and blue text** </page-intro>`
- `<icon name="icon--checkmark--solid" color="green" />`
- `<flex-group>`
- `<clickable-tile title="Title" author="John Smith" date="Janury 1, 2018" href="#"><img src="image.png" alt="Alt Text" type="article|resource" /></clickable-tile>`
- `<example correct=true title="Ability" text='Example text or quote'></example>`
- `<color-block showhex="true" size="xs">#ffaaaa</color-block>`
  - `size` takes values of `xs`, `s`, `m`, `l` (12px, 24px, 40px, 80px respectively)
  - `size` also accepts a number (e.g. `size="200"`, which would render a square that is 200px x 200px)
  - leaving out these extra properties will default to no label, and a swatch size of 24px
- `<color-card name="$ui-01" hex="#ffffff" border="true" small="true"></color-card>`

### Examples

#### Clickable Tile inside FlexGroup

```
<flex-group>
<clickable-tile
    title="Data Table updates in Carbon React v5.22.0"
    author="Josh Black"
    date="February 20, 2018"
    type="article"
    href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6"
    >
    <img src="images/article-5.png" alt="Data Table updates in Carbon React v5.22.0" />
</clickable-tile>
<clickable-tile
    title="Data Table updates in Carbon React v5.22.0"
    author="Josh Black"
    date="February 20, 2018"
    type="article"
    href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6"
    >
    <img src="images/article-5.png" alt="Data Table updates in Carbon React v5.22.0" />
</clickable-tile>
</flex-group>
```

This will render the following group of clickable tiles

![Tile Group](https://user-images.githubusercontent.com/2753488/43804229-e8d26a22-9a60-11e8-9aa9-e4f9b9759757.png)

#### Example inside FlexGroup (with and without images)

```
<flex-group>
    <example correct=true title="Ability" text='"You can use the command line interface to update your app."'></example>
    <example title='Ability' text='"You may use the command line interface to update your app."'></example>
</flex-group>
<flex-group>
    <example correct=true title="Possibility" text='"You might need more advanced features when you are integrating with another app."'></example>
    <example title='Possibility' text='"You may need more advanced features when you are integrating with another app."'></example>
</flex-group>
```

This will render the following set of examples
![Examples](https://user-images.githubusercontent.com/2753488/43850488-aba55aea-9afd-11e8-921d-418f65cf2460.png)

```
<flex-group>
    <example correct="true" title="Test One">
        <img src="images/content-general-1.png" alt="test2"/>
    </example>
    <example title="Test Two">
        <img src="images/content-general-2.png" alt="test2"/>
    </example>
</flex-group>
```

### Page Specific Components:

**Type**

- `<type-scale-table>`
- `<type-styles-table>`
- `<type-weight-table>`

**Glossary**

- `<glossary>`

**Component Status** (content pulled from data/components.json)

- `<component-status>`

**Component Overview** (content pulled from data/components.json)

- `<component-overview>`

**Layer**

- `<layer-types>`
- `<layer-usage>`

**Motion**

- `<motion-example type="standard"></motion-example>`
- `<motion-example type="ease-out"></motion-example>`
- `<motion-example type="ease-in"></motion-example>`
- `<motion-example type="standard"></motion-example>`
- `<motion-example type="easing" correcttext="Easing" incorrecttext="No-Easing"></motion-example></motion-example>`
- `<motion-example type="duration" correcttext="300ms" incorrecttext="600ms"></motion-example>`

## Component Page Components:

```
<component
    name="Text Input" //Required
    component="text-input" //Required
    variation="text-input" //Required
    codepen="YEZLyd" //Optional - Adds link to codepen
    haslightversion="true" //Optional -If true shows the light/white background switcher
    hasReactVersion="true" //Optional -If true links to react storybook
    hasAngularVersion="true" //Optional -If true links to angular storkbook
    hasLightBackground="true" //Optional -If true has light background
    experimental="true" //Optional -If true loads experimental version/styles
    >
</component>

<component-docs component="accordion"></component-docs>

<component-react
    name="Multi-select Dropdown"
    component="MultiSelect"
    variation="MultiSelect"
    >
```
