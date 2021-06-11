---
title: Internal CLI Arguments
---

neu CLI wraps Neutralinojs's internal CLI arguments to provide a simple interface for developers. For example,
the `neu run` command internally calls `./bin/neutralino-linux --load-dir-res --path=.` on Linux.

Neutralinojs supports the following CLI arguments.

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
