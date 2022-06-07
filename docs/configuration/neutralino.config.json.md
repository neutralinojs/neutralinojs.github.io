---
title: neutralino.config.json
---

`neutralino.config.json` file contains the application configuration details. Every Neutralinojs app requires
the following mandatory keys from the config file.

- `applicationId`
- `url`
- `defaultMode`

Other configuration properties are optional and may have default values.

## Primary
The following configuraion values cannot be overridden in different Neutralinojs modes.

### `applicationId: string`
Unique string to identify your application. Eg: `js.neutralino.sample`

### `version: string`
Application version. Eg: `2.4.22`

### `defaultMode: string`
Mode of the application. Accepted values are `window`, `browser`, and `cloud`.

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
Learn more about this option [here](../how-to/extensions-overview#enable-the-extensions-feature)


### `extensions: object[]`
An array of extension definitions.
Learn more about this option [here](../how-to/extensions-overview#defining-the-extensions)

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

### `globalVariables: object[]`
A key-value-based JavaScript object of custom [global variables](../api/global-variables#custom-global-variables).

### `logging.enabled: boolean`
Enables or disables the logging feature.

### `logging.writeToLogFile: boolean`
Enables or disables log file. If this setting is `false`, the framework won't write log to `neutralinojs.log`,
and it will write logs to standard streams.

### `serverHeaders: object[]`
Custom headers for the static server and Websocket handshake process. For example, the following configuration
sends a custom header with every outgoing HTTP response.

```json
{
    "serverHeaders": {
        "Test-Header-Option": "Value"
    }
}
```

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

## Chrome mode
The following configuration values are used when the application starts with the chrome mode.

### `modes.chrome.width: number`
Width of the chrome window.

### `modes.chrome.height: number`
Height of the chrome window.

### `modes.chrome.args: string`
Additional command-line arguments for the Chrome process. Read more about chrome mode
from [here](./modes#chrome)

## CLI
The following configuration values are used neu CLI.

### `cli.binaryName: string`
Binary file name of your application. If it is `myapp`, all binaries will use
`myapp-<platform>_<arch>` format.

### `cli.resourcesPath: string`
Path of your application resources.

### `cli.extensionsPath: string`
Path of your application extensions.

### `cli.clientLibrary: string`
Filename of the Neutralinojs JavaScript library.

### `cli.binaryVersion: string`
Neutralinojs server version. Get nightly builds by using the `nightly` tag.

### `cli.clientVersion: string`
Neutralinojs client version.  Get nightly builds by using the `nightly` tag.

### `cli.autoReloadExclude: string`
A JavaScript regular expression to exclude files from the auto-reload file watcher. For example, the
following configuration will disable auto-reloading for SASS stylesheets (`.scss`).

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

Enables frontend development tools (HMR, etc) for the `neu run --frontend-lib-dev` command. Learn more about frontend
framework integration from [here](../how-to/use-a-frontend-library)
