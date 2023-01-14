
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'//为了可以使用ts
export default defineConfig(
    {
        build: {
            target: 'modules',//支持原生ES模块，原生ESM动态导入
            //打包文件目录，指定输出路径，相对于项目根目录的
            outDir: "es",
            //压缩
            minify: false,//混淆的意思就是把代码中有意义的内容该写成无意义的，false可以禁用最小化混淆
            //css分离
            //cssCodeSplit: true,
            rollupOptions: {//自定义底层是rollup打包配置
                //忽略打包vue文件，不想在最终的打包文件里出现第三方库
                external: ['vue'],
                input: ['src/index.ts'],//入口文件
                output: [//输出的配置
                    {
                        format: 'es',//输出的格式，这里是es6
                        //不用打包成.es.js,这里我们想把它打包成.js
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'es',
                        preserveModulesRoot: 'src'
                    },
                    {
                        format: 'cjs',
                        entryFileNames: '[name].js',
                        //让打包目录和我们目录对应
                        preserveModules: true,
                        //配置打包根目录
                        dir: 'lib',
                        preserveModulesRoot: 'src'
                    }
                ]
            },
            lib: {//库模式,cjs就是CommonJS
                entry: './index.ts',
                formats: ['es', 'cjs']
            }
        },
        plugins: [//以数组的方式配置需要用到的插件api
            vue(),
            dts({
                tsConfigFilePath:'../../tsconfig.json'
            }),
            dts({
                outputDir:'lib',
                tsConfigFilePath:'../../tsconfig.json'
            })
        ]
    }
)
