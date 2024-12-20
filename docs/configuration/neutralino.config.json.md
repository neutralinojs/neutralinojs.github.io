---
title: neutralino.config.json
---

`neutralino.config.json` file contains the application configuration details. Every Neutralinojs app typically
loads the following keys from the config file.

- `applicationId`
- `url`
- `defaultMode`

However, having a config file is not mandatory to start a Neutralinojs app since the Neutralinojs framework
often loads reasonable defaults for all configuration options.

You can develop Neutralinojs apps with a well-structured configuration file. Or, you can start the framework
without a configuration file using CLI arugments, as shown in the following code snippet:

```bash
# Loading a remote URL
./framework-bin --url=https://neutralino.js.org/docs

# Launches a local static web app
./framework-bin --url="/" --document-root="/resources/" --window-title="My web app" --enable-server --enable-native-api
```

## Primary
The following configuration values cannot be overridden in different Neutralinojs modes.

### `applicationId: string`
Unique string to identify your application. Eg: `js.neutralino.sample`

### `version: string`
Application version. Eg: `2.4.22`

### `defaultMode: string`
Mode of the application. Accepted values are `window`, `browser`, `cloud`, and `chrome`.

## General
You can override the following configuration values from different modes. For example, you can use a specific
URL in root-level and another URL in window-mode-level, as shown below.

```json
{
    "url": "/"
    "modes": {
        "window": {
            "url": "/#window-mode"
        }
    }
}
```

### `port: number`
The port of your application. If the value is `0`, Neutralinojs will use a random available port.

### `enableServer: boolean`
Enables or disables the background server (Disables static file servering feature and native API messaging).
If you load a remote URL to the webview, you can set this option to `false`. Make sure to set this option to `true` if you load resources from local sources. The default value is `false`.

### `enableNativeAPI: boolean`
Enables or disables the native API. If you want to use any native API functions, you can set this option to `true`. The default value is `false`.

### `singlePageServe: boolean`
Activates SPA (Single Page App) serving. When this option is enabled, the static server module serves the primary
`index.html` file for sub-directory requests only if another `index.html` doesn't exist in a specific sub-directory.
The default value for this option is `false`.

### `tokenSecurity: string`
Neutralinojs uses a client-server communication pattern with a local WebSocket to handle native calls. This
local server is protected with an auto-generated token. This option defines the security implementation for the
token.

Accepts the following values:

- `one-time` **(Recommended)** : Server sends the access token only once, and the client persists it in the
`sessionStorage`. If another client (Eg: browser) tries to access the app, `NE_RT_INVTOKN` error message will be
shown instead of the application. Using this option is recommended since it reduces security issues.

- `none` : Server sends the access token always, so any new client can see the application.

The default value becomes `one-time` if this setting is not specified by the developer.

:::danger
If you are using native APIs that can access your computer's internals such as `os`, `filesystem`, modules,
never use `none` option since any new client can use those APIs.
:::

### `url: string`
The entry URL of the application. Neutralinojs will initially load this URL.
This property accepts both relative and absolute URLs. See following examples.

```json
"url": "/"
```

The above config loads `http://localhost:<port>/` URL initially (internally `/index.html` is loaded).
You can use remote urls too.

```json
"url": "http://example.com"
```

### `documentRoot: string`

Sets the document root for the static server. For example, if you need to use `resources` directory as
the document root, you can use setup `documentRoot` as follows.

```json
{
    "documentRoot": "/resources/",
    "url": "/"
}
```

Make sure to configure `url` properly with the document root. The following configuration is **wrong**, it
instructs the static server to fetch resources from `./resources/resources`.

```json
{
    "documentRoot": "/resources/",
    "url": "/resources/"
}
```

However, you can use a sub-directory in URL, as shown below.

```json
{
    "documentRoot": "/",
    "url": "/resources/"
}
```

### `exportAuthInfo: boolean`
Exports authentication details to the `${NL_PATH}/.tmp/auth_info.json` file with the following JSON structure.

```json
{
    "port": "<port>",
    "accessToken": "<access_token>"
}
```

You can use the above authentication details to connect with Neutralinojs from external processes by using
WebSocket as an IPC mechanism.

### `enableExtensions: boolean`
Enables/disables extensions.
Learn more about this option [here](../how-to/extensions-overview.md#enable-the-extensions-feature)


### `extensions: object[]`
An array of extension definitions.
Learn more about this option [here](../how-to/extensions-overview.md#defining-the-extensions)

### `nativeBlockList: string[]`
An array of native methods needs to be blocked from the frontend of the application. The wildcard character `*` is allowed
inside entries.

```json
{
    "nativeBlockList": ["os.execCommand"],
    "nativeBlockList": ["app.*"]
}
```

### `nativeAllowList: string[]`
An array of native methods needs to be allowed from the frontend of the application. The wildcard character `*` is allowed
inside entries.

```json
{
    "nativeAllowList": ["os.getEnv"],
    "nativeAllowList": ["storage.*"]
}
```

### `globalVariables: object`
A key-value-based JavaScript object of custom [global variables](../api/global-variables.md#custom-global-variables).

### `logging.enabled: boolean`
Enables or disables the logging feature.

### `logging.writeToLogFile: boolean`
Enables or disables log file. If this setting is `false`, the framework won't write log to `neutralinojs.log`,
and it will write logs to standard streams.

### `serverHeaders: object`
Custom headers for the static server and Websocket handshake process. For example, the following configuration
sends a custom header with every outgoing HTTP response.

```json
{
    "serverHeaders": {
        "Test-Header-Option": "Value"
    }
}
```

### `dataLocation: string`

Configures the internal framework data files storage directory.

Accepts the following values:

- `app` (default): Stores framework data files within the app directory.

- `system` : Stores framework data files within the system application data directory 
(i.e., `/home/username/.local/share/<applicationId>` on GNU/Linux systems). App developers can obtain the current data directory string 
from the [`NL_DATAPATH`](../api/global-variables.md) global variable.


### `storageLocation: string`

Configures the Neutralinojs storage location.

Accepts the following values:

- `app` (default): Stores `.neustorage` files within `.storage` directory of the app directory.

- `system` : Stores `.neustorage` files within the system application data directory 
(i.e., `/home/username/.local/share/<applicationId>/.storage` on GNU/Linux systems).


## Window mode
The following configuration values are used when the application runs with the window mode.

### `modes.window.title: string`
Title of the native window.

### `modes.window.width: number`
Width of the native window.

### `modes.window.height: number`
Height of the native window.

### `modes.window.minWidth: number`
Minimum width of the native window.

### `modes.window.minHeight: number`
Minimum height of the native window.

### `modes.window.maxWidth: number`
Maximum width of the native window.

### `modes.window.maxHeight: number`
Maximum height of the native window.

### `modes.window.x: number`
Left position (`x`) of the native window.

### `modes.window.y: number`
Right position (`y`) of the native window.

### `modes.window.center: boolean`
Centers the native app window initially.

### `modes.window.transparent: boolean`
Enables the transparent native window mode for the application instance. If the transparency mode is activated,
users can see through the webview if the webpage background uses transparent background colors. Partial transparency
can be activated using the `rgba()` CSS color function. You can use this feature to create semi-transparent
windows, windows with custom shadows, and custom-shaped window frames.

The default value is `false` for this option.

:::info
Unlike in other platforms, Windows native window becomes borderless (window controls will be hidden) with the activation of the transparent mode.
:::

### `modes.window.fullScreen: boolean`
Activates the full-screen mode.

### `modes.window.icon: string`
Application icon's file name. You can directly point to an image file in the
resources directory. We recommend you to choose a transparent PNG file.

### `modes.window.alwaysOnTop: boolean`
Activates the top-most mode.

### `modes.window.enableInspector: boolean`
Automatically opens the developer tools window.

### `modes.window.borderless: boolean`
Activates the borderless mode.

### `modes.window.maximize: boolean`
Launches the application maximized.

### `modes.window.resizable: boolean`
Make the window resizable or not. The default value is `true`.

### `modes.window.hidden: boolean`
Make the window invisible. This setting can be used to develop background services.

### `modes.window.exitProcessOnClose: boolean`
If this setting is `true`, the app process will exit when the user clicks on the close button. Otherwise,
the framework will dispatch the `windowClose` event.

### `modes.window.useSavedState: boolean`
Save and load the primary window state (width, height, x, y, values and maximized status) automatically.
The default value is `true`.

### `modes.window.extendUserAgentWith: string`
Extends the default webview-specific user agent string with a custom suffix. If this value is not set,
the webview sets the default user agent from the platform-specific rendering engine (i.e., WebKit on GNU/Linux).

### `modes.window.injectGlobals: boolean`
Injects global variables directly to the webview instance. If you use this feature, you don't need to include `__neutralino_globals.js` or `neutralino.js` file to
receive Neutralinojs global variables to your web app.

### `modes.window.injectClientLibrary: boolean`
Injects global variables and the client library implementation directly to the webview instance. If you use this feature, you don't need to include 
the client library manually via the `neutralino.js` file or from the `@neutralinojs/lib` NPM module.

### `modes.window.injectScript: string`
Injects a preload JavaScript file to the webview instance from the app bundle. This script file will be executed before webapp resources and after `window.injectGlobals`
and `window.injectClientLibrary` scripts, so you can write initialization scripts using Neutralinojs API within this source file.

## Chrome mode
The following configuration values are used when the application starts with the chrome mode.

### `modes.chrome.width: number`
Width of the chrome window.

### `modes.chrome.height: number`
Height of the chrome window.

### `modes.chrome.args: string`
Additional command-line arguments for the Chrome process. Read more about chrome mode
from [here](./modes.md#chrome)

## CLI
The following configuration values are used for the neu CLI.

### `cli.binaryName: string`
Binary file name of your application. If it is `myapp`, all binaries will use
`myapp-<platform>_<arch>` format.

### `cli.resourcesPath: string`
Path of your application resources.

### `cli.resourcesExclude: string`
Regex pattern to exclude files from final app bundle. For example, the following configuration will exclude all the TypeScript source files from the final build:

```json
{
    "resourcesExclude" : ".*\\.ts$|.*\\.tsx$"
}
```

### `cli.extensionsPath: string`
Path of your application extensions.

### `cli.extensionsExclude: string`
Regex pattern to exclude files from the extensions directory of the final app package. For example, the following configuration will exclude `.log` and `.info` files:

```json
{
    "extensionsExclude" : ".*\\.log$|.*\\.info$"
}
```

### `cli.clientLibrary: string`
Filename of the Neutralinojs JavaScript library.

### `cli.binaryVersion: string`
Neutralinojs server version. Get nightly builds by using the `nightly` tag.

### `cli.clientVersion: string`
Neutralinojs client version.  Get nightly builds by using the `nightly` tag.

### `cli.autoReloadExclude: string`
A JavaScript regular expression to exclude files from the auto-reload file watcher. For example, the following configuration will disable auto-reloading for SASS stylesheets (`.scss`).

```json
{
    "autoReloadExclude": ".*\\.scss$"
}
```
Use `|` character to set multiple regular expressions, as shown below.

```json
{
    "autoReloadExclude": ".*\\.scss$|.*\\.less$"
}
```

### `cli.frontendLibrary: object`

Enables frontend development tools (HMR, etc) for the `neu run` command. Learn more about frontend
framework integration from [here](../getting-started/using-frontend-libraries.md)

### `cli.hostProject.projectPath: string`

Sets the project path of the host project. This path will be used as the current directory while executing the host-project-related commands.

### `cli.hostProject.initCommand: string`

A command that gets executed after downloading an host app template with the `neu create` command.

### `cli.hostProject.devCommand: string`

This command will run with the `neu run` command to start the host project.

### `cli.hostProject.buildCommand: string`

The `neu build` command will execute this command before generating the app bundle, so you can generate bundled version of host project code.

### `cli.hostProject.buildPath: string`

Location where the final read-to-distribute host project files will be stored after the execution of `buildCommand`. Files in this folder are copied into the app bundle path after the execution of `neu build` command.

### `cli.distributionPath: string`

Sets the build path for neu CLI. For example, if you need to get the built binaries in `build` folder instead of `dist`, you can set the `distributionPath` as follows:

```json
{
    "distributionPath": "/build",
}
```
The default value for `distributionPath` is `/dist`.

## Windows-specific options
There are additional configuration options that define metadata and appearance of executables for Windows platform. These fields must be placed in the root of `neutralino.config.json`. Every field is optional.

### `applicationName: string`
The human-readable application name. Fills in the `ProductName` field of the executable.

### `applicationIcon: string`
The location of the executable's icon relative to `neutralino.config.json`. The icon must be in PNG format. If it is not set, an icon from `modes.window.icon` will be chosen instead. If `modes.window.icon` does not point to a PNG file, too, a default Neutralino.js icon will be used.

### `author: string`
The developer of the application. Fills in the `CompanyName` field of the executable.

### `description: string`
A description of the executable file. This usually describes the purpose of your application. Fills in the `FileDescription` field of the executable.

### `copyright: string`
Copyright information. Fills in the `LegalCopyright` field of the executable.

Example configuration:

```json
{
    "applicationId": "cook.pancake.bakery",
    "version": "1.2.0",
    "applicationName": "Pancake Bakery",
    "author": "Sweet Pancakes LLC",
    "description": "Digital recipe book for pancakes from all over the world",
    "copyright": "Copyright © Sweet Pancakes LLC 2042. All rights reserved.",
    "applicationIcon": "buildAssets/appIcon.png",
    "cli": {
        "binaryName": "pancakebakery"
    }
}
```
