---
title: Neutralino.server
toc_max_heading_level: 2
---

`Neutralino.server` contains methods to change the behavior of Neutralino's built-in web server. By default, internally Neutralino serves the contents of your application's resource folder as a static site. With these methods, you can set additional routes for this server.

## server.mount(mountPath, targetPath)

Mounts a directory to a specific URL in Neutralino.js' router. This allows you to access files in the mounted directory using the Fetch API and by directly linking to them in your webpage. Throws `NE_FS_NOPATHE` when trying to mount a folder that does not exist,  `NE_FS_NOTADIR` when attempting to mount a path that is not a directory, `NE_SR_MPINUSE` if `mountPath` is already mounted.

### Parameters
- `mountPath` String: the desired mount point in the Neutralino server (e.g., '/user').
- `targetPath` String: the absolute path to the directory to be mounted (e.g., 'C:\\Users\\You\\Desktop'). Use [`NL_CWD`](./global-variables.md) to mount your application's current working directory.

```javascript
await Neutralino.server.mount('/user', 'C:\\Users\\You\\Desktop');
// Now you can fetch files from the mounted path
const response = await fetch('/user/hello.txt'); // Will load C:\Users\You\Desktop\hello.txt

if (response.ok) {
    console.log(await response.text());
}

// Create an image element and set its source to an image from the filesystem
const img = document.createElement('img');
img.src = '/user/example.png'; // Will load Will load C:\Users\You\Desktop\example.png

// Add the image to the current page
document.body.appendChild(img);
```

## server.unmount(mountPath)

Unmounts a previously mounted directory from the specified mount point. Throws `NE_SR_NOMTPTH` if `mountPath` was not mounted.

### Parameters

- `mountPath` String: The mount point to be unmounted (e.g., '/user').

```javascript
await Neutralino.server.unmount('/user');
// The directory is now unmounted and files are no longer accessible via '/user'.
```

## server.getMounts()

Retrieves the current mappings for the internal web server.

### Returns Object (awaited):

A plain JS object with keys being mounted routes and values being the folders they were mounted to.

```js
console.log(await Neutralino.server.getMounts());
/*
{
    '/user': 'C:\\Users\\You\\Desktop'
}
*/
```