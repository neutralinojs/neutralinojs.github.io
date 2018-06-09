# File System

> `filesystem` module has system functions related to file handling.

## os.createDirectory(string dirName,function success(data), function error)


### Parameters

#### *string dirName*

directory you want to create
#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.createDirectory('abcd', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```



## os.removeDirectory(string dirName,function success(data), function error)

### Parameters

#### *string dirName*

directory you want to remove
#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.removeDirectory('abcd', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```


## os.writeFile(string filename, string content,function success(data), function error)

### Parameters

#### *string filename*
#### *string content*

create a file and include the content to it
#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.writeFile('file1.txt', 'hello world',
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```

## os.readFile(string filename, function success(data), function error)
### Parameters

#### *string filename*


read the content of file
#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.readFile('file1.txt',
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```


## os.removeFile(string filename, function success(data), function error)
### Parameters

#### *string filename*


remove a created file
#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "stdout" : "<Output of command>*********" 
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.removeFile('file1.txt',
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```
