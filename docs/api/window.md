---
title: Neutralino.window
---

`Neutralino.window` namespace contains methods related to the current native window instance. 
This namespace's methods will work only for the [`window`](/docs/configuration/modes#window) mode.

## window.setTitle(title)
Sets the title of the native window. 

### Parameters
- `title`: Title of the window as a string.

```js
await Neutralino.window.setTitle('New title');
```

## window.minimize()
Minimizes the native window.

```js
await Neutralino.window.minimize();
```

## window.maximize()
Maximizes the native window.

```js
await Neutralino.window.maximize();
```

## window.unmaximize()
Restores the native window.

```js
await Neutralino.window.unmaximize();
```

## window.isMaximized()
Returns `true` if the native window is maximized.

### Return object (awaited):
- `boolean`: `true` or `false` based on current maximized status.

```js
let status = await Neutralino.window.isMaximized();
```

## window.setFullScreen()
Enables the full screen mode.

```js
await Neutralino.window.setFullScreen();
```

## window.exitFullScreen()
Exits from the full screen mode.

```js
await Neutralino.window.exitFullScreen();
```

## window.isFullScreen()
Returns `true` if the native window is in the full screen mode.

### Return object (awaited):
- `boolean`: `true` or `false` based on current full screen status.

```js
let status = await Neutralino.window.isFullScreen();
```

## window.show()
Shows the native window.

```js
await Neutralino.window.show();
```

## window.hide()
Hides the native window.

```js
await Neutralino.window.hide();
```

## window.isVisible()
Returns `true` if the native window is visible.

### Return object (awaited):
- `boolean`: `true` or `false` based on current visibility status.

```js
let status = await Neutralino.window.isVisible();
```

## window.focus()
Focuses the native window.

```js
await Neutralino.window.focus();
```

## window.move(x, y)
Moves the native window into given coordinates. Neutralinojs's cross-platform coordinate system starts from top-left corner of the screen.
In other words, `x=0,y=0` point refers to the top-left corner of the device's main screen. 

### Parameters
- `x`: A integer value for the horizontal position.
- `y`: A integer value for the vertical position.

```js
await Neutralino.window.move(200, 400);
```

## window.setIcon(icon)
Sets an icon for the native window or Dock. 

### Parameters

- `icon`: Path of the icon. A `200x200` PNG image file works fine on all supported operating systems.

```js
const icon = '/resources/icons/appIcon.png';
await Neutralino.window.setIcon(icon);
```

## window.setDraggableRegion(domId)
Converts a give DOM element to a draggable region. The user will be able to drag the native window by dragging the
given DOM element. This feature is suitable to make custom window bars along with the [borderless mode](../configuration/neutralino.config.json#modeswindowborderless-boolean). 

### Parameters

- `domId`: A DOM element identifier as a string.

```js
await Neutralino.window.setDraggableRegion('myCustomTitleBar');
```

## window.setSize(WindowSizeOptions)
Converts a give DOM element to a draggable region. The user will be able to drag the native window by dragging the
given DOM element. This feature is suitable to make custom window bars along with the [borderless mode](../configuration/neutralino.config.json#modeswindowborderless-boolean). 

### WindowSizeOptions

- `width`: Window width in pixels.
- `height`: Window height in pixels.
- `minWidth`: Minimum width of the window in pixels.
- `minHeight`: Minimum height of the window in pixels.
- `maxWidth`: Maximum width of the window in pixels.
- `maxHeight`: Maximum height of the window in pixels.
- `resizable`: A boolean value to make the window resizable or fixed.

This method always expects width and height couples. 
For example, if you are sending `minWidth`, you should send `minHeight` too.

```js
await Neutralino.window.setSize({
    width: 500,
    height: 200,
    maxWidth: 600,
    maxHeight: 400
});

await Neutralino.window.setSize({
    resizable: false
});
```

## window.create(url, WindowOptions)
Creates a native window. You can use this method to create new window for your multi-window Neutralinojs app.
Neutralinojs spawns a new process for each native window. Therefore, the new window works as an isolated app
once the window is created. 

However, you can build communication streams between windows with the 
[storage API](./storage.md).

### Parameters

- `url`: URL to be loaded. Eg: `/resources/aboutWindow.html`.
- `options`: an instance of `WindowOptions` type.

### WindowOptions

- `title`: Window title.
- `icon`: Window icon path.
- `fullScreen`: Sets full screen mode.
- `alwaysOnTop`: Activates the top-most mode.
- `enableInspector`: Activates developer tools and opens the web inspector window.
- `borderless`: Makes the window borderless.
- `maximize`: Launches the window maximized.
- `hidden`: Hides the window.
- `maximizable`: Makes the window maximizable or not.
- `processArgs`: Additional command-line arguments for the new window process.


```js
await Neutralino.window.create('/resources/aboutWindow.html', {
    icon: '/resources/icons/aboutIcon.png',
    enableInspector: false,
    width: 500,
    height: 300,
    maximizable: false,
    processArgs: '--window-id=W_ABOUT'
});
```
