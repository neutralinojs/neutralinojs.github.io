# File System

> The `filesystem` module has system functions related to file handling.

## filesystem.createDirectory(string dirName,function success(data), function error)

### Parameters

#### _string dirName_

Creates a new directory.

#### _function success(data)_

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below.

```js
{
    "success" : "true"
}
```

#### _function error()_

A function that will be fired, when a problem occurs with Neutralino server connectivity.

### Example

```js
Neutralino.filesystem.createDirectory(
  "abcd",
  function (data) {
    console.log(data);
  },
  function () {
    console.error("error");
  }
);
```

## filesystem.removeDirectory(string dirName,function success(data), function error)

### Parameters

#### _string dirName_

Deletes an existing directory.

#### _function success(data)_

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below.

```js
{
     "success" : "true"
}
```

#### _function error()_

A function that will be fired, when a problem occurs with Neutralino server connectivity.

### Example

```js
Neutralino.filesystem.removeDirectory(
  "abcd",
  function (data) {
    console.log(data);
  },
  function () {
    console.error("error");
  }
);
```

## filesystem.readDirectory(string dirName,function success(data), function error)

### Parameters

#### _string dirName_

Directory path

#### _function success(data)_

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below.

```js
{
    "files" : [
        {
            "name": "abc",
            "type": "directory"
        },
        {
            "name": "abc.cpp",
            "type": "file"
        }
        .........
    ]
}
```

#### _function error()_

A function that will be fired, when a problem occurs with Neutralino server connectivity.

### Example

```js
Neutralino.filesystem.readDirectory(
  "abcd",
  function (data) {
    console.log(data);
  },
  function () {
    console.error("error");
  }
);
```

## filesystem.writeFile(string filename, string content,function success(data), function error)

### Parameters

#### _string filename_

#### _string content_

Creates a file and writes content to it.

#### _function success(data)_

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below.

```js
{
    "success" : "true"
}
```

#### _function error()_

A function that will be fired when a problem occurs with Neutralino server connectivity.

### Example

```js
Neutralino.filesystem.writeFile(
  "file1.txt",
  "hello world",
  function (data) {
    console.log(data);
  },
  function () {
    console.error("error");
  }
);
```

## filesystem.readFile(string filename, function success(data), function error)

### Parameters

#### _string filename_

Reads the content of a file.

#### _function success(data)_

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below.

```js
{
    "stdout" : "<Output of command>*********"
}
```

#### _function error()_

A function that will be fired, when a problem occurs with Neutralino server connectivity.

### Example

```js
Neutralino.filesystem.readFile(
  "file1.txt",
  function (data) {
    console.log(data);
  },
  function () {
    console.error("error");
  }
);
```

## filesystem.removeFile(string filename, function success(data), function error)

### Parameters

#### _string filename_

Deletes an existing file.

#### _function success(data)_

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below.

```js
{
    "stdout" : "<Output of command>*********"
}
```

#### _function error()_

A function that will be fired, when a problem occurs with Neutralino server connectivity.

### Example

```js
Neutralino.filesystem.removeFile(
  "file1.txt",
  function (data) {
    console.log(data);
  },
  function () {
    console.error("error");
  }
);
```
