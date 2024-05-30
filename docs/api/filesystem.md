---
title: Neutralino.filesystem
toc_max_heading_level: 2
---

`Neutralino.filesystem` namespace contains methods for handling files.

## filesystem.createDirectory(path)
Creates a directory or multiple directories recursively. Throws `NE_FS_DIRCRER` if directory creation is
not possible.

### Parameters
- `path` String: New directory path.

```js
await Neutralino.filesystem.createDirectory('./newDirectory');

await Neutralino.filesystem.createDirectory(NL_PATH + '/myFolder/api/fs');
```

## filesystem.remove(path)
Removes a directory or file. If the given path is a directory, this function recursively removes all contents
of the specific directory. Throws `NE_FS_REMVERR` if the removal is not possible.

### Parameters

- `path` String: Directory or file path.

```js
await Neutralino.filesystem.remove('./tmpDirectory');
await Neutralino.filesystem.remove('./tmpFile.txt');
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

- `filename` String: Filename.
- `pos` Number (optional): File cursor position in bytes.
- `size` Number (optional): File reader buffer size in bytes.

### Return String (awaited):
File content.

```js
let data = await Neutralino.filesystem.readFile('./myFile.txt');
console.log(`Content: ${data}`);

let data = await Neutralino.filesystem.readFile('./myFile.txt', {
    pos: 2,
    size: 10
});
console.log(`Content: ${data}`);
```

## filesystem.readBinaryFile(filename)
Reads binary files. Throws `NE_FS_FILRDER` for file read errors.

### Parameters

- `filename` String: Filename.
- `pos` Number (optional): File cursor position in bytes.
- `size` Number (optional): File reader buffer size in bytes.

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

## filesystem.openFile(filename)
Creates a readable file stream. Throws `NE_FS_FILOPER` for file open errors.

### Parameters

- `filename` String: Filename.

### Return Number (awaited):
File stream identifier.

```js
let fileId = await Neutralino.filesystem.openFile('./myFile.txt');
console.log(`ID: ${fileId}`);
```

## filesystem.updateOpenedFile(id, action, data)
Invokes file stream actions. Throws `NE_FS_UNLTOUP` if the framework can't update the stream. Call this method
to read and seek an opened file (aka a readable stream).

### Parameters
- `id` Number: File stream identifier.
- `action` String: An action to take. Accepts only the following values:
    - `read`: Reads a bytes segment from the file stream.
    - `readBinary`: Behaves the same as `read` but uses the binary read mode.
    - `readAll`: Triggers the `read` action until file stream cursor position reaches
    [EOF](https://en.wikipedia.org/wiki/End-of-file).
    - `readAllBinary`: Behaves the same as `readAll` but uses the binary read mode.
    - `seek`: Sets the file cursor position.
    - `close`: Closes and frees file handler resources.
- `data` Object (optional): Additional data for the `action`. Send the buffer size in bytes (default: 256 bytes)
 if the `action` is `read`, `readBinary`, `readAll`, or `readAllBinary`. Send the file stream cursor position if the action is `seek`.

```js
let fileId = await Neutralino.filesystem.openFile('./myFile.txt');

let content = '';
Neutralino.events.on('openedFile', (evt) => {
  if(evt.detail.id == fileId) {
    switch(evt.detail.action) {
      case 'data':
        content += evt.detail.data;
        break;
      case 'end':
        console.log(content);
        break;
    }
  }
});

// Sets the file stream cursor to 10th byte
await Neutralino.filesystem.updateOpenedFile(fileId, 'seek', 10);
// Reads 2 bytes from the cursor position
await Neutralino.filesystem.updateOpenedFile(fileId, 'read', 2);
// Reads the next bytes until the cursor reaches EOF (buffer size: 2)
await Neutralino.filesystem.updateOpenedFile(fileId, 'readAll', 2);
```

## filesystem.getOpenedFileInfo(id)
Returns file stream details. Throws `NE_FS_UNLTFOP` if the file stream identifier is not valid.

### Parameters

- `id` Number: File stream identifier.

### Return Object (awaited):
- `id` Number: File stream identifier.
- `eof` Boolean: Becomes `true` if the stream reached EOF.
- `pos` Number: File stream cursor position.
- `lastRead` Number: Last read bytes.

```js
let info = await Neutralino.filesystem.getOpenedFileInfo(0);
console.log(info);
```

## filesystem.createWatcher(path)
Creates a filesystem watcher. Throws `NE_FS_UNLCWAT` for watcher creation failures. If there is an existing
active watcher for the given path, this function returns the existing watcher identifier.

### Parameters

- `path` String: Directory path.

### Return Number (awaited):
File watcher identifier.

```js
let watcherId = await Neutralino.filesystem.createWatcher(NL_PATH);
Neutralino.events.on('watchFile', (evt) => {
    if(watcherId == evt.detail.id) {
        console.log(evt.detail);
    }
});
console.log(`ID: ${watcherId}`);
```

## filesystem.removeWatcher(watcherId)
Removes a filesystem watcher. Throws `NE_FS_NOWATID` for watcher removal failures.

### Parameters

- `watcherId` Number: File watcher identifier.

### Return Number (awaited):
File watcher identifier.

```js
let watcherId = await Neutralino.filesystem.createWatcher(NL_PATH);
console.log(`ID: ${watcherId}`);
await Neutralino.filesystem.removeWatcher(watcherId);
```

## filesystem.getWatchers()
Returns information about created file watchers.

### Return Object (awaited):
An array of `FileWatcher` objects.

### FileWatcher
- `id` Number: Watcher identifier.
- `path` String: File watcher path.


```js
let watchers = await Neutralino.filesystem.getWatchers();
for(let watcher of watchers) {
    console.log(watcher);
}
```

## filesystem.readDirectory(path, options)
Reads directory contents. Throws `NE_FS_NOPATHE` if the path doesn't exist.

### Parameters

- `path` String: File/directory path.

### options
- `recursive` Boolean: Read sub-directories recursively. The default value is `false`.

### Return Object (awaited):
An array of `DirectoryEntry` objects.

### DirectoryEntry

  - `entry` String: file name.
  - `type` String: The type of the entry (`FILE` or `DIRECTORY`).

```js
let entries = await Neutralino.filesystem.readDirectory(NL_PATH);
console.log('Content: ', entries);
```

## filesystem.copy(source, destination)
Copies a file or directory to a new destination. Throws `NE_FS_COPYERR` if the system cannot copy the path.

### Parameters

- `source` String: Source path.
- `destination` String: Destination path.

### options
- `recursive` Boolean: Copy sub-directories recursively. The default value is `true`.
- `overwrite` Boolean: Overwrite an existing file with the same name. The default value is `true`.
- `skip` Boolean: Skip an existing file with the same name. The default value is `false`.

```js
await Neutralino.filesystem.copy('./source.txt', './destination.txt');
await Neutralino.filesystem.copy('./myDir', './myDirCopy');
```

## filesystem.move(source, destination)
Moves a file or directory to a new destination. Throws `NE_FS_MOVEERR` if the system cannot rename the path.

### Parameters

- `source` String: Source path.
- `destination` String: Destination path.

```js
await Neutralino.filesystem.move('./source.txt', './destination.txt');
await Neutralino.filesystem.move('./myDir', './myFolder');
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
- `createdAt` Number: On Windows, returns Unix milliseconds of the file creation time &mdash; On Unix or Unix-like platforms, returns Unix milliseconds of the last [inode](https://en.wikipedia.org/wiki/Inode) modification time.
- `modifiedAt` Number: Unix milliseconds of the last file modification time.

```js
let stats = await Neutralino.filesystem.getStats('./sampleVideo.mp4');
console.log('Stats:', stats);
