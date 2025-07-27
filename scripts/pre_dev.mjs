/**
 * 以下代码用于解决在windows系统中，Electron主进程在控制台输出中文乱码的问题
 */
import os from 'os'
import { execSync } from 'child_process'

if (os.platform() === 'win32') {
  try {
    execSync('chcp 65001', { stdio: 'ignore' })
    console.log('✅ 控制台编码设置为 UTF-8')
  } catch (err) {
    console.log('⚠️ 控制台编码设置失败', err.message)
  }
}
