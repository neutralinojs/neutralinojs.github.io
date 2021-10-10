---
title: Neutralino.filesystem
---

`Neutralino.filesystem` namespace contains methods for handling files.

## filesystem.createDirectory(CreateDirectoryOptions)
Creates a new directory.

### CreateDirectoryOptions
- `path`: New directory path.

```js
await Neutralino.filesystem.createDirectory({
  path: './newDirectory',
});
```

## filesystem.removeDirectory(RemoveDirectoryOptions)
Removes given directories.

### RemoveDirectoryOptions

- `path`: Directory path.

```js
await Neutralino.filesystem.removeDirectory({
  path: './tmpDirectory',
});
```

## filesystem.writeFile(WriteFileOptions)
Writes new text files with data.

### WriteFileOptions
- `fileName`: File name.
- `data`: Content of the file in string format.

```js
await Neutralino.filesystem.writeFile({
  fileName: './myFile.txt',
  data: 'Sample content'
});
```

## filesystem.writeBinaryFile(WriteBinaryFileOptions)
Writes new binary files with data.

### WriteBinaryFileOptions
- `fileName`: File name.
- `data`: Content of the binary file as an 
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
let rawBin = new ArrayBuffer(1);
let view = new Uint8Array(rawBin);
view[0] = 64; // Saves ASCII '@' to the binary file
await Neutralino.filesystem.writeBinaryFile({
  fileName: './myFile.bin',
  data: rawBin
});
```

## filesystem.readFile(ReadFileOptions)
Reads text files.

### ReadFileOptions

- `fileName`: File name.

### Return object (awaited):
- `data`: File content.

```js
let response = await Neutralino.filesystem.readFile({
  fileName: './myFile.txt'
});
console.log(`Content: ${response.data}`);
```

## filesystem.readBinaryFile(ReadBinaryFileOptions)
Reads binary files.

### ReadFileOptions

- `fileName`: File name.

### Return object (awaited):
- `data`: Content of the binary file as an 
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
let response = await Neutralino.filesystem.readBinaryFile({
  fileName: './myFile.bin'
});
let view = new Uint8Array(response.data);
console.log('Binary content: ', view);
```

## filesystem.removeFile(RemoveFileOptions)
Removes given file.

### RemoveFileOptions
- `fileName`: File name.


```js
await Neutralino.filesystem.removeFile({
  fileName: './myFile.txt'
});
```

## filesystem.readDirectory(ReadFileOptions)
Reads a whole directory.

### ReadDirectoryOptions

- `path`: File name.

### Return object (awaited):
- `entries`: An array of sub-directories and files.
  * `entry`: file name.
  * `type`: The type of the entry (`FILE` or `DIRECTORY`).

```js
let response = await Neutralino.filesystem.readDirectory({
  path: NL_PATH
});
console.log('Content: ', response.entries);
```

## filesystem.copyFile(source, destination)
Copies a file to a new destination.

### Parameters

- `source`: Source file as a string.
- `destination`: Destination file as a string.

```js
await Neutralino.filesystem.copyFile({
  source: './source.txt',
  destination: './destination.txt'
});
```

## filesystem.moveFile(source, destination)
Moves a file to a new destination.

### Parameters

- `source`: Source file as a string.
- `destination`: Destination file as a string.

```js
await Neutralino.filesystem.moveFile({
  source: './source.txt',
  destination: './destination.txt'
});
```

## filesystem.getStats(path)
Returns file statistics for the given path. If the given path doesn't exist or is unable to access, 
the awaited method will throw an error. Therefore, you can use this method to check the existence of a file or directory.

### Parameters

- `path`: File or directory path.

### Return object (awaited):
- `size`: Size in bytes.
- `isFile`: `true` if the path represents a normal file.
- `isDirectory`: `true` if the path represents a directory.

```js
let response = await Neutralino.filesystem.getStats({
  path: './sampleVideo.mp4'
});
console.log('Stats:', response);
