---
title: Modes
---
Neutralinojs applications can be executed on Linux, Windows, macOS, and Browser with four modes: window, browser,
 cloud, and chrome. The default mode is the window. In other words, your application will run inside a native window by default.
However, you can choose the following modes according to your requirement.

## window
Neutralinojs application will run on a native window. The window will use the user's operating system's theme.
This mode is a good selection for cross-platform application development.

## browser
Neutralinojs application will use the user's default browser to load the application.
Therefore, you can build web applications with native operations. You can't typically access operating
system-level features via web browsers. But, the Neutralinojs browser mode helps you to make web apps that can
access the operating system layer with required security controls.

## cloud
This mode will run the Neutralinojs process as a background server.
You will be able to expose your application to a public network or the internet.

:::tip
Example scenario: You can make a web application to control your computer via mobile phones.
:::

Besides, you can run the Neutralinojs server on bare-metal servers, virtual machines, and application containers as a
lightweight message broker. You may find endless use-cases for this framework mode.

:::danger
Make sure that you are blocking or allowing critical native operations via
`nativeBlockList`, `nativeAllowList` respectively. Also, if you started the application with administrator
access, your web application will have the same permission level.
:::

## chrome
Neutralinojs app will run as a Chrome application. The framework use the following Chrome command-line
arguments to make the web application look more like a native app.

```
--disable-background-networking
--disable-background-timer-throttling
--disable-backgrounding-occluded-windows
--disable-breakpad
--disable-client-side-phishing-detection
--disable-default-apps
--disable-dev-shm-usage
--disable-infobars
--disable-extensions
--disable-features=site-per-process
--disable-hang-monitor
--disable-ipc-flooding-protection
--disable-popup-blocking
--disable-prompt-on-repost
--disable-renderer-backgrounding
--disable-sync
--disable-translate
--disable-windows10-custom-titlebar
--metrics-recording-only
--no-first-run
--no-default-browser-check
--safebrowsing-disable-auto-update
--password-store=basic
--use-mock-keychain
--user-data-dir=${NL_PATH}/.tmp/chromedata
```
Neutralinojs chrome mode works on a computer that has a pre-installed version of Google Chrome, Chromium, or Microsoft Edge
browser. If no installation was detected, Neutralinojs displays an error message by asking the user to install
a Chromium-based browser.

You can provide additional arguments (Eg: `--disable-web-security`) to the Chrome process via [`args`](./neutralino.config.json#modeschromeargs-string)
 configuration attribute. Browse all supported Chromium command-line arguments [here](https://peter.sh/experiments/chromium-command-line-switches/)
