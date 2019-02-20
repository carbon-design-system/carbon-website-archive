---
title: Developers
tabs: ['Vanilla', 'React', 'Angular', 'Other frameworks']
---


## Resources

<grid-wrapper col_lg="8" flex="true" bleed="true">
<clickable-tile
    title="Try React components with CodeSandbox."
    href="https://codesandbox.io/s/x2mjypo6pp"
    type="resource"
     >
    <img src="images/codesandbox.png" alt=""/>
</clickable-tile>
</grid-wrapper>


<anchor-links>
<ul>
    <li><a href="#carbon-react-library">Carbon React library</a></li>
    <li><a href="#install">Install</a></li>
    <li><a href="#getting-started">Getting started</a></li>
    <li><a href="#development">Development</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
</ul>
</anchor-links>


## Carbon React library

The library provides front-end developers & engineers a collection of reusable React components to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.

## Install

####Using npm:

<br>

```bash
$ npm install --save carbon-components-react carbon-components carbon-icons
```

####If you prefer [Yarn](https://yarnpkg.com/en/):

<br>

```bash
$ yarn add carbon-components-react carbon-components carbon-icons
```

## Getting started

1.  These components require the use of [webpack](https://webpack.js.org/guides/getting-started/) in your project. See our [webpack.config.js](https://github.com/carbon-design-system/carbon-components-react/blob/master/.storybook/webpack.config.js) for an example configuration.

2.  Components do not import any of the styles themselves, use the SCSS or CSS from `carbon-components` to bring in styling. You can also use the `unpkg` CDN to bring in the styles wholesale - `unpkg.com/carbon-components/css/carbon-components.css` aliases the latest CSS file.

3.  For older browsers (e.g. IE11), polyfills listed in the [carbon-components-react/.storybook/polyfills.js file](https://github.com/carbon-design-system/carbon-components-react/blob/master/.storybook/polyfills.js) are required.


## Development

Please refer to the [Contribution Guidelines](https://github.com/carbon-design-system/carbon-components-react/blob/master/.github/CONTRIBUTING.md) before starting any work.

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

####Start the server:

<br>

```bash
$ yarn storybook
```

2.  Open browser to `http://localhost:9000/`.

3.  Develop components in their respective folders (`/components` or `/internal`).

4.  Write stories for your components in `/.storybook`.

### List of available components

View available React Components [here](http://react.carbondesignsystem.com). Usage information is available when you click the blue **?** icon in the top right corner of the selected component.

## Troubleshooting

If you experience any issues while getting set up with Carbon Components React, please head over to the [GitHub repo](https://github.com/carbon-design-system/carbon-components-react) for more guidelines and support. Please [create an issue](https://github.com/carbon-design-system/carbon-components-react/issues) if your issue does not already exist.
