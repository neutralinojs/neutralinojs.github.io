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

## `enableHTTPServer: boolean`
Enables or disables the background server (The static file server and native API).

## `enableNativeAPI: boolean`
Enables or disables the native API. For better security, this setting should be `false` if you are using a
remote URL as your web frontend.

## `url: string`
The entry URL of the application. Neutralinojs will initially load this URL.
This property accepts both relative and absolute URLs.

## `nativeBlockList: string[]`
An array of native methods needs to be blocked from the frontend of the application.

## `globalVariables: object[]`
A key-value-based JavaScript object of custom [global variables](../developer-environment/global-variables#custom-global-variables).

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
