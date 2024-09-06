// import {themes as prismThemes} from 'prism-react-renderer';
// import type {Config} from '@docusaurus/types';
// import type * as Preset from '@docusaurus/preset-classic';

// const config: Config = {
//   title: '74177 Docs',
//   favicon: 'img/SloanCanyonRobotics.png',
//   url: 'https://your-docusaurus-site.example.com',
//   baseUrl: '/',
//   organizationName: 'okkdaniel',
//   projectName: 'Sloan-Canyon-Docs',
//   onBrokenLinks: 'throw',
//   onBrokenMarkdownLinks: 'warn',
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
//         },
//         blog: {
//           showReadingTime: true,
//         },
//         theme: {
//           customCss: require.resolve('./src/css/custom.css'),
//         },
//       } as Preset.Options,
//     ],
//   ],
//   themeConfig:
//     {
//       colorMode: {
//         defaultMode: 'dark',
//         disableSwitch: true,
//         respectPrefersColorScheme: false,
//       },
//       image: 'img/SloanCanyonRobotics.png',
//       navbar: {
//         title: '74177 Docs',
//         logo: {
//           alt: 'Sloan Canyon Robotics',
//           src: 'img/SloanCanyonRobotics.png',
//         },
//         items: [],
//       },
//     } satisfies Preset.ThemeConfig
// };

// export default config;

import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
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
  // scripts: ['/passwordProtect.js'],
  customFields: {},

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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } as Preset.Options,
    ],
  ],
  themeConfig: {
    scripts: [
      {
        src: '/clarity.html',
        async: true,
        defer: true,
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    plugins: [
      // ... other plugins
      function authCheck(context, options) {
        return {
          name: 'auth-check',
          injectHtmlTags() {
            return {
              headTags: [
                {
                  tagName: 'script',
                  innerHTML: `
                    (function() {
                      var isAuth = localStorage.getItem('isAuthenticated');
                      var currentPath = window.location.pathname;
                      if (isAuth !== 'true' && currentPath !== '/password-protection/') {
                        window.location.href = '/password-protection/';
                      }
                    })();
                  `,
                },
              ],
            };
          },
        };
      },
    ],
    // anonymous search results
    metadata: [
      {name: 'robots', content: 'noindex, nofollow'},
    ],
    image: 'img/SloanCanyonRobotics.png',
    navbar: {
      title: '74177 Docs',
      logo: {
        alt: 'Sloan Canyon Robotics',
        src: 'img/SloanCanyonRobotics.png',
      },
      items: [],
    },
    prism: {
      theme: require('./src/customTheme'),
    },
  } satisfies Preset.ThemeConfig,
};

export default config;