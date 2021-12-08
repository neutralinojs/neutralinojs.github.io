---
title: Neutralino.events
---

`Neutralino.events` namespace contains methods related to the native events handling. These events are often initiated
by the Neutralinojs server based on native state changes.

## Event types

| Event id                    | Description                                             | Available modes
| --------------------------- | ------------------------------------------------------- | --------
| `ready`                     | Occurs when the client library is ready to communicate with the framework.  | `all`
| `trayMenuItemClicked`       | Occurs when the user clicks on a tray menu item.        | `all`
| `windowClose`               | Occurs when the user closes the window.                 | `window`
| `serverOffline`             | Occurs when the JavaScript API cannot communicate with the application process. | `all`
| `clientConnect`             | Occurs when a new client access the application.        | `all`
| `clientDisconnect`          | Occurs when a connected client leaves the application.  | `all`
| `appClientConnect`          | Occurs when a new application instance starts.          | `all`
| `appClientDisconnect`       | Occurs when an application instance ends.               | `all`
| `extClientConnect`          | Occurs when a new extension connects.                   | `all`
| `extClientDisconnect`       | Occurs when an extension disconnects.                   | `all`
| `extensionReady`            | Occurs when an extension is ready to communicate with the app.    | `all`

## events.on(eventName, handler)
Registers a new event handler. 


### Parameters

- `eventName`: Name of the event.
- `handler`: A function that will be called when the given event occurs. Neutralinojs will call the handler with a
  [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) instance by attaching additional data
  to the `detail` key.

```js
function onTrayMenuItemClicked(event) {
  console.log(`Event data: ${event.detail}`);
}
await Neutralino.events.on('trayMenuItemClicked', onTrayMenuItemClicked);
```

## events.off(eventName, handler)
Unregisters an event handler. 


### Parameters

- `eventName`: Name of the event.
- `handler`: A function reference.

```js
await Neutralino.events.off('trayMenuItemClicked', onTrayMenuItemClicked);
```

## events.dispatch(eventName, data)
Dispatches a new event. Neutralinojs server uses this JavaScript function call internally with native events. 


### Parameters

- `eventName`: Name of the event.
- `data` (optional): Additional data for the event.

```js
await Neutralino.events.dispatch('myTestEvent', {myData: 'Test data'});
```
