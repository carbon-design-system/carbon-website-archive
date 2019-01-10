# Developing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Dependencies](#dependencies)
- [Packages](#packages)
- [FAQ](#faq)
    - [`This dependency was not found:` from Gatsby](#this-dependency-was-not-found-from-gatsby)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Dependencies

You can install dependencies at the root of the monorepo by doing the following:

```bash
yarn add <dependency-name> -W
```

The `-W` flag tells `yarn` that it's for a workspace, which is how Yarn refers
to monorepos that it manages. You can add a devDependency by adding the `--dev`
flag, for example:

```bash
yarn add <dependency-name> --dev -W
```

Inside of each package, you can install dependencies the same way you would in
other projects by doing `yarn add` without the `-W` flag.

## Packages

Each package in our monorepo is located under `packages`. Each folder acts as
its own package on `npm`. When you run `yarn install` at the root level, Yarn
will go through and create a link between the package folder and the name for
that package under `node_modules`.

For example, if we have a package called: `packages/addons-website` and it has
a `package.json` that looks like:

```json
{
  "name": "addons-website"
}
```

Once we run `yarn install` at the root level, there will be a folder under
`node_modules` called `addons-website` that will point to the folder
`packages/addons-website`.

What this means is that you can use `require` or `import` the way you would
for other packages and Node will be able to resolve it correctly for your local
package in the `packages` folder.

## FAQ

#### `This dependency was not found:` from Gatsby

If are you trying to use a package in the website, you might get this error from
Gatsby:

```bash
 ERROR  Failed to compile with 1 errors

This dependency was not found:

* @carbon/addons-website in ./src/components/Layouts/index.js
```

You can verify that the package is setup correctly through Yarn by doing the
following:

- Go to your package folder and inspect the `package.json` field `name`
- After finding the `name`, go to `node_modules` at the root level and look for
  this module

Most likely, there is a mismatch between what you are trying to import and the
value of the `name` field in `package.json`. If set up correctly, then there
should be a link between `node_modules/package-name` and the folder
`packages/package-name`, where `package-name` is the value of the `name` field
in `package.json`
