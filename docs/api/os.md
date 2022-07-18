---
title: Neutralino.os
---

`Neutralino.os` namespace contains methods related to the user's operating system.

## os.execCommand(command, options)
Executes a command and returns the output.

### Parameters
- `command` String: The command that is to be executed.

### Options
- `background` Boolean: Executes the command in background and resolve the Promise immediately
if this is set to `true`. This option makes the process detached from the API function call, so if you need to
connect with the newly created process later, consider using `os.spawnProcess`.
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

## os.spawnProcess(command)
Spawns a process based on a command in background and let developers control it.

### Parameters
- `command` String: The command that is to be executed in a new process.

### Return Object (awaited):
- `id` Number: A Neutralino-scoped process identifier. This value is used for controlling the
process via the native API.
- `pid` Number: Process identifier from the operating system.

```js
let pingProc = await Neutralino.os.spawnProcess('ping neutralino.js.org');

Neutralino.events.on('spawnedProcess', (evt) => {
    if(pingProc.id == evt.detail.id) {
        switch(evt.detail.action) {
            case 'stdOut':
                console.log(evt.detail.data);
                break;
            case 'stdErr':
                console.error(evt.detail.data);
                break;
            case 'exit':
                console.log(`Ping process terminated with exit code: ${evt.detail.data}`);
                break;
        }
    }
});
```

## os.updateSpawnedProcess(id, action, data)
Updates a spawned process based on a provided action and data. Throws `NE_OS_UNLTOUP` if the process cannot be
updated.

### Parameters
- `id` Number: Neutralino-scoped process identifier.
- `action` String: An action to take. Accepts only the following values:
    - `stdIn`: Sends data to the process via the standard input stream.
    - `stdInEnd`: Closes the standard input stream file descriptor.
    - `exit`: Terminates the process.
- `data` Object (optional): Additional data for the `action`. Send stardard input string if the `action`
    is `stdIn`.


```js
let nodeProc = await Neutralino.os.spawnProcess('node');

Neutralino.events.on('spawnedProcess', (evt) => {
    if(nodeProc.id == evt.detail.id) {
        switch(evt.detail.action) {
            case 'stdOut':
                console.log(evt.detail.data); // 10
                break;
            case 'stdErr':
                console.error(evt.detail.data);
                break;
            case 'exit':
                console.log(`Node.js process terminated with exit code: ${evt.detail.data}`);
                break;
        }
    }
});

await Neutralino.os.updateSpawnedProcess(nodeProc.id, 'stdIn', 'console.log(5 + 5);');
await Neutralino.os.updateSpawnedProcess(nodeProc.id, 'stdInEnd');
```

## os.getSpawnedProcesses()
Returns all spawned processes.

### Return Object (awaited):
An array of `SpawnedProcess` objects.

#### SpawnedProcess
- `id` Number: A Neutralino-scoped process identifier..
- `pid` Number: Process identifier from the operating system.

```js
await Neutralino.os.spawnProcess('ping neutralino.js.org');
await Neutralino.os.spawnProcess('ping codezri.org');

let processes = await Neutralino.getSpawnedProcesses();
console.log(processes);
```

## os.getEnv(key)
Provides the value of a given environment variable.

### Parameters
- `key` String: The name of the environment variable.

### Return String (awaited):
Value of the given environment variable. Returns an empty string if the environment variable is not defined.

```js
let value = await Neutralino.os.getEnv('USER');
console.log(`USER = ${value}`);
```

## os.showOpenDialog(title, options)
Shows the file open dialog.

### Parameters
- `title` String (optional): Title of the dialog.

### Options
- `filter` Filter[] (optional): An array of Filter objects to filter the files list.
- `multiSelections` (optional): Enables multi selections.
- `defaultPath` String (optional): Initial path/filename displayed by the dialog.

#### Filter
- `name` String: Filter name.
- `extensions` String: Array of file extensions. Eg: `['jpg', 'png']`

### Return Object (awaited):
An array of selected entries.

```js
let entries = await Neutralino.os.showOpenDialog('Save your diagram', {
  defaultPath: '/home/my/directory/',
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

### Options
- `filter` Filter[] (optional): An array of Filter objects to filter the files list.
- `forceOverwrite` Boolean (optional): Skips file overwrite warning message.
- `defaultPath` String (optional): Initial path/filename displayed by the dialog.

#### Filter
- `name` String: Filter name.
- `extensions` String[]: Array of file extensions. Eg: `['jpg', 'png']`

### Return String (awaited):
Selected filename.

```js
let entry = await Neutralino.os.showSaveDialog('Open a file', {
  defaultPath: 'untitled.jpg',
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

### Options
- `defaultPath` String (optional): Initial path displayed by the dialog.

### Return String (awaited):
Selected folder.

```js
let entry = await Neutralino.os.showFolderDialog('Select installation directory', {
  defaultPath: '/home/my/directory/'
});
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
await Neutralino.os.showNotification('Hello world', 'It works! Have a nice day');

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
