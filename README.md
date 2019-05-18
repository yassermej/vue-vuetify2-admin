# vue-vuetify-admin
Material admin panel based on vue2 and vuetify [Demo](https://nelsoneax.github.io/vue-vuetify-admin/)

<p align="center">
  <img width="320" src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.6-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/vuetifyjs/vuetify">
    <img src="https://img.shields.io/badge/vuetify-1.5.14-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/NelsonEAX/vue-vuetify-admin" rel="nofollow">
    <img src="https://travis-ci.org/NelsonEAX/vue-vuetify-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/NelsonEAX/vue-vuetify-admin/releases">
    <img src="https://img.shields.io/github/release/NelsonEAX/vue-vuetify-admin.svg" alt="GitHub release">
  </a>
  <a href="https://t.me/vue_vuetify_admin">
    <img src="https://img.shields.io/badge/telegram-join%20chat-blue.svg" alt="Telegram">
  </a>
  <a href="https://github.com/NelsonEAX/vue-vuetify-admin/donate">
    <img src="https://img.shields.io/badge/%24-donate-ff69b4.svg" alt="donate">
  </a>
</p>

En | [Ru](./README.ru.md)

## Introduction

[vue-vuetify-admin](https://nelsoneax.github.io/vue-vuetify-admin/) is a production-ready front-end solution 
for admin interfaces. It based on [vue](https://github.com/vuejs/vue) and use the 
material design component framework [vuetify](https://github.com/vuetifyjs/vuetify).

It is a magical vue admin based on the newest development stack of vue, built-in i18n solution, 
typical templates for enterprise applications, lots of awesome features. It helps you build a 
large complex Single-Page Applications. I believe whatever your needs are, this project will help you.

- [Preview](https://NelsonEAX.github.io/vue-vuetify-admin)

- [Documentation](https://NelsonEAX.github.io/vue-vuetify-admin-site/)

- [Gitter](https://gitter.im/vue-vuetify-admin/discuss)

- [Donate](https://NelsonEAX.github.io/vue-vuetify-admin-site/donate/)

- [Wiki](https://github.com/NelsonEAX/vue-vuetify-admin/wiki)

- [Gitee](https://NelsonEAX.gitee.io/vue-vuetify-admin/) 国内用户可访问该地址在线预览

- Base template recommends using: [vue-admin-template](https://github.com/NelsonEAX/vue-admin-template)
- Desktop: [electron-vue-admin](https://github.com/NelsonEAX/electron-vue-admin)
- Typescript: [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template) 
(Credits: [@Armour](https://github.com/Armour))

**The current version is `v4.0+` build on `vue-cli`. If you find a problem, please put 
[issue](https://github.com/NelsonEAX/vue-vuetify-admin/issues/new). If you want to use the old version, 
you can switch branch to [tag/3.11.0](https://github.com/NelsonEAX/vue-vuetify-admin/tree/tag/3.11.0), 
it does not rely on `vue-cli'**

**This project does not support low version browsers (e.g. IE). Please add polyfill by yourself.**

## Preparation

You need to install [node](https://nodejs.org/) and [git](https://git-scm.com/) locally. 
The project is based on [ES2015+](https://es6.ruanyifeng.com/), 
[vue](https://cn.vuejs.org/index.html), 
[vuex](https://vuex.vuejs.org/zh-cn/), 
[vue-router](https://router.vuejs.org/zh-cn/), 
[vue-cli](https://github.com/vuejs/vue-cli) , 
[axios](https://github.com/axios/axios) and 
[vuetify](https://github.com/vuetifyjs/vuetify), 
all request data is simulated using [Mock.js](https://github.com/nuysoft/Mock).
Understanding and learning this knowledge in advance will greatly help the use of this project.

<p align="center">
  <img width="900" src="https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/docs/img/Dashboard.png?raw=true">
</p>

## Sponsors

Become a sponsor and get your logo on our README on GitHub with a link to your site. 
[[Become a sponsor]](https://www.patreon.com/NelsonEAX)

<a href="https://flatlogic.com/admin-dashboards?from=vue-vuetify-admin">
    <img width="150px" src="https://wpimg.wallstcn.com/9c0b719b-5551-4c1e-b776-63994632d94a.png" />
</a>
<p>Admin Dashboard Templates made with Vue, React and Angular.</p>

## Features

```
- Login / Logout

- Permission Authentication
  - Page permission
  - Directive permission
  - Permission configuration page
  - Two-step login

- Multi-environment build
  - dev sit stage prod

- Global Features
  - I18n
  - Multiple dynamic themes
  - Dynamic sidebar (supports multi-level routing)
  - Dynamic breadcrumb
  - Tags-view (Tab page Support right-click operation)
  - Svg Sprite
  - Mock data
  - Screenfull
  - Responsive Sidebar

- Editor
  - Rich Text Editor
  - Markdown Editor
  - JSON Editor

- Excel
  - Export Excel
  - Upload Excel
  - Visualization Excel
  - Export zip

- Table
  - Dynamic Table
  - Drag And Drop Table
  - Inline Edit Table

- Error Page
  - 401
  - 404

- Components
  - Avatar Upload
  - Back To Top
  - Drag Dialog
  - Drag Select
  - Drag Kanban
  - Drag List
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- Advanced Example
- Error Log
- Dashboard
- Guide Page
- ECharts
- Clipboard
- Markdown to html
```

## Getting started

```bash
# clone the project
git clone https://github.com/NelsonEAX/vue-vuetify-admin.git

# enter the project directory
cd vue-vuetify-admin

# install dependency
npm install

# develop
npm run serve
```

This will automatically open http://localhost:9527

## Build

```bash
# build for test environment
npm run build:stage

# build for production environment
npm run build:prod
```

## Advanced

```bash
# preview the release environment effect
npm run preview

# preview the release environment effect + static resource analysis
npm run preview -- --report

# code format check
npm run lint

# code format check and auto fix
npm run lint -- --fix

    "lint": "vue-cli-service lint",
    "test:e2e": "vue-cli-service test:e2e",
    "test:unit": "vue-cli-service test:unit"
```

Refer to [Documentation](https://NelsonEAX.github.io/vue-vuetify-admin-site/guide/essentials/deploy.html) for more information

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/NelsonEAX/vue-vuetify-admin/releases).

## Online Demo

[Preview](https://NelsonEAX.github.io/vue-vuetify-admin)

## Donate

If you find this project useful, you can buy author a glass of juice :tropical_drink:

![donate](https://wpimg.wallstcn.com/bd273f0d-83a0-4ef2-92e1-9ac8ed3746b9.png)

[Paypal Me](https://www.paypal.me/panfree23)

[Buy me a coffee](https://www.buymeacoffee.com/Pan)

## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions

## License

[MIT](https://github.com/NelsonEAX/vue-vuetify-admin/blob/master/LICENSE)

Copyright (c) 2019-present NelsonEAX
