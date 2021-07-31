---
title: Introduction
---

Neutralinojs offers a JavaScript client library (also known as Neutralino.js) for developers to interact with native operations via the 
Neutralinojs server. 
The JavaScript client's implementation resides inside the neutralino.js JavaScript file. 
Therefore, it is compulsory to have the client library in your Neutralinojs projects. 

The client library exposes its JavaScript APIs to the browser's window scope, and you can access them 
via `Neutralino` or `window.Neutralino` from vanilla JavaScript or any frontend framework.

Assume that you need to get an operating system's environment variable. You can call the [`Neutralino.os.getEnvar`](../api/os#osgetenvargetenvaroptions) 
JavaScript method. The client library will call the Neutralinojs server with an 
HTTP request once you invoke the `getEnvar` method. After that, the Neutralinojs server will execute the native 
operation to fetch the given environment variable using a thread from its thread pool. 
Once the Neutralinojs server finishes the task, it responds to the HTTP request with the environment variable's value. 
Finally, the client library resolves a promise with the results received from the server.

Neutralinojs offers many native operations for you by using this communication mechanism for all [modes](../configuration/modes).

## Native API namespaces

- [Neutralino.app](app)
- [Neutralino.computer](computer)
- [Neutralino.debug](debug)
- [Neutralino.filesystem](filesystem)
- [Neutralino.os](os)
- [Neutralino.storage](storage)
- [Neutralino.window](window)
