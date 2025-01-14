import { defineConfig } from 'vite'
import uni from "@dcloudio/vite-plugin-uni"
import AutoImport from 'unplugin-auto-import/vite'
 
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        // 需要自动导入的插件，自定义导入的API
        'vue',
        'uni-app',
      ]
    })
  ]
})