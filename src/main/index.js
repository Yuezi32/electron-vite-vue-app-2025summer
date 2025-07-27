import { app, shell, BrowserWindow, ipcMain, globalShortcut, session } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { readDirImages, chooseDir } from './readDirImages'
import { imageCompress } from './imageCompress'
import { colorConsole } from './colorConsole.js'
import {
    checkForUpdates,
    downloadUpdate,
    quitAndInstall,
    silentCheckAndDownload
} from './checkForUpdate.js'

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 960,
        height: 720,
        show: false,
        autoHideMenuBar: true,
        icon,
        webPreferences: {
            preload: join(__dirname, '../preload/index.js'),
            sandbox: false,
            // 关闭webSecurity会降低安全性，但可以直接解决以下问题：
            // 1. 允许加载本地文件（file://）中的资源
            // 2. 允许跨域请求
            webSecurity: false,
            // 禁止生产环境使用DevTool
            devTools: is.dev ? true : false
        }
    })

    mainWindow.on('ready-to-show', () => {
        mainWindow.show()
    })

    mainWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url)
        return { action: 'deny' }
    })

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
        mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
    } else {
        mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
    }

    // 设置DevTools快捷键
    globalShortcut.register('CommandOrControl+Shift+i', function () {
        mainWindow.webContents.openDevTools()
    })

    // 设置Vue.js devtools浏览器插件存放路径
    // 插件源码下载地址 https://www.crx4chrome.com/
    let extensionPath
    if (!app.isPackaged) {
        // 开发环境
        extensionPath = join(__dirname, '..', '..', 'resources', 'crx', 'vuejs-devtools')
    } else {
        // 生产环境（与开发环境路径层级不一致）
        extensionPath = join(
            app.getAppPath(),
            '..',
            'app.asar.unpacked',
            'resources',
            'crx',
            'vuejs-devtools'
        )
    }
    // 加载浏览器插件
    session.defaultSession.extensions
        .loadExtension(extensionPath, { allowFileAccess: true })
        .then(() => {
            colorConsole('🍔 Chrome插件Vue.js devtools已加载。', 'cyan')
        })
        .catch((err) => {
            colorConsole('❌ Chrome插件Vue.js devtools加载失败。', err)
        })
    return mainWindow
}

// 程序单例模式
let myWindow = null
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
    // 如果已经有同样的该程序正在运行，则不启动
    app.quit()
} else {
    // 如果检测到有同样的该程序正在试图启动...
    app.on('second-instance', (event, commandLine, workingDirectory, additionalData) => {
        if (myWindow) {
            // 如果正在运行的程序窗口处于最小化状态，则恢复窗口
            if (myWindow.isMinimized()) myWindow.restore()
            // 将将正在运行的程序窗口置为当前聚焦态
            myWindow.focus()
        }
    })

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.whenReady().then(() => {
        // Set app user model id for windows
        electronApp.setAppUserModelId('com.electron')

        // Default open or close DevTools by F12 in development
        // and ignore CommandOrControl + R in production.
        // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
        app.on('browser-window-created', (_, window) => {
            optimizer.watchWindowShortcuts(window)
        })

        myWindow = createWindow()

        app.on('activate', function () {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (BrowserWindow.getAllWindows().length === 0) createWindow()
        })
    })

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
}
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('readDirImages', readDirImages)
ipcMain.on('chooseDir', chooseDir)
ipcMain.handle('imageCompress', imageCompress)
ipcMain.on('checkForUpdates', checkForUpdates)
ipcMain.on('downloadUpdate', downloadUpdate)
ipcMain.on('quitAndInstall', quitAndInstall)
ipcMain.on('silentCheckAndDownload', silentCheckAndDownload)
