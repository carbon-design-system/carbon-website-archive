## Adding a new page
Create markdown file inside the `content` folder following the rules below. 

Add page to navigation.json file.
```
src
├── data
   ├── navigation
      ├── navigation.json
```

If page is internal only make sure to add `"internal": true` to the navigation.json file for that item. 

```
 "your-product-on-ibm-cloud": {
    "title": "Your Product on IBM Cloud",
    "internal": true,
    "sub-nav": {
      "catalog-entry": {
        "title": "Catalog Entry"
      },
```

## Writing content

All markdown files live inside of the `content` folder and follow the site navigation.

```
src
├── content
   ├── getting-started
      ├── designers
          ├── designers.md
```

Remember the frontmatter on top of each file.

Required fields are:
- `title`: The title of the page
- `label`: The label of the page _(not required on top level pages, e.g., Resources, if title and label are the same only title will display)_

Non-required fields are:
- `tabs`: An array of the page tabs (in the desired order), tab name should match markdown file name.
- `internal: true` Used to designate internal only content. 

### Example:

```
---
title: Getting Started
label: Developers
tabs: ['Vanilla', 'React']
---
```

This will render the following header:
![Header](https://user-images.githubusercontent.com/5447411/41934216-bc9c080e-794b-11e8-9d7f-1f9d89d44dd9.png)

## Markdown 

### This generates an H2 heading with an underline
	
	### This generates an H3 heading (blue).
	
	#### This generates an H4 heading. 
	
	**This is bold text.**
	
	_This is italic text or an image caption._ 
	
	This is a normal paragraph with a [link](http://www.link.com).
	
	> This is a block quote.

### Images
Images will render as full width responsive images by default. Use blockquote in front of an image to render a smaller image for text to wrap around.

100% width standard image
`![image alt text](images/image.png)`

Smaller image w/ text wrapping
`> ![tone](images/content-general-2.png)`

![Example](https://user-images.githubusercontent.com/2753488/45236528-b02cb980-b2a1-11e8-9e81-af4ec353d3e9.png)

### Lists

	* This is a bulleted list
	* List item 2 

### Tables

	| COL 1      | COL 2   |  COL 3     |
	|------------|---------|------------|
	| Row 1A     | Row 1B  | Row 1C     | 
	| Row 2A     | Row 2B  | Row 2C     | 
	| Row 3A     | Row 3B  | Row 3C     | 

###  Code & syntax highlighting

We support inline code and code blocks. 

	Inline `code` has `back-ticks around` it.
	
	
	```
	Blocks of code are fenced by lines with three back-ticks 
	
	``` 

Inline `code` has `back-ticks around` it.

	
```
Blocks of code are fenced by lines with three back-ticks 
	
``` 

## Custom Markdown Components

These custom components can be used inside any markdown file. 

### Global Components:
 
- `<page-intro>`
- `<page-intro> **Bold and blue text** </page-intro>`
- `<icon name="icon--checkmark--solid" color="green" />`
- `<flex-group>`
- `<clickable-tile title="Title" author="John Smith" date="Janury 1, 2018"  href="#"><img src="image.png" alt="Alt Text" type="article|resource" /></clickable-tile>`
- `<example correct=true title="Ability" text='Example text or quote'></example>`
- `<color-block>#ff0000</color-block>`
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
