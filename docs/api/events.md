---
title: Neutralino.events
---

`Neutralino.events` namespace contains methods related to the native events handling. These events are often initiated
by the Neutralinojs server based on native state changes.

## Event types

| Event id                    | Description                                             | Available modes | Additional data
| --------------------------- | ------------------------------------------------------- | -------- | -------
| `ready`                     | Occurs when the client library connects with the Neutralino server.  | `all` | `null`
| `trayMenuItemClicked`       | Occurs when the user clicks on a tray menu item.        | `all` | `TrayMenuItem`
| `windowClose`               | Occurs when the user closes the window.                 | `window` | `null`
| `windowFocus`               | Occurs when the window gets focused.                 | `window` | `null`
| `windowBlur`                | Occurs when the window focus state is gone.                 | `window` | `null`
| `serverOffline`             | Occurs when the Neutralino server is offline | `all` | `null`
| `clientConnect`             | Occurs when a new client access the application.        | `all` | Total clients
| `clientDisconnect`          | Occurs when a connected client leaves the application.  | `all` | Total clients
| `appClientConnect`          | Occurs when a new application instance starts.          | `all` | Total app clients
| `appClientDisconnect`       | Occurs when an application instance ends.               | `all` | Total app clients
| `extClientConnect`          | Occurs when a new extension connects.                   | `all` | Extension identifier
| `extClientDisconnect`       | Occurs when an extension disconnects.                   | `all` | Extension identifer
| `extensionReady`            | Occurs when an extension is ready to communicate with the app.    | `all` | Extension identifier
| `spawnedProcess`            | Occurs then there is an update in the spawned process.  | `all` | [`SpawnedProcess`](os.md#spawnedprocess) with `action` (`stdOut`, `stdErr`, and `exit`) and `data` (STDOUT, STDERR or exit code)
| `openedFile`                | Occurs for each read action and whenever stream cursor reaches EOF. | `all` | File stream identifier with `action` (`data`, `dataBinary`, and `end`) and `data` (stream block content)
| `watchFile`                 | Occurs for each filesystem change events based on watchers. | `all` | File watcher identifier with `action` (`add`, `delete`, `modified`, and `moved`), `dir`, and `filename`
## events.on(eventName, handler)
Registers a new event handler. 


### Parameters

- `eventName` String: Name of the event.
- `handler` Function: A function that will be called when the given event occurs. Neutralinojs will call the handler with a
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

- `eventName` String: Name of the event.
- `handler` Function: A function reference.

```js
await Neutralino.events.off('trayMenuItemClicked', onTrayMenuItemClicked);
```

## events.dispatch(eventName, data)
Dispatches a new event to the current app instance. Neutralinojs client uses this JavaScript function call
internally to dispatch native events. 


### Parameters

- `eventName` String: Name of the event.
- `data` Object (optional): Additional data for the event.

```js
await Neutralino.events.dispatch('myTestEvent', {myData: 'Test data'});
```

## events.broadcast(eventName, data)
Dispatches a new event to all clients (both app and extension clients).


### Parameters

- `eventName` String: Name of the event.
- `data` Object (optional): Additional data for the event.

```js
await Neutralino.events.broadcast('myTestEvent', 'Hello');

await Neutralino.events.broadcast('myTestEvent', {myData: 'Test data'});

await Neutralino.events.broadcast('myTestEvent'); // without any data payload
```
