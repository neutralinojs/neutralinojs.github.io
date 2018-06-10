# Writing your first app

Awesome! Now you got introduction about Neutralino apps. Let's build a very simple app.

## Greetings from Neutralino

We are going to create very simple app that display `Hi.. <Your Name>` on screen `<Your Name>` should be the logged user's name.

### Step 1 - Download SDK

Download SDK for your current platform.

### Step 2 - Build Interface

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
let getUsername = () => {
    let key = NL_OS == 'Windows' ? 'USERNAME' : 'USER';
    Neutralino.os.getEnvar(key, (data) => {
        document.getElementById('name').innerText = data.value;
    },
    () => {
        //handle error
    }
    );
        
}

Neutralino.init({
    load: () => {
        getUsername();
    }
});
```

### Step 4 - Run your app

Click `neutralino` binary file to launch your app on web browser.

Happy coding!
