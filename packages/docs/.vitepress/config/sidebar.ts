//配置sidebar
//指南的guide
//item中直接link要显示的页面md
export function sidebarGuideZh(){
    return [
        {
            text: '指南',
            items: [
              { text: '介绍', link: '/md/zh/guide/intro' },
              { text: '安装', link: '/md/zh/guide/install' },
              { text: '快速开始', link: '/md/zh/guide/start' },
            ],
            collapsible: true,
            collapsed: false
        }
    ]
}
export function sidebarDocumentZh(){
    return [
        {
            text: '基础组件',
            items: [
              { text: 'Layout 布局', link: '/md/zh/document/layout' },
              { text: 'Grid 栅格', link: '/md/zh/document/grid' },
            ],
            collapsible: true,
            collapsed: false
        }
    ]
}
