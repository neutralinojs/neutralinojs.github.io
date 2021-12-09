---
title: Neutralino.updater
---

`Neutralino.updater` namespace contains methods related to built-in automatic updater. Neutralinojs offers
a built-in client-based updating mechanism. Therefore, you can update Neutralinojs apps without even calling
third-party update services, operating system level services, or other binaries/scripts.


## updater.checkForUpdates(url)
Checks latest updates from the given URL. The URL should return a valid Neutralinojs update manifest with
`Content-Type: application/json` header. Throws `NE_UP_CUPDMER` for invalid manifests and `NE_UP_CUPDERR`
for network connectivity issues.


### Parameters

- `url`: URL to fetch update manifest.

### Return object (awaited):
Update manifest.

```js
let url = 'https://example.com/updates/manifest.json';
let manifest = await Neutralino.updater.checkForUpdates(url);
```

## updater.install()
Installs updates from the downloaded update manifest. Throws `NE_UP_UPDNOUF` if the manifest isn't loaded.
If the update process fails, this function will throw `NE_UP_UPDINER`.


### Parameters

- `eventName`: Name of the event.
- `data` (optional): Additional data for the event.

```js
let url = 'https://example.com/updates/manifest.json';
let manifest = await Neutralino.updater.checkForUpdates(url);

if(manifest.version != NL_APPVERSION) {
    await Neutralino.updater.install();
}
else {
    console.log('You are using the latest version!');
}
```
