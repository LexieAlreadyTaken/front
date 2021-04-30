<template>
  <div class="register">
    <el-form :model="form" class="registerform">
      <div class="formhead">欢迎加入</div>
      <div class="formsubhead">有朋自远方来，不亦说乎？</div>
      <el-row class="formrow">
        <el-col :span="10">
          <el-form-item class="formitem">
            <el-input type="text" v-model="form.username" placeholder="请输入用户名"
              clearable class="input" @change="resetInfo()"></el-input>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="password" v-model="form.password" placeholder="请输入密码（最少6位）"
              clearable class="input" @change="resetInfo()" show-password minlength="6"></el-input>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="password" v-model="form.passwordRepeat" placeholder="请确认密码"
              clearable class="input" @change="resetInfo()" show-password></el-input>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="text" v-model="form.nickname" placeholder="请输入昵称"
              clearable class="input" @change="resetInfo()"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-form-item class="formitem">
            <el-date-picker v-model="form.birthday" type="date" placeholder="请输入生日"
              class="input" @change="resetInfo()"></el-date-picker>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="tel" v-model="form.tel" placeholder="请输入电话号码"
              clearable class="input" @change="resetInfo()"></el-input>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="email" v-model="form.email" placeholder="请输入邮箱地址"
              clearable class="input" @change="resetInfo()"></el-input>
          </el-form-item>
          <el-form-item class="buttoncont">
            <span class="message">{{message}}</span>
            <el-button class="registerbtn" @click.stop="register()">注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  props: {
  },
  data(){
    return {
      form: {
        username: '',
        password: '',
        passwordRepeat: '',
        nickname: '',
        birthday: null,
        tel: '',
        email: '',
      },
      message: ""
    }
  },
  methods: {
    register(){
      if(!this.form.username){
        this.message="必须输入用户名！"
      }
      else if(!this.form.password){
        this.message="必须输入密码！"
      }
      else if(this.form.password.length<6){
        this.message="密码的长度应该不少于6位！"
      }
      else if(this.form.password!=this.form.passwordRepeat){
        this.message="两次输入的密码不一致！"
      }
      else if(new Date(this.form.birthday).getTime()>Date.now()){
        this.message="您不可能来自未来！"
      }
      else if(!this.form.email=="" && !this.form.email.match(/^.+@.+$/)){
        this.message="输入了无效的电子邮箱地址！"
      }
      else{
        if(!this.form.nickname){
          this.form.nickname = this.form.username
        }
        axios.get('/api/register',{
          params:JSON.stringify(this.form)
        })
        .then( (response) => {
          console.log(response)
          this.$cookies.set("default_unit_second","input_value", -1)
          this.$cookies.set('user',{username: this.form.username, password: this.form.password, times:0})
          this.$router.push("/index")
        })
        .catch(function (error) {
          console.log(error)
          alert("可能有什么地方出错了！")
        })
      }
    },
    resetInfo(){
      this.message=""
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register{
    background-image: url("../../public/register_bgr.jpg");
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
  .registerform{
    background: #ffffffa0;
    width: 80vw;
    height: 100vh;
    padding: 20vh 2rem 0;
    transform: translateX(10vw);
    box-sizing: border-box;
  }
  .formrow{
    padding-top: 10vh;
  }
  .formitem{
    padding-top: 1em;
  }
  .input{
    width: 100%;
  }
  .hint{
    color:#00000050;
    padding-right: 1em;
  }
  .buttoncont{
    padding-top: 5vh;
    text-align: right;
  }
  .registerbtn{
    background-color: #733380;
    border-width: 0;
    color: #ffffffc0;
  }
  .message{
    color: #e92020a2;
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
  .el-form, .registerform{
    padding: 0;
    margin: 0;
    width: 100%;
  }
</style>
