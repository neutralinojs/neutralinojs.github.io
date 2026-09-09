---
title: Windows Distribution
---

`neu builder` supports the **NSIS (`nsis`)** packaging target for Windows. It generates a Windows installer with an `.exe` extension.

The packaging configuration is defined under the `cli.builder.windows.targets` section of `neutralino.config.json`.

## Basic Commands

The basic syntax for the Windows builder is:

```bash
neu builder <target> [--arch]
```

For the NSIS target:

```bash
neu builder nsis
neu builder nsis --x64
neu builder nsis --ia32
```

The first argument specifies the packaging target. The optional architecture argument selects the CPU architecture to package.

If no architecture is specified, the builder uses the first architecture defined in the target's `arch` configuration.

For example:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": [
              "x64",
              "ia32"
            ]
          }
        ]
      }
    }
  }
}
```

Running:

```bash
neu builder nsis
```

will use `x64` by default.

## NSIS Installer

The `nsis` target generates a Windows installer using NSIS (Nullsoft Scriptable Install System).

### Installer Assets

Windows-specific installer assets can be organized as follows:

```text
installerassets/
├── LICENSE.txt
└── windows/
    └── nsis/
        ├── app.ico
        ├── sidebar.bmp
        └── header.bmp
```

The assets are referenced from the `nsis` target configuration.

### Configuration

Add the `nsis` target under `cli.builder.windows.targets`:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": [
              "x64",
              "ia32"
            ],
            "icon": "./installerassets/windows/nsis/app.ico",
            "sidebarImage": "./installerassets/windows/nsis/sidebar.bmp",
            "headerImage": "./installerassets/windows/nsis/header.bmp",
            "license": "./installerassets/LICENSE.txt",
            "output": "./dist/windows"
          }
        ]
      }
    }
  }
}
```

### Configuration Options

| Option            | Description                                                              |
| ----------------- | ------------------------------------------------------------------------ |
| `applicationId`   | Unique identifier for the application, such as `com.example.myapp`.      |
| `applicationName` | Name of the application used by the builder when generating the package. |
| `version`         | Version of the application included in the generated package metadata.   |
| `target`          | Specifies the packaging target. Must be `nsis`.                          |
| `arch`            | List of CPU architectures for which Windows installers can be generated. |
| `icon`            | Path to the application icon in `.ico` format.                           |
| `sidebarImage`    | Path to the image displayed in the sidebar of the NSIS installer.        |
| `headerImage`     | Path to the image displayed in the header of the NSIS installer.         |
| `license`         | Path to the application's license file.                                  |
| `output`          | Directory where the generated Windows installer is placed.               |

### Architecture

The `arch` option specifies the architectures supported by the NSIS target.

For example:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": [
              "x64",
              "ia32"
            ]
          }
        ]
      }
    }
  }
}
```

A specific architecture can be selected from the command line:

```bash
neu builder nsis --x64
```

or:

```bash
neu builder nsis --ia32
```

If no architecture is provided, the first architecture in the `arch` array is used.

### Installer Icon

The `icon` option specifies the `.ico` file used by the installer:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": ["x64"],
            "icon": "./installerassets/windows/nsis/app.ico"
          }
        ]
      }
    }
  }
}
```

The icon can be placed in the project as:

```text
installerassets/
└── windows/
    └── nsis/
        └── app.ico
```

### Sidebar Image

The `sidebarImage` option specifies the image displayed in the sidebar of the NSIS installer:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": ["x64"],
            "sidebarImage": "./installerassets/windows/nsis/sidebar.bmp"
          }
        ]
      }
    }
  }
}
```

The image should be provided in BMP format.

### Header Image

The `headerImage` option specifies the image displayed in the header of the NSIS installer:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": ["x64"],
            "headerImage": "./installerassets/windows/nsis/header.bmp"
          }
        ]
      }
    }
  }
}
```

The image should be provided in BMP format.

### License

The `license` option specifies the license file used by the installer:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": ["x64"],
            "license": "./installerassets/LICENSE.txt"
          }
        ]
      }
    }
  }
}
```

The license file can be shared between different installer targets if required.

### Building a Windows Installer

Run:

```bash
neu builder nsis
```

Or select an architecture:

```bash
neu builder nsis --x64
```

The generated installer is placed in the directory specified by `output`.

For example:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": ["x64"],
            "output": "./dist/windows"
          }
        ]
      }
    }
  }
}
```

produces the installer under:

```text
dist/
└── windows/
```

---

## Complete Windows Configuration

A complete Windows configuration containing the `nsis` target can look like this:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "windows": {
        "targets": [
          {
            "target": "nsis",
            "arch": [
              "x64",
              "ia32"
            ],
            "icon": "./installerassets/windows/nsis/app.ico",
            "sidebarImage": "./installerassets/windows/nsis/sidebar.bmp",
            "headerImage": "./installerassets/windows/nsis/header.bmp",
            "license": "./installerassets/LICENSE.txt",
            "output": "./dist/windows"
          }
        ]
      }
    }
  }
}
```

After configuring the target, generate the Windows installer using:

```bash
neu builder nsis
```

For a specific architecture, append the architecture flag:

```bash
neu builder nsis --x64
neu builder nsis --ia32
```
