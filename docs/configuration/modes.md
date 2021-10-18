---
title: Modes
---
Neutralinojs applications can be executed on Linux, Windows, macOS, and Web with three modes: window, browser,
and cloud. The default mode is the window. In other words, your application will run inside a native window by default.
However, you can choose the following modes according to your requirement.

## window
Neutralinojs application will run on a native window. The window will use the user's operating system's theme. This mode is a good selection for cross-platform application development.

## browser
Neutralinojs application will use the user's default browser to load the application. Therefore, you can build web applications with native operations.

## cloud
This mode will run the Neutralinojs process as a background server. You will be able to expose your application to a public network or the internet.

:::tip
Example scenario: You can make a web application to control your computer via mobile phone.
:::

:::danger
Make sure that you are blocking or allowing critical native operations via
`nativeBlockList`, `nativeAllowList` respectively. Also, if you started the application with administrator
access, your web application will have the same permission level.
:::
