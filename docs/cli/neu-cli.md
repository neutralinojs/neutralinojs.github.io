---
title: neu CLI
---

![npm](https://img.shields.io/npm/v/@neutralinojs/neu)
![npm](https://img.shields.io/npm/dt/@neutralinojs/neu)

You can easily create, run, and build Neutralinojs applications with neu CLI.

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

### `neu create <path>`

Creates a new Neutralinojs app based on a template. Basename of `<path>` will be used as the app binary name.

```bash
neu create myapp    # Creates in ./myapp
neu create .        # Creates in the current directory
```

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
- `--macos-bundle`: Creates a minimal MacOS app bundle by adding the `.app` extension.
- `--config-file=<path>`: Uses a custom app configuration file only for the packaging process.

### `neu run`
Executes the current application (This will execute specific binary depending on your operating system).
This command will change execution permissions (using the `chmod` command) of the binary files on Linux and macOS.
Also, it enables auto-reload for the current application.
In other words, when a modification happens to application resources,
the Neutralinojs application will be reloaded automatically.

You can see Neutralinojs process and extensions output streams while the application is running.

If you use the [`cli.frontendLibrary`](../configuration/neutralino.config.json.md#clifrontendlibrary-object)
key in app configuration, the CLI enables both frontend library's development environment and Neutralinojs's
development evironment at the same time. This option patches the main HTML file with the Neutralinojs
client library global variables to expose the native API to the frontend library's development server.
Learn how to setup this feature from [this](../getting-started/using-frontend-libraries.md) guide.

#### Options
- `--disable-auto-reload`: Disables the auto-reloading feature.
- `--arch=<arch>`: Explicitly set the CPU architecture. This option is helpful if you use a 32-bit Node.js process
on a 64-bit computer.
- `-- <process-args>`: Sets additional CLI arguments for the Neutralinojs application process. For example you can enable the `browser` mode by entering `neu run -- --mode=browser`. See all accepted arguments from [here](./internal-cli-arguments.md).

### `neu update`
This command will update the existing Neutralinojs binaries and client library from the internet. You can
use the `nightly` tag for the `cli.binaryVersion` and `cli.clientVersion` in the `neutralino.config.json` file to use experimental daily pre-releases.

#### Options
- `--latest`: Fetches the latest framework version details via the GitHub API, downloads from official releases
, and update the app configuration with fetched version details.

:::warning
Nightly builds refers to automatically generated daily builds, so these builds can contain experimental or
incomplete features. Therefore, avoid using `nightly` versions in your production apps. Use `nightly` versions
to try out latest features, but use a stable version for production apps.
:::

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
neu plugins --add <package-name>
```

and it can be removed using:

```bash
neu plugins --remove <package-name>
```

See the [Appify plugin source](https://github.com/neutralinojs/neutralinojs-cli-appify) for further
implementation details.

## Changelog
Please check the changelog from [GitHub](https://github.com/neutralinojs/neutralinojs-cli/blob/master/CHANGELOG.md).
