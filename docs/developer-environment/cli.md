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
`<binaryName>` is the name of your application binary's file. For example, if you used `myapp`, the final application binaries will become `myapp-<platform>`.

### `neu build [--release]`
This command will create `dist` folder. Thereafter, it will create the `res.neu` resource file from your application resources.
Finally, this command will create a zip file of the application bundle only if `--release` flag is provided.

### `neu run [--mode=<mode>]`
Executes the current application (This will execute specific binary depending on your operating system).
This command will change execution permissions (using the `chmod` command) of the binary files on Linux and macOS.

### `neu listen [--mode=<mode>]`
This command is similar to `run` but it will enable live-reload for the current application.
In other words, when a modification happens to application resources, the Neutralinojs application will be reloaded automatically.

### `neu update`
This command will replace existing Neutralinojs binaries with the latest binaries from internet.


## Change log
Please check the version history from [npm](https://www.npmjs.com/package/@neutralinojs/neu).

## Internal CLI arguments

The neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,
the `neu run` command internally calls `./bin/neutralino-linux --load-dir-res --path=.` on Linux.

Neutralinojs supports the following CLI arguments.

### `--load-dir-res`

Notifies Neutralinojs server to fetch files from the resources directory.

### `--path=<path>`

Overrides the resources path with a relative path or absolute path. This will change the `NL_PATH` global variable.

### `--mode=<mode>`

Overrides the default mode. Accepted values are: `window`, `browser`, and `cloud`.
