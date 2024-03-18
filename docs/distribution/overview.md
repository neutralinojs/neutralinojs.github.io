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

## Creating portable application packages using build scripts 

The [`hschneider/neutralino-build-scripts`](https://github.com/hschneider/neutralino-build-scripts/) community project offers pre-developed build scripts for generating platform-specific application bundles. For example, it generates a standard app structure on GNU/Linux by generating `.desktop` file with app icon by also providing a shell script to install the app. 


Clone the scripts to your root directory of your app folder to get started with Neutralinojs build scripts:

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

Update `neutralino.config.json` file with build scripts configuration as follows:

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

### Generating an application bundle for macOS

You can generate a new application bundle for macOS by running the following command:

```bash
./build-mac.sh
```

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


Visit the [build scripts official documentation](https://github.com/hschneider/neutralino-build-scripts/#build-for-macos) for more details.

###  Generating an application bundle for Windows

You can generate a new application bundle for Windows by running the following command:

```bash
./build-win.sh
```

The build is created in the `./dist` folder.

> You can now run install `install-icon.cmd` to set the app icon as specifed in config file. This script required you to have [Resource Hacker](https://www.angusj.com/resourcehacker/) installed on your machine.

The `buildScript/win` JSON segment in the config-file contains the following fields:

| Key          | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| architecture | This is an array of the architectures, you want to build. Because Neutralino currently only support 'x64', you should leave this untouched. |
| appName      | The app-name as displayed in the File Explorer, with or without .exe-suffix. |
| appIcon      | Path to the app-icon in **.ico** format. If only the filename is submitted, the file is expected in the project's root. The icon is copied from this path into the app-bundle. To apply the icon to the executable file, you'll have to run **[Resource Hacker](https://www.angusj.com/resourcehacker/)** from a Windows machine. To do so, just double-click **install-icon.cmd** in the app-bundle. |

Visit the [build scripts official documentation](https://github.com/hschneider/neutralino-build-scripts/#build-for-windows) for more details.

### Generating an application bundle for Linux

You can generate a new application bundle for GNU/Linux by running the following command:

```bash
./build-linux.sh
```

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

Visit the [build scripts official documentation](https://github.com/hschneider/neutralino-build-scripts/#build-for-linux) for more details.

## Creating application installers

The following guides are not documented yet.

- [Creating an application installer for Linux](#)
- [Creating an application installer for macOS](#)
- [Creating an application installer for Windows](#)




