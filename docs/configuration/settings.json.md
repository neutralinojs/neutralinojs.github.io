# settings.json
A JSON file to store your app settings.<br/>

### appname 
It configures the url for the browser to run your Neutralino app on. A sample url will be `localhost:8080/appname`. Here, `appname` is the name of the app you provided in settings.json. This is more like the application identifier. Therefore, no spaces accepted.

```json
{
   "appname" : "my-neutralino-app"
}
```

### appport 
The port to run your Neutralino app on. The default is 0 (An avaiable random port will be used). 

```json
{ 
   "appport":"8080"
}
```


### url

The url that will be loaded first. If it is set to `/`, the `app/index.html` file will be loaded. Otherwise, the given URL will be loaded.<br/>

```json
{
   "url": "/"
}
```

```json
{
   "url": "https://github.com"
}
```

### mode
This sets the enviornment you want to run your Neutralino app on. The available enviornment options are `window` or `browser` and `cloud`. <br/>

```json
{
   "mode": "window"
}
```

| Variable      | Description                                      |
| ------------- |:------------------------------------------------:|
| `window`      | Runs the application in a native window          |
| `browser`     | Runs the application in the default browser.     |
| `cloud`       | Runs the application as a background server.     |


### cloud

Sets the properties of cloud mode.

#### cloud.blacklist 
It is used to disable a set of one or more commands, when the app is set to run in the cloud mode. It accepts a set of blacklisted commands as an array.

```json
{
   "mode":"cloud",
   "cloud":{
   "blacklist":["os.runCommand"]
   }
}
```

### globals 
Defines all custom global constants of the Neutralino app.

```json
{ 
   "globals": {
      "AP" : "Njs"
   }
}
```

`NL_AP` will return `Njs` anywhere in your app

### window

Sets properties for the native window.

```json
{
    "appname" : "myapp",
    "appport" : "5006",
    "mode" : "window",
    "url": "/",
    "window" : {
        "title": "My app",
        "width": "1000",
        "height": "700",
        "fullscreen": false,
        "alwaysontop": false,
        "iconfile": "neutralino.png",
        "enableinspector": false,
        "borderlesswindow": false,
        "maximize": false
    }
}
```

#### window.title

Window title

#### window.width

Width of the window in pixels

#### window.height

Height of the window in pixels

#### window.fullscreen

Boolean value saying whether application should be opened in full-screen mode.

#### window.alwaysontop

Boolean value to set the application window as the top-most window.

#### window.iconfile

Sets a transparent image file (`.png` format is recommended) as the application icon.

#### window.enableinspector

Shows the developer tools window. This feature is currently available only in Linux.

#### window.borderless

Boolean value to show/hide window border.

#### window.maximize

Boolean value to run your application maximized.

