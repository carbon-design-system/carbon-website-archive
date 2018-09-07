# Carbon Design System

This is a work in progress repo for re-architecting the [Carbon Design System website](http://www.carbondesignsystem.com) using GatsbyJS.

[Current Carbon Design System repo](https://github.com/carbon-design-system/design-system-website)

## 📂 Structure
```
src
├── components
├── content
├── data
├── layouts
├── pages
├── styles
├── templates
```

## 📚 Writing Content 
[Content writing guide](CONTENT.MD)

## 👩‍💻 Development

Install dependencies
```
yarn
```

Run dev environment
```
yarn dev
```

Run internal dev environment
```
yarn dev:internal
``` 

## 🚀 Build

Runing the build commands generates all the files and places them in the `public` folder.

Build external site
```
yarn build:external
```

Build internal site
```
yarn build:internal
```

