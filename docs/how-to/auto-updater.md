---
title: Auto Updater
---

Application developers often release new versions of their applications. Neutralinojs offers a simple and
extendable software updater for all supported operating systems. As you already know, Neutralinojs bundles all
application resources to the `resources.neu` file. The auto updater basically replaces the existing `resources.neu`
with the latest application resources over the network.


## Creating the update manifest

When you ask Neutralinojs to check for updates, it will check the update manifest via the network. Update manifest
refers to a JSON document which has the following format.

```json
{
    "applicationId": "js.neutralino.sample",
    "version": "0.0.2",
    "resourcesURL": "http://example.com/updater_test/update_res.neu",
    "data": {
    }
}
```

- `applicationId` String: Application identifier. You need to use the same name you used in `neutralinojs.config.json`.
Otherwise, the update check operation will not proceed.
- `version` String: Application version.
- `resourcesURL` String: A link to download `resources.neu`. You can use any file name as you wish, but make sure to
serve data with the `Content-Type: application/octet-stream` header.
- `data` Object (optional): Additional data about the update. Accepts any JSON value.

## Hosting the update manifest and resources

Host the application manifest and resources file on the internet or a private network according to your access
requirements. You can test auto updater locally by setting up a static server or placing update manifest and
the resource file into your application's resources directory.

Also, you can setup a DevOps pipeline to automate your application updates if you need. If you release
a new application version by upgrading Neutralinojs server, users have to download/install the app
again since the auto updater only update application resources (including Neutralinojs client).

## Writing code to update your app

Call the following function whenever you need to check for updates.

```js

try {
    let url = "http://example.com/updater_test/update_manifest.json";
    let manifest = await Neutralino.updater.checkForUpdates(url);
}
catch(err) {
    // Handle errors
}

```

Next, you can use the `manifest` object to compare versions.

```js

try {
    let url = "http://example.com/updater_test/update_manifest.json";
    let manifest = await Neutralino.updater.checkForUpdates(url);

    if(manifest.version != NL_APPVERSION) {
        await Neutralino.updater.install();
        await Neutralino.app.restartProcess();
    }
}
catch(err) {
    // Handle errors
}

```

As shown in the above code snippet, you can call `Neutralino.updater.install` to perform the update based
on the downloaded manifest. Later, restart the application with the `app.restartProcess` function.

