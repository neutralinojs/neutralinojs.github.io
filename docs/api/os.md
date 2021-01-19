# os

> The `os` module has system functions related to the operating system of the current user.

## os.runCommand(string command, function success(data), function error)

### Parameters

#### *string command*

The command that you wish to execute.

#### *function success(data)*

A function that will be fired when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "stdout" : "<Output of command>"
}
```


#### *function error()*

A function that will be fired when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.os.runCommand('help', 
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
```

## os.getEnvar(string key, function success(data), function error)

### Parameters

#### *string key*

The environment variable you wish to get.

#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 
```js
{
  "value" : "<value of environmental variable >"
}
```
#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.os.getEnvar('path', 
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
```


## os.dialogOpen(options, function success(data), function error)

### Parameters

#### *options*

`options` is a JSON object with the following fields.

`string title` - Title of the dialog.
`boolean isDirectoryMode` - Whether it will open directories or files.

#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 
```js
{
  "file" : "<selected file name with the path>"
}
```
#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.os.dialogOpen('Open a file..', 
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
```

## os.dialogSave(string title, function success(data), function error)

### Parameters

#### *string title*

Title text for the window

#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 
```js
{
  "file" : "<selected file name with the path>"
}
```
#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.os.dialogSave('Save as a file..', 
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
```

## os.showNotification(options, function success(data), function error)

### Parameters

#### *options*

`options` is a JSON object with the following fields.

`string summary` - Title of the notification.
`string body` - Content of the notification.

#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 
```js
{
  "message" : "Notification is pushed to the system"
}
```
#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.os.dialogOpen('Open a file..', 
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
```
