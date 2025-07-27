import { app } from 'electron'
import { autoUpdater } from 'electron-updater'
import os from 'os'
import { colorConsole } from './colorConsole.js'

// windows 更新服务器地址（32位/64位）
const WINDOWS_UPDATE_SERVER_URL = 'http://localhost/electron-demo/win/'
// mac 更新服务器地址（Intel/Apple Silicon）
const MAC_UPDATE_SERVER_URL = 'http://localhost/electron-demo/mac/'
// linux 更新服务器地址（各类 Linux 发行版）
const LINUX_UPDATE_SERVER_URL = 'http://localhost/electron-demo/linux/'

// 根据当前系统设置更新服务器地址
if (os.platform() === 'win32') {
    autoUpdater.setFeedURL({ provider: 'generic', url: WINDOWS_UPDATE_SERVER_URL })
} else if (os.platform() === 'darwin') {
    autoUpdater.setFeedURL({ provider: 'generic', url: MAC_UPDATE_SERVER_URL })
} else if (os.platform() === 'linux') {
    autoUpdater.setFeedURL({ provider: 'generic', url: LINUX_UPDATE_SERVER_URL })
}

// 关闭自动下载更新
autoUpdater.autoDownload = false
// 不在退出时自动安装
autoUpdater.autoInstallOnAppQuit = false
// 开启开发环境的更新检测（开发环境默认是不开启更新检测的）
autoUpdater.forceDevUpdateConfig = true

// 检查更新
export function checkForUpdates(event) {
    // 清除所有监听，避免重复监听
    autoUpdater.removeAllListeners()

    // 有可用更新，hasUpdate为true，version为新版本号
    autoUpdater.on('update-available', (info) => {
        event.reply('app-check-update', { hasUpdate: true, version: info.version, error: false })
    })

    // 无可用更新，hasUpdate为false
    autoUpdater.on('update-not-available', (info) => {
        event.reply('app-check-update', { hasUpdate: false, error: false })
    })

    // 检查更新失败，hasUpdate为false，message为错误信息
    autoUpdater.on('error', (err) => {
        event.reply('app-check-update', { hasUpdate: false, error: true, message: err })
    })
    // 执行检查更新
    autoUpdater.checkForUpdates()
}

// 下载安装包
export function downloadUpdate(event) {
    // 清除所有监听，避免重复监听
    autoUpdater.removeAllListeners()
    // 下载进度（在下载过程中会自动多次触发，直至下载完成）
    autoUpdater.on('download-progress', (progressObj) => {
        event.reply('app-download', {
            status: 'downloading',
            progress: progressObj.percent
        })
    })

    // 下载完成
    autoUpdater.on('update-downloaded', () => {
        event.reply('app-download', {
            status: 'done',
            message: '下载完成'
        })
    })

    // 下载失败
    autoUpdater.on('error', (err) => {
        event.reply('app-download', {
            status: 'failed',
            message: err == null ? 'unknown' : err
        })
    })

    // 执行下载更新
    autoUpdater.downloadUpdate()
}

// 退出应用并安装更新
export function quitAndInstall() {
    // 避免干扰退出流程
    app.removeAllListeners('window-all-closed')
    // 退出应用并安装更新
    autoUpdater.quitAndInstall()
}

// 静默检查更新和下载
export function silentCheckAndDownload(event) {
    // 清除所有监听，避免重复监听
    autoUpdater.removeAllListeners()

    // 新的版本号
    let newVersion = null

    // 有可用更新
    autoUpdater.on('update-available', (info) => {
        newVersion = info.version
        colorConsole(`🎉 静默检查更新：有可用更新v${newVersion}，开始静默下载...`, 'cyan')
        autoUpdater.downloadUpdate()
    })

    // 无可用更新
    autoUpdater.on('update-not-available', (info) => {
        colorConsole('🎈 静默检查更新：无可用更新。', 'cyan')
    })

    // 检查更新失败
    autoUpdater.on('error', () => {
        colorConsole('❌ 静默检查更新：检查更新失败，未找到更新服务器。', 'red')
    })

    // 下载完成
    autoUpdater.on('update-downloaded', () => {
        colorConsole('🌱 静默检查更新：更新包已下载完成，可以安装。', 'cyan')
        event.reply('app-download', {
            version: newVersion,
            message: '🌱 静默检查更新：更新包已下载完成，可以安装。'
        })
    })

    try {
        autoUpdater.checkForUpdates().catch((err) => {
            // 消除默认在控制台的异常输出
            return
        })
    } catch (err) {
        console.warn(
            '❌ 静默检查更新：autoUpdater.checkForUpdates方法执行异常。',
            err.message || err
        )
    }
}
