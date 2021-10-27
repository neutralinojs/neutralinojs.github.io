---
title: Neutralino.init
---

`init` is not a namespace, it's a function that initializes a Neutralinojs application.

## init()

The application developer needs to call this method explicitly via a JavaScript source file before using any 
native API function. The `init` function does the following tasks when it's called.

- Starts a WebSocket connection with the Neutralinojs server.
- Starts listening to the development server if the `--debug-mode` flag (the `neu run` command sets this flag) is provided.
- Defines `NL_CVERSION` with the client libary version in the `window` scope.

```js
Neutralino.init();

Neutralino.events.on('ready', () => {
    Neutralino.os.showMessage('Welcome', 'Hello Neutralinojs');
});
```

:::danger
Aways use the `ready` event to call native API functions immediately. Don't call native API functions before the `init()` call 
or right after the `init()` call because the `init()` function doesn't synchronously wait until the WebSocket connection is 
established.
:::


