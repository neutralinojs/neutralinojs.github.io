---
title: CLI
toc_max_heading_level: 2
---

## Unreleased

## v11.3.1

### Bugfixes/improvements

- Add execution permissions for binaries after downloading them in Unix-based and Unix-like platforms. 

## v11.3.0

### Host projects support
Developers can launch Neutralinojs from any programming language using child process APIs (i.e., `subprocess` in Python) and communicate with the framework process using the extension API. The new `hostProject` configuration object extends the official CLI to help developers easily create, run, and build these host projects. For example, the following host project configuration instructs the CLI to run a Node.js host project:

```json
"hostProject": {
  "projectPath": "/node-src",
  "buildPath": "/node-src/dist/",
  "initCommand": "npm install",  
  "devCommand": "npm start",     
  "buildCommand": "npm run build"
}
```

Community projects implement bindings and templates to create host projects using Node.js, Python, Go, etc. For example, the [`node-neutralino`](https://www.npmjs.com/package/node-neutralino) NPM package lets you launch Neutralinojs via Node.js environments and execute native APIs via the `NeutralinoApp` class:

```js
import NeutralinoApp from 'node-neutralino';

const app = new NeutralinoApp({
  url: '/',
  windowOptions: {
    enableInspector: false,
  }
});

app.init();
app.window.setTitle('Node.js');
```

### Executable icon and metadata on Windows
Now, the `neu build` command automatically updates the executable file icon and metadata based on the following configuration options:

- `author`: gets written into executable's metadata.
- `description`: gets written into executable's metadata.
- `copyright`: gets written into executable's metadata. Defaults to current date + generic "all rights reserved".
- `applicationName`: gets written into executable's metadata. Defaults to `cli.binaryName`.
- `applicationIcon`: a relative path to an icon in `.png` format. Defaults to `modes.window.icon`. If it is not set, uses Neutralinojs logo.

### Bugfixes/improvements
Use the `zip-lib` package to handle ZIP files for better performance and simplicity in the source code.

## v11.2.2

### Bugfixes/improvements
- Fix initial loading issues with frontend library development file patching.

## v11.2.0

## Core: Bundler
- Introduce the `--clean` flag to the `neu build` command to clean previous build files.
- Add file excluding feature for the app bundle and extensions directory via `cli.resourcesExclude` and `cli.extensionsExclude` configuration properties. For example, now developers can use the `"resourcesExclude": ".*\\.scss$|.*\\.d.ts$"` configuration to exclude `*.scss` and `*.d.ts` files from the final app bundle.
- Let app developers customize the frontend library development server wait time using the `cli.frontendLibrary.waitTimeout` configuration property.

## Core: Version
- The `neu version` command now compares the installed CLI version and the framework version with the latest released versions and displays a warning messages if the users use an older versions.
- The `neu version` command now displays the `(latest)` tag with CLI, binary, client library version details.

### Bugfixes/improvements
- Check and validate `neutralino.config.json` file before executing app-specific commands.
- Check app template validity before downloading content from a specific GitHub repository using the official GitHub API.
- Add the app icon to the final app bundle only the specific project uses an app icon.
- Fix the port waiting timeout issue with frontend library-based development workflow. 

## v11.1.0

### Core: Bundler
- Add `cli.distributionPath` into the `neutralino.config.json` file to customize the default `dist` distribution directory.

## v11.0.1

### Bugfixes/improvements
- Clean existing app build files before creating another build using the `neu build` command.
- Support older Node versions by removing the optional chaining feature usage.
- Fix the endless port waiting issue with the `--frontend-lib-dev` option.

## v11.0.0

### Core: Runner
- Change the WebSocket connection based on the v5 framework APIs.

### Bugfixes/improvements
- Fixed issues with the frontend library command execution.

## v10.1.1

### Bugfixes/improvements
- Fixed app development issues with the Vite server.

## v10.1.0

### Bugfixes/improvements
- Fixed several issues in the frontend-library-based development flow (i.e., removed the hardcoded port number, fixed double `devCommand` execution, etc.,).

## v10.0.0

### Core: frontend-library-based development
Added new configuration options to the `cli.frontendLibrary` key of the `neutralino.config.json`:
- `projectPath`: Sets the project path of the frontend-library project. This path will be used as the current directory while executing the frontend-app-related commands.
- `initCommand`: A command that gets executed after downloading an app template with the `neu create` command.
- `devCommand`: This command will run with the `neu run` command to start the frontend development server. The CLI doesn't wait for `devCommand` completion, instead, it will wait for the frontend development server via the [`tcp-port-used`](https://www.npmjs.com/package/tcp-port-used) package. 
- `buildCommand`: The `neu build` command will execute this command before generating the app bundle, so you can generate static resources of your frontend app using this command.

## v9.8.0

### Core: Downloader
- Download the latest Neutralinojs framework resources with the `--latest` option in the `neu update` command.
- If framework versions are not present in the app/template configuration, download the latest framework resources automatically. The CLI will download nightly releases if it can't fetch the latest release tag because of an GitHub API-related issue (i.e., Exceeded rate limits).

## v9.7.0

### Core: Downloader/bundler
- Download the TypeScript definition file for standalone client library mode. This won't include the TypeScript definition file to the final application bundle.

## v9.6.1

### Bugfixes/Improvements
- Fix the hot-reloading issue that occurs with newer Node runtime versions. 

## v9.6.0

### Core: Bundler
- Avoid copying the `WebView2Loader.dll` file to the final app package since it was removed from the Neutralinojs framework.

## v9.5.1

### Bugfixes/Improvements

- Use the `decompress` library instead of `unzipper` to fix issues with latest Node.js runtime versions.
- Generate the Mac universal binary with the `neu build` command.

## v9.5.0

### DevOps 
- Implement a way to test plugins locally.

## v9.4.0

### DevOps: new test suite
- Initiate a new Node.js-based test suite.

### Bugfixes/Improvements
- Clean project files if the `neu create` command wan't successful.
- Display an error message if the `neu build --copy-storage` fails due to missing `.storage` directory.
- Support Darwin `arm64` binaries natively without binary translation (`x64` -> `arm64`).
- Make the client library downloading process optional and support importing the client library via `@neutralinojs/lib`.
- Download the module version of the client library based on the app configuration.

## v9.3.1

### Core: Plugins
- Automatically re-install plugins when the neu CLI version is upgraded/downgraded via package managers.

### Core: downloader/builder
- Support ARM (armhf/arm64) binaries.

## v9.3.0

### General
- Add short descriptions for each command.
- Support to download nightly build versions.

### Bugfixes/improvements
- Fix plugin listing issue.

### DevOps
- Add a simple test-suite for testing CLI commands with a Bash script.

## v9.2.0

### General
- Improve log messages and styles

### Core: Runner
- Display Neutralinojs process's STDIN and STDERR streams directly on the console.
- Remove `--verbose` option from the `run` command.

## v9.1.2

### Core: Runner
- Fix client library path issue with hot-reload workaround on Windows.

## v9.1.1

### Bugfixes
- Fix browser mode exit issue with `neu run`.

## v9.1.0

### Core: Runner
- Add a workaround to use hot module reloading from the app developer's existing frontend library/framework.

## v9.0.0

### Core: Creator
- Allow downloading any community template via `neu create myapp --template <template>`. `<template>` accepts valid GitHub repo identifiers. The default value is `neutralinojs/neutralinojs-minimal`.

### Core: Runner
- Add `--verbose` option to identify framework initialization crashes. It will show STDERR and STDOUT of the framework once the process was terminated.
- Support sending any internal CLI argument to the Neutralinojs process via `neu run -- <additional_args>`.
- Remove `--mode=<mode>` option from `run` since the same work can be done with `neu run -- --mode=<mode>`.

### Bugfixes and improvements
- Fix the infinite retry issue with the `neu run` command.
- Show an error message for download failures.

## v8.1.0

### Core: File watcher
- Exclude auto-reload files via `cli.autoReloadExclude`.
- Watch only the `cli.resourcesDir` to avoid many unwanted reloads.

### Core: Bundler
- Add new `--copy-storage` flag to automatically copy storage data to the app bundle.

## v8.0.1

### Core: Bundler
- Make `cli.extensionsDir` optional for bundling process.

### Bugfixes
- Fix an issue in websocket error log.

## v8.0.0

### Core: Bundler
- Copy extensions to the app bundle.
- Rename `res.neu` to `resources.neu`.

### Core: Runner
- Use websocket connection to auto reload app.

## v7.1.0

### Core: Downloader
- Use server/client versions from config

### `neu version`
- Removed global Neutralino version details
