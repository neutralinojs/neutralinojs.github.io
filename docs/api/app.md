---
title: Neutralino.app
toc_max_heading_level: 2
---

`Neutralino.app` namespace contains methods related to the current application instance.

## app.exit(exitCode)
Terminates the running application.

### Parameters

- `exitCode` Number: Process's exit code. The default value is always `0` (success).

```js
await Neutralino.app.exit(130);

await Neutralino.app.exit();
```

## app.killProcess()
Kills the application process. If the application becomes unresponsive,
you can use this to terminate the process instantly. It is recommended
to use the `exit()` method to close your application properly.

```js
await Neutralino.app.killProcess();
```

## app.restartProcess(options)
Restarts the current application instance.

### Options
- `args` String: Additional command-line arguments that need to be passed to the new application instance's process.

```js
await Neutralino.app.restartProcess();

await Neutralino.app.restartProcess({ args: '--restarted' });
```

## app.getConfig()
Returns the current application configuration as a JSON object.

### Return Object (awaited):
The current application configuration. Sometimes, this configuration object is not identical to your configuration file
because the framework updates the configuration during several situations such as config overriding via CLI arguments
and using `0` as the port.

```js
let config = await Neutralino.app.getConfig();
console.log('URL = ', config.url);
```

## app.broadcast(eventName, data)
Dispatches a new event to all app instances.

### Parameters

- `eventName` String: Name of the event.
- `data` Object (optional): Additional data for the event.

```js
await Neutralino.app.broadcast('myTestEvent', 'Hello');

await Neutralino.app.broadcast('myTestEvent', {myData: 'Test data'});

await Neutralino.app.broadcast('myTestEvent');
```

## app.mount(mountPath, targetPath)

Mounts a directory to a specific URL in Neutralino.js' router. This allows you to access files in the mounted directory using the Fetch API and by directly linking to them in your webpage. Throws `NE_FS_NOPATHE` when trying to mount a folder that does not exist,  `NE_FS_NOTADIR` when attempting to mount a path that is not a directory, `NE_AP_MPINUSE` if `mountPath` is already mounted.

### Parameters
- `mountPath` String: the desired mount point in the Neutralino server (e.g., '/user').
- `targetPath` String: the absolute path to the directory to be mounted (e.g., 'C:\\Users\\You\\Desktop'). Use [`NL_CWD`](./global-variables.md) to mount your application's current working directory.

```javascript
await Neutralino.app.mount('/user', 'C:\\Users\\You\\Desktop');
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

## app.unmount(mountPath)

Unmounts a previously mounted directory from the specified mount point. Throws `NE_AP_NOMTPTH` if `mountPath` was not mounted.

### Parameters

- `mountPath` String: The mount point to be unmounted (e.g., '/user').


```javascript
await Neutralino.app.unmount('/user');
// The directory is now unmounted and files are no longer accessible via '/user'.
```

## app.readProcessInput(readAll)
Reads string data from the standard input stream of the application process.

### Parameters

- `readAll` Boolean (optional): If this is set to `true`, the framework will read the entire standard stream. Otherwise,
only one line will be returned. The default value for this option is `false`.

```js
let name = await Neutralino.app.readProcessInput();
console.log(`Hello ${name}`);
```

### Return String (awaited):
Standard input stream data.

## app.writeProcessOutput(data)
Writes string data to the standard output stream of the application process.

### Parameters

- `data` String: Data to be written.

```js
await Neutralino.app.writeProcessOutput('Enter your name: ');
let name = await Neutralino.app.readProcessInput();
await Neutralino.app.writeProcessOutput(`Hello ${name}\n`);
```

## app.writeProcessError(data)
Writes string data to the standard error stream of the application process.

### Parameters

- `data` String: Data to be written.

```js
await Neutralino.app.writeProcessError('This message goes to stderr');
```
