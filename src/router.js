// 路由
import Vue from 'vue'
import Router from 'vue-router'

//组件模板
import Home from './views/Home.vue'
import ScssVue from './views/scss.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',name:'home',component:Home},
        {path:'/scss',name:'scss',component:ScssVue},
    ]
})