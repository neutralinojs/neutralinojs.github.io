---
title: Internal CLI Arguments
---

neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,
the `neu run` command internally calls
`./bin/neutralino-linux_x64 --load-dir-res --path=. --neu-dev-extension --neu-dev-auto-reload`
on Linux. You can build neu CLI, Node.js, and npm to build Neutralinojs apps. But, neu CLI
offers a simple, fast, and easy tooling for application developers to create, manage, and bundle Neutralinojs apps.

Neutralinojs supports the following CLI arguments. Many internal CLI arguments help developers to override
default configuration defined inside the [`neutralino.config.json`](../configuration/neutralino.config.json.md) file. If you use Neutralinojs as a part of your
source files via child process API, you can use the following arguments to configure the application instance.

## General

### `--res-mode=<mode>`

Sets the default resource loading mode. The following values are accepted:

- `embedded` (default): Loads resources from the binary itself if resources are injected to binaries via the `neu build --embed-resources` command.
- `bundle`: Loads resources from the `resources.neu` file stored near the binary.
- `directory`: Loads resources from the application resources directory. 

The framework tries to load app configuration and resources from the above order and loads a default app configuration if all the above modes fail.

### `--load-dir-res` <span class="badge badge--warning">Deprecated</span>

Notifies Neutralinojs server to fetch files from the resources directory. If this flag is not provided,
Neutralinojs server will load resources from the `resources.neu` file.

:::tip
If Neutralinojs fails to load resources `resources.neu`,
this flag is automatically enabled internally to find resources from the app directory.
Therefore, you can double click on the binary instead of `neu run` while developing apps.
:::

:::warning
The `--load-dir-res` option is deprecated and will be removed in upcoming versions. You should use `--res-mode=directory` instead.
:::


### `--config-file=<filename>`

Uses a custom configuration file instead of the default `neutralino.config.json` file for loading the app
configuration JSON. This CLI option is helpful for setting a development-only configuration file
(i.e., `--config-file=neutralino-dev.config.json`).

:::info
The `neu build` command won't typically
include custom configuration files for the final application bundle &mdash; it only embeds the default
`neutralino.config.json` file allowing you to store production app configuration.
:::

### `--path=<path>`

Overrides the resources path with a relative path or absolute path. This will change the `NL_PATH` global variable.

### `--mode=<mode>`

Overrides the default mode. Accepted values are: `window`, `browser`, and `cloud`.

### `--neu-dev-auto-reload`

Listens to the `neuDev_reloadApp` event. When this CLI argument is provided, each modification done to the
resources will automatically reload the application. The `neu run` command executes Neutralinojs with
this flag by default.

`--neu-dev-` is a reserved CLI argument prefix for Neutralinojs process. Therefore, avoid adding
custom arguments with `--neu-dev-` prefix. Feel free to use the `--dev-` prefix
 for your development-related CLI flags.

### `--neu-dev-extension`

Loads `js.neutralino.devtools` extension internally for development purposes. The neu CLI uses this CLI argument to
establish an IPC with the application process. This option only works if application resources are
loaded from a directory (won't work for end-users).

### `--url=<url>`

Overrides the URL on the application.

### `--document-root=<url>`

Overrides the document root of the static server.

### `--port=<port>`

Overrides the application port and will change the `NL_PORT` global variable. If `0` is given, Neutralino will use a random available port.

### `--logging-enabled=<true|false>`

Overrides the logging feature status.

### `--logging-write-to-log-file=<true|false>`

Overrides the log file feature status.

### `--export-auth-info=<true|false>`

Overrides auth details export setting.

### `--enable-extensions=<true|false>`

Overrides extensions feature's availability.

### `--enable-server=<true|false>`

Enables or disables the background server (Disables static file servering feature and native API messaging).
If you load a remote URL to the webview, you can set this option to `true`.

### `--enable-native-api=<true|false>`

Overrides the primary native API execution permission.

### `--single-page-serve=<true|false>`

Overrides the single page serving option.

## Window mode

The following CLI arguments are used when the application runs with the window mode.

### `--window-title=<title>`

Overrides the window title.

### `--window-icon=<icon_path>`

Overrides the window icon.

### `--window-full-screen=<true|false>`

Overrides the window's initial full screen status.

### `--window-always-on-top=<true|false>`

Overrides the window's initial top-most mode.

### `--window-borderless=<true|false>`

Overrides the window's borderless mode.

### `--window-maximize=<true|false>`

Overrides the window's initial maximize status.

### `--window-hidden=<true|false>`

Overrides the window's initial visibility status.

### `--window-maximizable=<true|false>`

Overrides the window's initial maximizable status.

### `--window-width=<number>`

Overrides the window width.

### `--window-height=<number>`

Overrides the window height.

### `--window-min-width=<number>`

Overrides the window's minimum width.

### `--window-min-height=<number>`

Overrides the window's minimum height.

### `--window-max-width=<number>`

Overrides the window's maximum width.

### `--window-max-height=<number>`

Overrides the window's maximum height.

### `--window-x=<number>`

Overrides the window left (`x`) position.

### `--window-y=<number>`

Overrides the window top (`y`) position.

### `--window-center=<true|false>`

Overrides the window's initial center positioning setup.

### `--window-transparent=<true|false>`

Overrides the window transparency mode.

### `--window-resizable=<true|false>`

Overrides the window's initial resizability status.

### `--window-skip-taskbar=<true|false>`

Overrides the skip taskbar setting.

### `--window-exit-process-on-close=<true|false>`

Overrides the close button's behavior.

### `--window-enable-inspector=<true|false>`

Enables web developer tools (inspector).

### `--window-open-inspector-on-startup=<true|false>`

Automatically opens the developer tools window on startup.

### `--window-use-saved-state=<true|false>`

Overrides the saved window state feature setting.

### `--window-extend-user-agent-with=<suffix>`

Overrides the custom user agent setting.

### `--window-inject-globals=<true|false>`

Overrides the global variable injection setting.

### `--window-inject-client-library=<true|false>`

Overrides the client library source injection setting.

### `--window-inject-script=<script_path>`

Overrides the preload script injection setting.


## Chrome mode

The following CLI arguments are used when the application runs with the chrome mode.

### `--chrome-width=<number>`

Chrome window's width.

### `--chrome-height=<number>`

Chrome window's height.

### `--chrome-args=<arg_list>`

Additional arguments for the Chrome process. Read more about chrome mode
from [here](../configuration/modes.md#chrome)

:::tip
The right hand value is optional for the for boolean type CLI arguments. Therefore, you can use `--window-full-screen`
instead of `--window-full-screen=true`. However, if you define `window.fullScreen` as `true` and you need to override it as
`false` you have to use `--window-full-screen=false`.
:::
