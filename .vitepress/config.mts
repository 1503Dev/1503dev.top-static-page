import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "1503Dev",
    description: "一个无聊的组织",
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/1503Dev' },
            { icon: 'gitee', link: 'https://gitee.com/Dev1503' },
            { icon: {
                svg: '<span class="vpi-social-minebbs" style="--icon: url(\'/src/icon/minebbs.svg\');"></span>'
            }, link: 'https://www.minebbs.com/members/dev.154006/'},
            // { icon: 'gmail', link: 'mailto:@1503dev.top' },
        ],
        footer: {
            message: 'Powered by <a href="https://vitepress.dev/" target="_blank">VitePress</a>\n<!-- Made by Inkranty --></script>',
            copyright: 'Copyright © 2023-2025 <a href="https://1503dev.top">1503Dev</a>'
        }
    },
    head: [
        ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/172908442?s=200&v=4' }]
    ]
})
