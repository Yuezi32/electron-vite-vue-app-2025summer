# 2025盛夏版：基于electron37+vite7的Vue桌面客户端保姆教程

精心整理的适合初学者的 Electron+Vite+Vue 速成教程。把知识点与实操相结合，把晦涩的概念变得通俗易懂。

本教程采用全新的Demo案例，通过开发一个批量图片压缩的实用小工具，全面掌握桌面客户端开发所涉及的各个知识点，新增了集成Chrome插件、检查更新、优化控制台输出、macOS签名等多个细节内容。经过本教程的学习，你将掌握更全面的Electron实战开发技能。希望能够帮助各位省去摸索的时间，少走弯路，快速完成实际工作中的项目开发。


## 本项目架构实现了以下功能：
- 基于electron-vite 4.0.0搭建
- 集成Sass/Scss/Less/Stylus
- 集成Element Plus
- 集成vue-router
- 基于sharp实现了图片压缩小工具
- 基于electronAPI实现主进程与渲染进程通信
- 基于send与on/once实现主进程与渲染进程通信
- 基于invoke与handle实现主进程与渲染进程通信
- 讲解解决主进程控制中文乱码问题
- 讲解如何实现多彩文字色输出
- 讲解应用图标、APP窗口大小、取消跨域限制、禁止DevTools等常用配置
- 讲解如何集成Chrome插件
- 讲解如何解决macOS的签名问题
- 讲解如何实现应用的静默更新和手动更新
- 讲解windows安装包的自定义设置
- 讲解如何进行V8字节源代码保护、敏感字符串保护
- 讲解如何进行主进程热更新、禁止应用多开等问题
- 实现了完整的Electron项目Demo。

## 配套教程

📚📚本项目有详细的讲解教程，原文请关注我的微信公众号【卧梅又闻花】📚📚

[《2025盛夏版：基于electron37+vite7的Vue桌面客户端保姆教程（上篇）》](https://mp.weixin.qq.com/s/kG_hvnUa8TcesolPYRXCYA)

[《2025盛夏版：基于electron37+vite7的Vue桌面客户端保姆教程（下篇）》](https://mp.weixin.qq.com/s/JZrIvObfpV3CMhlwuJOwmg)


## 章节目录
```
1 Electron核心概念
• 1.1 主进程（main）
• 1.2 渲染进程（renderer）
• 1.3 预加载脚本（preload）
2 初始化项目
• 2.1 配置npm国内镜像源
• 2.2 使用electron-vite新建项目
• 2.3 精简项目
• 2.4 去掉renderer的src目录
• 2.5 ESLint相关配置（选读）
• 2.6 设置DevTools快捷键
3 Vite基础配置
• 3.1 支持Sass/Scss/Less/Stylus
• 3.2 设置路径别名
4 项目架构搭建
• 4.1 项目目录结构设计
• 4.2 关于样式命名规范
• 4.3 设置全局公用样式
5 引入Element Plus
• 5.1 安装Element Plus
• 5.2 设置Element Plus为中文语言
6 渲染进程页面开发
• 6.1 构建Login页面
• 6.2 构建Home页面
• 6.3 允许Electron跨域请求和加载本地资源
• 6.4 构建公共Header组件
• 6.5 构建页面路由
• 6.6 构建框架页面Entry
• 6.7 引入路由
• 6.8 路由跳转：Login页面跳转Home页面
• 6.9 路由守卫
• 6.10 路由跳转：退出返回登录页
7 主进程与渲染进程通信方式一：暴露electronAPI给渲染进程
• 7.1 预加载脚本（preload）
• 7.2 构建“关于软件”弹窗
8 主进程与渲染进程通信方式二：send与on/once
• 8.1 预加载脚本（preload）开发
• 8.2 主进程开发：读取目录中的全部图片文件
• 8.3 继续渲染进程Home页面开发
• 8.4 运行效果
• 8.5 解决windows系统主进程控制台中文乱码的问题
• 8.6 实现系统控制台多彩文字色输出
• 8.7 实现设置输出目录
• 8.8 关于ipcRenderer.on/once
9 主进程与渲染进程通信方式三：invoke与handle
• 9.1 实现主进程图片压缩处理
• 9.2 使用invoke与handle串通渲染进程与主进程
• 9.3 为什么不使用send与on/once
10 其他Electron常用配置
• 10.1 设置应用图标
• 10.2 设置APP窗口大小
• 10.3 禁止生产环境的DevTools
• 10.4 集成Chrome插件
• 10.5 禁止启动同个Electron应用
11 build项目
• 11.1 Electron相关镜像源配置（无需更改）
• 11.2 设置build版应用icon
• 11.3 配置macOS的签名
• 11.3.1 无签名版应用（可安装，但不能自动更新）
• 11.3.2 有签名版应用（可安装，可自动更新）
• 11.4 设置不需要打包的目录
• 11.5 执行build命令
• 11.6 build后的目录结构
• 11.7 设置windows安装包允许用户自定义安装目录
• 11.8 设置windows安装包强制安装路径（选读）
• 11.8.1 全局安装（C:\Program Files）
• 11.8.2 指定默认目录安装
12 自动更新
• 12.1 部署更新服务器
• 12.2 实现主进程检查更新的逻辑
• 12.3 设置更新服务器地址的几种方式
• 12.3.1 主进程 autoUpdater.setFeedURL（推荐）
• 12.3.2 electron-builder.yml（不使用）
• 12.3.3 dev-app-update.yml（不使用）
• 12.4 在渲染进程实现静默检查更新和自动下载
• 12.5 在渲染进程实现手动检查更新和手动下载
13 其他说明
• 13.1 源代码保护
• 13.2 敏感字符串保护
• 13.3 主进程热更新（选读）
• 13.4 批量升级全部项目npm依赖包
• 13.5 项目的不足之处
14 项目Git源码
结束语
```

## 使用说明

安装项目依赖：
```
npm install
```

启动开发环境：
```
npm run dev
```

build项目：
```
# windows
npm run build:win
# macOS
npm run build:mac
# linux
npm run build:linux
```

💖 得“鱼🐟”，不如会“渔🎣”，原文请关注我的微信公众号【卧梅又闻花】💖

[《2025盛夏版：基于electron37+vite7的Vue桌面客户端保姆教程（上篇）》](https://mp.weixin.qq.com/s/kG_hvnUa8TcesolPYRXCYA)

[《2025盛夏版：基于electron37+vite7的Vue桌面客户端保姆教程（下篇）》](https://mp.weixin.qq.com/s/JZrIvObfpV3CMhlwuJOwmg)
