## Writing content

Remember the frontmatter on top of each file.

Required fields are:
- `title`: The title of the page
- `label`: The label of the page _(not required on top level pages, e.g., Resources, if title and label are the same only title will display)_

Non-required fields are:
- `tabs`: An array of the page tabs (in the desired order)

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

Components:
 
- `<page-intro>`
- `<page-intro> **Bold and blue text** </page-intro>`
- `<icon name="icon--checkmark--solid" color="green" />`
- `<tile-group>`
- `<clickable-tile title="Title" author="John Smith" date="Janury 1, 2018"  href="#"><img src="image.png" alt="Alt Text" /></clickable-tile>`

###Example Tile Group
```
<tile-group>
<clickable-tile 
    title="Data Table updates in Carbon React v5.22.0"
    author="Josh Black" 
    date="February 20, 2018"
    href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6" 
    >
    <img src="images/article-5.png" alt="Data Table updates in Carbon React v5.22.0" />
</clickable-tile>
<clickable-tile 
    title="Data Table updates in Carbon React v5.22.0"
    author="Josh Black" 
    date="February 20, 2018"
    href="https://medium.com/carbondesign/data-table-updates-in-carbon-react-v5-22-0-6da0c24a96d6" 
    >
    <img src="images/article-5.png" alt="Data Table updates in Carbon React v5.22.0" />
</clickable-tile>
</tile-group>
```

This will render the following group of tiles

![Tile Group]()
