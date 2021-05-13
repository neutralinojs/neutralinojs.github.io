---
title: Neutralino.storage
---

Neutralinojs has an in-built shared key-value storage. It's like a
global [`LocalStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for all Neutralinojs modes.
`Neutralinos.storage` exposes methods for interacting with this storage feature.

:::tip
The storage API persists all data records into `.storage` directory in the
root directory of your application. If you want to clear all data records,
delete the `.storage` directory.
:::

## storage.putData(StorageWriterOptions)
Writes data into Neutralinojs shared storage. 

### StorageWriterOptions

- `bucket`: A key to indentify data.
- `data`: Data as a string. If this value is `null` or `undefined`,
the specific data record will be erased from the disk.

```
await Neutralino.storage.putData({
  bucket: 'userDetails',
  data: JSON.stringify({
    username: 'TestValue'
  })
});
```

## storage.getData(StorageReaderOptions)
Reads and returns data for a given Neutralinojs shared storage key. 

### StorageReaderOptions
- `bucket`: The key of the storage data record.

### Return object (awaited):
- `data`: Data string of the storage record.


```
let response = await Neutralino.storage.getData({
  bucket: 'userDetails'
});
console.log(`Data: ${response.data}`);
```
