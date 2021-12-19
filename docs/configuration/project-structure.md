---
title: Project Structure
---

Neutralinojs has a flexible project structure. Imagine a structure of a normal web application.
We may separate resources into folders such as assets, styles, images, etc. Similarly, developers can
decide the Neutralinojs project structure as they wish.

However, we should load the `neutralino.js` JavaScript file always into all the
HTML files. neu CLI will scaffold a simple structure for you by downloading the
[minimal template](https://github.com/neutralinojs/neutralinojs-minimal). But, you can indeed
change it.

## Developing apps with vanilla Js
If you like to develop Neutralinojs applications with vanilla JavaScript, you can place all application resources in one directory.
After that, you can update the `neutralino.config.json` file with the following values.
```json
  ...
  "cli": {
    ...
    "resourcesPath": "/<resourcesDir>/",
    "clientLibrary": "/<resourcesDir>/neutralino.js"
  }
```
You can choose a name for `<resourceDir>`. But, by default neu CLI will use `resources`.

## Developing apps with frontend frameworks
Any frontend framework can be used to make Neutralinojs applications.
You can place your frontend framework code into a separate directory (or root directory).
After that, you can set the default build path of the frontend framework to your Neutralinojs resource directory. 

:::info
If your application is launched via the `neu run` command, when you build a new version of your frontend
framework code, Neutralinojs will automatically reload the application.
:::

### Examples

- Please browse sample [apps](/apps) section.
