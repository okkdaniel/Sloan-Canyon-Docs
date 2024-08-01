// import {themes as prismThemes} from 'prism-react-renderer';
// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';

// const config: Config = {
//   title: '74177 Docs',
//   favicon: 'img/SloanCanyonRobotics.png',

//   // Set the production url of your site here
//   url: 'https://your-docusaurus-site.example.com',
//   // Set the /<baseUrl>/ pathname under which your site is served
//   // For GitHub pages deployment, it is often '/<projectName>/'
//   baseUrl: '/',

//   // GitHub pages deployment config.
//   // If you aren't using GitHub pages, you don't need these.
//   organizationName: 'okkdaniel', // Usually your GitHub org/user name.
//   projectName: 'Sloan-Canyon-Docs', // Usually your repo name.

//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',

//   // Even if you don't use internationalization, you can use this field to set
//   // useful metadata like html lang. For example, if your site is Chinese, you
//   // may want to replace "en" with "zh-Hans".
//   i18n: {
//     defaultLocale: 'en',
//     locales: ['en'],

    

//   },

  

//   presets: [
//     [
//       'classic',
//       {
//         docs: {
//           sidebarPath: './sidebars.ts',
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           //editUrl:
//             //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
//         blog: {
//           showReadingTime: true,
//           // Please change this to your repo.
//           // Remove this to remove the "edit this page" links.
//           //editUrl:
//             //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
//         },
        
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
        
//       }
//     ],
    
//   ],

//   themeConfig: 
//     ({
//       colorMode: {
//         defaultMode: 'dark',
//         disableSwitch:true,
//         respectPrefersColorScheme:false,
//       },
      
//     // Replace with your project's social card
//     image: 'img/SloanCanyonRobotics.png',
//     navbar: {
//       title: '74177 Docs',
//       logo: {
//         alt: 'Sloan Canyon Robotics',
//         src: 'img/SloanCanyonRobotics.png',
//       },
        
//       items: [
//       ],
//     },

//     }) 
// };

// export default config;


import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '74177 Docs',
  favicon: 'img/SloanCanyonRobotics.png',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'okkdaniel',
  projectName: 'Sloan-Canyon-Docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } as Preset.Options,
    ],
  ],
  plugins: [
    function customPlugin(context, options) {
      return {
        name: 'custom-plugin',
        async contentLoaded({actions}) {
          const {addRoute} = actions;
          addRoute({
            path: '/login',
            component: '@site/src/pages/LoginPage',
            exact: true,
          });
        },
      };
    },
    function (context, options) {
      return {
        name: 'protected-routes-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              alias: {
                '@theme/Root': './src/components/ProtectedRoute',
              },
            },
          };
        },
      };
    },
  ],
  themeConfig: 
    {
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/SloanCanyonRobotics.png',
      navbar: {
        title: '74177 Docs',
        logo: {
          alt: 'Sloan Canyon Robotics',
          src: 'img/SloanCanyonRobotics.png',
        },
        items: [],
      },
    } satisfies Preset.ThemeConfig,
};

export default config;