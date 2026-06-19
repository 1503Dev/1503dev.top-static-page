import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "1503Dev",
    description: "一个棍母组织",
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/1503Dev' },
            { icon: 'gitee', link: 'https://gitee.com/Dev1503' }
        ],
        footer: {
            message: 'Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a>\n<!-- Made by Inkranty -->',
            copyright: 'Copyright © 2023-2025 <a href="https://1503dev.top">1503Dev</a><br><span style="opacity: 0.1">社区不被我喜欢，我何必贡献社区</span>'
        }
    },
    head: [
        ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/172908442?s=200&v=4' }]
    ]
})
