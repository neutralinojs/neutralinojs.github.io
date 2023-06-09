---
title: CLI
---

## Unreleased

## v9.6.0

### Core: Bundler
- Avoid copying the `WebView2Loader.dll` file to the final app package since it was removed from the Neutralinojs framework.

## v9.5.1

### Bugfixes/Improvements

- Use the `decompress` library instead of `unzipper` to fix issues with latest Node.js runtime versions.
- Generate the Mac universal binary with the `neu build` command.

## v9.5.0

### DevOps 
- Implement a way to test plugins locally.

## v9.4.0

### DevOps: new test suite
- Initiate a new Node.js-based test suite.

### Bugfixes/Improvements
- Clean project files if the `neu create` command wan't successful.
- Display an error message if the `neu build --copy-storage` fails due to missing `.storage` directory.
- Support Darwin `arm64` binaries natively without binary translation (`x64` -> `arm64`).
- Make the client library downloading process optional and support importing the client library via `@neutralinojs/lib`.
- Download the module version of the client library based on the app configuration.

## v9.3.1

### Core: Plugins
- Automatically re-install plugins when the neu CLI version is upgraded/downgraded via package managers.

### Core: downloader/builder
- Support ARM (armhf/arm64) binaries.

## v9.3.0

### General
- Add short descriptions for each command.
- Support to download nightly build versions.

### Bugfixes/improvements
- Fix plugin listing issue.

### DevOps
- Add a simple test-suite for testing CLI commands with a Bash script.

## v9.2.0

### General
- Improve log messages and styles

### Core: Runner
- Display Neutralinojs process's STDIN and STDERR streams directly on the console.
- Remove `--verbose` option from the `run` command.

## v9.1.2

### Core: Runner
- Fix client library path issue with hot-reload workaround on Windows.

## v9.1.1

### Bugfixes
- Fix browser mode exit issue with `neu run`.

## v9.1.0

### Core: Runner
- Add a workaround to use hot module reloading from the app developer's existing frontend library/framework.

## v9.0.0

### Core: Creator
- Allow downloading any community template via `neu create myapp --template <template>`. `<template>` accepts valid GitHub repo identifiers. The default value is `neutralinojs/neutralinojs-minimal`.

### Core: Runner
- Add `--verbose` option to identify framework initialization crashes. It will show STDERR and STDOUT of the framework once the process was terminated.
- Support sending any internal CLI argument to the Neutralinojs process via `neu run -- <additional_args>`.
- Remove `--mode=<mode>` option from `run` since the same work can be done with `neu run -- --mode=<mode>`.

### Bugfixes and improvements
- Fix the infinite retry issue with the `neu run` command.
- Show an error message for download failures.

## v8.1.0

### Core: File watcher
- Exclude auto-reload files via `cli.autoReloadExclude`.
- Watch only the `cli.resourcesDir` to avoid many unwanted reloads.

### Core: Bundler
- Add new `--copy-storage` flag to automatically copy storage data to the app bundle.

## v8.0.1

### Core: Bundler
- Make `cli.extensionsDir` optional for bundling process.

### Bugfixes
- Fix an issue in websocket error log.

## v8.0.0

### Core: Bundler
- Copy extensions to the app bundle.
- Rename `res.neu` to `resources.neu`.

### Core: Runner
- Use websocket connection to auto reload app.

## v7.1.0

### Core: Downloader
- Use server/client versions from config

### `neu version`
- Removed global Neutralino version details
