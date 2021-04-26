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
    gtag: {
      trackingID: 'UA-120983955-1',
      anonymizeIP: true,
    },
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
          href: 'https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj&ab_channel=CodeZri',
          label: 'Tutorial',
          position: 'left',
        },
        {
          href: 'https://factsoverflow.com/neutralinojs-2021-roadmap',
          label: 'Roadmap 2021',
          position: 'left',
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
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/neutralinojs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/neutralinojs',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/neutralinojs',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/neutralinojs'
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/watch?v=txDlNNsgSh8&list=PLvTbqpiPhQRb2xNQlwMs0uVV0IN8N-pKj&ab_channel=CodeZri'
            },
            {
              label: 'Slack',
              href: 'https://join.slack.com/t/neutralinojs/shared_invite/zt-b7mbivj5-pKpO6U5drmeT68vKD_pc6w'
            }
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
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Neutralinojs | innovation by <a href="https://codezri.org/">codezri</a> project.`,
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
      },
    ],
  ],
  plugins: [
    path.resolve('./plugins/load-external-assets')
  ]
};
