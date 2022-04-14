---
title: Frequently Asked Questions
---

Please checkout the following questions before dropping your queries on the discord server. If your query has been resolved and you feel that others may face the same issue, make sure to help them by adding them below.

### Neutralinojs Framework

1. #### Error Code 127: `libayatana-appindicator3.so.1 cannot open shared object file: No such file or directory`
This error occurred because of a missing package. It can be fixed by installing it.
Steps to resolve the issue:
1. `sudo apt -get update`
2. `sudo apt-get install -y libayatana-appindicator3-1`
Check [here](https://ubuntu.pkgs.org/18.04/ubuntu-universe-amd64/libayatana-appindicator3-1_0.5.3-3_amd64.deb.html) for further reference.

### NEU CLI

1. #### What should I do when I get `Missing permission to execute the native method: method.func` error ?
This error occurs when permissions are not given to execute the function of respective method. To be able to run this add the `method.func` to the `nativeAllowList`. To allow all functions of a method, add `method.*`. For more information check [here](https://neutralino.js.org/docs/configuration/neutralino.config.json/#nativeallowlist-string).

### Client Library
