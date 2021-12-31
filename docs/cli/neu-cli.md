---
title: neu CLI
---

![npm](https://img.shields.io/npm/v/@neutralinojs/neu)
![npm](https://img.shields.io/npm/dt/@neutralinojs/neu)

You can easily manage Neutralinojs applications with neu CLI.

## Installation

Run the following command on your terminal to install the CLI globally.

```bash
npm i -g @neutralinojs/neu
```

You can also use neu CLI via npx if you don't want a global installation.

```bash
npx @neutralinojs/neu <command>
```

## Commands

### `neu create <binaryName>`

Creates a new Neutralinojs app using the [minimal template](https://github.com/neutralinojs/neutralinojs-minimal).

#### Parameters

- `<binaryName>`: The name of your application's binary file. For example, if you used `myapp`,
the final application binaries will become `myapp-<platform>_<arch>`.

### `neu build [--release, --copy-storage]`
This command will create the `dist` folder. Thereafter, it will create the `resources.neu` resource file from
your application resources.

#### Options
- `--release`: Creates a portable ZIP file of the application bundle.
- `--copy-storage`: Copies the current snapshot of the Neutralinojs storage to the application bundle.

### `neu run [--mode=<mode>, --disable-auto-realod, --arch=<arch>]`
Executes the current application (This will execute specific binary depending on your operating system).
This command will change execution permissions (using the `chmod` command) of the binary files on Linux and macOS.
It will enable live-reload for the current application.
In other words, when a modification happens to application resources,
the Neutralinojs application will be reloaded automatically.

#### Options
- `--mode=<mode>`: Overrides the default mode.
- `--disable-auto-reload`: Disables the auto-reloading feature.
- `--arch=<arch>`: Explicitly set the CPU architecture. This option is helpful if you use a 32-bit Node.js process
on a 64-bit computer.

### `neu update`
This command will update the existing Neutralinojs binaries and client library from the internet.

### `neu version`
Prints all version information. If this command is executed from a Neutralinojs application directory,
you will see project-specific version details. Otherwise, you will see global version details.

## Change log
Please check the change log from [GitHub](https://github.com/neutralinojs/neutralinojs-cli/blob/master/CHANGELOG.md).
