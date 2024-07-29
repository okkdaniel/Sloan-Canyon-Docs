import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '74177 Docs',
  favicon: 'img/SloanCanyonRobotics.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'okkdaniel', // Usually your GitHub org/user name.
  projectName: 'Sloan-Canyon-Docs', // Usually your repo name.

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
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }
    ],
  ],

  themeConfig: 
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch:true,
        respectPrefersColorScheme:false,
      },
      
    // Replace with your project's social card
    image: 'img/SloanCanyonRobotics.png',
    navbar: {
      title: '74177 Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/SloanCanyonRobotics.png',
        
        
      },
        
      items: [
      ],
    },

    }) 
};

export default config;


