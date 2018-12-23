# computer

> The `computer` module has system functions related to physical hardware.

## os.getRamUsage(function success(data), function error)

### Parameters


#### *function success(data)*

A function that will be fired when a connection with the Neutralino server is successful. The `data` variable is a json object with the structure shown below. 

```js
{
    "ram" :  {
      "available" : 6790840,
      "total" : 6790840
    }
}
```


#### *function error()*

A function that will be fired when a problem occurs with Neutralino server connectivity. 



### Example

```js
Neutralino.computer.getRamUsage( 
  function (data) {
    console.log(data);
  },
  function () {
    console.error('error');
  }
);
