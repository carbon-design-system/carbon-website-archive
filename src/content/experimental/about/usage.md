---
label: Experimental
title: About
tabs: ['Overview', 'Usage']
---

## Feature-Flags

Carbon utilizes `feature-flags` to toggle experimental components on and off.

To turn on `feature-flags` navigate to `_feature-flags.scss`


```bash

carbon-components/

├── globals
│   └── scss
│       └── _feature-flags.scss
│    

```


At the top of the file under the `$feature-flags` variable set `components-x` to `true` it is set to *false* by default.


```scss

$feature-flags: (
  components-x: false,
  ui-shell: false,
) !default;

```

When you want to return to the stable Carbon components styling toggle `components-x` back to `false`.


## Disclaimer 

Experimental components, designs, patterns, and other resources are work that is not fully tested. But they are in a state where it can be productive for designers and developers to work with them.

They are not intended for production use, and are subject to change. They may have some non-functional pieces, or be lacking in documentation. There is no guarantee of support.
