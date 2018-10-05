# File System

> The `filesystem` module has system functions related to file handling.

## filesystem.createDirectory(string dirName,function success(data), function error)


### Parameters

#### *string dirName*

Creates a new directory.
#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.filesystem.createDirectory('abcd', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```



## filesystem.removeDirectory(string dirName,function success(data), function error)

### Parameters

#### *string dirName*

Deletes an existing directory.
#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.filesystem.removeDirectory('abcd', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```


## filesystem.writeFile(string filename, string content,function success(data), function error)

### Parameters

#### *string filename*
#### *string content*

Creates a file and writes content to it.
#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

A function that will be fired when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.filesystem.writeFile('file1.txt', 'hello world',
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```

## filesystem.readFile(string filename, function success(data), function error)
### Parameters

#### *string filename*


Reads the content of a file.
#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.filesystem.readFile('file1.txt',
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```


## filesystem.removeFile(string filename, function success(data), function error)
### Parameters

#### *string filename*


Deletes an existing file.
#### *function success(data)*

A function that will be fired, when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

A function that will be fired, when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.filesystem.removeFile('file1.txt',
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```
