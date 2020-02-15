# Writing your first app

Awesome! Now you got an introduction about Neutralino apps, let's build a very simple app.

## Greetings from Neutralino

We are going to create a very simple app that display `Hi.. <Your Name>` on the screen. `<Your Name>` should be the name of the currently logged in user's.

### Step 1 - Download the SDK

Download the SDK or use a template with neu-cli.

### Step 2 - Build the view

`app/index.html`

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>NeutralinoJs</title>
    <link rel="stylesheet" href="/assets/app.css">
  </head>
  <body>
    <div id="neutralinoapp">
      <h1>Hello <span id="name"></span></h1>
    </div>
    <script src="/neutralino.js"></script>
    <script src="/assets/app.js"></script>

  </body>
</html>
```

`app/assets/app.css`

```css
html, body{
    margin: 0px;
    padding: 0px;
}

#neutralinoapp {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #FFD700;
}

#neutralinoapp h1 {
    position: relative;
    float: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial;
    font-size: 60px;
    padding: 0px;
    margin: 0px;
}
```

### Step 3 - Develop app functions

`app/app.js`

```js
var getUsername = function () {
    var key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    Neutralino.os.getEnvar(key, function(data) {
        document.getElementById('name').innerText = data.value;
    },
    function () {
        //handle error
    }
    );
        
}

Neutralino.init({
    load: function () {
        getUsername();
    }
});
```

### Step 4 - Run your app

Click the `neutralino` binary file to launch your app.


### Step 5 - Debugging

Change neutralino mode in to `browser`. It will run your app inside the default browser. Open developer tools and start debugging.

Find the source code, [here](https://github.com/neutralinojs/neutralinojs-samples/tree/master/greetingsapp)

Happy coding!
