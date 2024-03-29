---
title: Frequently Asked Questions
---

Please checkout the following questions before dropping your queries on the Discord server. If your query has been resolved and you feel that others may face the same issue, make sure to help them by adding them below via a pull request.

## Framework

### Error Code 127: `libayatana-appindicator3.so.1 cannot open shared object file: No such file or directory`

We fixed this issue in [v4.5.0](https://github.com/neutralinojs/neutralinojs/releases/tag/v4.5.0), so please upgrade your framework version.
If you need to use a lower framework version, you need to install the missing package with the following commands to start the app properly:

```
apt update
apt install -y libayatana-appindicator3-1
```

Make sure to run the above commands with `sudo`. Check [the package information](https://ubuntu.pkgs.org/18.04/ubuntu-universe-amd64/libayatana-appindicator3-1_0.5.3-3_amd64.deb.html) for further reference.

## CLI

### What should I do when I get `Missing permission to execute the native method: <namespace.func>` error ?

This error occurs when permissions are not given to execute a specific native method. To be able to run this function, add the `namespace.func` to the `nativeAllowList`. To allow all functions of the particular namespace, use `namespace.*`. Check [here](https://neutralino.js.org/docs/configuration/neutralino.config.json/#nativeallowlist-string) to learn more about allowlists.

### `yarn global add @neutralinojs/neu` doesn't complete the installation process.

When `yarn` is used to install `neu`, the output shows `success Installed "@neutralinojs/neu"`. But, neu commands don't work even after installation, `which neu` outputs nothing. Check [here](https://github.com/neutralinojs/neutralinojs-cli/issues/64) for further information about the particular issue.

This error is more of an yarn issue. To fix it, the developer needs to add the `yarn global bin` command output to `$PATH`. For example, we can add the following command to the `.bashrc` file (or other Shell interpreter initialization scripts):

```bash
export PATH="$(yarn global bin):$PATH"
```

For more information, check the official documentation of yarn [here](https://classic.yarnpkg.com/en/docs/cli/global).
