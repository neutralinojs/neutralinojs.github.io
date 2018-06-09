# os

> `os` module has system functions related to operating system of the current user.

## os.runCommand(string command, function success(data), function error)

### Parameters

#### *string command*

command what you want to execute 

#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "stdout" : "<Output of command>"
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.runCommand('help', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```

## os.getEnvar(string key, function success(data), function error)

### Parameters

#### *string key*

the environment variable that you want to get the value of 

#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 
```js
{
  "value" : "<value of environmental variable >"
}
```
#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.os.getEnvar('path', 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
```
