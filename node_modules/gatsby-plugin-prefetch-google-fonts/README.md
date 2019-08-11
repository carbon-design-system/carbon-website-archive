# gatsby-plugin-prefetch-google-fonts

A Gatsby plugin to download and prefetch [Google Fonts](https://fonts.google.com/). Can increase performance as opposed to loading webfonts from Google's external stylesheet.

## Installation

With npm:

```bash
npm install --save gatsby-plugin-prefetch-google-fonts
```

Or with Yarn:

```bash
yarn add gatsby-plugin-prefetch-google-fonts
```

## Usage

In your `gatsby-config.js` file, load in the plugin along with which web fonts to load.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oswald`,
            subsets: [`latin`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`]
          },
        ],
      },
    }
  ]
}
```

For a list of all available font family options, consult the [google-fonts-plugin readme](https://github.com/SirPole/google-fonts-plugin).