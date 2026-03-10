# Packaging a Neutralino App as a `.deb` — Manual Guide

This guide walks you through every step that the automated packaging script performs, so you can do it entirely by hand.

---

## Prerequisites

Before you begin, make sure you have the following installed:

- [Neutralino CLI](https://neutralino.js.org/docs/cli/neu-cli) (`neu`)
- `dpkg-deb` (comes with `dpkg` on Debian/Ubuntu)

Also ensure your project has:

- A `neutralino.config.json` with a `binaryName` field (e.g., `myapp`)
- A **256×256 PNG** icon at `resources/icons/appIcon.png`

> Throughout this guide, replace `<binary-name>` with your actual binary name (e.g., `myapp`).

---

## Step 1 — Build the Neutralino App

Run the following command in your project root:

```bash
neu build
```

This compiles your app and places the output inside the `dist/` directory. After the build, you will find a folder at:

```
dist/<binary-name>/
```

Containing files like:

```
<binary-name>-linux_x64
<binary-name>-linux_arm64
<binary-name>-linux_armhf
<binary-name>-mac_x64
<binary-name>-mac_arm64
<binary-name>-mac_universal
<binary-name>-win_x64.exe
neutralinojs.log
resources.neu
```

For the `.deb` package, you will only need **`<binary-name>-linux_x64`** and **`resources.neu`**.

---

## Step 2 — Create the Package Directory Structure

Create a folder called `mypkg` (or any name you prefer) in your project root. Inside it, create the following directory tree exactly:

```
mypkg
├── DEBIAN
│   └── control
├── opt
│   └── <binary-name>
│       ├── <binary-name>          ← the renamed Linux binary
│       └── resources.neu
└── usr
    ├── bin
    │   └── <binary-name>          ← the launcher shell script
    └── share
        ├── applications
        │   └── <binary-name>.desktop
        └── icons
            └── hicolor
                └── 256x256
                    └── apps
                        └── <binary-name>.png
```

You can create all the necessary folders at once with:

```bash
mkdir -p mypkg/DEBIAN
mkdir -p mypkg/opt/<binary-name>
mkdir -p mypkg/usr/bin
mkdir -p mypkg/usr/share/applications
mkdir -p mypkg/usr/share/icons/hicolor/256x256/apps
```

---

## Step 3 — Copy the App Binary and Resources

Copy the Linux x64 binary from the `dist` folder into the package, **renaming it** to just `<binary-name>`:

```bash
cp dist/<binary-name>/<binary-name>-linux_x64  mypkg/opt/<binary-name>/<binary-name>
```

Copy the `resources.neu` file alongside it:

```bash
cp dist/<binary-name>/resources.neu  mypkg/opt/<binary-name>/resources.neu
```

Now set the correct permissions on both files:

```bash
chmod 755 mypkg/opt/<binary-name>/<binary-name>
chmod 644 mypkg/opt/<binary-name>/resources.neu
```

---

## Step 4 — Create the Launcher Script

Create the file `mypkg/usr/bin/<binary-name>` with the following content:

```bash
#!/bin/bash
cd /opt/<binary-name>
./<binary-name> "$@"
```

This script ensures the app always runs from its own directory, which Neutralino requires for resolving `resources.neu`.

Make it executable:

```bash
chmod 755 mypkg/usr/bin/<binary-name>
```

---

## Step 5 — Add the App Icon

Copy your 256×256 PNG icon into the icons directory:

```bash
cp resources/icons/appIcon.png  mypkg/usr/share/icons/hicolor/256x256/apps/<binary-name>.png
```

> The icon **must** be a 256×256 PNG. The filename must match your `<binary-name>` exactly, as the `.desktop` file references it by name.

---

## Step 6 — Create the Desktop Entry

Create the file `mypkg/usr/share/applications/<binary-name>.desktop` with the following content:

```ini
[Desktop Entry]
Name=My Awesome App
Exec=/usr/bin/<binary-name>
Icon=<binary-name>
Type=Application
Categories=Utility;
Terminal=false
Path=/opt/<binary-name>
```

- **`Name`** — The display name shown in the application menu.
- **`Exec`** — Points to the launcher script in `/usr/bin`.
- **`Icon`** — The icon name (without extension). The system resolves it from the icons directory automatically.
- **`Path`** — The working directory when the app is launched.

---

## Step 7 — Create the DEBIAN Control File

Create the file `mypkg/DEBIAN/control` with the following content:

```
Package: <binary-name>
Version: 1.0.0
Section: base
Priority: optional
Architecture: amd64
Depends: libwebkit2gtk-4.0-37 | libwebkit2gtk-4.1-0, libgtk-3-0
Maintainer: Your Name <your.email@example.com>
Description: Neutralino application.
```

Set the correct permissions on the control file:

```bash
chmod 644 mypkg/DEBIAN/control
```

> **Architecture note:** This guide targets `amd64` (x86_64). If you are packaging for `arm64` or `armhf`, change the `Architecture` field and use the corresponding binary from the `dist` folder.

---

## Step 8 — Verify Your Structure

Before building, double-check that your `mypkg` folder looks exactly like this:

```
mypkg
├── DEBIAN
│   └── control
├── opt
│   └── <binary-name>
│       ├── <binary-name>
│       └── resources.neu
└── usr
    ├── bin
    │   └── <binary-name>
    └── share
        ├── applications
        │   └── <binary-name>.desktop
        └── icons
            └── hicolor
                └── 256x256
                    └── apps
                        └── <binary-name>.png
```

---

## Step 9 — Build the `.deb` Package

Run the following command from your project root:

```bash
dpkg-deb --build mypkg
```

This will produce `mypkg.deb` in the current directory, ready for distribution.

---

## Installing and Testing

To install and test your package locally:

```bash
sudo dpkg -i mypkg.deb
```

To uninstall:

```bash
sudo dpkg -r <binary-name>
```

---

## Troubleshooting

| Problem | Likely Cause |
|---|---|
| App does not launch after install | Check that the launcher script at `/usr/bin/<binary-name>` is executable (`chmod 755`) |
| `resources.neu` not found error | Confirm `Path=/opt/<binary-name>` is set in the `.desktop` file and the launcher `cd`s into the correct directory |
| Icon not showing in app menu | Ensure the icon filename matches `<binary-name>.png` and is exactly 256×256 |
| `dpkg-deb` permission errors | Ensure `DEBIAN/control` has `644` permissions and the binary has `755` permissions |
| WebKit dependency error on install | Install the dependency manually: `sudo apt install libwebkit2gtk-4.1-0` |
