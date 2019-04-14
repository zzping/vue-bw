// 该文件是路由的配置文件

// 引入Vue
import Vue from 'vue'
// 引入路由依赖
import Router from 'vue-router'
// 引入页面组件，命名为Login
import Login from '@/components/Login'
// 引入首页组件
import Home from '@/components/Home'

// 使用路由依赖
Vue.use(Router)

// 定义路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
