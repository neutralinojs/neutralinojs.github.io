---
title: Neutralino.app
---

Neutralino.app namespace contains methods related to the current application instance.

## app.exit()
Terminates the running application.

```
await Neutralino.app.exit();
```

## app.keepAlive()
The keepAlive method is responsible for saving the Neutralinojs server instance from the automatic termination.
This method is called automatically from the client library for the browser mode.

```
await Neutralino.app.keepAlive();
```

## app.getConfig()
This method returns the current application configuration as a JSON object.

### Return object (awaited):
- `config`: Application configuration

```
await Neutralino.app.getConfig();
```

## app.open(OpenActionOptions)
This method opens a URL with the default web browser. 

:::tip
If your application is running the default web browser, this method will open a new tab.
:::

### OpenActionOptions

- `url`: URL to be opened (required).

```
await Neutralino.app.open({
  url: 'https://neutralino.js.org'
});
```
