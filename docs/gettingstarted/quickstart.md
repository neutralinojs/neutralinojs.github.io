# Neutralino Quick Start

This section will give you a simple introduction to the Neutralinojs app development.


## Create a Neutralinojs project

If you already have Nodejs and npm installed, you can simply use [neu-cli](tools/cli). Otherwise, download the latest development kit from [releases](https://github.com/neutralinojs/neutralinojs/releases). 

### Creating a project with neu-cli

```bash
 $ npm install -g @neutralinojs/neu
 $ neu create hello-world
 $ cd hello-world
```


## File structure of a generic project

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

- `app/assets` - Directory for the Neutralinojs client library and your project's .js and .css files. By default, there are `app.css` and `app.js`
- `index.html` - Build your application interface here.
- `settings.json` - Store your app settings. `appport` and `appname` parameters are mandatory.
- `neutralino-linux` - Linux launcher.
- `neutralino-win.exe` - Windows launcher.
- `neutralino-mac` - macOS launcher.
- `storage` - Contains JSON storage data.

Besides, if you are using a frontend starter project, your project may contain some other directories and files. For example, the `src` directory consists of the source of the frontend. 

## Neutralinojs super globals

These JavaScript variables can be used anywhere.

| Variable      | Description                                      |
| ------------- |:------------------------------------------------:|
| `NL_OS`       | Operating system name                            |
| `NL_NAME`     | App name loaded from `settings.json`             |
| `NL_PORT`     | App port loaded from `settings.json`             |
| `NL_MODE`     | App mode loaded from `settings.json`             |
| `NL_VERSION`  | Neutralinojs version                             |
| `NL_CWD`      | Current working directory                        |
| `NL_ARGS`     | Command-line arguments                           |

Further, you can define your own [global variables](https://neutralino.js.org/docs/#/configuration/settings.json?id=globals) too.

Wow! You know the basics of Neutralino, let's build a simple app. Go to the [My first app](gettingstarted/firstapp) tutorial.

 
