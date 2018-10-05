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
The port to run your Neutralino app on. The default is 8080. 

```json
{ 
   "appport":"8080"
}
```

### mode
This sets the enviornment you want to run your Neutralino app on. The available enviornment options are `desktop` or `cloud`. <br/>

```json
{
   "mode": "desktop"
}
```

### cloud
It is used when the enviornment variable is set to `cloud`. It supports settings that can be used when cloud mode is enabled i.e, Neutralino application is meant to be hosted on a cloud platorm. 

```json
{ 
   "mode":"cloud",
   "cloud" :{
   
    } 
}
````
### cloud.blacklist 
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
