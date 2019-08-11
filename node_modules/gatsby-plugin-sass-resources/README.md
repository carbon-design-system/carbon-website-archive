# gatsby-plugin-sass-resources

SASS resources (e.g. variables, mixins etc.) plugin for Gatsby

## Install

`npm install --save node-sass gatsby-plugin-sass gatsby-plugin-sass-resources`

## How to use

1.  Include the plugin in your `gatsby-config.js` file.
2.  Write your resources stylesheets in SASS/SCSS and include it in the resources list in the options as shown below.

```javascript
// in gatsby-config.js
plugins: [{
  resolve: `gatsby-plugin-sass-resources`,
  options: {
    resources: ['./path/to/resources.scss']
  }
}]
```
Built using [sass-resources-loader](https://github.com/shakacode/sass-resources-loader)
<!-- ## Breaking changes history -->

<!-- Please keep the breaking changes list ordered with the newest change at the top -->

<!-- ### v2.0.0 -->

<!-- - support Gatsby v2 only -->