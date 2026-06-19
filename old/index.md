---
import { Card, CardGrid } from '@astrojs/starlight/components';

const pageTitle = "1503Dev";
const tagline = "一个棍母组织";

const actions = [
  { theme: 'brand', text: 'Github', link: 'https://github.com/1503Dev' },
  { theme: 'alt', text: 'Gitee', link: 'https://gitee.com/Dev1503' },
  { theme: 'alt', text: 'MineBBS', link: 'https://www.minebbs.com/members/dev.154006/' }
];

const features = [
  { title: '领域', details: '安卓开发, 安卓逆向, 前后端', icon: 'setting' },
  { title: '宗旨', details: '棍母棍母棍', icon: 'open-book' },
  { title: '目标', details: '棍母棍母棍母棍母棍母', icon: 'rocket' }
];

const members = [
  {
    name: 'TheChuan1503',
    title: '神棍母',
    desc: 'GitHub • Gitee • Gmail • Telegram • Web',
    link: 'https://github.com/thechuan1503'
  },
  {
    name: '天雨墨染',
    title: '棍母',
    desc: 'GitHub • Gmail • Telegram',
    link: 'https://github.com/inkranty'
  }
];

const projects = [
  { name: 'AlphaIM', title: 'NodeJS在线即时通讯聊天室', link: 'https://github.com/TheChuan1503/AlphaIM' },
  { name: 'OpenTBUI', title: '基于安卓 Java 仿制的 Toolbox UI', link: 'https://github.com/1503Dev/OpenTBUI' },
  { name: 'PELauncherDemo', title: '我的世界基岩版(安卓)运行前动态注入示例', link: 'https://github.com/TheChuan1503/PELauncherDemo' },
  { name: 'CirclorAlpha', title: '针对安卓 MCPE 1.16.201 的动态注入式辅助工具', link: 'https://github.com/1503Dev/CirclorAlpha' },
  { name: 'Circlor', title: '基于 Toolbox for Minecraft: PE 的辅助工具', link: 'https://circlor.1503dev.top' },
  { name: 'Open Buckshot Routtle', title: 'Buckshot Routtle 的神人开源版本', link: 'https://github.com/1503Dev/OpenBuckshotRoulette' },
  { name: 'libminecraftpe.so-ida-analysis', title: 'libminecraftpe.so 的 i64 文件存档', link: 'https://github.com/1503Dev/libminecraftpe.so-ida-analysis/' }
];

console.log('Made by Inkranty');
---

<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{pageTitle}</title>
  </head>
  <body>
    <div class="sl-container">
      <header class="hero">
        <h1 class="hero-name">{pageTitle}</h1>
        <p class="hero-tagline">{tagline}</p>
        <div class="actions">
          {actions.map(action => (
            <a href={action.link} class={`action-btn ${action.theme}`} target="_blank" rel="noopener noreferrer">
              {action.text}
            </a>
          ))}
        </div>
      </header>

      <CardGrid toggle>
        {features.map(feat => (
          <Card title={feat.title} icon={feat.icon as any}>
            <p>{feat.details}</p>
          </Card>
        ))}
      </CardGrid>

      <section class="section">
        <h2>Our Projects</h2>
        <CardGrid>
          {projects.map(proj => (
            <Card title={proj.name} icon="external">
              <p>{proj.title}</p>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" class="card-link">查看项目 →</a>
            </Card>
          ))}
        </CardGrid>
      </section>

      <section class="section">
        <h2>Our Team</h2>
        <CardGrid>
          {members.map(member => (
            <Card title={member.name} icon="user">
              <p class="member-title">{member.title}</p>
              <p class="member-desc">{member.desc}</p>
              <a href={member.link} target="_blank" rel="noopener noreferrer" class="card-link">个人主页 →</a>
            </Card>
          ))}
        </CardGrid>
      </section>
    </div>
  </body>
</html>

<style>
  /* 引入自定义标题字体 */
  @font-face {
    font-family: 'Bunya Light';
    src: url('https://static.1503dev.top/font/bunya/1.0/bunya-light.ttf') format('truetype');
    font-display: swap;
  }

  /* 核心骨架与极简样式，大部分样式都交给 Starlight 内置组件处理 */
  :root {
    --sl-color-bg: #1e1e20;
    --sl-color-text: rgba(255, 255, 255, 0.92);
    --sl-color-ascent: #3eaf7c;
  }

  body {
    background-color: var(--sl-color-bg);
    color: var(--sl-color-text);
    font-family: system-ui, sans-serif;
    margin: 0;
  }

  .sl-container {
    max-width: 1152px;
    margin: 0 auto;
    padding: 64px 24px;
  }

  /* 只需要对特殊的 Hero 结构做轻量定义 */
  .hero {
    text-align: center;
    padding: 48px 0 64px;
  }

  .hero-name {
    font-size: 56px;
    margin: 0;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Bunya Light', sans-serif;
  }

  .hero-tagline {
    font-size: 24px;
    color: rgba(255, 255, 255, 0.6);
    margin: 16px 0 32px;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .action-btn {
    display: inline-block;
    border-radius: 20px;
    padding: 0 24px;
    line-height: 40px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }

  .action-btn.brand {
    background-color: var(--sl-color-ascent);
    color: #fff;
  }

  .action-btn.alt {
    background-color: #2f2f35;
    color: var(--sl-color-text);
  }

  .section {
    margin-top: 80px;
  }

  .section h2 {
    font-size: 24px;
    font-family: 'Bunya Light', sans-serif;
    border-bottom: 1px solid #2f2f35;
    padding-bottom: 8px;
    margin-bottom: 32px;
  }

  /* 卡片内部的极简辅助样式 */
  .card-link {
    font-size: 13px;
    color: #4abf8a;
    text-decoration: none;
    display: inline-block;
    margin-top: 12px;
  }

  .member-title {
    font-weight: 600;
    color: var(--sl-color-text);
    margin: 0 0 4px 0;
  }

  .member-desc {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
</style>