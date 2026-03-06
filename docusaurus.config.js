const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Neutralinojs',
  tagline: 'Build lightweight cross-platform desktop apps with JavaScript, HTML, and CSS',
  url: 'https://neutralino.js.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'neutralinojs',
  projectName: 'neutralinojs.github.io',
  scripts: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      async: true
    }
  ],
  themeConfig: {
    navbar: {
      title: 'Neutralinojs',
      logo: {
        alt: 'Neutralinojs Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'apps/',
          activeBasePath: 'apps',
          label: 'Apps',
          position: 'left',
        },
        {
          to: 'resources/',
          activeBasePath: 'resources',
          label: 'Resources',
          position: 'left',
        },
        {
          href: 'https://www.youtube.com/c/CodeZri',
          label: 'Videos',
          position: 'left',
        },
        {
          href: 'https://github.com/neutralinojs/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: 'docs/release-notes/framework',
          label: 'Release Notes',
          position: 'left',
        },
        {
          href: 'https://github.com/neutralinojs/gsoc2026',
          label: 'GSoC 2026',
          position: 'right',
        },
        {
          href: 'https://github.com/neutralinojs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.patreon.com/shalithasuranga',
          label: '❤️ Donate',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/',
            },
            {
              label: 'API reference',
              to: 'docs/api/overview',
            },
            {
              label: 'CLI',
              to: 'docs/cli/neu-cli',
            },
            {
              label: 'Modes',
              to: 'docs/configuration/modes',
            },
            {
              label: 'Contributing',
              to: 'docs/contributing/framework-developer-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/neutralinojs',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/neutralinojs'
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/neutralinojs/shared_invite/zt-b7mbivj5-pKpO6U5drmeT68vKD_pc6w'
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/cybpp4guTJ'
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/neutralinojs/'
            }
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'X (Twitter)',
              href: 'https://x.com/neutralinojs',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/showcase/neutralinojs/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@CodeZri'
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/neutralinojs/neutralinojs',
            },
            {
              label: 'Patreon',
              href: 'https://www.patreon.com/shalithasuranga'
            },
            {
              label: 'Privacy Policy',
              to: 'privacy-policy'
            },
            {
              label: 'Blog',
              href: 'https://codezri.org/blog/'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Neutralinojs | Innovation by <a href="https://codezri.org/">CodeZri.org</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/neutralinojs/neutralinojs.github.io/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/neutralinojs/neutralinojs.github.io/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-120983955-1',
          anonymizeIP: true,
        },
      },
    ],
    
  ],
  plugins: [
    path.resolve('./plugins/load-external-assets'),
    require.resolve('docusaurus-lunr-search')
  ]
};
