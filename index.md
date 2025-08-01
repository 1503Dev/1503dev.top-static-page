---
layout: home

hero:
    name: 1503Dev
    tagline: 一个棍母组织
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
      details: 任何与技术相关的领域
    - title: 宗旨
      details: 全心全意为棍母服务，对棍母负责，并受棍母监督
    - title: 目标
      details: 宗旨就是目标，目标就是宗旨
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
                { icon: icon.minebbs, link: 'https://www.minebbs.com/members/thechuan.41897/' },
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
            avatar: 'https://www.minebbs.com/data/resource_icons/12/12468.jpg',
            name: 'LeviResidence',
            title: '强大的，可高度自定义的 LSE 领地插件',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/LeviResidence' },
                { icon: icon.minebbs, link: 'https://www.minebbs.com/resources/leviresidence-lse.12468/' }
            ]
        },
        {
            avatar: '/src/icon/trans.png',
            name: 'CirclorAlpha',
            title: '针对安卓 Minecraft: PE 1.16.201 的动态注入式辅助工具(实验项目，摆了)',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/CirclorAlpha' }
            ]
        },
        {
            avatar: '/src/icon/circlor2.webp',
            name: 'Circlor2',
            title: '针对安卓 Minecraft: BE 的动态注入式辅助工具(实验项目，摆了)',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/Circlor2' },
                { icon: icon.language, link: 'https://circlor2.1503dev.top' }
            ]
        },
        {
            avatar: '/src/icon/circlor.png',
            name: 'Circlor',
            title: '基于 Toolbox for Minecraft: PE 的辅助工具(摆了)',
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
        {
            avatar: '/src/icon/trans.png',
            name: 'Bedrock Dedicated Server Archive',
            title: 'MCBE 服务器存档',
            links: [
                { icon: 'github', link: 'https://github.com/1503Dev/bedrock-dedicated-server-archive/releases' }
            ]
        }
    ]
</script>

<br><br><br>

## Our Projects

<VPTeamMembers size="small" :members="projects" />

<br><br><br>

## Our Team  

<VPTeamMembers size="medium" :members />

<!-- Made by Inkranty -->