---
title: Neutralino.resources
toc_max_heading_level: 2
---

`Neutralino.resources` namespace implements several methods to parse, read, and extract the loaded resource bundle (`resources.neu`). If the app doesn't load resources
from the resource bundle and uses the resources directory, all these methods will throw the `NE_RS_APIRQRF` error.

## resources.getFiles()
Returns all files and directories embedded in the resource bundle.

### Return Object (awaited):
An array of path strings.

```js
let files = await Neutralino.resources.getFiles();
console.log('Files: ', files);
```

## resources.extractFile(path, destination)
Extracts a file from the resources bundle to a preferred path.


### Parameters
- `path` String: Resource file path, i.e., `/resources/icons/appIcon.png`, starts with `/` similar to all Neutralinojs app resources.
- `destination` String: Path where the extract file should be created.

```js
await Neutralino.resources.extractFile('/resources/scripts/run.sh', './scripts/run.sh');
```

## resources.readFile(path)
Reads a text file from resources.

### Parameters
- `path`: Resource path.

### Return String (awaited):
File content.

```js
let data = await Neutralino.resources.readFile();
console.log(data);
```

## resources.readBinaryFile(path)
Reads a binary file from resources.

### Parameters
- `path`: Resource path.

### Return Object (awaited):
Content of the binary file as an
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
let data = await Neutralino.resources.readBinaryFile('/resources/images/myImage.png');
let view = new Uint8Array(data);

console.log('Binary content: ', view);
```
