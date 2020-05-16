# app

> The `app` module controls running application.

## app.exit(function success(data), function error)

#### *function success(data)*

A function that will be fired when a connection with the Neutralino server is successful. The `data` variable is a json object.Whereas in this case it will not be executed since Neutralino runtime is already terminated.


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
