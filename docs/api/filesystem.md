---
title: Neutralino.filesystem
---

`Neutralino.filesystem` namespace contains methods for handling files.

## filesystem.createDirectory(path)
Creates a new directory. Throws `NE_FS_DIRCRER` if directory creation is not possible.

### Parameters
- `path` String: New directory path.

```js
await Neutralino.filesystem.createDirectory('./newDirectory');

await Neutralino.filesystem.createDirectory(NL_PATH + '/myFolder');
```

## filesystem.removeDirectory(path)
Removes a given directory. Throws `NE_FS_RMDIRER` if the removal is not possible.

### Parameters

- `path` String: Directory path.

```js
await Neutralino.filesystem.removeDirectory('./tmpDirectory');
```

## filesystem.writeFile(filename, data)
Writes a text file. Throws `NE_FS_FILWRER` for file write errors.

### Parameters
- `filename` String: Filename.
- `data` String: Content of the file.

```js
await Neutralino.filesystem.writeFile('./myFile.txt', 'Sample content');
```

## filesystem.appendFile(filename, data)
Appends text content to file. Throws `NE_FS_FILWRER` for file write errors. If the provided file doesn't exist,
this function creates a new file with `data`.

### Parameters
- `filename` String: Filename.
- `data` String: Content to append.

```js
await Neutralino.filesystem.appendFile('./myFile.txt', 'Sample ');
await Neutralino.filesystem.appendFile('./myFile.txt', 'content');
```

## filesystem.writeBinaryFile(filename, data)
Writes a binary file. Throws `NE_FS_FILWRER` for file write errors.

### Parameters
- `filename` String: Filename.
- `data` ArrayBuffer: Content of the binary file as an
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
let rawBin = new ArrayBuffer(1);
let view = new Uint8Array(rawBin);
view[0] = 64; // Saves ASCII '@' to the binary file

await Neutralino.filesystem.writeBinaryFile('./myFile.bin', rawBin);
```

## filesystem.appendBinaryFile(filename, data)
Appends binary data to a file. Throws `NE_FS_FILWRER` for file write errors. If the provided file doesn't exist,
this function creates a new file with `data`.

### Parameters
- `filename` String: Filename.
- `data` ArrayBuffer: Binary content to append as an
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
let rawBin = new ArrayBuffer(1);
let view = new Uint8Array(rawBin);
view[0] = 64; // Saves ASCII '@' to the binary file

await Neutralino.filesystem.appendBinaryFile('./myFile.bin', rawBin);
await Neutralino.filesystem.appendBinaryFile('./myFile.bin', rawBin);
```

## filesystem.readFile(filename)
Reads a text file. Throws `NE_FS_FILRDER` for file read errors.

### Parameters

- `filename`: Filename.

### Return String (awaited):
File content.

```js
let data = await Neutralino.filesystem.readFile('./myFile.txt');
console.log(`Content: ${data}`);
```

## filesystem.readBinaryFile(filename)
Reads binary files. Throws `NE_FS_FILRDER` for file read errors.

### Parameters

- `filename` String: Filename.

### Return Object (awaited):
Content of the binary file as an
[ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

```js
let data = await Neutralino.filesystem.readBinaryFile({
  fileName: './myFile.bin'
});
let view = new Uint8Array(data);

console.log('Binary content: ', view);
```

## filesystem.removeFile(filename)
Removes given file. Throws `NE_FS_FILRMER` for file removal errors.

### Parameters
- `filename` String: Filename.


```js
await Neutralino.filesystem.removeFile('./myFile.txt');
```

## filesystem.readDirectory(path)
Reads directory contents. Throws `NE_FS_NOPATHE` if the path doesn't exist.

### Parameters

- `path` String: File/directory path.

### Return Object (awaited):
  - `entry` String: file name.
  - `type` String: The type of the entry (`FILE` or `DIRECTORY`).

```js
let entries = await Neutralino.filesystem.readDirectory(NL_PATH);
console.log('Content: ', entries);
```

## filesystem.copyFile(source, destination)
Copies a file to a new destination. Throws `NE_FS_COPYFER` if the system cannot copy the file.

### Parameters

- `source` String: Source path.
- `destination` String: Destination path.

```js
await Neutralino.filesystem.copyFile('./source.txt', './destination.txt');
```

## filesystem.moveFile(source, destination)
Moves a file to a new destination. Throws `NE_FS_MOVEFER` if the system cannot move the file.

### Parameters

- `source` String: Source path.
- `destination` String: Destination path.

```js
await Neutralino.filesystem.moveFile('./source.txt', './destination.txt');
```

## filesystem.getStats(path)
Returns file statistics for the given path. If the given path doesn't exist or is inaccessible,`NE_FS_NOPATHE` is thrown.
Therefore, you can use this method to check for the existance of a file or directory.

### Parameters

- `path` String: File or directory path.

### Return Object (awaited):
- `size` Number: Size in bytes.
- `isFile` Boolean: `true` if the path represents a normal file.
- `isDirectory` Boolean: `true` if the path represents a directory.
<!-- - `createdAt` Number: On Windows, returns Unix milliseconds of the file creation time &mdash; On Unix or Unix-like platforms, returns Unix milliseconds of the last [inode](https://en.wikipedia.org/wiki/Inode) modification time.
- `modifiedAt` Number: Unix milliseconds of the last file modification time.-->

```js
let stats = await Neutralino.filesystem.getStats('./sampleVideo.mp4');
console.log('Stats:', stats);
