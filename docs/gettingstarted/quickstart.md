# Neutralino Quick Start

Now you have an idea why NeutralinoJs is important. This section will give you simple introduction to Neutralino app development. It's easy if you already have knowledge on HTML, CSS and JS.


## Download portable SDK

Download portable SDK related to your platform (Currently Windows and Linux). Extract the zip file and there is app template and Neutralino runtime. 

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
```

**Linux**

```
├── app
|  ├── assets
|  |  ├── app.css
|  |  ├── app.js
|  |  └── neutralino.js
|  ├── index.html
|  └── settings.json
└── neutralino
```

- `app/assets` - Directory for Neutralino js library and your custom js and css. By default there is `app.css` and `app.js`
- `index.html` - Build your application interfaces here.
- `settings.json` - Store your app settings. Required parameters are `appport` and `appname`
- `neutralino` - Platform dependent executable to run your app.

 
