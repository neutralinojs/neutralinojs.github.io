---
title: Native API Overview
---

Neutralinojs offers a JavaScript client library (also known as Neutralino.js) for developers to interact
with native operations via the Neutralinojs server.
The JavaScript client's implementation resides inside the neutralino.js JavaScript file.
It is therefore required to have the client library in your Neutralinojs projects. 

The client library exposes its JavaScript APIs to the browser's window scope, and you can access them
via `Neutralino` or `window.Neutralino` from vanilla JavaScript or any frontend framework.

Assume that you need to get an environment variable value from the operating system. You can call the
[`Neutralino.os.getEnv`](os.md#osgetenvkey)
JavaScript method. The client library will call the Neutralinojs server with a WebSocket message once you invoke
the `getEnv` method. After that, the Neutralinojs server will execute the native operation to fetch the given
environment variable.
Once the Neutralinojs server finishes the task, it sends a WebSocket message with the value of the environment variable.
Finally, the client library resolves a promise with the results received from the server.

The client library maintains a task pool to map the server messages to the matching request via an UUID string.

Neutralinojs offers many native operations for you by using this communication mechanism for all [modes](../configuration/modes).

## Native API namespaces

- [Neutralino.app](../api/app.md)
- [Neutralino.clipboard](../api/clipboard.md)
- [Neutralino.computer](../api/computer.md)
- [Neutralino.debug](../api/debug.md)
- [Neutralino.events](../api/events.md)
- [Neutralino.extensions](../api/extensions.md)
- [Neutralino.filesystem](../api/filesystem.md)
- [Neutralino.init](../api/init.md)
- [Neutralino.os](../api/os.md)
- [Neutralino.storage](../api/storage.md)
- [Neutralino.updater](../api/updater.md)
- [Neutralino.window](../api/window.md)
