---
title: Neutralino.storage
---

Neutralinojs has an in-built shared key-value storage. It's like a global LocalStorage for all Neutralinojs modes.
Neutralinos.storage exposes methods for interacting with this storage feature.

## storage.putData(StorageWriterOptions)
This method writes data into Neutralinojs shared storage. 

### StorageWriterOptions

- `bucket`: A key to indentify data.
- `data`: Data as a JSON object.

```
await Neutralino.storage.putData({
  bucket: 'userDetails',
  data: {
    username: 'TestValue'
  }
});
```
