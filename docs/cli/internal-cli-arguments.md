---
title: Internal CLI Arguments
---

neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,
the `neu run` command internally calls `./bin/neutralino-linux --load-dir-res --path=.` on Linux.

Neutralinojs supports the following CLI arguments. Many internal CLI arguments help developers to override
default configuration defined inside the `neutralino.config.json` file.

### `--load-dir-res`

Notifies Neutralinojs server to fetch files from the resources directory. 

:::tip
If Neutralinojs fails to load resources `res.neu`,
this flag is automatically enabled internally to find resources from the app directory.
Therefore, you can double click on the binary instead of `neu run` while developing apps.
:::

### `--path=<path>`

Overrides the resources path with a relative path or absolute path. This will change the `NL_PATH` global variable.

### `--mode=<mode>`

Overrides the default mode. Accepted values are: `window`, `browser`, and `cloud`.

### `--debug-mode`

Starts the development server on port `5050`. When the development server is enabled, each modification done to the resources
will automatically reload the application. The `neu listen` command executes Neutralinojs with this flag.

### `--url=<url>`

Overrides the URL on the application.

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

:::tip
The right hand value is optional for the for boolean type CLI arguments. Therefore, you can use `--window-full-screen` 
instead of `--window-full-screen=true`. However, if you define `window.fullScreen` as `true` and you need to override it as 
`false` you have to use `--window-full-screen=false`.
:::
