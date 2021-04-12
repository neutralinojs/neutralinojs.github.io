---
title: Neutralino.os
---

Neutralino.os namespace contains methods related to the user's operating system.

## os.execCommand(ExecCommandOptions)
Executes a command and returns the output.

### ExecCommandOptions
- `command`: The command needs to be executed.

### Return object (awaited):
- `stdout`: String data taken from the standard output (STDOUT) of the command's process.

```
let response = await Neutralino.os.execCommand({
  command: 'python --version'
});
console.log(`Your Python version: ${response.stdout}`);
```

## os.getEnvar(GetEnvarOptions)
Provides the value of a given environment variable.

### GetEnvarOptions
- `key`: The name of the environment variable.

### Return object (awaited):
- `value`: Value of the given environment variable.

```
let response = await Neutralino.os.getEnvar({
  command: 'USER'
});
console.log(`USER = ${response.value}`);
```

## os.showDialogOpen(DialogOpenOptions)
Shows the file open dialog.

### DialogOpenOptions
- `title`: Title of the dialog.
- `isDirectoryMode`: A boolean value to allow directories to be selected. The
  default value is `false`.

### Return object (awaited):
- `selectedEntry`: The selected value (a folder or directory).

```
let response = await Neutralino.os.showDialogOpen({
  title: 'Select a folder',
  isDirectoryMode: true
});
console.log(`You've selected: ${response.selectedEntry}`);
```

## os.showDialogSave(DialogSaveOptions)
Shows the file save dialog.

### DialogOpenOptions
- `title`: Title of the dialog.

### Return object (awaited):
- `selectedEntry`: The selected value (a folder or directory).

```
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

```
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
- `yesButtonClicked`: A boolean values to indentify whether `Yes` button clicked in the `QUESTION` type messages.

```
let response = await Neutralino.os.showDialogSave({
  title: 'Save to a file'
});
console.log(`You've selected: ${response.selectedEntry}`);
