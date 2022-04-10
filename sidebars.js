module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        'getting-started/your-first-neutralinojs-app',
      ],
    },
    {
      type: 'category',
      label: 'Native API',
      items: [
        'api/overview',
        'api/app',
        'api/clipboard',
        'api/computer',
        'api/debug',
        'api/events',
        'api/extensions',
        'api/filesystem',
        'api/init',
        'api/os',
        'api/storage',
        'api/updater',
        'api/window',
        'api/error-codes',
        'api/global-variables',
      ],
    },
    {
      type: 'category',
      label: 'CLI',
      items: [
        'cli/neu-cli',
        'cli/internal-cli-arguments',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/neutralino.config.json',
        'configuration/project-structure',
        'configuration/modes',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      items: [
        'how-to/extensions-overview',
        'how-to/auto-updater',
        'how-to/use-a-frontend-library',
      ],
    },
    {
      type: 'category',
      label: 'Distribution',
      items: [
        'distribution/overview',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      items: [
        'contributing/framework-developer-guide',
        'contributing/code-style-guide',
        'contributing/developer-support',
        'contributing/committers',
        'contributing/frequently-asked-questions',
      ],
    },
  ],
};
