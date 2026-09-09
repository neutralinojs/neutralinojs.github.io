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

The first argument specifies the packaging target. The optional architecture argument selects the CPU architecture to package.

If no architecture is specified, the builder uses the first architecture defined in the target's `arch` configuration.

For example:

```json
"arch": [
  "x64",
  "arm64"
]
```

Running:

```bash
neu builder appimage
```

will use `x64` by default.

## Debian Packages

The `deb` target creates a Debian package for Debian-based Linux distributions.

### Installer Assets

Debian-specific assets can be organized as follows:

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

### Configuration

Add the `deb` target under `cli.builder.linux.targets`:

```json
{
    "applicationId": "com.example.myapp",
    "applicationName": "My First Builder App",
    "version": "1.0.0",

    "cli": {
      "target": "deb",
      "arch": [
        "x64",
        "ia32",
        "armhf",
        "arm64"
      ],
      "icon": "./installerassets/linux/deb/app.png",
      "category": "Utility",
      "output": "./dist/debian-output",
      "maintainer": "NeutralinoJS",
      "preinst": "./installerassets/linux/deb/scripts/preinst",
      "postinst": "./installerassets/linux/deb/scripts/postinst",
      "prerm": "./installerassets/linux/deb/scripts/prerm",
      "postrm": "./installerassets/linux/deb/scripts/postrm"
    }
}
```


### Configuration Options

| Option       | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `applicationId`   | Unique identifier for the application, typically written as a reverse-domain-style identifier such as `com.example.myapp`. |
| `applicationName` | Name of the application used when generating the package and its associated metadata.                                      |
| `version`         | Version number of the application included in the generated package metadata.                                              |
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

The `arch` option specifies the architectures supported by the target.

For example:

```json
"arch": [
  "x64",
  "ia32",
  "armhf",
  "arm64"
]
```

A specific architecture can be selected from the command line:

```bash
neu builder deb --arm64
```

If no architecture is provided, the first architecture in the `arch` array is used.

### Debian Lifecycle Scripts

The following lifecycle scripts can be specified:

* `preinst` - Runs before the package is installed or upgraded.
* `postinst` - Runs after the package is installed or upgraded.
* `prerm` - Runs before the package is removed or upgraded.
* `postrm` - Runs after the package is removed or upgraded.

These options are optional and can be omitted when the application does not require custom installation or removal steps.

### Building a Debian Package

Run:

```bash
neu builder deb
```

Or select an architecture:

```bash
neu builder deb --arm64
```

The generated package is placed in the directory specified by `output`.

For example:

```json
"output": "./dist/debian-output"
```

produces the package under:

```text
dist/
└── debian-output/
```

If no `output` option is defined in `neutralino.config.json` the output is stored under `dist/build-output` folder.

---

## AppImage

The `appimage` target generates a portable AppImage package for Linux.

:::note
The AppImage implementation downloads the required AppImage tooling and runtime from their official GitHub release sources:

- [`appimagetool`](https://github.com/AppImage/appimagetool/releases/download/continuous)
- [AppImage Type 2 runtime](https://github.com/AppImage/type2-runtime/releases/download/continuous)

An active internet connection is required the first time an architecture is built. Once downloaded, the required binaries are cached locally in the `.neu-builder-cache` directory and reused for subsequent builds, so they do not need to be downloaded again.
:::
### Installer Assets

AppImage-specific assets can be organized as follows:

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

### Configuration

Add the `appimage` target under `cli.builder.linux.targets`:

```json
{
    "applicationId": "com.example.myapp",
    "applicationName": "My First Builder App",
    "version": "1.0.0",
    
    "cli": {
    "target": "appimage",
    "arch": [
      "x64",
      "arm64"
    ],
    "icon": "./installerassets/linux/appimage/app.png",
    "license": "./installerassets/LICENSE.txt",
    "output": "./dist/linux",
    "maintainer": "NeutralinoJS"
  }
}
```

### Configuration Options

| Option       | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| `applicationId`   | Unique identifier for the application, typically written as a reverse-domain-style identifier such as `com.example.myapp`. |
| `applicationName` | Name of the application used when generating the package and its associated metadata.                                      |
| `target`     | Specifies the packaging target. Must be `appimage`.             |
| `arch`       | List of CPU architectures for which AppImages can be generated. |
| `icon`       | Path to the application icon.                                   |
| `license`    | Path to the application's license file.                         |
| `output`     | Directory where the generated AppImage is placed.               |
| `maintainer` | Maintainer information associated with the package.             |

### Architecture

The `arch` option specifies the architectures supported by the AppImage target.

For example:

```json
"arch": [
  "x64",
  "arm64"
]
```

A specific architecture can be selected from the command line:

```bash
neu builder appimage --arm64
```

If no architecture is provided, the first architecture in the `arch` array is used.

### Building an AppImage

Run:

```bash
neu builder appimage
```

Or select an architecture:

```bash
neu builder appimage --x64
```

The generated AppImage is placed in the directory specified by `output`.

For example:

```json
"output": "./dist/linux"
```

produces the package under:

```text
dist/
└── linux/
```

---

## Complete Linux Configuration

A complete Linux configuration containing both `deb` and `appimage` targets can look like this:

```json
"linux": {
  "targets": [
    {
      "target": "deb",
      "arch": [
        "x64",
        "ia32",
        "armhf",
        "arm64"
      ],
      "icon": "./installerassets/linux/deb/app.png",
      "category": "Utility",
      "output": "./dist/debian-output",
      "maintainer": "NeutralinoJS",
      "preinst": "./installerassets/linux/deb/scripts/preinst",
      "postinst": "./installerassets/linux/deb/scripts/postinst",
      "prerm": "./installerassets/linux/deb/scripts/prerm",
      "postrm": "./installerassets/linux/deb/scripts/postrm"
    },
    {
      "target": "appimage",
      "arch": [
        "x64",
        "arm64"
      ],
      "icon": "./installerassets/linux/appimage/app.png",
      "license": "./installerassets/LICENSE.txt",
      "output": "./dist/linux",
      "maintainer": "NeutralinoJS"
    }
  ]
}
```

After configuring the targets, generate the desired package using:

```bash
neu builder deb
```

or:

```bash
neu builder appimage
```

For a specific architecture, append the architecture flag:

```bash
neu builder deb --arm64
neu builder appimage --arm64
```
