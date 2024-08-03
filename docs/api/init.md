---
title: Neutralino.init
toc_max_heading_level: 2
---

`init` is not a namespace, it's a function that initializes a Neutralinojs application.

## init()

The application developer needs to call this method explicitly via a JavaScript source file before using any
native API function. The `init` function does the following tasks when it's called.

- Starts a WebSocket connection with the Neutralinojs server asynchronously.
- Registers auto-reload event handler if the `--neu-dev-auto-reload` flag (the `neu run` command sets this flag) is provided.
- Defines `NL_CVERSION` with the client libary version in the `window` scope.

You can call native API calls right after the `init` function call, as shown below.

```js
Neutralino.init();

Neutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');
```

Also, you can wrap immediate native calls with the `ready` event callback if you like.

```js
Neutralino.init();

Neutralino.events.on('ready', () => {
    Neutralino.os.showMessageBox('Welcome', 'Hello Neutralinojs');
});
```

:::info
Neutralinojs client library typically queues and sends native API calls to the server when the WebSocket connection
is established. Therefore, you don't need to use the `ready` event callback always.
:::


