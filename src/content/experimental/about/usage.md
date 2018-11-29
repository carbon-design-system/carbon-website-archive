---
label: Experimental
title: About
tabs: ['Overview', 'Usage']
---

## Feature-Flags

Carbon utilizes `feature-flags` to toggle new features on and off.

We currently have two `feature-flags` available for testing. **Experimental Components:** use `components-x` and the **UI Shell:** uses `ui-shell`.

To turn on either of the feature flags include the **feature-flag** variable into your SCSS file before importing `carbon-components`, then set `components-x` and/or `ui-shell` to `true`.

```scss

$feature-flags: (
    components-x: true,
    ui-shell: true,
  );
 @import 'carbon-components/src/globals/scss/styles';

```

**Note: You must be using Sass and not the compiled CSS file in order to take advantage of the code using feature flags.**


## Disclaimer

Experimental components, designs, patterns, and other resources are work that is still under development.

They are not intended for production use, and are subject to change but are in a state where it can be productive for designers and developers to start to work with them. They may have some non-functional pieces, or be lacking in documentation. *There is no guarantee of support*.
