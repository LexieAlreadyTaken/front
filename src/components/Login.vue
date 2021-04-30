<template>
  <div class="login">
    <el-form :model="form" class="loginform">
      <div class="formhead">欢迎访问</div>
      <div class="formsubhead">您的每一次使用都在让WebS变得更好！</div>
      <el-form-item class="formitem_first">
        <el-input type="text" v-model="form.username" placeholder="请输入用户名"
          clearable class="input"></el-input>
      </el-form-item>
      <el-form-item class="formitem">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"
          clearable class="input"></el-input>
      </el-form-item>
      <el-form-item class="buttoncont">
        <el-button class="loginbtn" @click="login()">登录</el-button>
        <el-button class="registerbtn" @click="register()">注册</el-button>
      </el-form-item>
    </el-form>
    <my-global />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  components:{
  },
  props: {
  },
  data(){
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(){
      var self = this
      axios.get('/api/login',{
        params:JSON.stringify(this.form)
      })
      .then( (response) => {
        if(response.data!=="()"){
          if(!self.$cookies.get('user')){
            self.$cookies.set("default_unit_second","input_value", -1)
            var a = self.form
            a['times'] = 0
            self.$cookies.set('user',self.form)
          }
          self.$router.push('/index')
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("可能有什么地方出错了！")
      })
    },
    register(){
      this.$router.push('/register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    background-image: url("../../public/login_bgr.jpg");
    width: 100vw;
    height: 100vh;
    background-size: contain;
  }
  .formhead{
    font-size: 40px;
    padding: 0;
    text-align: left;
  }
  .formsubhead{
    font-size: 1em;
    padding: 0;
    text-align: left;
  }
  .loginform{
    background: #ffffffa0;
    width: 30vw;
    height: 100vh;
    padding: 20vh 2rem 0;
    transform: translateX(60vw);
    box-sizing: border-box;
  }
  .formitem_first{
    padding-top: 10vh;
  }
  .formitem{
    padding-top: 1em;
  }
  .buttoncont{
    padding-top: 5vh;
    text-align: right;
  }
  .loginbtn{
    background-color: #733380;
    border-width: 0;
    color: #ffffffc0;
  }
  .registerbtn{
    background-color: #ae9ab3;
    border-width: 0;
    color: #ffffffc0;
  }
</style>
<style>
  .el-input__inner{
    background-color: transparent;
    border-radius: 0;
    border-width: 0px 0px 1px 0px;
    border-color: #b26d5e;
  }
  .el-input__inner:hover{
    border-color: #ff8269;
  }
  .el-input__inner:focus{
    border-color: #c7523b;
    background-color: #ffffffa0;
    border-top-left-radius: 10px;
  }
  .el-form, .loginform{
    padding: 0;
    margin: 0;
    width: 100%;
  }
</style>
