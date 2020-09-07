# neu CLI
![npm](https://img.shields.io/npm/v/@neutralinojs/neu)
![npm](https://img.shields.io/npm/dt/@neutralinojs/neu)

You can easily create Neutralino applications with several pre-built templates using neu-cli. 

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

`neu build`

Once the source files are modified (Javascript, TypeScript, CSS like files) you can use this command to transpile those files and apply changes to your application.

`neu release`

Prepares your application for a release. This command will create `dist` folder. Thus, all the required content of the application will be copied and zipped to one file.

`neu run`

Executes current application.(This will execute specific binary depending on your operating system)

`neu update`

This command will replace existing Neutralino binaries with the latest binaries from internet. 


### Change log

v1.5.4

- New commands added (release, run and update)
- Removed binaries from templates and CLI will fetch latest binaries

