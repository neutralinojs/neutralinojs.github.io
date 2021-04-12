---
title: Neutralino.debug
---

Neutralino.debug namespace contains application debugging utilities.

## debug.log(LoggerOptions)
Writes messages to `neutralino.log` file. 

:::tip
If your application is running via `neu run` or `neu listen`, you can see log
messages on your terminal.
:::

### LoggerOptions

- `type`: Type of the message. Accepted values are `INFO`, `WARN`, and `ERROR`.
- `message`: Content to be logged.

```
await Neutralino.debug.log({
  type: 'INFO',
  message: 'Test message'
});
```
