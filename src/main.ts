import {createApp} from 'vue'
import './style.css'
import ElementPlus from 'element-plus' // element-plus
import 'element-plus/dist/index.css' // element-plus
import * as Icons from '@element-plus/icons-vue'

import App from './App.vue'
import router from "./router/index";

const app = createApp(App);

app.use(router)
    .use(ElementPlus)
    .mount('#app')

//动态图标库
Object.keys(Icons).forEach((key) => {
    app.component(key,Icons[key as keyof  typeof Icons])
})