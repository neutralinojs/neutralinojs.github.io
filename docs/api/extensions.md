---
title: Neutralino.extensions
---

`Neutralino.extensions` namespace contains methods related to Neutralino extensions. Extensions let
developers write custom backend APIs for Neutralinojs applications.

Learn more about extensions with [this guide](../how-to/extensions-overview).


## extensions.dispatch(extensionId, eventName, data)
Dispatches a new event to an extension instance. If the targeted extension is not connected yet,
Neutralino client library will queue the function call and send whenever the extension comes online.


### Parameters
- `extensionId` String: Extension identifier.
- `eventName` String: Name of the event.
- `data` Object (optional): Additional data for the event.

```js
await Neutralino.extensions.dispatch('js.neutralino.sampleextension',
            'myTestEvent', {myData: 'Test data'});

await Neutralino.extensions.dispatch('js.neutralino.sampleextension',
            'myTestEvent');
```

## extensions.broadcast(eventName, data)
Dispatches a new event to all connected extensions. If an extension is loaded but not connected yet,
the particular extension won't get the new event. Use [`extensions.dispatch`](#extensionsdispatchextensionid-eventname-data)
 to send messages even if the extension is not connected to the main process.


### Parameters
- `eventName` String: Name of the event.
- `data` Object (optional): Additional data for the event.

```js
await Neutralino.extensions.broadcast('myTestEvent', 'Hello');

await Neutralino.extensions.broadcast('myTestEvent', {myData: 'Test data'});

await Neutralino.extensions.broadcast('myTestEvent');
```

## extensions.getStats()
Returns details about connected and loaded extensions.

### Return Object (awaited):
- `loaded` String[]: An array of loaded extensions.
- `connected` String[]: An array of connected extensions. These extensions have an active WebSocket-based IPC connection
                with the main process.

```js
let stats = await Neutralino.extensions.getStats();
console.log('stats: ', stats);
```
