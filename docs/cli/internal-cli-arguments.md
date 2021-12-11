---
title: Internal CLI Arguments
---

neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,
the `neu run` command internally calls `./bin/neutralino-linux_x64 --load-dir-res --path=. --neu-dev-auto-reload`
on Linux. You can build neu CLI, Node.js, and npm to build Neutralinojs apps. But, neu CLI
offers a simple, fast, and easy tooling for application developers to create, manage, and bundle Neutralinojs apps.

Neutralinojs supports the following CLI arguments. Many internal CLI arguments help developers to override
default configuration defined inside the `neutralino.config.json` file. If you use Neutralinojs as a part of your
source files via child process API, you can use the following arguments to configure the application instance.

### `--load-dir-res`

Notifies Neutralinojs server to fetch files from the resources directory. If this flag is not provided,
Neutralinojs server will load resources from the `resources.neu` file.

:::tip
If Neutralinojs fails to load resources `resources.neu`,
this flag is automatically enabled internally to find resources from the app directory.
Therefore, you can double click on the binary instead of `neu run` while developing apps.
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

### `--url=<url>`

Overrides the URL on the application.

### `--logging-enabled=<true|false>`

Overrides the logging feature status.

### `--logging-write-to-log-file=<true|false>`

Overrides the log file feature status.

### `--export-auth-info=<true|false>`

Overrides auth details export setting.

### `--enable-extensions=<true|false>`

Overrides extensions feature's availability.

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

### `--window-resizable=<true|false>`

Overrides the window's initial resizability status.

### `--window-exit-process-on-close=<true|false>`

Overrides the close button's behavior.

:::tip
The right hand value is optional for the for boolean type CLI arguments. Therefore, you can use `--window-full-screen`
instead of `--window-full-screen=true`. However, if you define `window.fullScreen` as `true` and you need to override it as
`false` you have to use `--window-full-screen=false`.
:::
