import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sourabh Mishra',
  tagline: 'Full Stack Developer & Tech Enthusiast',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://code-buff.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'oggymishra', // Usually your GitHub org/user name.
  projectName: 'code-buff', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
		  blogSidebarTitle: 'ALL posts',
		  blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Social card for sharing
    image: 'img/logo.svg',
    navbar: {
      title: 'Sourabh Mishra',
      items: [
        {to: '/blog', label: 'Blog', position: 'right'},
        {to: '/about', label: 'About', position: 'right'},
        {to: '/projects', label: 'Projects', position: 'right'},
        {to: '/contact', label: 'Contact', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OggyMishra',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/sourabh-mishra',
            },
            {
              label: 'Email',
              href: 'mailto:sourabh@example.com',
            },
          ],
        },
        {
          title: 'Explore',
          items: [
            {
              label: 'About',
              to: '/about',
            },
            {
              label: 'Projects',
              to: '/projects',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sourabh Mishra. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: ['@docusaurus/theme-live-codeblock'],
};

export default config;