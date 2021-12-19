module.exports = {
    theme: '@vuepress/theme-vue',
    // lang: 'en-US',
    title: "VitePress",
    description: "Hello VitePress",
    head: [
        ['meta', { rel: 'icon', href: '../favicon.ico' }]
    ],
    themeConfig: {
        repo: 'vuejs/vitepress',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
            {
                text: 'Config Reference',
                link: '/config/basics',
                activeMatch: '^/config/'
            },
            {
                text: 'Release Notes',
                link: 'https://github.com/vuejs/vitepress/releases'
            }
        ],
        sidebar: {
            '/': [
                {
                    text: 'Javascript',
                    children: [
                        { text: 'Array', link: '/Javascript/Array/' },
                    ]
                },
                {
                    text: 'Vue',
                    children: [
                        { text: 'Effect', link: '/Vue/Effect/' },
                        { text: 'NextTick', link: '/Vue/NextTick/' },
                        { text: 'Provide-Inject', link: '/Vue/Provide-Inject/' },
                        { text: 'Watch', link: '/Vue/Watch/' },
                    ]
                },
                {
                    text: '工具类',
                    children: [
                        { text: 'utils', link: '/Utils/' },
                    ]
                }
            ]
        }
    }
};
