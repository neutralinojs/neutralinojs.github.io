---
title: neutralino.config.json
---

`neutralino.config.json` file contains the application configuration details. 

## `applicationId: string`
Unique string to identify your application. Eg: `js.neutralino.sample`

## `port: number`
The port of your application. If the value is `0`, Neutralinojs will use a random available port.

## `defaultMode: string`
Mode of the application. Accepted values are `window`, `browser`, and `cloud`.

## `enableServer: boolean`
Enables or disables the background server (Disables static file servering feature and native API messaging).
If you load a remote URL to the webview, you can set this option to `true`.

## `enableNativeAPI: boolean`
Enables or disables the native API. If you don't use any native API functions, you can set this option to `true`.

## `url: string`
The entry URL of the application. Neutralinojs will initially load this URL.
This property accepts both relative and absolute URLs.

## `documentRoot: string`

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

## `exportAuthInfo: boolean`
Exports authentication details to the `${NL_PATH}/.tmp/auth_info.json` file with the following JSON structure.

```json
{
    "port": "<port>",
    "accessToken": "<access_token>"
}
```

You can use the above authentication details to connect with Neutralinojs from external processes by using
WebSocket as an IPC mechanism.

## `enableExtensions: boolean`
Enables/disables extensions.

## `nativeBlockList: string[]`
An array of native methods needs to be blocked from the frontend of the application. The wildcard character `*` is allowed
inside entries.

```json
{
    "nativeBlockList": ["os.execCommand"],
    "nativeBlockList": ["app.*"]
}
```

## `nativeAllowList: string[]`
An array of native methods needs to be allowed from the frontend of the application. The wildcard character `*` is allowed
inside entries.

```json
{
    "nativeAllowList": ["os.getEnv"],
    "nativeAllowList": ["storage.*"]
}
```

## `globalVariables: object[]`
A key-value-based JavaScript object of custom [global variables](../api/global-variables#custom-global-variables).

## `logging.enabled: boolean`
Enables or disables the logging feature.

## `logging.writeToLogFile: boolean`
Enables or disables log file. If this setting is `false`, the framework won't write log to `neutralinojs.log`,
and it will write logs to standard streams.

## `modes.window.title: string`
Title of the native window.

## `modes.window.width: number`
Width of the native window.

## `modes.window.height: number`
Height of the native window.

## `modes.window.minWidth: number`
Minimum width of the native window.

## `modes.window.minHeight: number`
Minimum height of the native window.

## `modes.window.maxWidth: number`
Maximum width of the native window.

## `modes.window.maxHeight: number`
Maximum height of the native window.

## `modes.window.fullScreen: boolean`
Activates the full-screen mode.

## `modes.window.icon: string`
Application icon's file name. You can directly point to an image file in the
resources directory. We recommend you to choose a transparent PNG file.

## `modes.window.alwaysOnTop: boolean`
Activates the top-most mode.

## `modes.window.enableInspector: boolean`
Automatically opens the developer tools window.

## `modes.window.borderless: boolean`
Activates the borderless mode.

## `modes.window.maximize: boolean`
Launches the application maximized.

## `modes.window.resizable: boolean`
Make the window resizable or not. The default value is `true`.

## `modes.window.hidden: boolean`
Make the window invisible. This setting can be used to develop background services.

## `modes.window.exitProcessOnClose: boolean`
If this setting is `true`, the app process will exit when the user clicks on the close button. Otherwise,
the framework will dispatch the `windowClose` event.

## `cli.binaryName: string`
Binary file name of your application. If it is `myapp`, all binaries should use
`myapp-<platform>` format.

## `cli.resourcesPath: string`
Path of your application resources.

## `cli.clientLibrary: string`
Filename of the Neutralinojs JavaScript library.

## `cli.binaryVersion: string`
Neutralinojs server version. neu CLI adds this property when the project is scaffolded.

## `cli.clientVersion: string`
Neutralinojs client version. neu CLI adds this property when the project is scaffolded.
