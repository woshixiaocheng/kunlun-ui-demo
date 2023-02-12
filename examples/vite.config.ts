import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins:[vue()],
    // css: {
    //     /* CSS 预处理器 */
    //     preprocessorOptions: {
    //       scss: {
    //         additionalData: '@import "theme-chalk/src/index.scss";'
    //       }
    //     }
    //   },
})
