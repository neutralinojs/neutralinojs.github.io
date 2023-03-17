---
title: Using Frontend Libraries
---

You can build Neutralinojs apps with vanilla JavaScript or with any modern frontend library. If you would like
to build Neutralinojs apps with a frontend library, first try to use an existing app template via neu CLI:

## React

```bash
neu create myapp --template codezri/neutralinojs-react
```
- Repository: [codezri/neutralinojs-react](https://github.com/codezri/neutralinojs-react)

## Using any frontend library

The following tutorial guides you to set up any frontend library with Neutralinojs by explaining how we built
the Neutralinojs React template:

### Initializing projects

First, you need to create a new empty Neutralinojs project. Use the
[`neutralinojs/neutralinojs-zero`](https://github.com/neutralinojs/neutralinojs-zero) template to create an
empty project, as shown below.

```bash
neu create myapp --template neutralinojs/neutralinojs-zero
```

Now, create a new project with your favourite frontend framework's command-line tools. In this tutorial,
we are going to use React, but you can use any frontend library as you wish.
You need to create this project inside the `myapp` directory.

```bash
cd myapp
npx create-react-app myapp-react
```
### Configuring Neutralinojs project

The `neutralinojs-zero` template has a pre-included HTML file and icon, so delete the `www` directory since we
don't need those files now.

```bash
rm -rf www
```

You need to configure the Neutralinojs project to support the frontend framework. First, you can set the
document root with your frontend framework's build directory. React typically generates build outputs to
`build` directory, so we can update `documentRoot` as follows.

```json
"documentRoot": "/myapp-react/build/"
```

Now, our Neutralinojs app knows the application resource location, but it's missing an icon, so set an
icon for the app. You can load an icon from your frontend framework's default resources directory. For
demonstration purposes, let's use the React icon from the `public` directory.

```json
  "modes": {
    "window": {
      // --- other options
      "icon": "/myapp-react/public/logo192.png"
    }
  }
```

### Configuring neu CLI

By default, the zero template configuration asks the Neutralinojs CLI to download the Neutralinojs client (aka `neutralino.js`) from GitHub releases. Then, the CLI creates your app package by copying the `neutralino.js` file. However, you can download the client library from the NPM registry and bundle with your app frontend. Remove the `clientLibrary` property from the Neutralinojs configuration to avoid fetching the client from GitHub releases:

We can configure CLI for React by using the following options.

```json
  "cli": {
    // --- other options
    "resourcesPath": "/myapp-react/build/",
    // ---
    "clientLibrary": "/www/neutralino.js", // <--- Remove this option
    // ---
  }
```

Now, you can build and run the React application as a Neutralinojs application &mdash; it's possible with the
following steps.

First, build the React application with the following command.

```bash
cd myapp-react
npm run build
```

Finally, run the Neutralinojs application.

```bash
cd ..
neu run
```

### Initializing native API with `@neutralinojs/lib`

You could run the application with the `neu run` command, but you cannot use the native API yet because it has not been initialized. To do that you need to install the Neutralinojs client with following command:

```bash
cd myapp-react
npm install @neutralinojs/lib
```

The next step is to load Neutralinojs [global variables](../api/global-variables.md). You can achieve that by including JavaScript script in the root HTML file of a framework of your choice.

React typically holds the main HTML file content in the `./public/index.html` file, so we can put the following
HTML snippet there to load the client library.

```html
<script src="%PUBLIC_URL%/__neutralino_globals.js"></script>
```

Now make sure to initialize the client library from your frontend application entry point file. React's application entry-point is typically `./src/index.js`. Therefore, we can do the initialization process from there by calling the `init` function from `@neutralinojs/lib` package.


```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import init function from "@neutralinojs/lib"
import { init } from "@neutralinojs/lib"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

init(); // Add this function call
```

Let's validate if the client library loaded properly. To do that let's use `filesystem` API in order to read the current directory of Neutralinojs app.

Firstly you need to update `neutralino.config.json` to allow what API your application can call. You can enable the whole namespace `filesystem.*` or just single function from a given namespace like in the snippet below.

```json
  "nativeAllowList": [
    "app.*",
    "filesystem.readDirectory"
  ],
```

Now let's add following snippet in `./src/App.js` file which will log the current directory or error message when `App` component is mounted.

```jsx
import { useEffect } from 'react'
import './App.css';

// Import filesystem namespace
import { filesystem } from "@neutralinojs/lib"

function App() {

  // Log current directory or error after component is mounted
  useEffect(() => {
    filesystem.readDirectory('./').then((data) => {
      console.log(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      My Neutralinojs App
    </div>
  );
}

export default App;
```

The last step is to run your Neutralinojs app with `--window-enable-inspector` argument which will allow you to open developer tools.

```bash
cd myapp-react
npm run build

cd ..
neu run -- --window-enable-inspector
```

The current directory should be logged to the console. To open developer tools right click anywhere in the Neutralinojs application and press `inspect element`.

### Enabling hot-reload

Building every code change and testing your application is undoubtedly time-consuming. Therefore, you can use
your frontend framework's HMR (Hot Module Replacement) features to speed up your development activities.
But, we have a small issue here. There are now two HTTP servers: the Neutralinojs resource server and the
frontend framework's development server. How can we load the Neutralinojs client library from the frontend
framework's development server?

Don't worry &mdash; neu CLI provides a built-in feature to enable HMR by patching the main HTML file.
You can add the following section to your configuration file for activating hot-reloading.

```json
  "cli": {
    // --- other options
    "frontendLibrary": {
        "patchFile": "/myapp-react/public/index.html",
        "devUrl": "http://localhost:3000"
    }
  }
}
```

The above options tell neu CLI about the main HTML file and development server URL.

Now, start your frontend development server. In React, we can do it with the following command.

```bash
npm start
```

Finally, run the Neutralinojs application with the following command.

```
neu run --frontend-lib-dev
```

![](../media/hmr-preview.gif)

:::tip
Make sure to build your frontend app once before entering the above command since it loads the client
library globals from the Neutralinojs application resources directory (not from your frontend framework's directory).
:::


See the full source code of this tutorial [here](https://github.com/codezri/neutralinojs-react).





