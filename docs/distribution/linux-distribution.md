---
title: Linux Distribution
---

`neu builder` supports two Linux packaging targets:

* **Debian (`deb`)** - Generates a Debian package (`.deb`).
* **AppImage (`appimage`)** - Generates a portable AppImage package (`.AppImage`).

The packaging configuration is defined under the `cli.builder.linux.targets` section of `neutralino.config.json`.

## Basic Commands

The basic syntax for the builder is:

```bash
neu builder <target> [--arch]
```

For example:

```bash
neu builder deb
neu builder deb --x64
neu builder deb --arm64

neu builder appimage
neu builder appimage --x64
neu builder appimage --arm64
```

The first argument specifies the packaging target. The optional architecture flag selects the CPU architecture to package. If no architecture is provided, the builder uses the first architecture listed in the target's `arch` configuration.

## Application Metadata

`applicationId`, `applicationName`, and `version` are top-level properties of `neutralino.config.json`. They are shared by all build targets, so they only need to be specified once.

* `applicationId` - a unique identifier for the application, typically written as a reverse-domain-style identifier such as `com.example.myapp`.
* `applicationName` - the name of the application used when generating the package and its associated metadata.
* `version` - the version of the application included in the generated package metadata.

---

## Debian (`deb`)

The `deb` target creates a Debian package for Debian-based Linux distributions.

### Configuration

The following example shows a complete standalone `deb` target using every supported option:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "linux": {
        "targets": [
          {
            "target": "deb",
            "arch": ["x64", "ia32", "armhf", "arm64"],
            "icon": "./installerassets/linux/deb/app.png",
            "category": "Utility",
            "output": "./dist/debian-output",
            "maintainer": "NeutralinoJS",
            "preinst": "./installerassets/linux/deb/scripts/preinst",
            "postinst": "./installerassets/linux/deb/scripts/postinst",
            "prerm": "./installerassets/linux/deb/scripts/prerm",
            "postrm": "./installerassets/linux/deb/scripts/postrm"
          }
        ]
      }
    }
  }
}
```

### Configuration Options

| Option       | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `target`     | Specifies the packaging target. Must be `deb`.                        |
| `arch`       | List of CPU architectures for which Debian packages can be generated. |
| `icon`       | Path to the application icon.                                         |
| `category`   | Application category used in the package metadata.                    |
| `output`     | Directory where the generated package is placed.                      |
| `maintainer` | Maintainer information included in the package metadata.              |
| `preinst`    | Optional script executed before installation or upgrade.              |
| `postinst`   | Optional script executed after installation or upgrade.               |
| `prerm`      | Optional script executed before removal or upgrade.                   |
| `postrm`     | Optional script executed after removal or upgrade.                    |

### Architecture

The `arch` option specifies the CPU architectures supported by the target:

```json
{
  "target": "deb",
  "arch": ["x64", "ia32", "armhf", "arm64"]
}
```

Select an architecture from the command line:

```bash
neu builder deb --arm64
```

When no architecture flag is given, the first entry of the `arch` array is used. With the example above, `neu builder deb` builds an `x64` package.

### Icon

The `icon` option specifies the application icon used by the package:

```json
{
  "target": "deb",
  "icon": "./installerassets/linux/deb/app.png"
}
```

### Category

The `category` option specifies the application category used in the package metadata:

```json
{
  "target": "deb",
  "category": "Utility"
}
```

### Maintainer

The `maintainer` option sets the maintainer information stored in the package metadata:

```json
{
  "target": "deb",
  "maintainer": "NeutralinoJS"
}
```

### Debian Lifecycle Scripts

The `deb` target supports the following optional lifecycle scripts, which run during package installation, upgrade, or removal:

| Option     | Description                                          |
| ---------- | ---------------------------------------------------- |
| `preinst`  | Runs before the package is installed or upgraded.    |
| `postinst` | Runs after the package is installed or upgraded.     |
| `prerm`    | Runs before the package is removed or upgraded.      |
| `postrm`   | Runs after the package is removed or upgraded.       |

For example:

```json
{
  "target": "deb",
  "preinst": "./installerassets/linux/deb/scripts/preinst",
  "postinst": "./installerassets/linux/deb/scripts/postinst",
  "prerm": "./installerassets/linux/deb/scripts/prerm",
  "postrm": "./installerassets/linux/deb/scripts/postrm"
}
```

These options are optional and can be omitted when the application does not require custom installation or removal steps.

### Output Directory {#deb-output}

The `output` option specifies where the generated Debian package is placed:

```json
{
  "target": "deb",
  "output": "./dist/debian-output"
}
```

The example above produces the package under:

```text
dist/
└── debian-output/
```

If `output` is omitted, the package is written to the default `dist/build-output` directory.

### Installer Assets

Debian-specific assets are referenced from the `deb` target configuration and can be organized as follows:

```text
installerassets/
└── linux/
    └── deb/
        ├── app.png
        └── scripts/
            ├── preinst
            ├── postinst
            ├── prerm
            └── postrm
```

The `app.png` file is used as the package icon.

The scripts are optional Debian package lifecycle scripts and can be used to perform additional actions during package installation, upgrade, or removal.

### Building

Run:

```bash
neu builder deb
```

Or select an architecture:

```bash
neu builder deb --arm64
```

The resulting package is placed in the location specified by the `output` option (see [Output Directory](#deb-output)).

---

## AppImage (`appimage`)

The `appimage` target generates a portable AppImage package for Linux.

### Configuration

The following example shows a complete standalone `appimage` target using every supported option:

```json
{
  "applicationId": "com.example.myapp",
  "applicationName": "My First Builder App",
  "version": "1.0.0",

  "cli": {
    "builder": {
      "linux": {
        "targets": [
          {
            "target": "appimage",
            "arch": ["x64", "arm64"],
            "icon": "./installerassets/linux/appimage/app.png",
            "license": "./installerassets/LICENSE.txt",
            "output": "./dist/linux",
            "maintainer": "NeutralinoJS"
          }
        ]
      }
    }
  }
}
```

### Configuration Options

| Option       | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `target`     | Specifies the packaging target. Must be `appimage`.             |
| `arch`       | List of CPU architectures for which AppImages can be generated. |
| `icon`       | Path to the application icon.                                   |
| `license`    | Path to the application's license file.                         |
| `output`     | Directory where the generated AppImage is placed.               |
| `maintainer` | Maintainer information associated with the package.             |

### Architecture

The `arch` option specifies the CPU architectures supported by the target:

```json
{
  "target": "appimage",
  "arch": ["x64", "arm64"]
}
```

Select an architecture from the command line:

```bash
neu builder appimage --arm64
```

When no architecture flag is given, the first entry of the `arch` array is used. With the example above, `neu builder appimage` builds an `x64` AppImage.

### Icon

The `icon` option specifies the application icon used by the package:

```json
{
  "target": "appimage",
  "icon": "./installerassets/linux/appimage/app.png"
}
```

### License

The `license` option specifies the license file included with the package:

```json
{
  "target": "appimage",
  "license": "./installerassets/LICENSE.txt"
}
```

### Maintainer

The `maintainer` option sets the maintainer information stored in the package metadata:

```json
{
  "target": "appimage",
  "maintainer": "NeutralinoJS"
}
```

### Output Directory {#appimage-output}

The `output` option specifies where the generated AppImage is placed:

```json
{
  "target": "appimage",
  "output": "./dist/linux"
}
```

The example above produces the package under:

```text
dist/
└── linux/
```

If `output` is omitted, the package is written to the default `dist/build-output` directory.

### Installer Assets

AppImage-specific assets are referenced from the `appimage` target configuration and can be organized as follows:

```text
installerassets/
└── linux/
    └── appimage/
        └── app.png
```

A license file can also be provided:

```text
installerassets/
└── LICENSE.txt
```

:::note
The AppImage implementation downloads the required AppImage tooling and runtime from their official GitHub release sources:

- [`appimagetool`](https://github.com/AppImage/appimagetool/releases/download/continuous)
- [AppImage Type 2 runtime](https://github.com/AppImage/type2-runtime/releases/download/continuous)

An active internet connection is required the first time an architecture is built. Once downloaded, the required binaries are cached locally in the `.neu-builder-cache` directory and reused for subsequent builds, so they do not need to be downloaded again.
:::

### Building

Run:

```bash
neu builder appimage
```

Or select an architecture:

```bash
neu builder appimage --x64
```

The resulting AppImage is placed in the location specified by the `output` option (see [Output Directory](#appimage-output)).