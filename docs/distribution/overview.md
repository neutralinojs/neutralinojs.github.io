---
title: Distribution Overview
---

There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based
small setup files. You can select an option according to your application distribution preference.

## Application build results

The `neu build` command generates the following files on any supported operating system into the `dist` directory.

| Filename                |   OS    | CPU architecture     | Type                             |
|-------------------------|---------|----------------------|----------------------------------|
| `myapp-linux_x64`       | Linux   | `x86_64`             | Application binary               |
| `myapp-linux_armhf`     | Linux   | `armhf`              | Application binary               |
| `myapp-linux_arm64`     | Linux   | `arm64`              | Application binary               |
| `myapp-mac_x64`         | macOS   | `x86_64`             | Application binary (Intel)       |
| `myapp-mac_universal`   | macOS   | `x86_64` and `arm64` | Application binary               |
| `myapp-mac_arm64`       | macOS   | `arm64`              | Application binary (M1/M2/M3)    |
| `myapp-win_x64`         | Windows | `x86_64`             | Application binary               |
| `resources.neu`         | all     | `N/A`                | Application resource file        |

Neutralinojs officially offers only pre-built `x64` and `armhf/arm64` Linux-only binaries.
If you need binaries for other CPU architectures, consider building binaries from the source
with [this guide](../contributing/framework-developer-guide). We are trying to officially support all CPU
architectures soon!

## Selecting files for packaging

The neu CLI generates application binaries for all supported platforms at once. These binaries are pre-built binaries.
Therefore, please check our
[security policy](https://github.com/neutralinojs/neutralinojs/security/policy#prebuilt-binaries) before you continue
with the distribution process.

As the first step for packaging, you can pick two files for each targeted operating system: application binary and
the resource file. For example, if you need to make an application package for `x64` Linux computers, pick `myapp-linux_x64`
and the `resources.neu` file. The `resources.neu` contains all application resources, so, double click on the binary and check whether
the resource file is not corrupted.

## Creating a portable application package (Build Scripts)
:::info
This section of documentation uses a [community project](https://github.com/hschneider/neutralino-build-scripts/) built by [@hschneider66](https://twitter.com/hschneider66) and is not related to Neutralinojs Official Distribution.
:::

This set of scripts replace the `neu build` command for macOS, Linux and Windows-builds. Instead of plain binaries, it outputs ready-to-use app-bundles.

### Setup

Clone the scripts to your root directory of your app folder.
```bash
git clone https://github.com/hschneider/neutralino-build-scripts.git build-scripts
```

Install jq, which is required for parsing JSON files:

```bash
# On macOS:
brew install jq
# On Linux or Windows/WSL:
sudo apt-get install jq
```
Add this to your `neutralino.config.json` file. This specifies the configuration for the build scripts.


```json
  "buildScript": {
    "mac": {
      "architecture": ["x64", "arm64", "universal"],
      "minimumOS": "10.13.0",
      "appName": "myapp",
      "appBundleName": "myapp",
      "appIdentifier": "com.marketmix.ext.bun.demo",
      "appIcon":  "resources/icons/icon.icns"
    },
    "win": {
      "architecture": ["x64"],
      "appName": "myapp",
      "appIcon": "resources/icons/icon.ico"
    },
    "linux": {
      "architecture": ["x64", "arm64", "armhf"],
      "appName": "myapp",
      "appIcon": "resources/icons/icon.png",
      "appPath":  "/usr/share/myapp",
      "appIconPath": "/usr/share/myapp/icon.png",
      "appIconLocation": "/usr/share/myapp/icon.png"
    }
  }
```
You can now copy required files from `build-scripts` folder to root directory, example: when building for windows, you can copy **_app_scaffolds/**, **build-win.sh**, **preproc-win.sh** and **postproc-win.sh**.

### Build for macOS

Neutralino-cli only produces plain macOS binaries and not macOS AppBundles. These files cannot be signed and notarized. Using these scripts we can generate valid AppBundles which pass Apple's notarization process successfully.

```bash
./build-mac.sh
```

This starts the following procedure:

- Erase the target folder ./dist/{APPNAME}
- Run `neu build`
- Execute `preproc-mac.sh`
- Copy all resources and extensions to the app-bundle.
- Execute `postproc-mac.sh`
- Create the `install-icon.cmd` helper script from its template in `_app_scaffolds/mac/`, if an app icon file exists.

The build is created in the `./dist` folder.

The `buildScript/mac` JSON segment in the config-file contains the following fields:

| Key           | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| architecture  | This is an array of the architectures, you want to build. In our example we build all 3 architectures. |
| minimumOS     | The minimum macOS version.                                   |
| appName       | The app-name as displayed in the Finder.                     |
| appBundleName | The macOS app-bundle name.                                   |
| appIdentifier | The macOS app-identifier.                                    |
| appIcon       | Path to the app-icon in **.icns** format. If only the filename is submitted, the file is expected in the project's root. |

:::note
You can add custom code to `preproc-mac.sh` and `postproc-mac.sh` if you need run it before or after the build process.
:::

for more details visit the [docs](https://github.com/hschneider/neutralino-build-scripts/#build-for-macos)

### Build for Windows

```bash
./build-win.sh
```

This starts the following procedure:

- Erase the target folder ./dist/{APPNAME}  
- Run `neu build`
- Execute `preproc-win.sh`
- Copy all resources and extensions to the app-bundle.
- Execute `postproc-win.sh`
- Create the `install-icon.cmd` helper script from its template in `_app_scaffolds/win/`, if an app icon file exists.

The build is created in the `./dist` folder.

The app-bundle is just a plain folder with the binary, resources.neu, the extensions-folder and WebView2Loader.dll. The DLL file can be deleted, if you deploy on WIndows 11 or newer.

> You can now run install `install-icon.cmd` to set the app icon as specifed in config file. This script required you to have [Resource Hacker](https://www.angusj.com/resourcehacker/) installed on your machine.

The `buildScript/win` JSON segment in the config-file contains the following fields:

| Key          | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| architecture | This is an array of the architectures, you want to build. Because Neutralino currently only support 'x64', you should leave this untouched. |
| appName      | The app-name as displayed in the File Explorer, with or without .exe-suffix. |
| appIcon      | Path to the app-icon in **.ico** format. If only the filename is submitted, the file is expected in the project's root. The icon is copied from this path into the app-bundle. To apply the icon to the executable file, you'll have to run **[Resource Hacker](https://www.angusj.com/resourcehacker/)** from a Windows machine. To do so, just double-click **install-icon.cmd** in the app-bundle. |

The icon installer in action:

![](https://marketmix.com//git-assets/neutralino-build-scripts/neutralino-icon-installer.gif)

:::note
You can add custom code to `preproc-win.sh` and `postproc-win.sh` if you need run it before or after the build process.
:::

for more details visit the [docs](https://github.com/hschneider/neutralino-build-scripts/#build-for-windows)

### Build for Linux

```bash
./build-linux.sh
```

This starts the following procedure:

- Erase the target folder ./dist/{APPNAME}  
- Run `neu build`
- Execute `preproc-linux.sh`
- Copy all resources and extensions to the app-bundle.
- Clones  the  .desktop-file from `_app_scaffolds/linux/` to the app-bundle and adapts its content.
- Execute `postproc-linux.sh`

All build targets are created in the `./dist` folder.

> Calling `sudo ./install.sh` from your build folder automatically installs the app to the locations you defined.

The `buildScript/linux` JSON segment in the config-file contains the following fields:

| Key          | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| architecture | This is an array of the architectures, you want to build. In our example we build all 3 architectures. |
| appName      | The app-name as displayed in the File Explorer.              |
| appIcon      | Path to the app-icon in **.png or .svg** format. If only the filename is submitted, the file is expected in the project's root. The icon is copied from this path into the app-bundle. Example: `resources/icons/icon.png` |
| appPath      | The path of application directory in system where the source files will live **after** installing without the executable name and without ending slash. Example: `/usr/share/myapp` |
| appIconPath  | This is path to application icon **after** the application has been installed in the Linux system. This path is written to the .desktop-file. Example: `/usr/share/myapp/icon.png` |
| appIconLocation  | Same as appIconPath. |

:::note
You can add custom code to `preproc-linux.sh` and `postproc-linux.sh` if you need run it before or after the build process.
:::

for more details visit the [docs](https://github.com/hschneider/neutralino-build-scripts/#build-for-linux)

## Creating a portable application package (Manually)

The following guides are not documented yet.

- [Creating a portable application package for Linux](#)
- [Creating a portable application package for Windows](#)

### Build for macOS

The `neu build` process creates a binary file for macOS, but that file can not be executed by a double-click action on macOS as a normal application.
The following steps shows how to create a simple double-clickable executable on macOS.

1. Open Terminal.
2. Navigate to the `/dist/myapp` directory:
3. Change the binary file type to `.app` file type:
```
mv <mac_binary> <mac_binary>.app
```
4. Give the app file the required execution permissions:
```
chmod +x <mac_binary>.app
```

Now you can execute the app by double-click.

## Creating application installers

The following guides are not documented yet.

- [Creating an application installer for Linux](#)
- [Creating an application installer for macOS](#)
- [Creating an application installer for Windows](#)




