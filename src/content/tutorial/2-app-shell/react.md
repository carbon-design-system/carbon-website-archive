---
title: 2. Application Shell
tabs: ['Vanilla', 'React', 'Angular']
---

## Add Carbon components

Now that we have installed Carbon dependencies, let's add a few components by starting with the UI shell. We'll be building a website for Austin Tacos by starting with a cart page.

Add the following imports at the top of `src/App.js`.

**src/App.js**

```javascript
import { Search20, ShoppingCart20 } from '@carbon/icons-react';
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from 'carbon-components-react/lib/components/UIShell';
```

Note: UI Shell is currently "experimental", so you need to use the full path `carbon-components-react/lib/components/UIShell` in the import.

Next, modify the `render()` function in `src/App.js` to use the imported components:

**src/App.js**

```javascript
class App extends Component {
  render() {
    return (
      <div>
        <Header aria-label="Austin Tacos">
          <SkipToContent />
          <HeaderMenuButton aria-label="Open Menu" />
          <HeaderName href="#" prefix="Austin">
            Tacos
          </HeaderName>
          <HeaderNavigation aria-label="Austin Tacos">
            <HeaderMenuItem href="#">Locations</HeaderMenuItem>
            <HeaderMenuItem href="#">Menu</HeaderMenuItem>
            <HeaderMenuItem href="#">Shop</HeaderMenuItem>
            <HeaderMenuItem href="#">Our Story</HeaderMenuItem>
            <HeaderMenuItem href="#">News</HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">
              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Cart">
              <ShoppingCart20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <Content id="main-content">Cart goes here.</Content>
      </div>
    );
  }
}
```

## Remove sample styling

Now that we've replaced the initial markup that came with Create React App, go ahead and clear out the selector blocks in `src/App.css` and everything but the import in `src/index.scss`.

## Create Sass build

At this point, `src/index.scss` only has one line which imports the entire Carbon Sass styling. To create our own Sass build, open that file in `node_modules/carbon-components/scss/globals/scss/styles.scss` and copy the contents into an empty `src/index.scss`.

For this tutorial, we want all global styling, so set all global variables to true.

Next, delete or comment out all components that aren't getting used.

Finally, update all import paths to point to the `carbon-components` directory in `node_modules`. Your final file will look like this:

**src/index.scss**

```sass
  //-------------------------
  // 🌍 Global
  //-------------------------

  $css--font-face: true;
  $css--helpers: true;
  $css--body: true;
  $css--use-layer: true;
  $css--reset: true;
  $css--typography: true;
  $css--plex: true;

  @import "~carbon-components/scss/globals/scss/feature-flags";
  @import "~carbon-components/scss/globals/scss/vars";
  @import "~carbon-components/scss/globals/scss/colors";
  @import "~carbon-components/scss/globals/scss/theme";
  @import "~carbon-components/scss/globals/scss/mixins";
  @import "~carbon-components/scss/globals/scss/layout";
  @import "~carbon-components/scss/globals/scss/layer";
  @import "~carbon-components/scss/globals/scss/spacing";
  @import "~carbon-components/scss/globals/scss/typography";
  @import "~carbon-components/scss/globals/scss/import-once";
  @import "~carbon-components/scss/globals/scss/css--reset";
  @import "~carbon-components/scss/globals/scss/css--font-face";
  @import "~carbon-components/scss/globals/scss/css--helpers";
  @import "~carbon-components/scss/globals/scss/css--body";
  @import "~carbon-components/scss/globals/scss/css--typography";

  //-------------------------
  // 🍕 Components
  //-------------------------

  //-------------------------------------
  // 🔬 Experimental
  //-------------------------------------
  @import "~carbon-components/scss/components/ui-shell/ui-shell";
```

## Code review

At this point, your app should look like this live example.

**To Do**
