---
title: Neutralino.debug
---

`Neutralino.debug` namespace contains application debugging utilities.

## debug.log(message, type)
Writes messages to `neutralinojs.log` file or/and standard output streams. 

:::tip
If your application is running via `neu run`, you can see log
messages on your terminal.
:::

### Parameters

- `message`: Content to be logged.
- `type` (optional): Type of the message. Accepted values are `INFO`, `WARNING`, and `ERROR`. The default value is `INFO`.

```js
await Neutralino.debug.log('Hello Neutralinojs');

await Neutralino.debug.log('An error occured', 'ERROR');

await Neutralino.debug.log('A warning message', 'WARNING');
```
