// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sushiswap Kitchen',
  tagline: 'Sushiswap',
  url: 'https://sushi.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon/favicon.ico',
  organizationName: 'sushiswap', // Usually your GitHub org/user name.
  projectName: 'sushi-docs', // Usually your repo name.
  themes: ['docusaurus-theme-search-typesense'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/manifoldfinance/sushi-doc-portal/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/manifoldfinance/sushi-doc-portal/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '🍣 Sushi',
        logo: {
          alt: 'sushi',
          src: '../static/img/sushi-avatar.png',
        },
        items: [
          {
            label: 'Guidebook',
            position: 'left',
            items: [
              {
                label: 'Yield Farming and Strategies',
                href: '#',
              },
              {
                label: 'Limit order protocol',
                href: '#',
              },
              {
                label: 'MasterChef v2',
                href: '/docs/onsen/masterchef/masterchef2',
              },
            ],
          },
          {
            label: 'Protocols',
            position: 'left',
            items: [
              {
                label: 'Sushiswap V1',
                href: '#',
              },
              {
                label: 'MasterChef V2',
                href: '/docs/onsen/masterchef/introduction',
              },
              {
                label: 'Trident',
                href: '#',
              },
              {
                label: 'Bentobox v1',
                href: '/docs/bentobox/concepts',
              },
              {
                label: 'Miso v1',
                href: '#',
              },
            ],
          },

          {
            label: 'Incentive Programs',
            position: 'right',
            href: '#',
          },
          {
            label: 'Deploy Strategy',
            position: 'right',
            href: '#',
          },
          {
            href: 'https://www.npmjs.com/search?q=%40sushiswap',
            label: '@sushiswap/sdk',
            position: 'right',
          },
          {
            href: 'https://github.com/sushiswap',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
        apiKey: 'b6b058ad8567fd68f16ec803fefef589',
        indexName: 'sushiswap',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: see doc section below
        appId: 'XOPRM3IJU6',
        // Optional: Algolia search parameters
        searchParameters: {},
        facetFilters: [],
        //... other Algolia params
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
