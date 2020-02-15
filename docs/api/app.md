# app

> The `app` module controls running application.

## app.exit(function success(data), function error)

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
Neutralino.app.exit(
  function (data) {

  },
  function () {
    console.error('error');
  }
);
