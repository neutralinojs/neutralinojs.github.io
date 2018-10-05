# computer

> `computer` module has system functions related to physical hardware.

## os.getRamUsage(function success(data), function error)

### Parameters


#### *function success(data)*

function that will be fired when connection is successful with Neutralino server. `data` has json content and the structure is shown as below. 

```js
{
    "ram" :  {
      "available" : 6790840,
      "total" : 6790840
    }
}
```


#### *function error()*

function that will be fired when a problem is occured with Neutralino server connectivity. 



### Example

```js
Neutralino.computer.getRamUsage( 
  (data) => {
    console.log(data);
  },
  () => {
    console.error('error');
  }
);
