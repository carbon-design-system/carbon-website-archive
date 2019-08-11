# gatsby-remark-unwrap-images

[![npm package][npm-badge]][npm]

## Usecase

`gatsby-remark-unwrap-images` is usefull if your want to style _paragraphs_ and _images_ differently.

You can easily have full width images and margin around texts to have a _Medium_ style posts.

```css
div {
    p {
        max-width: 1000px;
        margin: 0 auto;
    }

    img {
        width: 100%;
    }
}
```

### With `gatsby-remark-unwrap-images`

```md
Hello Word!

![](image1.jpg)
![](image2.jpg)
```

The previous markdown will generate the following DOM:

```html
<div>
  <p>Hello Word!</p>
  <img src="image1.jpg" />
  <img src="image2.jpg" />
</div>
```

### Without `gatsby-remark-unwrap-images`

```md
Hello Word!

![](image1.jpg)
![](image2.jpg)
```

The previous markdown will generate the following DOM:

```html
<div>
  <p>Hello Word!</p>
  <p>
    <img src="image1.jpg" />
    <img src="image2.jpg" />
  </p>
</div>
```

## Getting started

[![gatsby-remark-unwrap-images](https://nodei.co/npm/gatsby-remark-unwrap-images.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/gatsby-remark-unwrap-images/)

You can download `gatsby-remark-unwrap-images` from the NPM registry via the
`npm` or `yarn` commands

```shell
yarn add gatsby-remark-unwrap-images
npm install gatsby-remark-unwrap-images --save
```

## Usage

Add the plugin in your `gatsby-config.js` file:

```js
module.exports = {
    plugins: [
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: ["gatsby-remark-unwrap-images"],
            },
        },
    ],
}
```

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/gatsby-remark-unwrap-images.svg?style=flat-square
[npm]: https://www.npmjs.org/package/gatsby-remark-unwrap-images
[github-issue]: https://github.com/xuopled/gatsby-remark-unwrap-images/issues/new
