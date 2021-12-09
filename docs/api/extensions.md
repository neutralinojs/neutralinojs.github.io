---
title: Neutralino.extensions
---

`Neutralino.extensions` namespace contains methods related to Neutralino extensions. Extensions let
developers write custom backend APIs for Neutralinojs applications.


## events.dispatch(extensionId, eventName, data)
Dispatches a new event to an extension instance. If the targeted extension is not connected yet,
Neutralino client library will queue the function call and send whenever the extension comes online.


### Parameters

- `extensionId`: Extension identifier.
- `eventName`: Name of the event.
- `data` (optional): Additional data for the event.

```js
await Neutralino.extensions.dispatch('js.neutralino.sampleextension',
            'myTestEvent', {myData: 'Test data'});

await Neutralino.extensions.dispatch('js.neutralino.sampleextension',
            'myTestEvent');
```

## extensions.broadcast(eventName, data)
Dispatches a new event to all extensions.


### Parameters

- `eventName`: Name of the event.
- `data` (optional): Additional data for the event.

```js
await Neutralino.extensions.broadcast('myTestEvent', 'Hello');

await Neutralino.extensions.broadcast('myTestEvent', {myData: 'Test data'});

await Neutralino.extensions.broadcast('myTestEvent');
```

## extensions.getStats()
Returns details about connected and loaded extensions.

### Return object (awaited):
- `loaded`: An array of loaded extensions.
- `connected`: An array of connected extensions. These extensions has an active WebSocket-based IPC connection
                with the main process.

```js
let stats = await Neutralino.extensions.getStats();
console.log('stats: ', stats);
```
