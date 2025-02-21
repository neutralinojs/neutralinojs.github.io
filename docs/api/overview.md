---
title: Native API Overview
toc_max_heading_level: 2
---

Neutralinojs offers a JavaScript client library (also known as Neutralino.js) for developers to interact
with native operations via the Neutralinojs server.
The JavaScript client's implementation resides inside the neutralino.js JavaScript file.
It is therefore required to have the client library in your Neutralinojs projects. 

The client library exposes its JavaScript APIs to the browser's window scope, and you can access them
via `Neutralino` or `window.Neutralino` from vanilla JavaScript. If you use a frontend library to build your app frontend,
you can import Neutralinojs namespaces from the [`@neutralinojs/lib`](https://www.npmjs.com/package/@neutralinojs/lib) NPM module:

```js
import { app } from '@neutralinojs/lib';

const conf = await app.getConfig();  // Vanilla Js: await Neutralino.app.getConfig()
```

Let's learn how native API calls internally work. Assume that you need to get an environment variable value from the operating system. 
You can call the [`Neutralino.os.getEnv`](../api/os.md#osgetenvkey)
JavaScript method. The client library will call the Neutralinojs server with a WebSocket message once you invoke
the `getEnv` method. After that, the Neutralinojs server will execute the native operation to fetch the given
environment variable.
Once the Neutralinojs server finishes the task, it sends a WebSocket message with the value of the environment variable.
Finally, the client library resolves a promise with the results received from the server.

The client library maintains a task pool to map the server messages to the matching request via a UUID string.

Neutralinojs offers many native operations for you by using this communication mechanism for all [modes](../configuration/modes.md).

Developers can configure native API calling permissions using [`nativeAllowList`](../configuration/neutralino.config.json.md#nativeallowlist-string) and [`nativeBlockList`](../configuration/neutralino.config.json.md#nativeblocklist-string) properties in the application configuration file:

```json
{
  "nativeAllowList": [
    "app.*",
    "window.*",
    "os.execCommand"
  ],
  "nativeBlockList": [
    "filesystem.remove",
    "extensions.*"
  ]
}
```

## Native API namespaces

- [Neutralino.app](../api/app.md)
- [Neutralino.clipboard](../api/clipboard.md)
- [Neutralino.computer](../api/computer.md)
- [Neutralino.custom](../api/custom.md)
- [Neutralino.debug](../api/debug.md)
- [Neutralino.events](../api/events.md)
- [Neutralino.extensions](../api/extensions.md)
- [Neutralino.filesystem](../api/filesystem.md)
- [Neutralino.init](../api/init.md)
- [Neutralino.os](../api/os.md)
- [Neutralino.storage](../api/storage.md)
- [Neutralino.updater](../api/updater.md)
- [Neutralino.window](../api/window.md)
- [Neutralino.resources](../api/resources.md)
- [Neutralino.server](../api/server.md)
