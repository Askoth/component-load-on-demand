# Testing different approaches for dynamic loading based on legacy code written in AMD

## Everything starts with almond

Following some old code to load modules on demand I wanted to try making something similar with webpack.

## Option 1

component-batch module has all the components listed.

there is no async request because of

    /* webpackMode: "eager" */

the name of the modules will be matched with

    /* webpackChunkName: "<MODULE NAME>" */

It's really verbose but it works. All modules on the list will be available and will run on demand


## Option 2 - We can go deeper

we can generate component-batch based on the folder content

we need some extra node code to do it.

**option2/src/create-batch.js** will do the trick before webpack runs. whenever we add or remove components from the component folder we need to restart webpack --watch

temp manifest will be created in **option2/src/js/temp/component-batch.js**.

## Option 3 - We can go EVEN deeper

By creating a plugin to do option2, we can use webpack watch.
