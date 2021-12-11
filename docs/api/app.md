---
title: Neutralino.app
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

### Return object (awaited):
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
