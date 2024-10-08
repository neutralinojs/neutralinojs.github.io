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
