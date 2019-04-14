<template>
  <div id="hello" style="width: 100%; display: flex; justify-content: center; margin-top: 200px;">
    <el-card class="box-card" style="width: 500px;">
      <div slot="header" class="clearfix">
        <span>RenHe</span>
      </div>
      <div>
        <el-form :model="loginForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 80%">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密 码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <!--<el-button @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    /*login: function (ruleForm) {
      console.log(ruleForm.username, ruleForm.password)
    }*/
    login() {
      console.log(1,this.loginForm.username, this.loginForm.password);
    }
  },
  data () {
    // 为什么要使用return？详见vue官方的解释：data必须是一个函数（https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0）
    return {
      loginForm: {
        username: "admin",
        password: "12345"
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          /*{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }*/
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          /*{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }*/
        ]
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
