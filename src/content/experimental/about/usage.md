---
label: Experimental
title: About
tabs: ['Overview', 'Usage']
---

## Feature-Flags

Carbon utilizes `feature-flags` to toggle experimental components on and off.

To turn on `feature-flags` include the **feature-flag** variable into your scss file, then set `components-x` to `true`. 

Import Carbon components styles in after the feature-flag as seen below.

```scss

$feature-flags: (
    components-x: true,
  );
 @import 'carbon-components/src/globals/scss/styles';

```

**Note: You must be using sass and not the compiled css file in order to take advantage of the code using feature flags.** 



## Disclaimer 

Experimental components, designs, patterns, and other resources are work that is not fully tested. But they are in a state where it can be productive for designers and developers to work with them.

They are not intended for production use, and are subject to change. They may have some non-functional pieces, or be lacking in documentation. There is no guarantee of support.
