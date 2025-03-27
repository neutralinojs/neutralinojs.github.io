---
title: Error Codes
toc_max_heading_level: 2
---

If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object.

The error object has the following structure:

```js
{
    code: "<code>",
    message: "<message>"
}
```

- `code` String: Error code.
- `message` String: Error message

## Native API error codes

| Error code                    | Message                                             | Thrown from
| --------------------------- | ------------------------------------------------------- | --------
| `NE_FS_DIRCRER`| Unable to create directory.        | `os.createDirectory`
| `NE_FS_REMVERR`| Unable to remove path.        | `os.remove`
| `NE_OS_TRAYIER`| Unable to initialize the tray menu. This error is typically thrown when GNU/Linux systems don't contain an app indicator library.        | `os.setTray`
| `NE_FS_FILRDER`| File read error.        | `filesystem.readFile`, `filesystem.readBinaryFile`
| `NE_FS_FILWRER`| File write error.        | `filesystem.writeFile`, `filesystem.writeBinaryFile`
| `NE_FS_FILOPER`| File open error.        | `filesystem.openFile`
| `NE_FS_UNLTOUP`| Unable to update opened file id.        | `filesystem.updateOpenedFile`
| `NE_FS_UNLTFOP`| Unable to find opened file id.        | `filesystem.getOpenedFileInfo`
| `NE_FS_NOPATHE`| No file or directory.        | `filesystem.getStats`, `filesystem.readDirectory`
| `NE_FS_COPYERR`| Copy error.        | `filesystem.copy`
| `NE_FS_MOVEERR`| Move error.        | `filesystem.move`
| `NE_FS_UNLCWAT`| Unable to create watcher.        | `filesystem.createWatcher`
| `NE_FS_NOWATID`| Unable to find watcher.        | `filesystem.removeWatcher`
| `NE_OS_UNLTOUP`| Unable to update the spawned process due to an invalid process identifier or action. | `os.updateSpawnedProcess`
| `NE_OS_INVMSGA`| Invalid message box arguments.        | `os.showMessageBox`
| `NE_OS_INVKNPT`| Invalid platform path name.        | `os.getPath`
| `NE_ST_INVSTKY`| Invalid storage key.        | `storage.getData`, `storage.setData`
| `NE_ST_STKEYWE`| Storage write error.        | `storage.setData`
| `NE_RT_INVTOKN`| Invalid access token.        | `*`
| `NE_RT_NATPRME`| No permission to execute the provided native method.        | `*`
| `NE_RT_APIPRME`| No permission to use the native API.        | `*`
| `NE_RT_NATRTER`| Native method runtime error. Mostly occured due to missing parameters.    | `*`
| `NE_RT_NATNTIM`| Native method is not implemented.        | `internal`
| `NE_CL_NSEROFF`| Neutralino server is not reachable. | `*`
| `NE_EX_EXTNOTC`| Extension is not connected yet | `extensions.dispatch`
| `NE_UP_CUPDMER`| Invalid update manifest or mismatching applicationId | `updater.checkForUpdates`
| `NE_UP_CUPDERR`| Unable to fetch update manifest | `updater.checkForUpdates`
| `NE_UP_UPDNOUF`| No update manifest loaded | `updater.install`
| `NE_UP_UPDINER`| Update installation error | `updater.install`
| `NE_RS_NOPATHE`| Provided path doesn't exist in resources | `resources.readFile`, `resources.readBinaryFile`, `resources.getStats`
| `NE_RS_FILEXTF`| Unable to extract the requested file | `resources.extractFile` 
| `NE_RS_DIREXTF`| Unable to extract the requested directory | `resources.extractDirectory` 
| `NE_SR_MPINUSE`| Mount path is already in use | `server.mount`
| `NE_SR_NOMTPTH`| Cannot unmount the provided path, the path that was not mounted | `server.unmount`
