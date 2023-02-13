import type { UserConfig } from 'vitepress';
import {sidebarGuideZh,sidebarDocumentZh} from './config/sidebar'
export const config:UserConfig={
 outDir: './dist',
  title:'Kunlun UI',//左上角标题
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],//配置网页的标题和图标
  lastUpdated: true,
  themeConfig: {
    //中英文一样的就写在这里，其他的写在函数里，直接...调用函数
    logo: '/images/logo-transprent.png',
    algolia:{},
    //社交链接
    socialLinks: [{ icon: "github", link: "https://github.com/Anixuil/Kunlun-Design-Vue" }],
    ...getChineseThemeConfig()
  },
  locales: {
    //这里的zh和en是文件名
         "/md/zh": {
             lang: 'zh-CN',//语言环境
             title: 'Kunlun Design',
             description: '一个基于 vue 3 的组件库',
             label: '简体中文',
             themeConfig: getChineseThemeConfig(),
             link: '/md/zh/'
         },
         "/md/en": {
             lang: 'en-US',
             title: 'Kunlun Design',
             description: 'A component library based on vue 3',
             label: 'English',
             themeConfig: getEnglishThemeConfig(),
             link: '/md/en/'
         }
     },

};
function getChineseThemeConfig() {
  return {
 //侧边栏配置
    nav: [
        {
            text: '指南',
            link: '/md/zh/guide/intro',
            activeMatch: '/md/zh/guide/intro'
        },
        {
            text: '文档',
            link: '/md/zh/document/layout',
            activeMatch: '/md/zh/document/layout'
        },
        {
            text: '关于',
            items: [
                { text: '开发团队', link: '/md/' },
                { text: '联系我们', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }
            ]
        }
    ],
    sidebar:{
        '/md/zh/guide':sidebarGuideZh(),
        '/md/zh/document':sidebarDocumentZh()
    },
    //语言切换配置（但是目前没反应）
    localeLinks: {
      items: [
        { text: "简体中文", link: "/" },
        { text: "English", link: "/en" }
      ]
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright &copy; 2023-PRESENT Kunlun-Designer and Kunlun-Design contributors`
  },
    //   docFooter: {
    //       prev: '上一篇',
    //       next: '下一篇'
    //   },
    //   editLink: {
    //       pattern: 'https://github.com/Anixuil/Kunlun-Design-Vue/packages/docs/:path',
    //       text: '在github上编辑此页'
    //   },
    //   lastUpdatedText: '文档最近更新时间'
  }
}
function getEnglishThemeConfig() {
  return {
      nav: [
          {
              text: 'Guide',
              link: '/en/guide/intro',
              activeMatch: '/en/guide/intro'
          },
          {
              text: 'Document',
              link: '/en/document/basic/button',
              activeMatch: 'document/basic/button'
          },
          {
              text: 'About',
              items: [
                  { text: 'Dev Team', link: '/en' },
                  { text: 'Contact Us', link: 'https://github.com/Anixuil/Kunlun-Design-Vue' }
              ]
          }
      ],
    //   sidebar,
    //   docFooter: {
    //       prev: 'Prev Document',
    //       next: 'Next Document'
    //   },
    //   editLink: {
    //       pattern: 'https://github.com/Anixuil/Kunlun-Design-Vue/packages/docs/:path',
    //       text: 'Edit this page on Github'
    //   },
    //   lastUpdatedText: 'Last update time of the document'
  }
}



export default config
  