---
title: Neutralino.os
---

`Neutralino.os` namespace contains methods related to the user's operating system.

## os.execCommand(command, options)
Executes a command and returns the output.

### Parameters
- `command` String: The command that is to be executed.

### Options
- `background` Boolean: Executes the command in background and resolve the Promise immediately if this is set to `true`.
- `stdIn` String: Standard input as a string.

### Return Object (awaited):
- `pid` Number: Process identifier.
- `stdOut` String: Standard output.
- `stdErr` String: Standard error.
- `exitCode` Number: Exit code of the process.

```js
let info = await Neutralino.os.execCommand('python --version');
console.log(`Your Python version: ${info.stdOut}`);

await Neutralino.os.execCommand('npm start', { background: true });
```

## os.getEnv(key)
Provides the value of a given environment variable.

### Parameters
- `key` String: The name of the environment variable.

### Return String (awaited):
Value of the given environment variable. Returns an empty string if the environment variable is not defined.

```js
let value = await Neutralino.os.getEnvar('USER');
console.log(`USER = ${value}`);
```

## os.showOpenDialog(title, options)
Shows the file open dialog.

### Parameters
- `title` String (optional): Title of the dialog.

#### Options
- `filter` Filter[] (optional): An array of Filter objects to filter the files list.
- `multiSelections` (optional): Enables multi selections.

#### Filter
- `name` String: Filter name.
- `extensions` String: Array of file extensions. Eg: `['jpg', 'png']`

### Return Object (awaited):
An array of selected entries.

```js
let entries = await Neutralino.os.showOpenDialog('Save your diagram', {
  filters: [
    {name: 'Images', extensions: ['jpg', 'png']},
    {name: 'All files', extensions: ['*']}
  ]
});
console.log('You have selected:', entries);
```

## os.showSaveDialog(title, options)
Shows the file open dialog.

### Parameters
- `title` String (optional): Title of the dialog.

#### Options
- `filter` Filter[] (optional): An array of Filter objects to filter the files list.
- `forceOverwrite` Boolean (optional): Skips file overwrite warning message.

#### Filter
- `name` String: Filter name.
- `extensions` String[]: Array of file extensions. Eg: `['jpg', 'png']`

### Return String (awaited):
Selected filename.

```js
let entry = await Neutralino.os.showSaveDialog('Open a file', {
  filters: [
    {name: 'Images', extensions: ['jpg', 'png']},
    {name: 'All files', extensions: ['*']}
  ]
});
console.log('You have selected:', entry);
```


## os.showFolderDialog(title)
Shows the folder open dialog.

### Parameters
- `title` String (optional): Title of the dialog.

### Return String (awaited):
Selected folder.

```js
let entry = await Neutralino.os.showFolderDialog('Select installation directory');
console.log('You have selected:', entry);
```

## os.showNotification(title, content, icon)
Displays a notification message.

### Parameters
- `title` String: Notification title.
- `content` String: Content of the notification.
- `icon` String (optional): Icon name. Accpeted values are: `INFO`, `WARNING`, `ERROR`, and `QUESTION`. The default value is
        `INFO`

```js
await Neutralino.os.showNotification('Hello world', 'It works!. Have a nice day');

await Neutralino.os.showNotification('Oops :/', 'Something went wrong', 'ERROR');
```

## os.showMessageBox(title, content, choice, icon)
Displays a message box.

### Parameters
- `title` String: Title of the message box.
- `content` String: Content of the message box.
- `choice` String (optional): Message box buttons. Accpeted values are: `OK`, `OK_CANCEL`, `YES_NO`, `YES_NO_CANCEL`, `RETRY_CANCEL`,
      and `ABORT_RETRY_IGNORE`. The default value is `OK`.
- `icon` String (optional): Icon name. Accpeted values are: `INFO`, `WARNING`, `ERROR`, and `QUESTION`. The default value is `INFO`.

### Return String (awaited):
User's `choice`.

```js
await Neutralino.os.showMessageBox('Hello', 'Welcome');

let button = await Neutralino.os
            .showMessageBox('Confirm',
                            'Are you sure you want to quit?',
                            'YES_NO', 'QUESTION');
if(button == 'YES') {
    Neutralino.app.exit();
}
```

## os.setTray(options)
Creates/updates the tray icon and menu.

### Options
- `icon` String: Tray icon path. Eg: `/resources/icons/trayIcon.png`. A
          `20x20`-sized PNG image file works fine on all supported operating systems.
- `menuItems` TrayMenuItem[]: An array of `TrayMenuItem` objects.

#### TrayMenuItem

- `id` String (optional): A unique identifier for each menu item.
- `text` String: Label of the menu item. This field is a mandatory field. Use `-` (hyphen) character for a menu separator.
- `isDisabled` Boolean (optional): A boolean flag to disable/enable a specific menu item.
- `isChecked` Boolean (optional): A boolean flag to mark a specific menu item as selected.

```js
let tray = {
  icon: '/resources/icons/trayIcon.png',
  menuItems: [
    {id: "about", text: "About"},
    {text: "-"},
    {id: "quit", text: "Quit"}
  ]
};

await Neutralino.os.setTray(tray);
```

## os.getPath(name)
Returns known platform-specific folders such as Downloads, Music, Videos, etc.

### Parameters
- `title` String: Name of the folder. Accepted values are: `config`, `data`, `cache`, `documents`, `pictures`, `music`, `video`,
            `downloads`, `savedGames1`, and `savedGames2`. Throws `NE_OS_INVKNPT` for invalid folder names.

### Return String (awaited):
Path.

```js
let downloadsPath = await Neutralino.os.getPath('downloads');
console.log(`Downloads folder: ${downloadsPath}`);
```

## os.open(url)
Opens a URL with the default web browser. 

:::tip
If your application is running in the default web browser, this method will open a new tab.
:::

### Parameters

- `url` String: URL to be opened.

```js
Neutralino.os.open('https://neutralino.js.org');
```
