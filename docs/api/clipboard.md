---
title: Neutralino.clipboard
toc_max_heading_level: 2
---

`Neutralino.clipboard` namespace offers functions to access system clipboard.

## clipboard.getFormat()
Returns the current data format of the system clipboard. 

### Return String (awaited):
Clipboard format: `text`, `image`, or `unknown`.


```js
let format = await Neutralino.clipboard.getFormat();
console.log(`Format: ${format}`);
```

## clipboard.writeText(text)
Writes text into the system clipboard. 

### Parameters

- `text` String: Text to store into the system clipboard.

```js
await Neutralino.clipboard.writeText('Test value');
```

## clipboard.writeHTML(html)
Writes HTML into the system clipboard.

### Parameters

- `html` String: HTML to store into the system clipboard.

```js
await Neutralino.clipboard.writeHTML('<p style="color:red;">Formatted Text</p>');
```

## clipboard.writeImage(image)
Writes image into the system clipboard. 

### Input Object: `ClipboardImage`

- `width`: Number: Image width.
- `height`: Number: Image height.
- `bpp`: Number: Bits per pixel (BPP).
- `bpr`: Number: Bytes Per Row (BPR).
- `redMask`: Number: Red mask.
- `greenMask`: Number: Green mask.
- `blueMask`: Number: Blue mask.
- `redShift`: Number: Red shift.
- `greeShift`: Number: Green shift.
- `blueShift`: Number: Blue shift.
- `data`: ArrayBuffer: Raw RGBA binary data of the image in an array buffer.

```js
let image = prepareClipboardImage();
await Neutralino.clipboard.writeImage(image);
```

## clipboard.readText()
Reads and returns text from system clipboard. 

### Return String (awaited):
Stored text from the system clipboard.


```js
let clipboardText = await Neutralino.clipboard.readText();
console.log(`Text: ${clipboardText}`);
```

## clipboard.readHTML()
Reads and returns HTML from system clipboard. 

### Return String (awaited):
Stored HTML from the system clipboard.


```js
let clipboardHTML = await Neutralino.clipboard.readHTML();
console.log(`HTML: ${clipboardHTML}`);
```

## clipboard.readImage()
Reads and returns an image from system clipboard. 

### Return Object (awaited):
Returns [`ClipboardImage`](#input-object-clipboardimage) object that has the same
properties as in the [`writeImage()`](#clipboardwriteimageimage) function.


```js
let clipboardImage = await Neutralino.clipboard.readImage();
console.log(`Image: ${clipboardImage}`);
```
