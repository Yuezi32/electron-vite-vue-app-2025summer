/**
 * 压缩图片
 */

const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const imageCompress = async (event, args) => {
    // 获取输入路径、输出目录、图像质量
    const { inputPath, outputDir, quality } = args
    // 从完整的输入路径中提取文件名
    const fileName = path.basename(inputPath)
    // 获取图片文件的扩展名
    const ext = path.extname(fileName).toLowerCase()
    // 构建输出文件的完整路径
    const outputPath = path.join(outputDir, fileName)

    try {
        // 创建 sharp 实例
        let image = sharp(inputPath)

        // 判断格式，保持原格式进行压缩（
        switch (ext) {
            case '.jpg':
            case '.jpeg':
                // quality区间是1-100，0 最差，100 最好
                image = image.jpeg({ quality })
                break
            case '.png':
                // compressionLevel区间是0-9，0压缩快体积大，9压缩慢体积小，对图像质量无影响
                // 这里将quality转换为0-9的范围，以适应compressionLevel
                // palette: true  表示使用PNG8调色板，有损压缩（更小体积）
                image = image.png({
                    compressionLevel: Math.round(quality / 11),
                    quality,
                    palette: true
                })
                break
            case '.webp':
                image = image.webp({ quality })
                break
            default:
                // 不支持的格式，直接跳过
                throw new Error(`不支持的图像格式：${ext}`)
        }

        // 写入文件（覆盖或另存）
        await image.toFile(outputPath)

        // 获取压缩后的文件大小
        const { size: afterSize } = fs.statSync(outputPath)
        // 处理成功的返回
        return {
            inputPath,
            success: true,
            compressFileSize: afterSize
        }
    } catch (error) {
        // 处理失败的返回
        return {
            inputPath,
            success: false,
            message: error.message
        }
    }
}

export { imageCompress }
