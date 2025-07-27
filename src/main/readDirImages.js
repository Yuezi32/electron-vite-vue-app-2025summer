const { dialog } = require('electron')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// 允许的图片文件扩展名
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp']

// 异步获取图片尺寸
async function getImageMetadata(filePath) {
    try {
        const metadata = await sharp(filePath).metadata()
        return {
            width: metadata.width,
            height: metadata.height
        }
    } catch (error) {
        console.error(`获取图片 ${filePath} 尺寸失败:`, error)
        return {
            width: 0,
            height: 0
        }
    }
}

// 递归遍历文件
const loadFilesInDir = async (dir) => {
    let fileList = []
    // 读取目录下全部文件及子目录
    let files = fs.readdirSync(dir)
    for (var i = 0; i < files.length; i++) {
        let filePath = path.join(dir, files[i])
        // 获取文件信息
        let fileData = fs.statSync(filePath)
        // 判断是文件还是目录
        if (fileData.isFile()) {
            // 如果是文件，则获取文件扩展名
            const ext = path.extname(filePath).toLowerCase()
            // 如果是允许的图片文件扩展名，则添加到文件列表
            if (allowedExtensions.includes(ext)) {
                // 获取图片尺寸
                const imageSize = await getImageMetadata(filePath)
                // 获取图片文件大小（字节数）
                const fileSize = fileData.size
                // 加入图片文件列表
                fileList.push({ filePath, imageSize, fileSize })
            }
        } else {
            // 如果是目录，则递归遍历，并拼接结果
            fileList = fileList.concat(await loadFilesInDir(filePath))
        }
    }
    return fileList
}

// 打开选择目录对话框并遍历目录里的所有文件
const readDirImages = (event, arg) => {
    console.log('主进程：接收渲染进程传参', arg)
    dialog
        .showOpenDialog({
            // 只允许选择文件夹
            properties: ['openDirectory']
        })
        .then(async (result) => {
            if (!result.canceled) {
                result.fileList = await loadFilesInDir(result.filePaths[0])
            }
            // 将处理结果返回给preload
            event.reply('readDirImages-reply', result)
        })
}

// 选择目录对话框
const chooseDir = (event, arg) => {
    dialog
        .showOpenDialog({
            // 只允许选择文件夹
            properties: ['openDirectory']
        })
        .then((result) => {
            // 将处理结果返回给preload
            event.reply('chooseDir-reply', result)
        })
}

export { readDirImages, chooseDir }
