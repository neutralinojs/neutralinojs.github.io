---
title: neu CLI
---

![npm](https://img.shields.io/npm/v/@neutralinojs/neu)
![npm](https://img.shields.io/npm/dt/@neutralinojs/neu)

You can easily manage Neutralinojs applications with neu CLI.

## Installation

Run the following command on your terminal to install the CLI globally.

```
  $ npm i -g @neutralinojs/neu
```

## Commands

### `neu create <binaryName>`

Creates a new Neutralinojs app using the [minimal template](https://github.com/neutralinojs/neutralinojs-minimal).
`<binaryName>` is the name of your application's binary file. For example, if you used `myapp`, the final application binaries will become `myapp-<platform>`.

### `neu build [--release]`
This command will create the `dist` folder. Thereafter, it will create the `res.neu` resource file from your application resources.
Finally, this command will create a zip file of the application bundle only if `--release` flag is provided.

### `neu run [--mode=<mode>, --disable-auto-realod]`
Executes the current application (This will execute specific binary depending on your operating system).
This command will change execution permissions (using the `chmod` command) of the binary files on Linux and macOS.
It will enable live-reload for the current application. In other words, when a modification happens to application resources, the Neutralinojs application will be reloaded automatically.

### `neu update`
This command will update the existing Neutralinojs binaries and client library from the internet.


## Change log
Please check the version history from [npm](https://www.npmjs.com/package/@neutralinojs/neu).
