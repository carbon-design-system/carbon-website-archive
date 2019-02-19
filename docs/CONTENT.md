# Content

## File Structure

All markdown files live inside of the `src/content` folder and follow the site navigation. They live inside a folder that is named the same as the file, unless it is a page with tabbed navigation. "Tabbed" pages _(for example Getting Started > Developers)_ should have all the pages inside the same folder, with the file name matching the page title.

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
label: Optional paragraph of text at the top of a page (Used only in Guidelines pages)
title: Page title
tabs: ['Tab 1', 'Tab 2', 'Tab 3'']
internal: true
---
```

Required fields are:

- `title`: The title of the page

Non-required fields are:

- `label`: The label of the page _(if added then header will display at medium height instead of small)_ (Used only in Guidelines pages)
- `tabs`: An array of the page tabs (in the desired order), tab name should match markdown file name.
- `internal: true` Used to designate internal-only content for display on w3 website.

## Basic formatting

    ## This generates an H2 heading

    ### This generates an H3 heading

    #### This generates an H4 heading

    **This is bold text.**

    _This is italic text._

    This is a normal paragraph with a [link](http://www.link.com).

    > This is a block quote.

### Link

You can create an inline link by wrapping link text in brackets [ ], and then wrapping the URL in parentheses ( ).

`[Carbon](http://www.carbondesignsystem.com/)`

If you need a link to open in a new window you will have to use standard html to target the new window.

`<a href="http://www.carbondesignsystem.com" target="_blank">Carbon</a></p>`

### Images

All images are delivered through the image component, which wraps around the images on the website so we can customize them.

```
<ImageComponent cols="8" caption="Enter caption here">

![image alt text](/images/image1.png)

</ImageComponent>
```
_example of 8-column fluid image with caption_

**Note: The line breaks before and after the markdown link are mandatory.**

Will by default resize with the grid, and you can pass in number of columns that the image should span (4, 6, 8 or 12). The default (if no value is specified) is `12`.

If the image needs to be fixed, you can add the `fixed="default"` option. This will give the image a max-width of 720 px.
There is also a `fixed="large"` option that will give the image a max-width of 1120 px.

If the image needs a transparent background you can add the option `bg="none"`. It will by default get a white background.

Caption is also optional and can be added with the `caption` option.

```
<ImageComponent fixed="large">

![image alt text](/images/image1.png)

</ImageComponent>
```
_example of 1120 px fixed image without caption_


### Lists

    * This is a bulleted list
    * List item 2

    1. This is an ordered list
    2. List item 2

### Tables
To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. You can optionally add pipes on either end of the table.

Tip: Creating tables with hyphens and pipes can be tedious. To speed up the process, try using the [Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables). Build a table using the graphical interface, and then copy the generated Markdown-formatted text into your file.

    | COL 1      | COL 2   |  COL 3     |
    |------------|---------|------------|
    | Row 1A     | Row 1B  | Row 1C     |
    | Row 2A     | Row 2B  | Row 2C     |
    | Row 3A     | Row 3B  | Row 3C     |


### Code & syntax highlighting

We support inline code and code blocks.

    Inline `code` has `back-ticks` around it.


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

#### Icon
- `<icon name="icon--checkmark--solid" color="green" />`

#### Clickable tile
- `<ClickableTile label="Title" author="John Smith" date="Janury 1, 2018" href="#"><img src="image.png" alt="Alt Text" type="article|resource" /></ClickableTile>`

#### Do - Don't example: text

```
<GridWrapper col_lg="8" flex="true">
  <DoDontExample correct="true" label="caption" description="Lorem ipsum dolor sit amet" text='Example text or quote'>
  </DoDontExample>`
</GridWrapper>

```

#### Do - Don't example: images

```
<GridWrapper col_lg="8" flex="true">
    <DoDontExample correct="true" label="Do: center-align icons when they’re next to text.">
        <img src="images/iconography-usage-sizing-5.svg" alt="proper alignment">    
    </DoDontExample>
    <DoDontExample label="Don't: baseline-align icons to the text.">
        <img src="images/iconography-usage-sizing-6.svg" alt="improper alignment">    
    </DoDontExample>
</GridWrapper>

```
#### Color block
- `<ColorBlock showhex="true" size="xs">#ffaaaa</ColorBlock>`
  - `size` takes values of `xs`, `s`, `m`, `l` (12px, 24px, 40px, 80px respectively)
  - `size` also accepts a number (e.g. `size="200"`, which would render a square that is 200px x 200px)
  - leaving out these extra properties will default to no label, and a swatch size of 24px

#### Color card
- `<color-card name="$ui-01" hex="#ffffff" border="true" small="true"></color-card>`

#### Anchor links
- `<AnchorLinks>`

#### Grid wrapper
- `<GridWrapper col_lg="12" flex="true>`
  - `col_lg` Specify the col width at large breakpoint, default is 12
  - `flex` Set to true to set display:flex | flexwrap: wrap to row

#### Website tabs
- `<website-tabs> … </website-tabs>`
  - inside, place `<tab label="Tab Label"><div> [tab content] </div></tab>`

### Examples

#### Anchor Links

This is a wrapper component to display a list as an anchor link list

```
<AnchorLinks>
<ul>
    <li><a href="#columns-and-rows">Columns and rows</a></li>
    <li><a href="#margins">Margins</a></li>
    <li><a href="#padding">Padding</a></li>
    <li><a href="#gutters">Gutters</a></li>
    <li><a href="#breakpoints">Breakpoints</a></li>
</ul>
</AnchorLinks>
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


<GridWrapper />
<GridWrapper col_lg="12" col_md="8" col_sm="4" flex="false" bleed="false">
```

#### Clickable Tile

```

<ClickableTile
    title="Data Table updates in Carbon React v5.22.0"
    author="Josh Black"
    date="February 20, 2018"
    type="article"
    href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6"
    >
    <img src="images/article-5.png" alt="Data Table updates in Carbon React v5.22.0" />
</ClickableTile>
<ClickableTile
    title="Data Table updates in Carbon React v5.22.0"
    author="Josh Black"
    date="February 20, 2018"
    type="article"
    href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6"
    >
    <img src="images/article-5.png" alt="Data Table updates in Carbon React v5.22.0" />
</ClickableTile>

```

This will render the following group of clickable tiles

![Tile Group](https://user-images.githubusercontent.com/2753488/43804229-e8d26a22-9a60-11e8-9aa9-e4f9b9759757.png)

#### Example of the Do/Don't components:

- can include property `full=true` to use the example as a full-width component.
    - e.g. `<DoDontExample full=true>`
    - this option will cause the element to fill the full width of its containing wrappper. adjust the column count of the enclosing `<GridWrapper>` to expand the maxium width.

##### With text examples:

```
<GridWrapper col_lg="8" flex="true">
    <DoDontExample correct="true" label="Active Voice" text='"In the Limits window, specify the minimum and maximum values."'></DoDontExample>
    <DoDontExample label='Passive Voice' text='"The Limits window is used to specify the minimum and maximum values."'></DoDontExample>
</GridWrapper>
```

---

##### With image examples:

```
<GridWrapper col_lg="8" flex="true">
    <DoDontExample correct="true" label='Image Test'>
        <img src='images/img-test.png' />
    </DoDontExample>
    <DoDontExample label='Image Test' >
        <img src='images/img-test.png' />
    </DoDontExample>
</GridWrapper>
```

This will render the following set of examples:
![Example of the Do/Don't component with image examples](https://user-images.githubusercontent.com/2753488/43850488-aba55aea-9afd-11e8-921d-418f65cf2460.png)

#### Website Tabs

```
<website-tabs>
<tab label="Tab 1"><div>

lorem ipsum dolor sit amet

</div></tab>
<tab label="Tab 2"><div>

Content for second tab goes here.

</div></tab>
<tab label="Tab 3"><div>

Content for third tab goes here.

</div></tab>
</website-tabs>
```

- Complete component block surrounded in `<website-tabs> … </website-tabs>`
- Each tab element has a label property, which will be the displayed label of the tab
  - `<tab label="Lorem">`
- Each Tab element also has a div wrapper inside of it, with no space between the div and tab
  - `<tab label="Lorem"><div> … </div></tab>`
- Because of the way Markdown processes files, an **empty line** is required to be the first bit of content inside of the `<tab><div>` stack, e.g.:
```
<website-tabs>
<tab label="Tab 1"><div>

lorem ipsum dolor sit amet

</div></tab>
</website-tabs>
```
- note the empty line after `<tab label="Tab 1"><div>` and before the first line of content, in this case `lorem ipsum…`. **Verify that there are no whitespace characters in these empty lines**.
- Do not indent interior components. 
    - Unfortunately, this component is extra fragile when written inside of a markdown file, because we are passing `<tab>` components into the `<website-tabs>` component, and markdown can interfere when child components are indendented. 



### Page-specific components

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

**Color Token Table** (content pulled from data/guidelines/color-tokens.js)

- `<color-token-table>

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
