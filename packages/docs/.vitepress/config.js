import { defineConfig } from 'vitepress';

export default defineConfig({
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide', activeMatch: '/guide/what-is-vitepress' },
      {
        text: '下拉选择框',
        items: [
          { text: 'options-1', link: '/' },
          { text: 'options-2', link: 'http://www.baidu.com' }
        ]
      }
    ]
  }
});
  