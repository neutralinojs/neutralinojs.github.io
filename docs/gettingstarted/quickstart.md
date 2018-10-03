# Neutralino Quick Start

Now you have an idea why NeutralinoJs is important. This section will give you simple introduction to Neutralino app development. It's easy if you already have knowledge on HTML, CSS and JS.


## Download portable SDK

[Download portable SDK](https://github.com/neutralinojs/neutralinojs/releases) (Currently supports Windows and Linux). Extract the zip file and Find the app template and Neutralino runtime binaries. 

## Neutralio app structure

**Windows**

```
├── app
|  ├── assets
|  |  ├── app.css
|  |  ├── app.js
|  |  └── neutralino.js
|  ├── index.html
|  └── settings.json
└── neutralino.exe
└── neutralino
```

- `app/assets` - Directory for Neutralino js library and your custom js and css. By default there is `app.css` and `app.js`
- `index.html` - Build your application interfaces here.
- `settings.json` - Store your app settings. Required parameters are `appport` and `appname`
- `neutralino` - Linux runtime.
- `neutralino.exe` - Windows runtime.

## Neutralino Super Globals

These js variables can be used anywhere inside your js files or in `index.html`.

| Variable      | Description                                      |
| ------------- |:------------------------------------------------:|
| `NL_OS`       | Operating System name of the current user        |
| `NL_NAME`     | Neutralino app name loaded from `settings.json`  |
| `NL_PORT`     | Neutralino app port loaded from `settings.json`  |

Wow! Now you know the basics. Build simple app to start developing with Neutralino. Go to [My first app](gettingstarted/firstapp) tutorial.

 
