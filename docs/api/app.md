---
title: Neutralino.app
---

`Neutralino.app` namespace contains methods related to the current application instance.

## app.exit(exitCode)
Terminates the running application.

### Parameters

- `exitCode`: An integer value for the process's exit code. The default value is always `0` (success). 

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

- `args`: Additional command-line arguments that need to be passed to the new application instance's process.  

```js
await Neutralino.app.restartProcess();

await Neutralino.app.restartProcess({ args: '--restarted' });
```

## app.keepAlive()
The keepAlive method is responsible for saving the Neutralinojs server instance from the automatic termination.
This method is called automatically from the client library for the browser mode.

```js
await Neutralino.app.keepAlive();
```

## app.getConfig()
Returns the current application configuration as a JSON object.

### Return object (awaited):
The current application configuration. Sometimes, this configuration object is not identical to your configuration file
because the framework updates the configuration during several situations such as config overriding via CLI arguments 
and using `0` as the port. 

```js
let config = await Neutralino.app.getConfig();
console.log('URL = ', config.url);
```
