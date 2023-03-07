---
title: Project Structure
---

Neutralinojs has a flexible project structure. Imagine a structure of a normal web application.
We may separate resources into folders such as assets, styles, images, etc. Similarly, developers can
decide the Neutralinojs project structure as they wish.

However, we should load the `neutralino.js` JavaScript file always into all the
HTML files. neu CLI will scaffold a simple structure for you by downloading the
[minimal template](https://github.com/neutralinojs/neutralinojs-minimal). But, you can indeed
change it or use the [zero template](https://github.com/neutralinojs/neutralinojs-zero) to start from scratch.

## Developing apps with vanilla JS
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
Any frontend framework can be used to make Neutralinojs applications. You can use any pattern as you wish
to include both Neutralinojs app and frontend app in one repository. You can check our recommended approach
from [this](../how-to/use-a-frontend-library) guide.

### Examples

- Please browse sample [apps](/apps) section.
