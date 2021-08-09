---
title: Neutralino.window
---

`Neutralino.window` namespace contains methods related to the current native window instance. This namespace's methods will work only for 
the [`window`](/docs/configuration/modes#window) mode.

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
