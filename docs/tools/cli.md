# neu CLI
![npm](https://img.shields.io/npm/v/@neutralinojs/neu)
![npm](https://img.shields.io/npm/dt/@neutralinojs/neu)

You can easily create Neutralinojs applications with several pre-built templates by using neu-cli. 

```
  $ npm i -g @neutralinojs/neu
```

### Commands

`neu create myapp --template <templateName>`

Creates a new Neutralinojs app using a pre-built template.

**Supported templates**

Generic

- Javascript `--template js`
- Typescript `--template ts`
- Kotlin `--template kotlin`

Frameworks/Libraries

- React `--template react`

Angular and Vue tempaltes are in progress. Whereas you can use legacy templates if you need from [here](https://github.com/neutralinojs?utf8=%E2%9C%93&q=template&type=&language=).

`templateName` is optional, the default value is `js`.

`neu build`

Once the source files are modified (Javascript, TypeScript, CSS like files) you can use this command to transpile project files and apply changes to your application.

`neu run`

Executes the current application (This will execute specific binary depending on your operating system). This command will change execution permissions of the binary files on Linux and macOS.

`neu listen [--auto-build]`

This command is similar to `run` but it will enable live-reload for the current application. In other words, when a modification happens to the `app` directly, the Neutralinojs application will be reloaded automatically. If `--auto-build` flag is provided, your Neutralinojs application will be automatically built and will be reloaded when the CLI detects a change in your `src` directory. 

`neu release`

Prepares your application for a release. This command will create `dist` folder. Thus, all the required content of the application will be copied and zipped to one file.

`neu update`

This command will replace existing Neutralinojs binaries with the latest binaries from internet. 


### Change log

Please check the version history from [npm](https://www.npmjs.com/package/@neutralinojs/neu).

