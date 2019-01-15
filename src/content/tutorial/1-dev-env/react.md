---
title: 1. Development Environment
tabs: ['Vanilla', 'React']
---

## Set up development environment

Before you start building web applications with Carbon, you'll need to familiarize yourself with some core web technologies and make sure that you have installed all required tooling. Installation of these prerequisites can be found in the [tutorial introduction](../introduction#install-prerequisites).

## Create project

[Create React App](https://github.com/facebook/create-react-app) allows you to set up a modern web application by running one command. For more information on Create React App, see its [philosophy](https://github.com/facebook/create-react-app#philosophy) and [what's included](https://github.com/facebook/create-react-app#whats-included).

You can go straight to [installing dependencies](#install-dependencies) if you already have a project.

Run this command in your terminal to create a scaffolded project:

```
npx create-react-app tutorial-react
```

Then, move to the project's directory:

```
cd tutorial-react
```

## Install dependencies

From your `tutorial-react` directory, install the Carbon-specific dependencies:

```
yarn add carbon-components@10.0.0-alpha.0\
  carbon-components-react\
  carbon-icons
```

Note: you can also use `npm install --save` for any of the `yarn add` commands.

Note: This tutorial is using the Carbon v10 components which are currently in alpha. `@10.0.0-alpha.0` in the above command will not be needed when v10 is the latest stable version.

In addition, we’ll need to install `node-sass` as a development dependency so that our Sass files compile. To do this, run:

```
yarn add node-sass
```

Before importing the Carbon styling, rename the `src/index.css` file to `src/index.scss`.

In `src/index.js`, update the import line to reference the renamed file `index.scss`.

**src/index.js**

```javascript
import './index.scss';
```

Now that you've created a project and installed `node-sass`, start the development server with:

```
yarn start
```

## Import styling

Carbon components need associated styling for proper rendering. For now, add the styling for all components by importing the default stylesheet at the top of `src/index.scss`.

**src/index.scss**

```scss
@import '~carbon-components/scss/globals/scss/styles.scss';
```

We'll customize the Sass build in a later step as it's a bad practice to include styling for all components, unless you're using every Carbon component.

## Code review

At this point, your app should look like this live example.

<div class="ibm--row">
  <div class="ibm--col-lg-8 ibm--offset-lg-4">
    <iframe src="https://codesandbox.io/embed/k5wrxqp3j5?autoresize=1&hidenavigation=1&view=preview" style="width:100%; height:500px; border:0; border-radius: 0; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
  </div>
</div>
