---
title: macOS Distribution
---

`neu builder` supports the **DMG (`dmg`)** packaging target for macOS. It generates a macOS disk image with a `.dmg` extension.

The packaging configuration is defined under the `cli.builder.mac.targets` section of `neutralino.config.json`.

## Basic Commands

The basic syntax for the macOS builder is:

```bash
neu builder <target> [--arch]
```

For the DMG target:

```bash
neu builder dmg
neu builder dmg --x64
neu builder dmg --arm64
neu builder dmg --universal
```

The first argument specifies the packaging target. The optional architecture flag selects the CPU architecture to package. If no architecture is provided, the builder uses the first architecture listed in the target's `arch` configuration.

## Configuration

Each target is defined as an object inside the `targets` array. The following example shows a complete `dmg` target using every supported option:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "mac": {
        "targets": [
          {
            "target": "dmg",
            "arch": ["x64", "arm64", "universal"],
            "icon": "./installerassets/mac/dmg/app.icns",
            "background": "./installerassets/mac/dmg/dmg-background.png",
            "output": "./dist/mac"
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

| Option       | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| `target`     | Specifies the packaging target. Must be `dmg`.                       |
| `arch`       | List of CPU architectures for which a disk image can be generated.   |
| `icon`       | Path to the application icon in `.icns` format.                      |
| `background` | Path to the background image used by the DMG.                        |
| `output`     | Directory where the generated disk image is placed.                  |

## Option Reference

Each option below is added to a target object inside `cli.builder.mac.targets`. The snippets show only the relevant part of the target definition.

### Architecture

The `arch` option specifies the CPU architectures supported by the target:

```json
{
  "target": "dmg",
  "arch": ["x64", "arm64", "universal"]
}
```

Select an architecture from the command line:

```bash
neu builder dmg --x64
neu builder dmg --arm64
neu builder dmg --universal
```

When no architecture flag is given, the first entry of the `arch` array is used. With the example above, `neu builder dmg` builds an `x64` disk image.

### Application Icon

The `icon` option specifies the `.icns` file used by the macOS application:

```json
{
  "target": "dmg",
  "icon": "./installerassets/mac/dmg/app.icns"
}
```

### DMG Background

The `background` option specifies the image used as the background of the DMG:

```json
{
  "target": "dmg",
  "background": "./installerassets/mac/dmg/dmg-background.png"
}
```

### Output Directory

The `output` option specifies where the generated disk image is placed:

```json
{
  "target": "dmg",
  "output": "./dist/mac"
}
```

The example above produces the disk image under:

```text
dist/
└── mac/
```

If `output` is omitted, the package is written to the default `dist/build-output` directory.

## Installer Assets

macOS-specific assets are referenced from the `dmg` target configuration and can be organized as follows:

```text
installerassets/
├── LICENSE.txt
└── mac/
    └── dmg/
        ├── app.icns
        └── dmg-background.png
```

## Building

Run:

```bash
neu builder dmg
```

Or select an architecture:

```bash
neu builder dmg --arm64
```

The resulting disk image is placed in the location specified by the `output` option (see [Output Directory](#output-directory)).