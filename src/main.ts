// import { createApp } from 'vue'
// import App from './App.vue'
// import * as VueRouter from 'vue-router'
// import routes from "./config/route"
// import Vant from 'vant';
// import 'Vant/lib/index.css';
//
// const  app = createApp(App);
// app.use(Vant);
//
//
// // 3. 创建路由实例并传递 `routes` 配置
// // 你可以在这里输入更多的配置，但我们在这里
// // 暂时保持简单
// const router = VueRouter.createRouter({
//     // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//     history: VueRouter.createWebHistory(),
//     routes, // `routes: routes` 的缩写
// })
//
// app.use(router);
// app.mount('#app');

import {createApp} from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import routes from "./config/route";
import Vant from 'vant';
import 'vant/lib/index.css';
import '../global.css'

const app = createApp(App);
app.use(Vant);

const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router);
app.mount('#app')



