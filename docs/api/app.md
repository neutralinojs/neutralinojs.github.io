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
you can use this to terminate the process instantly. However, we recommend you 
to use the `exit()` method to close your application properly.


```js
await Neutralino.app.killProcess();
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
- `config`: Application configuration

```js
await Neutralino.app.getConfig();
```

## app.open(OpenActionOptions)
Opens a URL with the default web browser. 

:::tip
If your application is running on the default web browser, this method will open a new tab.
:::

### OpenActionOptions

- `url`: URL to be opened (required).

```js
await Neutralino.app.open({
  url: 'https://neutralino.js.org'
});
```
