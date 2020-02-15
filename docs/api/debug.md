# debug

> The `debug` module has application debugging features.

## debug.log(logType, message, function success(data), function error)

### Parameters

#### *logType*

String values `INFO`,`ERROR`, `WARN`  

#### *message*

Message to be written in to `neutralino.log`

#### *function success(data)*

A function that will be fired when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
  "message":"Wrote to log file neutralino.log"
}
```


#### *function error()*

A function that will be fired when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.debug.log(
  'INFO', 'This is a log message'
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
