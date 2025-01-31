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

The client library maintains a task pool to map the server messages to the matching request via an UUID string.

Neutralinojs offers many native operations for you by using this communication mechanism for all [modes](../configuration/modes).

## Security: Configuring Allow/Block Lists  

Neutralino.js restricts access to native APIs by default for security reasons. Developers must explicitly allow or block APIs using the `nativeAllowList` and `nativeBlockList` properties in `neutralino.config.json`.  

### **How to Configure `nativeAllowList`**  
Modify your `neutralino.config.json` file to specify which APIs your app can use:  

```json
{
  "modes": {
    "window": {
      "enable": true
    }
  },
  "nativeAllowList": [
    "os.*",
    "filesystem.readFile",
    "filesystem.writeFile"
  ]
}
```
Explanation of Allowed APIs

`os.*` → Grants access to all OS-related APIs.

`filesystem.readFile` → Allows reading files.

`filesystem.writeFile` → Allows writing files.

APIs not listed in the allow list will be blocked by default.

### **How to Configure `nativeAllowList`**
In addition to allowing APIs, you can explicitly block specific APIs using nativeBlockList. APIs listed here will be denied access, even if they are in nativeAllowList.

```json
{
  "nativeBlockList": [
    "os.execCommand",
    "filesystem.deleteFile"
  ]
}
```
Explanation of Blocked APIs

`os.execCommand` → Prevents executing system commands.

`filesystem.deleteFile` → Blocks file deletion operations.

Priority: APIs in nativeBlockList take precedence over nativeAllowList. If an API is in both lists, it will be blocked.

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
