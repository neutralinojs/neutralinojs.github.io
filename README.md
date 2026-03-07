**Important security notice ⚠️:** This repository (`babel.config.js`) received a malicious JavaScript snippet, apparently via a supply chain attack through commit [`6c19a31`](https://github.com/neutralinojs/neutralinojs.github.io/commit/6c19a3106b6f6f2725c530e37bfac7f99c2cc82b). If you cloned/forked this repository and executed it after this specific commit was pushed, we recommend you scan your computer with a virus scanner. Note that now the repository has been cleaned, and Neutralinojs binaries aren't affected by this attack. Neutralinojs maintainers apologize for this incident. We'll publish a report for this incident after security investigations. Thanks, OpenSourceMalware team, for security advice and collaboration. 

# Neutralinojs website

This repository contains the source code of the [Neutralinojs website](https://neutralino.js.org), including the Markdown-based documentation. This website is built using [Docusaurus](https://docusaurus.io), a modern static website generator.

## Developer guide

### Prerequisites
  
To install and use the latest Node.js LTS version:

```bash
nvm install
nvm use
```

### Installation

```console
yarn install
```

### Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without requiring a server restart.

### Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.

### Deployment

Our GitHub Actions [deployment workflow](.github/workflows/deploy.yml) automatically deploys the last commit in the `main` branch to the GitHub Pages service.


### License

[MIT](LICENSE)

### Contributing to Neutralinojs

We really appreciate your code contributions. Please read [this contribution guide](https://neutralino.js.org/docs/contributing/framework-developer-guide#contribution-guidelines) before sending a pull request. Thanks for your contributions. Check out [FAQs](http://neutralino.js.org/docs/contributing/frequently-asked-questions) in case of general queries.

### Contributors

<a href="https://github.com/neutralinojs/neutralinojs.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=neutralinojs/neutralinojs.github.io" />
</a>

Made with [contributors-img](https://contrib.rocks).
