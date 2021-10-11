---
title: Neutralino.os
---

`Neutralino.os` namespace contains methods related to the user's operating system.

## os.execCommand(ExecCommandOptions)
Executes a command and returns the output.

### ExecCommandOptions
- `command`: The command that is to be executed.

### Return object (awaited):
- `output`: String data taken from the both standard output (STDOUT) and standard error (STDERR) streams of the command's process.

```js
let response = await Neutralino.os.execCommand({
  command: 'python --version'
});
console.log(`Your Python version: ${response.output}`);
```

## os.getEnvar(GetEnvarOptions)
Provides the value of a given environment variable.

### GetEnvarOptions
- `key`: The name of the environment variable.

### Return object (awaited):
- `value`: Value of the given environment variable.

```js
let response = await Neutralino.os.getEnvar({
  key: 'USER'
});
console.log(`USER = ${response.value}`);
```

## os.showDialogOpen(DialogOpenOptions)
Shows the file open dialog.

### DialogOpenOptions
- `title`: Title of the dialog.
- `isDirectoryMode`: A boolean value to allow directories to be selected. The
  default value is `false`.
- `filter`: An array of file extensions to filter the file list. Eg: `filter: ['js', 'ts', '*']`.

### Return object (awaited):
- `selectedEntry`: The selected value (a folder or directory).

```js
let response = await Neutralino.os.showDialogOpen({
  title: 'Select a folder',
  isDirectoryMode: true
});
console.log(`You've selected: ${response.selectedEntry}`);
```

## os.showDialogSave(DialogSaveOptions)
Shows the file save dialog.

### DialogSaveOptions
- `title`: Title of the dialog.

### Return object (awaited):
- `selectedEntry`: The selected value (a folder or directory).

```js
let response = await Neutralino.os.showDialogSave({
  title: 'Save to a file'
});
console.log(`You've selected: ${response.selectedEntry}`);
```

## os.showNotification(NotificationOptions)
Displays a notification message.

### NotificationOptions
- `summary`: Caption of the notification message.
- `body`: Content of the notification.

```js
await Neutralino.os.showNotification({
  summary: 'Hello world',
  body: 'It works!. Have a nice day'
});
```

## os.showMessageBox(MessageBoxOptions)
Displays a message box.

### MessageBoxOptions
- `title`: Title of the message box.
- `content`: Content of the message box.
- `type`: Message box type. Accepted values are `WARN`, `ERROR`, `INFO`, and `QUESTION`.

### Return object (awaited):
- `yesButtonClicked`: A boolean value to identify whether `Yes` button is clicked in `QUESTION` type messages.

```js
let response = await Neutralino.os.showDialogSave({
  title: 'Save to a file'
});
console.log(`You've selected: ${response.selectedEntry}`);
```

## os.setTray(TrayOptions)
Creates/updates the tray icon and menu.

### TrayOptions
- `icon`: Tray icon path. Eg: `/resources/icons/trayIcon.png`. A 
          `20x20`-sized PNG image file works fine on all supported operating systems. 
- `menuItems`: An array of `TrayMenuItem` objects.

### TrayMenuItem

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
