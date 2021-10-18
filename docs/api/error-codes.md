---
title: Error Codes
---

If a particular native API call fails, Neutralinojs client library rejects the pending Promise with an error object.

The error object has the following structure.

```json
{
    code: "CODE"
    message: "MESSAGE"
}
```

## Native API error codes

| Error code                    | Message                                             | Thrown by
| --------------------------- | ------------------------------------------------------- | --------
| `NE_FS_DIRCRER`| Unable to create directory.        | `os.createDirectory`
| `NE_FS_RMDIRER`| Unable to remove directory.        | `os.removeDirectory`
| `NE_FS_FILRDER`| File read error.        | `filesystem.readFile`, `filesystem.readBinaryFile`
| `NE_FS_FILWRER`| File write error.        | `filesystem.writeFile`, `filesystem.writeBinaryFile`
| `NE_FS_FILRMER`| File remove error.        | `filesystem.removeFile`
| `NE_FS_NOPATHE`| No file or directory.        | `filesystem.getStats`, `filesystem.readDirectory`
| `NE_FS_COPYFER`| File copy error.        | `filesystem.copyFile`
| `NE_FS_MOVEFER`| File move error.        | `filesystem.moveFile`
| `NE_OS_ENVNOEX`| The environment variable is not defined..        | `os.getEnv`, 
| `NE_OS_INVMSGA`| Invalid message box arguments.        | `os.showMessageBox`
| `NE_OS_INVKNPT`| Invalid platform path name.        | `os.getPath`
| `NE_ST_INVSTKY`| Invalid storage key.        | `storage.getData`, `storage.setData`
| `NE_ST_STKEYWE`| Storage write error.        | `storage.setData`
| `NE_RT_INVTOKN`| Invalid access token.        | `all`
| `NE_RT_NATPRME`| No permission to execute the provided native method.        | `all`, 
| `NE_RT_APIPRME`| No permission to use the native API.        | `all`
| `NE_RT_NATRTER`| Native method runtime error. Mostly occured due to missing parameters.    | `all`
| `NE_RT_NATNTIM`| Native method is not implemented.        | `internal`
| `NE_CL_NSEROFF`| Neutralino server is not reachable. | `all`
