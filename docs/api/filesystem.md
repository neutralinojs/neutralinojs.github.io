---
title: Neutralino.filesystem
---

Neutralino.debug namespace contains methods for handling files.

## filesystem.createDirectory(CreateDirectoryOptions)
Creates a new directory.

### CreateDirectoryOptions
- `path`: New directory path.

```
await Neutralino.filesystem.createDirectory({
  path: './newDirectory',
});
```

## filesystem.removeDirectory(RemoveDirectoryOptions)
Removes given directories.

### RemoveDirectoryOptions

- `path`: Directory path.

```
await Neutralino.filesystem.removeDirectory({
  path: './tmpDirectory',
});
```

## filesystem.writeFile(WriteFileOptions)
Writes new files with data.

### WriteFileOptions
- `fileName`: File name.
- `data`: Content of the file in string format.

```
await Neutralino.filesystem.writeFile({
  fileName: './myFile.txt',
  data: 'Sample content'
});
```

## filesystem.readFile(ReadFileOptions)
Reads files contains text data.

### ReadFileOptions

- `fileName`: File name.

### Return object (awaited):
- `data`: File content.

```
let response = await Neutralino.filesystem.readFile({
  fileName: './myFile.txt'
});
console.log(`Content: ${response.data}`);
```

## filesystem.removeFile(RemoveFileOptions)
Removes given file.

### RemoveFileOptions
- `fileName`: File name.


```
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

```
let response = await Neutralino.filesystem.readDirectory({
  path: NL_PATH
});
console.log(`Content: ${response.entries}`);
```
