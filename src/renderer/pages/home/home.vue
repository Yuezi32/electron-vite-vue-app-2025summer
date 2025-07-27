<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

// 输入目录路径
const inputPath = ref('')
// 输出目录路径
const outputPath = ref('')
// 压缩质量（整数：1-10）
const quality = ref(7)
// loading状态
const loading = ref(false)
// 图片列表数据源
const dataSource = ref([])

// 获取文件路径中的文件名
function getFileName(path) {
    return path.split(/[/\\]/).pop()
}

// 格式化文件大小
function formatFileSize(bytes) {
    bytes = parseInt(bytes, 10)
    if (bytes >= 1024 * 1024) {
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
    } else if (bytes >= 1024) {
        return (bytes / 1024).toFixed(2) + ' KB'
    } else {
        return bytes + ' B'
    }
}

// 计算压缩比例
function calcCompressPercent(row) {
    const original = parseInt(row.fileSize, 10)
    const compressed = parseInt(row.compressFileSize, 10)
    const percent = (((compressed - original) / original) * 100).toFixed(2)
    return `${percent}%`
}

// 格式化输出滑动条提示
function tooltipFormatter(value) {
    return `压缩质量：${value}`
}

// 点击设置输入目录按钮
function handleSetInputPath() {
    // 通过preload接收主进程返回的目录图片文件列表
    window.api.readDirImages({
        callback: (event, info) => {
            console.log('渲染进程：接收主进程返回的目录图片文件列表：', info)
            // 如果用户取消了选择目录，则不进行任何操作
            if (info.canceled) return
            // 设置输入目录
            inputPath.value = info.filePaths[0] || ''
            // 设置扫描出来的图片列表
            dataSource.value = info.fileList.map((fileInfo, index) => ({
                key: index,
                // 文件路径
                filePath: fileInfo.filePath,
                // 文件大小（字节数）
                fileSize: fileInfo.fileSize,
                // 图片尺寸
                imageSize: fileInfo.imageSize,
                // 压缩后文件大小（初始为null）
                compressFileSize: null,
                // 压缩比例（初始为null）
                compressPercent: null,
                // 状态（0=未开始, 1=压缩中, 2=压缩完成，3=压缩失败）
                status: 0
            }))
        },
        data: {
            msg: '演示渲染进程向主进程传递数据'
        }
    })
}

// 点击设置输出目录按钮
function handleSetOutputPath() {
    // 通过preload接收主进程返回的目录路径
    window.api.chooseDir({
        callback: (event, info) => {
            // 如果用户取消了选择目录，则不进行任何操作
            if (info.canceled) return
            // 设置输出目录
            outputPath.value = info.filePaths[0] || ''
        }
    })
}

// 开始压缩
async function handleStartCompress() {
    // 如果正在压缩或者没有图片列表，则不执行
    if (loading.value === true || dataSource.value.length === 0) return
    // 如果没有设置输出目录，则不执行
    if (!outputPath.value || outputPath.value === '') {
        alert('请设置输出目录')
        return
    }
    // 置为loading态
    loading.value = true

    // 逐个处理dataSource中的图片
    for (let index = 0; index < dataSource.value.length; index++) {
        const item = dataSource.value[index]
        // 更新该条数据的状态为“压缩中”
        dataSource.value[index].status = 1
        // 交给主进程进行图片处理
        const result = await window.api.imageCompress({
            inputPath: item.filePath,
            outputDir: outputPath.value,
            quality: quality.value * 10
        })

        if (result.success) {
            // 压缩成功，更新状态和压缩后文件大小
            dataSource.value[index].status = 2
            dataSource.value[index].compressFileSize = result.compressFileSize
        } else {
            // 压缩失败，更新状态
            dataSource.value[index].status = 3
        }
        // 全部执行执行后的处理
        if (index === dataSource.value.length - 1) {
            // 处理成功的数量
            let successCount = 0
            // 处理失败的数量
            let failCount = 0
            // 累计成功和失败的数量
            for (let i = 0; i < dataSource.value.length; i++) {
                if (dataSource.value[i].status === 2) {
                    successCount++
                } else if (dataSource.value[i].status === 3) {
                    failCount++
                }
            }
            // 弹出处理结果通知框
            ElMessage({
                message: `压缩完成：成功 ${successCount} 个，失败 ${failCount} 个。`,
                type: 'success'
            })
        }
    }
    // 取消loading状态
    loading.value = false
}
</script>

<template>
    <div class="P-home">
        <div class="settings-con">
            <div class="settings">
                <div class="item">
                    <el-button type="primary" @click="handleSetInputPath"> 设置输入目录 </el-button>
                    <span class="path">{{ inputPath }}</span>
                </div>
                <div class="item">
                    <el-button type="primary" @click="handleSetOutputPath">
                        设置输出目录
                    </el-button>
                    <span class="path">{{ outputPath }}</span>
                </div>
                <div class="item-slider">
                    <span>差</span>
                    <el-slider
                        v-model="quality"
                        :min="1"
                        :max="10"
                        :format-tooltip="tooltipFormatter"
                        class="slider-con"
                    />
                    <span>好</span>
                </div>
            </div>
            <el-button
                type="success"
                class="opt-button"
                :loading="loading"
                @click="handleStartCompress"
            >
                开始压缩
            </el-button>
        </div>

        <div class="table-con">
            <el-table :data="dataSource" style="width: 100%">
                <el-table-column label="图片预览" width="150">
                    <template #default="scope">
                        <el-image
                            style="width: 80px; height: auto"
                            :src="'file://' + scope.row.filePath"
                            fit="contain"
                        />
                    </template>
                </el-table-column>

                <el-table-column label="文件名" prop="filePath">
                    <template #default="scope">
                        <el-tooltip :content="scope.row.filePath" placement="top">
                            <span>{{ getFileName(scope.row.filePath) }}</span>
                        </el-tooltip>
                    </template>
                </el-table-column>

                <el-table-column label="图片尺寸" width="150">
                    <template #default="scope">
                        {{ scope.row.imageSize.width }} x {{ scope.row.imageSize.height }}
                    </template>
                </el-table-column>

                <el-table-column label="原始文件大小" width="150" align="right">
                    <template #default="scope">
                        {{ formatFileSize(scope.row.fileSize) }}
                    </template>
                </el-table-column>

                <el-table-column label="压缩后大小" width="150" align="right">
                    <template #default="scope">
                        <span v-if="scope.row.status === 2">
                            {{ formatFileSize(scope.row.compressFileSize) }}
                        </span>
                    </template>
                </el-table-column>

                <el-table-column label="压缩比例" width="120">
                    <template #default="scope">
                        <el-tag v-if="scope.row.status === 0" type="info"> 未开始 </el-tag>
                        <el-tag v-else-if="scope.row.status === 1"> 压缩中 </el-tag>
                        <el-tag v-else-if="scope.row.status === 2" type="success">
                            {{ calcCompressPercent(scope.row) }}
                        </el-tag>
                        <el-tag v-else-if="scope.row.status === 3" type="danger"> 压缩失败 </el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<style scoped lang="stylus">
.P-home
    display: flex
    flex-direction: column
    height: 100%
    .settings-con
        display: flex
        padding: 10px
        gap: 10px
        background: #bae0ff
        .settings
            display: flex
            flex-direction: column
            gap: 6px
            flex: 1
            .item
                display: flex
                gap: 8px
                background: #ffffff
                border-radius: 6px
            .item-slider
              display: flex
              gap: 10px
              .slider-con
                flex: 1
            .path
                display: inline-block
                height: 32px
                line-height: 32px
        .opt-button
            width: 120px
            height: 100%
    .table-con
        flex: 1
        overflow-y: auto
        padding-bottom: 70px
</style>
