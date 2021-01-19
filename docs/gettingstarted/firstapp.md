# Writing your first app

We are going to create a very simple app that displays `Hi.. <Your Name>` on the screen. `<Your Name>` should be the name of the currently logged user.

### Step 1 - Create new project

### With neu-cli

```bash
 $ neu create --template hello-world
```

### Without neu-cli

Download the latest development kit from [releases](https://github.com/neutralinojs/neutralinojs/releases). Thereafter, extract the files and rename the directory to `hello-world`.

### Step 2 - Building the view

Neutralinojs initially loads the contents of `app/index.html` file.

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

### Step 3 - Writing codes

Add the following code to the `app/app.js` file.

`app/app.js`

```js
var getUsername = function () {
    var key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    Neutralino.os.getEnvar(key, function(data) {
        document.getElementById('name').innerText = data.value;
    },
    function () {
        //handle the error
    }
    );
        
}

Neutralino.init({
    load: function () {
        getUsername();
    }
});
```

### Step 4 - Running your application.

### With neu-cli

```bash
 $ neu run 
 $ neu listen // Execute with the live-reload
```

### Without neu-cli

Double click on the binary according to your platform.


### Step 5 - Debugging

There are several ways to debug. You can select what you like :)

### Developer tools of the web browser

Change `mode` to `browser` in the `settings.json` file. Whenever you execute the application, it will use your default web browser. Thereafter, you will be able to use the developer tools.

### Enabling WebKit developer tools

If you are developing on Linux, simply set `window.enableinspector` as `true`. Your application will launched with WebKit developer tools.

Happy coding!
