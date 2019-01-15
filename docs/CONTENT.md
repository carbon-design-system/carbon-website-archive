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
label: Optional paragraph of text at the top of a page
title: Page Title
tabs: ['Tab 1', 'Tab 2', 'Tab 3'']
internal: true
---
```

Required fields are:

- `title`: The title of the page

Non-required fields are:

- `label`: The label of the page _(if added then header will display at medium height instead of small)_
- `tabs`: An array of the page tabs (in the desired order), tab name should match markdown file name.
- `internal: true` Used to designate internal only content for display on w3 website.

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

Images will render as full width responsive images by default. 

`![image alt text](images/image.png)`

#### Image captions

If you place markdown italic text immediatley following an image it will render in the caption styles. 


```
![Structure and spacing measurements for Accordion](images/accordion-style-1.png)
_Structure and spacing measurements for Accordion | px / rem_
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

- `<icon name="icon--checkmark--solid" color="green" />`
- `<clickable-tile label="Title" author="John Smith" date="Janury 1, 2018" href="#"><img src="image.png" alt="Alt Text" type="article|resource" /></clickable-tile>`
- `<do-dont-example correct=true label="Ability" description="Lorem ipsum dolor sit amet" text='Example text or quote'></do-dont-example>`
- `<color-block showhex="true" size="xs">#ffaaaa</color-block>`
  - `size` takes values of `xs`, `s`, `m`, `l` (12px, 24px, 40px, 80px respectively)
  - `size` also accepts a number (e.g. `size="200"`, which would render a square that is 200px x 200px)
  - leaving out these extra properties will default to no label, and a swatch size of 24px
- `<color-card name="$ui-01" hex="#ffffff" border="true" small="true"></color-card>`
- `<anchor-links>`
- `<grid-wrapper col_lg="12" flex="true>`
  - `col_lg` Specify the col width at large breakpoint, default is 12
  - `flex` Set to true to set display:flex | flexwrap: wrap to row

### Examples

#### Anchor Links

This is a wrapper component to display a list as an anchor link list

```
<anchor-links>
<ul>
    <li><a href="#columns-and-rows">Columns and Rows</a></li>
    <li><a href="#margins">Margins</a></li>
    <li><a href="#padding">Padding</a></li>
    <li><a href="#gutters">Gutters</a></li>
    <li><a href="#breakpoints">Breakpoints</a></li>
</ul>
</anchor-links>
```

#### Grid Wrapper

This is a wrapper component used to wrap components like tiles, do-dont, images and more. Shown with the default values below.

```
Properties

    - col_lg: Specify the col width at large breakpoint, default is 12
    - col_md: Specify the col width at medium breakpoint, default is 8
    - col_sm: Specify the col width at small breakpoint, default is 4
    - flex: Set to true to set display:flex | flexwrap: wrap to row
    - bleed: Set to true to remove col padding


<grid-wrapper />
<grid-wrapper col_lg="12" col_md="8" col_sm="4" flex="false" bleed="false">
```

#### Clickable Tile

```

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

```

This will render the following group of clickable tiles

![Tile Group](https://user-images.githubusercontent.com/2753488/43804229-e8d26a22-9a60-11e8-9aa9-e4f9b9759757.png)

#### Example of the Do/Don't components:

##### With text examples:

```
<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct=true label="Active Voice" text='"In the Limits window, specify the minimum and maximum values."'></do-dont-example>
    <do-dont-example label='Passive Voice' text='"The Limits window is used to specify the minimum and maximum values."'></do-dont-example>
</grid-wrapper>
```

This will render the following set of examples:
![Example of the Do/Don't component with text examples](https://user-images.githubusercontent.com/2753488/43850488-aba55aea-9afd-11e8-921d-418f65cf2460.png)

---

##### With image examples:

```
<grid-wrapper col_lg="8" flex="true">
    <do-dont-example correct="true" label='Image Test'>
        <img src='images/img-test.png' />
    </do-dont-example>
    <do-dont-example label='Image Test' >
        <img src='images/img-test.png' />
    </do-dont-example>
</grid-wrapper>
```

This will render the following set of examples:
![Example of the Do/Don't component with image examples](https://user-images.githubusercontent.com/2753488/43850488-aba55aea-9afd-11e8-921d-418f65cf2460.png)

### Page Specific Components:

**Type**

- `<type-weight>`
- `<type-weight type="italic">`
- `<type-weight type="type">`
- `<type-scale-table>`
- `<type-spec>`

**Glossary**

- `<glossary>`

**Component Status** (content pulled from data/components.json)

- `<component-status>`

**Component Overview** (content pulled from data/components.json)

- `<component-overview>`

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
