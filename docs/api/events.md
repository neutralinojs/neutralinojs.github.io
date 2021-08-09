---
title: Neutralino.events
---

`Neutralino.app` namespace contains methods related to the native window events handling. This namespace's methods will work
with the [`window`](/docs/configuration/modes#window) mode only.

## events.on(eventName, handler)
Registers a new event handler. 


### Parameters

- `eventName`: Name of the event.
- `handler`: A function that will be called when the given event occurs. Neutralinojs will call the handler with a 
  [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent) instance by attaching additional data to the `detail` key.

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
- `data`: Additional data for the event.

```js
await Neutralino.events.dispatch('myTestEvent', {myData: 'Test data'});
```
