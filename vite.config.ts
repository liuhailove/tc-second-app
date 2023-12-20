import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// 自动导入Icon图标
import IconResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // 按需引入Element-plus //引入icon
        AutoImport({
            resolvers: [
                ElementPlusResolver({importStyle: false}), // 组件自动导入
                IconResolver({prefix: "icon"}),
            ],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),// 组件自动导入
                IconResolver({
                    //prefix: 'icon',          // 修改Icon组件前缀，不设置则默认为i,禁用则设置为false
                    enabledCollections: ["ep"] // 指定collection，即指定为elementplus图标集ep
                }),
            ],
        }),
        Icons({scale: 1, defaultClass: "inline-block", autoInstall: true}),
    ],
})
