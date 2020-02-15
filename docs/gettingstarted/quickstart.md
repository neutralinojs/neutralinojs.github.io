# Neutralino Quick Start

Now you have an idea why NeutralinoJs is important, this section will give you a simple introduction to Neutralino app development. It'll be easy if you have prior knowledge on HTML, CSS and JS.


## Download the Portable SDK

[Download portable SDK](https://github.com/neutralinojs/neutralinojs/releases). Extract the zip file and find the app template and Neutralino launchers. 

or, if you have Nodejs installed already, simply use [neu-cli](#/tools/cli)

## Neutralino App file structure

```
├── app
|  ├── assets
|  |  ├── app.css
|  |  ├── app.js
|  |  └── neutralino.js
|  ├── index.html
|  └── settings.json
└── neutralino-win.exe
└── neutralino-linux
└── neutralino-mac
└── storage
```

- `app/assets` - Directory for Neutralino js library and your custom .js and .css files. By default, there is `app.css` and `app.js`
- `index.html` - Build your application interfaces, here.
- `settings.json` - Store your app settings. Required parameters are `appport` and `appname`
- `neutralino-linux` - Linux launcher.
- `neutralino-win.exe` - Windows launcher.
- `neutralino-mac.exe` - macOS launcher.
- `storage` - Contains JSON storage data

## Neutralino Super Globals

These js variables can be used anywhere inside your js files or in the html views`.

| Variable      | Description                                      |
| ------------- |:------------------------------------------------:|
| `NL_OS`       | Operating System name of the current user        |
| `NL_NAME`     | Neutralino app name loaded from `settings.json`  |
| `NL_PORT`     | Neutralino app port loaded from `settings.json`  |
| `NL_MODE`     | Neutralino app mode loaded from `settings.json`  |
| `NL_VERSION`  | Neutralino version                               |

Wow! You know the basics of Neutralino, let's build a simple app to start developing. Go to the [My first app](gettingstarted/firstapp) tutorial.

 
