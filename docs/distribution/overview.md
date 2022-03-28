---
title: Distribution Overview
---

There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based
small setup files. You can select an option according to your application distribution preference.

## Application build results

The `neu build` command generates the following files on any supported operating system into the `dist` directory.

| Filename            |  OS     | CPU architecture  | Type                    |
| ------------------- | ------- | --------- | ------------------------------- |
| `myapp-linux_x64`   | Linux   | `x64`     | Application binary              |
| `myapp-macos_x64`   | macOS   | `x64`     | Application binary              |
| `myapp-win_x64`     | Windows | `x64`     | Application binary              |
| `resources.neu`     | all     | `all`     | Application resource file       |

Neutralinojs officially offers only `x64` pre-built binaries. If you need binaries for other CPU architectures,
consider building binaries from source with [this guide](../contributing/framework-developer-guide).

## Selecting files for packaging

The neu CLI generates application binaries for all supported platforms at once. These binaries are pre-built binaries.
Therefore, please check our
[security policy](https://github.com/neutralinojs/neutralinojs/security/policy#prebuilt-binaries) before you continue
with the distribution process.

As the first step for packaging, you can pick two files for each targeted operating system: application binary and
the resource file. For example, if you need to make an application package for `x64` Linux computers, pick `myapp-linux_x64`
and the `resources.neu` file. The `resources.neu` contains all application resources, so, double click on the binary and check whether
the resource file is not corrupted.

## Creating a portable application package

The following guides are not documented yet.

- [Creating a portable application package for Linux](#)
- [Creating a portable application package for macOS](#)
- [Creating a portable application package for Windows](#)

### Creating a portable application package for macOS

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




