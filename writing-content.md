## Writing content

Remember the frontmatter on top of each file.

Required fields are:
- `title`: The title of the page
- `label`: The label of the page

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
