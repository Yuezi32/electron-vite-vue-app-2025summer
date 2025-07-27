/**
 * 控制台彩色文字输出
 * @param {string} output
 * @param {string} color
 * @returns
 */

export function colorConsole(output, color) {
    const colorCode = (col) => {
        switch (col) {
            case 'black': // 黑色
                return '30'
            case 'red': // 红色
                return '31'
            case 'green': // 绿色
                return '32'
            case 'yellow': // 黄色
                return '33'
            case 'blue': // 蓝色
                return '34'
            case 'purple': // 紫色
                return '35'
            case 'cyan': // 青色
                return '36'
            case 'white': // 白色
                return '37'
            default: // 默认色
                return '39'
        }
    }
    console.log(`\x1b[${colorCode(color)}m${output}\x1b[0m`)
}
