---
title: Introduction
slug: /
---

## What is Neutralinojs?

Neutralinojs is a lightweight and portable application development framework. 
It lets you develop cross-platform applications using JavaScript, HTML and CSS. Neutralinojs applications 
will work on Linux, Windows, macOS, and Web.

## Why Neutralinojs?

In Electron and NWjs, you have to install Node.js and hundreds of dependency libraries. Embedded Chromium and Node make simple apps bloaty. Neutralinojs offers a lightweight and portable SDK which is an alternative for Electron and NW.js. Neutralinojs doesn't bundle Chromium and uses the existing web browser library in the operating system (Eg: gtk-webkit2 on Linux). Neutralinojs implements a RESTful API for native operations and embeds a static web server to serve the web content. Also, it offers a built-in [JavaScript client library](https://github.com/neutralinojs/neutralino.js) for developers.
See comparisons: 
- [Neutralinojs vs Electron vs NW.JS vs Tauri vs NodeGui vs Flutter vs .Net MAUI](https://github.com/Elanis/web-to-desktop-framework-comparison)
- [Neutralinojs vs Electron vs NW.js (2018)](https://github.com/neutralinojs/evaluation)

## Highlighted features

- Fully portable development kit.
- No compilation required for developers.
- No additional dependencies required for users.
- Native functions support: Read files, run system commands, etc.
- Less resource intensive compared to chromium-node-based frameworks.
- Cross-platform: Linux, Windows, macOS, and Web.

## Supported platforms and CPU architectures

neu CLI provides you prebuilt binaries for the following platforms and CPU architectures. We will
add binaries for missing CPU architectures soon. However, you can build Neutralinojs binaries from the source
on almost all desktop operating systems out there.

- Linux: x64, ia32, and armhf.
- macOS: x64 and arm64 (powered by Rosetta).
- Windows: x64.
- BSD: Possible to build from the source via `build_freebsd.sh`
- Web: Deploy your application into a cloud service with a x64 Linux instance.


