import { defineConfig } from '../../src/node'

export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: "/vitepress/",
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
      '/markdown/': sidebarGuide()
    },

    editLink: {
      repo: 'vuejs/vitepress',
      dir: 'docs',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    {
      text: 'Changelog',
      link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'What',
      collapsible: true,
      items: [
        { text: '防抖', link: '/markdown/防抖' },
        { text: 'axios ajax withCredentials', link: '/markdown/axios ajax withCredentials' },
        { text: '@vueuse', link: '/markdown/@vueuse' },
        { text: 'esbuild 自定义插件', link: '/markdown/esbuild 自定义插件' },
        { text: '浏览器缓存', link: '/markdown/浏览器缓存' },
        { text: '文件下载的几种方式', link: '/markdown/文件下载的几种方式' },
        { text: '并发限制功能', link: '/markdown/并发限制功能' },
        { text: '剪切板获取文件', link: '/markdown/剪切板获取文件' },
        { text: 'vue3', link: '/markdown/vue3' },
        { text: 'react', link: '/markdown/react/index' },
        { text: 'vite', link: '/markdown/vite/index' },
        { text: 'video', link: '/markdown/video' },
        { text: 'redux-4.1.2', link: '/markdown/redux-4.1.2' },
        { text: 'redux-thunk-2.4.1', link: '/markdown/redux-thunk-2.4.1' },
        { text: 'redis 简单启用', link: '/markdown/redis-base' },
        { text: 'angular request.service.ts', link: '/markdown/angular request.service.ts' },
        { text: '页面封装', link: '/markdown/组件封装个人理解' },
        { text: '滚动监听元素是否在页面显示', link: '/markdown/滚动监听元素是否在页面显示' },
        { text: '异步求和函数', link: '/markdown/异步求和函数' },
        { text: 'pageoffice软件唤醒提示软件安装', link: '/markdown/pageoffice软件唤醒提示软件安装' },
        { text: 'nodejs 生成m3u8然后用html播放', link: '/markdown/nodejs 生成m3u8然后用html播放' },
        { text: 'http服务基础模板', link: '/markdown/http服务基础模板' },
        { text: 'express服务基础模板', link: '/markdown/express服务基础模板' },
        { text: '广度优先遍历', link: '/markdown/广度优先遍历/index' },
        { text: '深度优先遍历', link: '/markdown/深度优先遍历/index' },
        { text: '钉钉鉴权', link: '/markdown/钉钉鉴权/index' },
        { text: '移动端兼容', link: '/markdown/移动端兼容/index' },
        { text: '常用函数', link: '/markdown/常用函数/index' },
        { text: '设计模式', link: '/markdown/设计模式/index' },
        { text: 'angular request.service.ts', link: '/markdown/angular request.service.ts' },
      ]
    },
    {
      text: '意想不到的灵光',
      collapsible: true,
      items: [
        { text: '前端进阶', link: '/markdown/前端进阶' },
        { text: 'english-word', link: '/markdown/english-word' },
        { text: '后续关注的几个地方', link: '/markdown/近些日子比较注意的框架或包' }
      ]
    },
    {
      text: '额，算法部分',
      collapsible: true,
      items: [
        { text: '二分法', link: '/markdown/二分法' },
        { text: 'LeetCode Map', link: '/markdown/leetCode' }
      ]
    },
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Configuration', link: '/guide/configuration' },
        { text: 'Deploying', link: '/guide/deploying' }
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Homepage', link: '/guide/theme-homepage' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/introduction' },
        { text: 'App Configs', link: '/config/app-configs' },
        { text: 'Theme Configs', link: '/config/theme-configs' },
        { text: 'Frontmatter Configs', link: '/config/frontmatter-configs' }
      ]
    }
  ]
}
