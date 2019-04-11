
/*
*
*  1、 main.js是Vue应用的入口文件，类似Java中的SpringBoot项目中的SpringBootApplication主应用程序
*  2、main.js有两个作用
*     1、用来创建一个新的vue实例，并将这个实例挂载在根节点上
*     2、引入其他的vue插件，比如路由插件、ajax插件。前提是先install相应的插件
*
* */


// 引入vue
import Vue from 'vue'
// 引入根组件
import App from './App'
// 引入路由设置
import router from './router'
// 引入element-ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

// 使用element-ui依赖
Vue.use(ElementUI);

// 定义一个vue的实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


