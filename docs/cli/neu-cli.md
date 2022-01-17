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

#### Options
- `--template`: Sets the application template via GitHub repository identifier with the `<account>/<repo>` format.
The default value is [`neutralinojs/neutralinojs-minimal`](https://github.com/neutralinojs/neutralinojs-minimal)

### `neu build`
This command will create the `dist` folder. Thereafter, it will produce the binaries for all supported
platforms and `resources.neu` resource file from your application resources.

#### Options
- `--release`: Creates a portable ZIP file of the application bundle.
- `--copy-storage`: Copies the current snapshot of the Neutralinojs storage to the application bundle.

### `neu run`
Executes the current application (This will execute specific binary depending on your operating system).
This command will change execution permissions (using the `chmod` command) of the binary files on Linux and macOS.
Also, it enables auto-reload for the current application.
In other words, when a modification happens to application resources,
the Neutralinojs application will be reloaded automatically.

#### Options
- `--disable-auto-reload`: Disables the auto-reloading feature.
- `--arch=<arch>`: Explicitly set the CPU architecture. This option is helpful if you use a 32-bit Node.js process
on a 64-bit computer.
- `--verbose`: Shows STDERR and STDOUT of the application process when the application is terminated. This option
is helpful for detecting framework initialization issues during development.
- `--frontend-lib-dev`: Enables both frontend library's development environment and Neutralinojs's
development evironment at the same time. This option patches the main HTML file with the Neutralinojs
client library path to expose the native API to the frontend library's development server.
- `-- <process-args>`: Sets additional CLI arguments for the Neutralinojs
- application process. For example
you can enable the `browser` mode by entering `neu run -- --mode=browser`. See all accepted arguments from
[here](./internal-cli-arguments.md).

### `neu update`
This command will update the existing Neutralinojs binaries and client library from the internet.

### `neu version`
Prints all version information. If this command is executed from a Neutralinojs application directory,
you will see project-specific version details. Otherwise, you will see global version details.

### `neu plugins [plugin]`

#### Parameters
- `plugin`: Plugin identifier. This value is usually the npm package identifer.

#### Options
- `--add`: Registers a new plugin to neu CLI. neu CLI downloads plugins to the CLI's `node_modules`
directory and loads during the bootstrap process. Plugins can introduce new commands to the CLI.
- `--remove`: Unregisters an existing plugin.


## Plugins

Neutralinojs app developers are able to write plugins to add their own commands to the neu CLI.
You can develop CLI plugins with the folllowing steps.

### Developing a plugin

neu CLI will register plugins using `index.js` as an interface. Create a new npm package with `index.js` and
add the following code snippet.

```js
// index.js
module.exports = {
  command: 'commandname <action>',
  register: (command, modules) => {
    command.option('--option1 --option2')
     .action((action, command) => {
        //your logic goes here..
     });
  }
}
```

`command` is the CLI command string with actions. The `register` function will be called when plugin is
being registered. Also, it has the command object and
[standard modules object](https://github.com/neutralinojs/neutralinojs-cli/blob/master/src/modules/index.js)
as parameters. Please check [commander](https://www.npmjs.com/package/commander) package documentation
for more information about commands and callback parameters.

### Publishing your plugin

Once you publish your plugin to the npm registry as a public package, anyone will be able
to install it using:

```bash
 $ neu plugins --add <package-name>
```

and it can be removed using:

```bash
 $ neu plugins --remove <package-name>
```

See the [Appify plugin source](https://github.com/neutralinojs/neutralinojs-cli-appify) for further
implementation details.

## Changelog
Please check the changelog from [GitHub](https://github.com/neutralinojs/neutralinojs-cli/blob/master/CHANGELOG.md).
