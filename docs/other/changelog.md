## Change log

### Version 1.0.8
**2018-10-11**

[Stable release]

#### What's new

- Default app was updated
- `NL_VERSION` global variable added

###### Neutralino mode changes
`window` - Runs on a native window
`browser` - Debug using a web browser
`cloud` - Runs as a server in background

- Use ping feature automatically with `browser` mode
- Neutralino was [compared](https://github.com/neutralinojs/evaluation) with Electron and NW.js
- window mode was selected as default
- `neutralino.exe` was updated with icon and publisher details (can be modified using a resource editing tool)

#### Bug fixes

- There are several bug fixes and improvements
 

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
