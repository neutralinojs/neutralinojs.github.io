---
title: Neutralino.clipboard
---

`Neutralino.clipboard` namespace offers functions to access system clipboard.

## clipboard.writeText(text)
Writes text into the system clipboard. 

### Parameters

- `text` String: Text to store into the system clipboard.

```js
await Neutralino.clipboard.writeText('Test value');
```

## clipboard.readText()
Reads and returns text from system clipboard. 

### Return String (awaited):
Stored text from the system clipboard.


```js
let clipboardText = await Neutralino.clipboard.readText();
console.log(`Text: ${clipboardText}`);
```
