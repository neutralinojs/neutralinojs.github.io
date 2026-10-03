---
title: Windows Distribution
---

`neu builder` supports the **NSIS (`nsis`)** packaging target for Windows. It generates a Windows installer with an `.exe` extension using NSIS (Nullsoft Scriptable Install System).

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

The first argument specifies the packaging target. The optional architecture flag selects the CPU architecture to package. If no architecture is provided, the builder uses the first architecture listed in the target's `arch` configuration.

## Configuration

Each target is defined as an object inside the `targets` array. The following example shows a complete `nsis` target using every supported option:

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
            "arch": ["x64", "ia32"],
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

### Application Metadata

`applicationId`, `applicationName`, and `version` are top-level properties of `neutralino.config.json`. They are shared by all build targets, so they only need to be specified once.

* `applicationId` - a unique identifier for the application, such as `com.example.myapp`.
* `applicationName` - the name of the application used by the builder when generating the package.
* `version` - the version of the application included in the generated package metadata.

## Configuration Options

| Option         | Description                                                              |
| -------------- | ------------------------------------------------------------------------ |
| `target`       | Specifies the packaging target. Must be `nsis`.                          |
| `arch`         | List of CPU architectures for which an installer can be generated.       |
| `icon`         | Path to the installer icon in `.ico` format.                             |
| `sidebarImage` | Path to the image displayed in the sidebar of the installer.             |
| `headerImage`  | Path to the image displayed in the header of the installer.              |
| `license`      | Path to the application's license file.                                  |
| `output`       | Directory where the generated installer is placed.                       |

## Option Reference

Each option below is added to a target object inside `cli.builder.windows.targets`. The snippets show only the relevant part of the target definition.

### Architecture

The `arch` option specifies the CPU architectures supported by the target:

```json
{
  "target": "nsis",
  "arch": ["x64", "ia32"]
}
```

Select an architecture from the command line:

```bash
neu builder nsis --x64
neu builder nsis --ia32
```

When no architecture flag is given, the first entry of the `arch` array is used. With the example above, `neu builder nsis` builds an `x64` installer.

### Installer Icon

The `icon` option specifies the `.ico` file used by the installer:

```json
{
  "target": "nsis",
  "icon": "./installerassets/windows/nsis/app.ico"
}
```

### Sidebar Image

The `sidebarImage` option specifies the image displayed in the sidebar of the installer:

```json
{
  "target": "nsis",
  "sidebarImage": "./installerassets/windows/nsis/sidebar.bmp"
}
```

The image should be provided in BMP format.

### Header Image

The `headerImage` option specifies the image displayed in the header of the installer:

```json
{
  "target": "nsis",
  "headerImage": "./installerassets/windows/nsis/header.bmp"
}
```

The image should be provided in BMP format.

### License

The `license` option specifies the license file used by the installer:

```json
{
  "target": "nsis",
  "license": "./installerassets/LICENSE.txt"
}
```

The license file can be shared between different installer targets if required.

### Output Directory

The `output` option specifies where the generated installer is placed:

```json
{
  "target": "nsis",
  "output": "./dist/windows"
}
```

The example above produces the installer under:

```text
dist/
└── windows/
```

If `output` is omitted, the package is written to the default `dist/build-output` directory.

## Installer Assets

Windows-specific installer assets are referenced from the `nsis` target configuration and can be organized as follows:

```text
installerassets/
├── LICENSE.txt
└── windows/
    └── nsis/
        ├── app.ico
        ├── sidebar.bmp
        └── header.bmp
```

## Building

Run:

```bash
neu builder nsis
```

Or select an architecture:

```bash
neu builder nsis --x64
```

The resulting installer is placed in the location specified by the `output` option (see [Output Directory](#output-directory)).