---
label: Getting Started
title: Developers
tabs: ['Vanilla', 'React', 'Angular', 'Other Frameworks']
---

<page-intro>The **Carbon Components React Library** provides front-end developers & engineers a collection of reusable React components to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.</page-intro>

## Install

Using npm:

```bash
$ npm install --save carbon-components-react carbon-components carbon-icons
```

If you prefer [Yarn](https://yarnpkg.com/en/), use the following command instead:

```bash
$ yarn add carbon-components-react carbon-components carbon-icons
```

### Getting Started

1.  These components require the use of [webpack](https://webpack.js.org/guides/getting-started/) in your project. See our [webpack.config.js](https://github.com/carbon-design-system/carbon-components-react/blob/master/.storybook/webpack.config.js) for an example configuration.

2.  Components do not import any of the styles themselves, use the SCSS or CSS from `carbon-components` to bring in styling. You can also use the `unpkg` CDN to bring in the styles wholesale - `unpkg.com/carbon-components/css/carbon-components.css` aliases the latest CSS file.

3.  For older browsers (e.g. IE11), polyfills listed in the [carbon-components-react/.storybook/polyfills.js file](https://github.com/carbon-design-system/carbon-components-react/blob/master/.storybook/polyfills.js) are required.

If you just want to try out `carbon-components-react`, you can also use [CodeSandbox](https://codesandbox.io).

<a target="_blank" href="https://codesandbox.io/s/x2mjypo6pp">
  <img style="width: 200px" alt="Edit on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
</a>

## Development

Please refer to the [Contribution Guidelines](https://github.com/carbon-design-system/carbon-components-react/blob/master/.github/CONTRIBUTING.md) before starting any work.

### Using the server

We recommend the use of [React Storybook](https://github.com/storybooks/react-storybook) for developing components.

1.  Start the server:

```bash
$ yarn storybook
```

2.  Open browser to `http://localhost:9000/`.

3.  Develop components in their respective folders (`/components` or `/internal`).

4.  Write stories for your components in `/.storybook`.

### List of Available Components

View available React Components [here](http://react.carbondesignsystem.com). Usage information is available when you click the blue **?** icon in the top right corner of the selected component.

## Troubleshooting

If you experience any issues while getting set up with Carbon Components React, please head over to the [GitHub repo](https://github.com/carbon-design-system/carbon-components-react) for more guidelines and support. Please [create an issue](https://github.com/carbon-design-system/carbon-components-react/issues) if your issue does not already exist.
