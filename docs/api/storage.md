---
title: Neutralino.storage
---

Neutralinojs has a built-in shared key-value storage. It's like a
global [`LocalStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) for all Neutralinojs modes.
`Neutralinos.storage` exposes methods for interacting with this storage feature.

:::tip
The storage API persists all data records into `.storage` directory in the
root directory of your application. If you want to clear all data records,
delete the `.storage` directory.
:::

## storage.setData(key, data)
Writes data into Neutralinojs shared storage. 

### Parameters

- `key` String: A unique identifier.
- `data` Object (optional): Data as a string. If this value is `null` or `undefined`, the specific data record will be erased from the disk.

```js
await Neutralino.storage.setData('userDetails',
                        JSON.stringify({ username: 'TestValue'})
});
```

## storage.getData(key)
Reads and returns data for a given Neutralinojs shared storage key. 

### Parameters
- `key` String: Storage data record identifier.

### Return String (awaited):
Data string of the storage record.


```js
let data = await Neutralino.storage.getData('userDetails');
console.log(`Data: ${data}`);
```
