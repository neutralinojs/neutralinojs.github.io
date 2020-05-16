## Change log

### Version 1.4.0
**2020-05-03**

[Stable-release]

Milestone v1.4.0 was closed with [11 issues](https://github.com/neutralinojs/neutralinojs/issues?q=is%3Aopen+is%3Aissue+milestone%3Av1.4.0).

#### What's new

- `window.title` option added. Older setting was used as a shared identifier for url path and title whereas now `appname` is kind of app id (won't support spaces). Thus, `window.title` refers to the Native window title which supports spaces etc.

- More native window properties/configuration added.

`window.alwaysontop [bool] ` on all platforms

If `true` window will appear always on top.

`window.borderless [bool]` on all platforms

If true title bar will be hidden and allows developer to make their own title bar using CSS.

`window.iconfile [string]` on Windows and Linux

Sets an image/icon for Native window and it will appear on the task bar of the operating system. Transparent `.png` is recommended.

- `NL_CWD` global variable was added to all platforms. it has the current working directory. 

- Binary file support was added to all platforms. Eg: `.png` like images will be served by the Neutralino file server.

- Quick build script was added to the macos as well. (`bash build.sh macos` to build and copy all the things to `dist`) 

*Example `settings.json` structure for this version*

```json
{
    "appname" : "myapp",
    "appport" : "5006",
    "mode" : "window",
    "window" : {
        "title": "My app",
        "width" : "1000",
        "height" : "700",
        "fullscreen" : false,
        "alwaysontop": true,
        "borderless": false,
        "iconfile": "neutralino.png"
    }
}
```
[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.4.0) this release. 


### Version 1.3.0
**2019-12-30**

[Stable-release]

#### What's new

- Fixed build errors on Windows (filesystem headers related)
- `Neutralino.debug.log()` for all platforms
- Developer guide for Neutralino-mac was added to the README
- `Neutralino.app.exit()` for all platforms 
- Typescript starter app
- Full screen mode for all platforms 

Eg:-

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

Milestone [v1.3.0](https://github.com/neutralinojs/neutralinojs/issues?q=is%3Aissue+milestone%3Av1.3.0+is%3Aclosed)

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.3.0) this release. 

### Version 1.2.0
**2019-09-22**

[Pre-release]

#### What's new

- Mac OS support
- `Neutralino.debug.log` for Linux version (written to `neutralinojs.log` text file)
- Neutralino developer logging from c++ code

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.2.0) this release. 

### Version 1.1.0
**2019-01-20**

[Stable release]

#### What's new

- File picker support #133 `Neutralino.os.dialogOpen` and `Neutralino.os.dialogSave` were added
- Directory read feature added #124 via `Neutralino.filesystem.readDirectory` module
- Binding to random port option #123 
- Multiple html layouts support #135 

See Milestone  [#2](https://github.com/neutralinojs/neutralinojs/milestone/2)

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.1.0) this release. 

### Version 1.0.8
**2018-12-12**

[Stable release]

#### What's new

- Default app was updated
- `NL_VERSION` global variable added
- Neutralino mode changes
  - `window` - Runs on a native window
  - `browser` - Debug using a web browser
  - `cloud` - Runs as a server in background
- Automatic ping feature(self shutdown) with `browser` mode
- Neutralino was [compared](https://github.com/neutralinojs/evaluation) with Electron and NW.js
- window mode was selected as default
- `neutralino.exe` was updated with an icon and publisher details (can be modified using a resource editing tool)

#### Bug fixes

- There are several bug fixes and improvements

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.8) this release. 

### Version 1.0.7-alpha
**2018-10-11**

[Feature Update]

Announcing Window mode - See [wiki](https://github.com/neutralinojs/neutralinojs/wiki/Experimental-Window-mode)

- `desktop-window` mode will render njs app in a native window.
```json
{
    "appname" : "myapp",
    "appport" : "8080",
    "mode" : "desktop-window",
    "desktopwindow" : {
        "width" : "1000",
        "height" : "700"
    }
}
```

- Single release for all three modes `desktop`, `desktop-window` and `cloud`

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.7-alpha) this release.

### Version 1.0.6-alpha
**2018-10-06**

[Feature Update]
- Angularjs [template](https://github.com/neutralinojs/neutralinojs-angularjs-template) for Neutralinojs
- Reactjs [template](https://github.com/neutralinojs/neutralinojs-reactjs-template) for Neutralinojs
- Vuejs [template](https://github.com/neutralinojs/neutralinojs-vuejs-template) for Neutralinojs
- `NL_MODE` global constant - see [docs](https://neutralino.js.org/docs/#/gettingstarted/quickstart?id=neutralino-super-globals)
- Custom global constants can be defined from `settings.json` - see [docs](https://neutralino.js.org/docs/#/configuration/settings.json?id=globals)
- See sample for Neutralino cloud [here](https://github.com/neutralinojs/neutralinojs-cloud-samples)
- Bug fixes

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.6-alpha) this release.


### Version 1.0.5
**2018-09-29**

- Support for Windows child process (Silent commands mode)
- Bug fixes

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.5) this release.

### Version 1.0.4-alpha
**2018-08-26**

[Feature Update]
- support for hosting Neutralino apps on Cloud platform.
- support for blacklisting commands when in cloud mode.
- added configuration for cloud/desktop based apps in `settings.json`.

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.4-alpha) this release.

### Version 1.0.3-alpha
**2018-07-28**

[Feature Update]
- JSON based data store features.
- API for JSON based Storage.

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.3-alpha) this release.


### Version 1.0.2-beta
**2018-07-14**

- Bug fixes

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.2-beta) this release.


### Version 1.0.1-alpha
**2018-07-12**

- Automatic Neutralino run-time shutdown after inactive session
- Basic (Token based) authorization method to protect inside Networks
- SDK improvements

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.1-alpha) this release.


### Version 1.0.0-beta
**2018-06-14**

- Stable Windows support and experimental release for Linux
- Double click execution
- 4 core modules
- Global variables

[Download](https://github.com/neutralinojs/neutralinojs/releases/tag/v1.0.0-beta) this release.
