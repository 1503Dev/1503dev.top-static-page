---
layout: home

hero:
    name: 1503Dev
    _tagline: 一个棍母组织
    actions:
        - theme: brand
          text: Github
          link: https://github.com/1503Dev
        - theme: alt
          text: Gitee
          link: https://gitee.com/Dev1503
        - theme: alt
          text: MineBBS
          link: https://www.minebbs.com/members/dev.154006/

features:
    - title: 领域
      details: 安卓开发, 安卓逆向, 前后端
    - title: 宗旨
      details: 棍母棍母棍
    - title: 目标
      details: 棍母棍母棍母棍母棍母
---

<script setup>
    console.log('Made by Inkranty')

    import { VPTeamMembers } from 'vitepress/theme'

    const icon = {
        language: {
            svg: '<span class="vpi-social-icon" style="--icon: url(\'https://api.iconify.design/material-symbols/language.svg\');"></span>'
        },
        minebbs: {
            svg: '<span class="vpi-social-minebbs" style="--icon: url(\'/src/icon/minebbs.svg\');"></span>'
        }
    }

    const members = [
        {
            avatar: 'https://avatars.githubusercontent.com/u/104840099?v=4',
            name: 'TheChuan1503',
            title: '神棍母',
            links: [
                { icon: 'github', link: 'https://github.com/thechuan1503' },
                { icon: 'gitee', link: 'https://gitee.com/thechuan1503' },
                // { icon: icon.minebbs, link: 'https://www.minebbs.com/members/thechuan.41897/' },
                { icon: 'gmail', link: 'mailto:thechuan1503@1503dev.top' },
                { icon: 'telegram', link: 'https://m.sd.10086.cn/sd_fe_service/html-yd/index.html' },
                { icon: icon.language, link: 'https://thechuan1503.1503dev.top' }
            ]
        },
        {
            avatar: 'https://avatars.githubusercontent.com/u/220187068?v=4',
            name: '天雨墨染',
            title: '棍母',
            links: [
                { icon: 'github', link: 'https://github.com/inkranty' },
                { icon: 'gmail', link: 'mailto:moranty@1503dev.top' },
                { icon: 'telegram', link: 'https://m.sd.10086.cn/sd_fe_service/html-yd/index.html' }
            ]
        }
    ]

    const projects = [
        {
            avatar: '/src/icon/alphaim.svg',
            name: 'AlphaIM',
            title: 'NodeJS在线即时通讯聊天室',
            links: [
                { icon: 'github', link: 'https://github.com/TheChuan1503/AlphaIM' }
            ]
        },
        {
            avatar: '/src/icon/opentbui_256.svg',
            name: 'OpenTBUI',
            title: '基于安卓 Java 仿制的 Toolbox for Minecraft: PE 用户界面',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/OpenTBUI' },
                { icon: 'gitee', link: 'https://gitee.com/dev1503/OpenTBUI' }
            ]
        },
        {
            avatar: '/src/icon/android.png',
            name: 'PELauncherDemo',
            title: '我的世界基岩版(安卓)运行前动态注入示例',
            links: [
                { icon: 'github', link: 'https://github.com/TheChuan1503/PELauncherDemo' }
            ]
        },
        {
            avatar: '/src/icon/circloralpha.bmp',
            name: 'CirclorAlpha',
            title: '针对安卓 Minecraft: PE 1.16.201 的动态注入式辅助工具(实验项目，摆了)',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/CirclorAlpha' }
            ]
        },
        // {
        //     avatar: '/src/icon/circlor2.webp',
        //     name: 'Circlor2',
        //     title: '针对安卓 Minecraft: BE 的动态注入式辅助工具(实验项目，摆了)',
        //     links: [
        //         { icon: 'github', link: 'https://github.com/1503Dev/Circlor2' },
        //         { icon: icon.language, link: 'https://circlor2.1503dev.top' }
        //     ]
        // },
        {
            avatar: '/src/icon/circlor.png',
            name: 'Circlor',
            title: '基于 Toolbox for Minecraft: PE 的辅助工具',
            links: [
                { icon: icon.language, link: 'https://circlor.1503dev.top' }
            ]
        },
        {
            avatar: '/src/icon/openbr.png',
            name: 'Open Buckshot Routtle',
            title: 'Buckshot Routtle 的神人开源版本(摆了)',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/OpenBuckshotRoulette' }
            ]
        },
        {
            avatar: '/src/icon/trans.png',
            name: 'libminecraftpe.so-ida-analysis',
            title: 'libminecraftpe.so 的 i64 文件存档',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/libminecraftpe.so-ida-analysis/' }
            ]
        },
        // {
        //     avatar: '/src/icon/trans.png',
        //     name: 'Bedrock Dedicated Server Archive',
        //     title: 'MCBE 服务器存档',
        //     links: [
        //         { icon: 'github', link: 'https://github.com/1503Dev/bedrock-dedicated-server-archive/releases' }
        //     ]
        // }
    ]
</script>

<br><br><br>

## Our Projects

<VPTeamMembers size="small" :members="projects" />

<br><br><br>

## Our Team  

<VPTeamMembers size="medium" :members />