---
title: Neutralino.updater
---

`Neutralino.updater` namespace contains methods related to built-in automatic updater. Neutralinojs offers
a built-in client-based updating mechanism. Therefore, you can update Neutralinojs apps without even calling
third-party update services, operating system level services, or other binaries/scripts.

Learn more about extensions with [this guide](../how-to/auto-updater).


:::note
For this API to work, you should add `"filesystem.writeBinaryFile"` to the [`nativeAllowList` field](../configuration/neutralino.config.json.mc#nativeallowlist-string) of your `neutralino.config.json` file.
:::


## updater.checkForUpdates(url)
Checks latest updates from the given URL. The URL should return a valid Neutralinojs update manifest with
`Content-Type: application/json` header. Throws `NE_UP_CUPDMER` for invalid manifests and `NE_UP_CUPDERR`
for network connectivity issues.


### Parameters

- `url` String: URL to fetch update manifest.

### Return Object (awaited):
Update manifest.

```js
let url = 'https://example.com/updates/manifest.json';
let manifest = await Neutralino.updater.checkForUpdates(url);
```

## updater.install()
Installs updates from the downloaded update manifest. Throws `NE_UP_UPDNOUF` if the manifest isn't loaded.
If the update installation process fails, this function will throw `NE_UP_UPDINER`.

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
