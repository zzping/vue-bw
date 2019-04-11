<template>
  <div id="hello" style="width: 100%; display: flex; justify-content: center; margin-top: 200px;">
    <el-card class="box-card" style="width: 500px;">
      <div slot="header" class="clearfix">
        <span>登录</span>
      </div>
      <div>
        <el-input v-model="user.username" placeholder="请输入用户名"></el-input>
        <el-input v-model="user.password" placeholder="请输入密码"></el-input>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    // 为什么要使用return？详见vue官方的解释：data必须是一个函数（https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0）
    return {
      user: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
