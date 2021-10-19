---
title: Neutralino.os
---

`Neutralino.os` namespace contains methods related to the user's operating system.

## os.execCommand(command, options)
Executes a command and returns the output.

### Parameters
- `command`: The command that is to be executed.

### Options
- `shouldRunInBackground`: Executes the command in background and resolve the Promise immediately.

### Return object (awaited):
String data taken from the both standard output (STDOUT) and standard error (STDERR) streams of the command's process.

```js
let output = await Neutralino.os.execCommand('python --version');
console.log(`Your Python version: ${output}`);

await Neutralino.os.execCommand('npm start', { shouldRunInBackground: true });
```

## os.getEnv(key)
Provides the value of a given environment variable. Throws `NE_OS_ENVNOEX` if the key is not defined in environment variables.

### Parameters
- `key`: The name of the environment variable.

### Return object (awaited):
Value of the given environment variable.

```js
let value = await Neutralino.os.getEnvar('USER');
console.log(`USER = ${value}`);
```

## os.showOpenDialog(title, options)
Shows the file open dialog.

### Parameters
- `title`: Title of the dialog.

#### Options
- `filter`: An array of Filter objects to filter the files list.
- `multiSelections`: Enables multi selections.

#### Filter
- `name`: Filter name.
- `extensions`: Array of file extensions. Eg: `['jpg', 'png']`

### Return object (awaited):
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
- `title`: Title of the dialog.

#### Options
- `filter`: An array of Filter objects to filter the files list.
- `forceOverwrite`: Skips file overwrite warning message.

#### Filter
- `name`: Filter name.
- `extensions`: Array of file extensions. Eg: `['jpg', 'png']`

### Return object (awaited):
Filename.

```js
let entry = await Neutralino.os.showSaveDialog('Open a file', {
  filters: [
    {name: 'Images', extensions: ['jpg', 'png']},
    {name: 'All files', extensions: ['*']}
  ]
});
console.log('You have selected:', entry);
```

## os.showNotification(title, content, icon)
Displays a notification message.

### Parameters
- `title`: Notification title.
- `content`: Content of the notification.
- `icon` (optional): Icon name. Accpeted values are: `INFO`, `WARNING`, `ERROR`, and `QUESTION`. The default value is 
        `INFO`

```js
await Neutralino.os.showNotification('Hello world', 'It works!. Have a nice day');

await Neutralino.os.showNotification('Oops :/', 'Something went wrong', 'ERROR');
```

## os.showMessageBox(title, content, choice, icon)
Displays a message box.

### Parameters
- `title`: Title of the message box.
- `content`: Content of the message box.
- `choice` (optional): Message box buttons. Accpeted values are: `OK`, `OK_CANCEL`, `YES_NO`, `YES_NO_CANCEL`, `RETRY_CANCEL`, 
      and `ABORT_RETRY_IGNORE`. The default value is `OK`.
- `icon` (optional): Icon name. Accpeted values are: `INFO`, `WARNING`, `ERROR`, and `QUESTION`. The default value is `INFO`.

### Return object (awaited):
User action.

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
- `icon`: Tray icon path. Eg: `/resources/icons/trayIcon.png`. A 
          `20x20`-sized PNG image file works fine on all supported operating systems. 
- `menuItems`: An array of `TrayMenuItem` objects.

#### TrayMenuItem

- `id`: A unique identifier for each menu item. 
- `text`: Label of the menu item. This field is a mandatory field. Use `-` (hyphen) character for a menu separator.
- `isDisabled`: A boolean flag to disable/enable a specific menu item.
- `isChecked`: A boolean flag to mark a specific menu item as selected. 

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
- `title`: Name of the folder. Accepted values are: `config`, `data`, `cache`, `documents`, `pictures`, `music`, `video`,
            `downloads`, `savedGames1`, and `savedGames2`. Throws `NE_OS_INVKNPT` for invalid folder names.

### Return object (awaited):
User action.

```js
let downloadsPath = await Neutralino.os.getPath('downloads');
console.log(`Downloads folder: ${downloadsPath}`);
```
