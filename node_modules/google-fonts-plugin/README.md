# Google Fonts Plugin

[![CircleCI](https://circleci.com/gh/SirPole/google-fonts-plugin/tree/master.svg?style=shield)](https://circleci.com/gh/SirPole/google-fonts-plugin/tree/master)
[![codecov](https://codecov.io/gh/SirPole/google-fonts-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/SirPole/google-fonts-plugin)

[Webpack](https://webpack.js.org/) plugin that downloads fonts from [Google Fonts](https://fonts.google.com/) and encodes them to base64.

Supports various font formats, currently `eot`, `ttf`, `woff` and `woff2`.

Exports to format specific and minified css files, which you can serve to your clients.

> **Note**: Current version works with Webpack 4. For webpack 3, use version **1.0.3**

## Install
``` bash
npm i -D google-fonts-plugin
```

## Usage
###### webpack.config.js
``` javascript
const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  plugins: {
    new GoogleFontsPlugin({
        /* options */
    })
  }
}
```

###### webpack.config.js
``` javascript
const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  plugins: {
    new GoogleFontsPlugin('path/to/config.json')
  }
}
```

## Options
Plugin supports configuration in javascript object, json or [neon](https://ne-on.org/) file and also in your package.json.

| **Name**  	| **Type**   	| **Default**           	| **Description**                                               	|
|-----------	|------------	|-----------------------	|---------------------------------------------------------------	|
| fonts     	| `Font[]`  	| Roboto                	| Defines which fonts and it's variants and subsets to download 	|
| formats   	| `String[]` 	| eot, ttf, woff, woff2 	| Specifies which formats to download                           	|
| outputDir 	| `String`   	| public/fonts          	| Specifies the output directory                                	|
| encode    	| `Boolean`  	| true                  	| Whether should encode to base64                               	|
| minify    	| `Boolean`  	| true                  	| Whether should minify resulting css                               |

##### Font object

| **Name** 	| **Type**   	| **Default**          | **Description**                                                                                              	|
|----------	|------------	|----------------------	|--------------------------------------------------------------------------------------------------------------	|
| family   	| `String`   	| Roboto               	| Sets the font family                                                                                         	|
| variants 	| `String[]` 	| 400, 400i, 700, 700i 	| Sets the variants of the font family to download, note that not all fonts have the all the possible variants 	|
| subsets  	| `String[]` 	| latin-ext            	| Sets the subsets, note that not all fonts are available in all subsets                                       	|

## Example configuration
###### config.json
``` json
{
	"google-fonts-plugin": {
		"fonts": [
			{
				"family": "Roboto",
				"variants": [
					"400",
					"400i",
					"700",
					"700i"
				],
				"subsets": [
					"latin-ext"
				]
			}
		],
		"formats": [
			"woff",
			"woff2"
		],
		"outputDir": "public/fonts"
	}
}
```

###### config.neon
``` neon
google-fonts-plugin:
	fonts: 
		- 
			family: Roboto
			variants:
				- 400
				- 400i
				- 700
				- 700i
			subsets:
				- latin-ext
	formats: 
		- woff
		- woff2
	outputDir: public/fonts
```

> **Note**: For Google's material icons, simply set `Material Icons` as font-family
