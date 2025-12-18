---
title: Neutralino.server
toc_max_heading_level: 2
---

`Neutralino.server` namespace offers functions to map local filesystem directories to the static server as a secure alternative for the `file://` protocol.


## server.mount(path, target)
Mounts a local directory. Throws `NE_FS_NOPATHE` and `NE_FS_NOTADIR` for invalid targets and `NE_SR_MPINUSE` if the path is already mounted. 

### Parameters

- `path` String: Resource path.
- `target` String: A directory in the local filesystem.

```js
await Neutralino.server.mount('/app-res', NL_PATH + '/app-res');
await fetch('/app-res/myFile.txt'); // loads NL_PATH + '/app-res/myFile.txt'
```

## server.unmount(path)
Deactivates a mount configuration. Throws `NE_SR_NOMTPTH` if the provided path is not mounted. 

### Parameters

- `path` String: Resource path.

```js
await Neutralino.server.unmount('/app-res');

```

## server.getMounts()
Lists mount configurations. 

### Return Object (awaited):
Directory mount map that stores each configuration entry as a key-value pair.


```js
let mounts = await Neutralino.server.getMounts();
console.log('Mounts:', mounts);
```
