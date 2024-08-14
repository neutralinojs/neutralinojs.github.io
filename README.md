# Neutralinojs website

This repository contains the source code of the Neutralinojs website including the Markdown-based documentation. This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Developer guide

### Prerequisites

**Node.js**: Use older version of Node.js (around v16.19.0). Use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) for easy switching between Node.js versions.
  
To install and use the correct Node.js version, execute:

```bash
nvm install
nvm use
```

We'll soon fix this issue and let contributors run this project on latest Node versions.

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build
  
    ```console
    yarn build
    ```

Integrating Other Frontend Frameworks with Neutralinojs

Vite

To set up a Neutralinojs project with Vite, follow these steps:

Install Vite:

In your project directory, run:

      bash
      Copy code
      yarn add vite --dev
      Configure Vite:
      Create a vite.config.js file in your project's root directory with the following content:

js
Copy code

     import { defineConfig } from 'vite';
      
      export default defineConfig({
        build: {
          outDir: 'dist',
          rollupOptions: {
            input: {
              main: 'src/main.js',
            },
          },
        },
      });
Update Package Scripts:

In your package.json, add the following scripts:

json
Copy code

        "scripts": {
          "dev": "vite",
          "build": "vite build",
          "start": "neutralinojs start"
        }
Development:
Run the following command to start the Vite development server:

      bash
      Copy code
      yarn dev
Build:

Use the following command to build the project for production:

      bash
      Copy code
      yarn build
Angular

To integrate Angular with Neutralinojs, follow these steps:

Create an Angular Project:

Generate a new Angular project if you don't have one already:

      bash
      Copy code
      ng new my-angular-app
      Add Neutralinojs:
      Install Neutralinojs as a dependency:
      
      bash
      Copy code
      yarn add neutralinojs
      Update Angular Configuration:
Modify the angular.json file to include the Neutralinojs entry point. Under architect.build.options, add:

json
    Copy code
    
    "assets": [
      "src/favicon.ico",
      "src/assets",
      {
        "glob": "**/*",
        "input": "node_modules/neutralinojs/",
        "output": "/neutralinojs/"
      }
    ]
Serve Angular Application:
Start the Angular development server:

bash
Copy code

    ng serve
Run Neutralinojs:
Use the following command to start Neutralinojs:

bash
Copy code

    yarn start
Vue.js
To set up a Vue.js project with Neutralinojs, follow these steps:

Install Vue CLI:
Install Vue CLI globally if you haven't already:

bash
Copy code

      yarn global add @vue/cli
Create a Vue Project:
Generate a new Vue project:

bash
    Copy code
    
    vue create my-vue-app
Add Neutralinojs:
Install Neutralinojs:

bash
Copy code

      yarn add neutralinojs
      Configure Vue Project:
Update vue.config.js to output files to the Neutralinojs expected directory:

js
      Copy code
      
      module.exports = {
        outputDir: 'dist',
        assetsDir: 'static',
      };
Serve Vue Application:
Start the Vue development server:

    bash
    Copy code
    yarn serve
Run Neutralinojs:

Use the following command to start Neutralinojs:

    bash
    Copy code
    yarn start

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

Our GitHub Actions [deployment workflow](https://github.com/neutralinojs/neutralinojs.github.io/blob/main/.github/workflows/deploy.yml) automatically deploys the last commit in the `main` branch to the GitHub Pages service.


### License

[MIT](LICENSE)

### Contributing to Neutralinojs

We really appreciate your code contributions. Please read [this contribution guide](https://neutralino.js.org/docs/contributing/framework-developer-guide#contribution-guidelines) before sending a pull request. Thanks for your contributions. Check out [FAQs](http://neutralino.js.org/docs/contributing/frequently-asked-questions) in case of general queries.

### Contributors

<a href="https://github.com/neutralinojs/neutralinojs.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=neutralinojs/neutralinojs.github.io" />
</a>

Made with [contributors-img](https://contrib.rocks).
