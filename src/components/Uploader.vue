<template>
  <el-form enctype="multipart/form-data" class="form">
    <el-upload
    class="upload-demo"
    drag
    action
    :http-request="myUpload"
    name="123"
    multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">任何类型的文件都可以上传！</div>
    </el-upload> 
  </el-form> 
</template>

<script>
import axios from 'axios'
export default {
  name: 'Uploader',
  props: {
  },
  components:{
  },
  data(){
    return {}
  },
  methods: {
    myUpload(param){
      var formData = new FormData()
      formData.append('file', param.file);
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      //console.log(param.file)
      axios.post('/api/upload', formData, config)
      .then( (response) => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
        alert("可能有什么地方出错了！")
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form{
    padding-top: 5vh;
  }
</style>
<style>
</style>
