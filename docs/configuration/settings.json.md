# settings.json
A JSON file to store your app settings in. The settings are provided in JSON format. <br/>

## options 
These are supported in 1.0.4-alpha and above. 
### appname 
It configures the url for the browser to run your Neutralino app on. A sample url will be `localhost:8080/appname`. Here, `appname` is the name of the app you provided in settings.json 
```json
{
   "appname" : "my-neutralino-app"
}
```

### appport 
The port to run your Neutralino app on. The default is 0 (random avaiable port will be used). 

```json
{ 
   "appport":"8080"
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
| `window`      | Runs application in a native window              |
| `browser`     | Debug mode. Runs in the default browser          |
| `cloud`       | Runs as a background server                      |


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

### window

Sets the properties of window mode.

```json
{
    "appname" : "myapp",
    "appport" : "5006",
    "mode" : "window",
    "window" : {
        "width" : "1000",
        "height" : "700",
        "fullscreen" : true
    }
}
```

#### window.width

Width of the window in pixels

#### window.height

Height of the window in pixels

#### window.fullscreen

Boolean value saying whether application should be opened in full screen.


`NL_AP` will return `Njs` anywhere in your app
