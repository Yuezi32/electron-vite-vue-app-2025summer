import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
    // 读取目录中的所有图片文件
    readDirImages: ({ callback, data }) => {
        // 接收主进程返回的目录图片文件列表
        ipcRenderer.once('readDirImages-reply', (event, info) => {
            callback(event, info)
        })
        ipcRenderer.send('readDirImages', data)
    },
    // 选择目录对话框
    chooseDir: ({ callback }) => {
        // 接收主进程返回的目录路径
        ipcRenderer.once('chooseDir-reply', (event, info) => {
            callback(event, info)
        })
        ipcRenderer.send('chooseDir')
    },
    imageCompress: (data) => {
        return ipcRenderer.invoke('imageCompress', data)
    },
    // 退出应用并安装更新
    appQuitAndInstall: () => {
        ipcRenderer.send('quitAndInstall')
    },
    // 发送消息到主进程
    appSilentCheckAndDownload: (callback) => {
        ipcRenderer.once('app-download', (event, info) => {
            callback(event, info)
        })
        ipcRenderer.send('silentCheckAndDownload')
    },
    // 检查是否有可用更新
    appCheckUpdate: (callback) => {
        ipcRenderer.once('app-check-update', (event, info) => {
            callback(event, info)
        })
        ipcRenderer.send('checkForUpdates')
    },
    /**
     * 下载安装包
     * Windows会下载到：C:\Users\用户名\AppData\Local\electron-vite-react-app-updater
     * macOS会下载到：/Users/用户名/Library/Caches/electron-vite-react-app-updater
     **/
    appDownloadUpdate: (callback) => {
        // 这里要使用 `on` 而不是 `once`，因为下载过程中可能会多次发送进度更新
        ipcRenderer.on('app-download', (event, info) => {
            callback(event, info)
        })
        ipcRenderer.send('downloadUpdate')
    }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld('electron', electronAPI)
        contextBridge.exposeInMainWorld('api', api)
    } catch (error) {
        console.error(error)
    }
} else {
    window.electron = electronAPI
    window.api = api
}
