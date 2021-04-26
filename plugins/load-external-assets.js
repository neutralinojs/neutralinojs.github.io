module.exports = (context, options) => ({
    name: 'load-external-assets',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'script',
            attributes: {
              src: 'https://media.ethicalads.io/media/client/ethicalads.min.js',
            },
          },
        ],
      }
    },
  })