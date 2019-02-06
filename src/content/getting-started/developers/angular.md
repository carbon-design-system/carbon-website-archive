---
title: Developers
tabs: ['Vanilla', 'React', 'Angular', 'Other frameworks']
---


<anchor-links>
<ul>
    <li><a href="#carbon-angular-library">Carbon Angular Library</a></li>
    <li><a href="#install">Install</a></li>
    <li><a href="#development">Development</a></li>
    
</ul>
</anchor-links>

## Carbon Angular Library

The [Library](http://angular.carbondesignsystem.com/) provides front-end developers & engineers a collection of reusable Angular components to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.

## Install

Assuming we're starting with a new @angular/cli project:

```sh
$ npx @angular/cli new my-project --style=scss
$ cd my-project
$ npm i --save carbon-components-angular carbon-components
```

Then we need to include carbon-components in `src/styles.scss`:

```scss
@import '~carbon-components/scss/globals/scss/styles.scss';
```

Thats it! Now start the server and start building.

```sh
$ npm start
```

_Note: This isn't the only way to bootstrap a_ `carbon-components-angular` _application, but the combination of_ `@angular/cli` _and the_ `carbon-components` _scss is our recommended setup._

<a target="_blank" href="https://codesandbox.io/s/0129r494ql">
  <img style="width: 200px" alt="Edit on CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg" />
</a>

### Using our starter app

<image-component cols="12" bg="none">

![carbon-angular-starter screenshot](images/carbon-angular-starter.png)

</image-component>

We recommend using the [carbon-angular-starter](https://github.com/carbon-design-system/carbon-angular-starter) for bootstrapping applications with Carbon components. Within 5 minutes your app will be running with the following already configured:

- Angular-cli
- Build process
- Code styles and editor configs
- Folder structure
- Lazy loading
- Routing
- Service workers
- Test framework

Check out the [readme](https://github.com/carbon-design-system/carbon-angular-starter) for installation instructions.

## Development

Please refer to the [contributing guidelines](https://github.com/IBM/carbon-components-angular/blob/master/README.md#contributing) before starting any work.
