---
title: Introduction
slug: /
---

## What is Neutralinojs?

Neutralinojs is a lightweight and portable desktop application development framework.
It lets you develop lightweight cross-platform desktop applications using JavaScript, HTML and CSS.
You can extend Neutralinojs with any programming language (via extensions IPC) and use Neutralinojs as a
part of any source file (via child processes IPC).

## Why Neutralinojs?

In Electron and NWjs, you have to install Node.js and hundreds of dependency libraries. Embedded Chromium and Node
make simple apps bloaty. Neutralinojs offers a lightweight and portable SDK which is an alternative for Electron and
NW.js. Neutralinojs doesn't bundle Chromium and uses the existing web browser library in the operating
system (Eg: gtk-webkit2 on Linux). Neutralinojs implements a WebSocket connection for native operations and embeds a
static web server to serve the web content. Also, it offers a built-in
[JavaScript client library](https://github.com/neutralinojs/neutralino.js) for developers.

See comparisons:
- [Neutralinojs vs Electron vs NW.JS vs Tauri vs NodeGui vs Flutter vs .Net MAUI](https://github.com/Elanis/web-to-desktop-framework-comparison)
- [Neutralinojs vs Electron vs NW.js (2018)](https://github.com/neutralinojs/evaluation)

When you start learning Neutralinojs, you will realize that Neutralinojs answers endless use cases. For example,
you can use Neutralinojs for the following scenarios.

- Cross-platform desktop app development.
- Building web apps with native operations.
- Using as a cloud message broker.
- Connecting multiple processes by using as an IPC broker.
- and more...

## Highlighted features

- Portable development kit.
- No compilation required for application developers.
- No additional dependencies required for users.
- Native functions support: Read files, run system commands, etc.
- Less resource intensive compared to chromium-node-based frameworks.
- Cross-platform: Neutralinojs apps work on Linux, Windows, macOS, and Web.
- Simple and flexible development environment.

## Supported platforms and CPU architectures

neu CLI provides you pre-built x64 binaries for Linux, macOS, and Windows. Additionally, it provides
ARM (armhf/arm64) Linux binaries with the Neutralinojs framework v4.6.0 or newer versions. We are trying to
officially support all popular CPU architectures with the CLI soon! However, you can build Neutralinojs
binaries from the source on almost all desktop operating systems and CPU architectures out there.

If you need Neutralinojs binaries for non-x64 CPU, learn how to build Neutralinojs from source
with [this guide](contributing/framework-developer-guide#setup-and-build-the-framework).


