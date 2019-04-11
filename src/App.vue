
<!--

  App.vue是项目的根组件，可以包含其他的组件，从而组成组件树
    1、由于使用了vue-loader，所以她会将这个格式编写的单文件Vue组件转换成JavaScript模块
    2、一个 .Vue 文件由三个部分组成
        1、template： 模板，即html页面。注意template下只能有一个节点。不能有兄弟节点。也就是说template标签下只能有一个节点。
        2、script：js，通常使用es6的语法，用export default到处。里面可以包含数据data、生命周期mounted等、方法methods等
        3、style：css样式，默认这些样式是影响全局的，如果需要让只在该组件下起作用，需要在style标签上加上scoped属性。<style scoped></style>

-->

<!--模板-->
<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<!--script-->
<script>
export default {
  name: 'App'
}
</script>


<!--样式-->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
