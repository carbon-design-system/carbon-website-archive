---
label: Getting Started
title: Developers
tabs: ['Vanilla', 'React', 'Angular', 'Other Frameworks']
---

<page-intro>The **[Carbon Components Angular Library](http://angular.carbondesignsystem.com/)** provides front-end developers & engineers a collection of reusable Angular components to build websites and user interfaces. Adopting the library enables developers to use consistent markup, styles, and behavior in prototype and production work.</page-intro>

## Install

Assuming we're starting with a new @angular/cli project:

```sh
$ npx @angular/cli new my-project --style=scss
$ cd my-project
$ npm i --save-dev carbon-components-angular carbon-components @ngx-translate/core
```

Then we need to include carbon-components in `src/styles.scss`:

```scss
@import '~carbon-components/scss/globals/scss/styles.scss';
```

And set up our translations in `src/app/app.module.ts`:

```sh
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Start the server and start building.

```sh
$ npm start
```

**Note:** This isn't the only way to bootstrap a `carbon-components-angular` application, but the combination of `@angular/cli` and the `carbon-components` scss is our recommended setup.

## Development

Please refer to the [Contributing Guidelines](https://github.com/IBM/carbon-components-angular/blob/master/README.md#contributing) before starting any work.
