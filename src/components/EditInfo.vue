<template>
    <el-form :model="form" class="editform" enctype="multipart/form-data">
      <div class="formsubhead">终于可以修改头像了，意不意外惊不惊喜？（虽然对话框还没有头像）</div>
      <el-row class="formrow">
        <el-col :span="10">
          <el-form-item class="formitem">
            <el-input type="text" v-model="form.nickname" placeholder="请输入昵称"
              clearable class="input"></el-input>
          </el-form-item>
          <el-form-item class="formitem">
            <el-date-picker v-model="form.birthday" type="date" placeholder="请输入生日"
              class="input"></el-date-picker>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="tel" v-model="form.tel" placeholder="请输入电话号码"
              clearable class="input"></el-input>
          </el-form-item>
          <el-form-item class="formitem">
            <el-input type="email" v-model="form.email" placeholder="请输入邮箱地址"
              clearable class="input"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-form-item class="formitem">
            <el-upload
            class="upload-demo"
            drag
            action
            :http-request="editInfo"
            name="123"
            multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">请上传图片！</div>
            </el-upload> 
          </el-form-item>
          <el-form-item class="buttoncont">
            <el-button class="registerbtn" @click.stop="editInfo">编辑</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
export default {
  name: 'EditInfo',
  props: {
  },
  components:{
  },
  data(){
    return {
      form:{
        username: "",
        nickname: "",
        birthday: "",
        tel: "",
        email: ""
      }
    }
  },
  methods: {
    editInfo(param){
      var formData = new FormData()
      formData.append('file', param.file)
      this.form.username = this.$cookies.get('user').username
      formData.append('params', JSON.stringify(this.form))
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      this.$axios.post('/api/editinfo', formData, config)
      .then( (response) => {
        console.log(response)
        this.$router.push("/index")
      })
      .catch(function (error) {
        console.log(error)
        alert("可能有什么地方出错了！")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .editform{
    padding-top: 5vh;
  }
  .input{
    width: 100%;
  }
</style>
<style>
</style>
