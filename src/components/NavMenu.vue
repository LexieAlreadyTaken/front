<template>
  <div class="navmenu">
    <el-menu mode="vertical">
      <el-menu-item index="1" @click="toIndex()">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          主页
        </template>
      </el-menu-item>
      <el-menu-item index="2" @click="toEdit()">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          编辑资料
        </template>
      </el-menu-item>
      <el-menu-item index="3" @click="toUpload()">
        <template slot="title">
          <i class="el-icon-upload2"></i>
          上传文件
        </template>
      </el-menu-item>
      <el-menu-item index="4" @click="toDialog()">
        <template slot="title">
          <i class="el-icon-chat-line-round"></i>
          进行聊天
        </template>
      </el-menu-item>
      <el-menu-item index="5" @click="toTest()">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          进行测试
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
  },
  components:{
  },
  data(){
    return {}
  },
  methods: {
    toIndex(){
      this.$router.push('/index')
    },
    toEdit(){
      this.$router.push('/editinfo')
    },
    toUpload(){
      this.$router.push('/upload')
    },
    toDialog(){
      this.$router.push('/dialog')
    },
    toTest(){
      this.$router.push('/test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navmenu{
    width: 20vw;
    height: 100vh;
    display: inline-block;
    background-color: #9b8d65;
  }
</style>
<style>
  .el-menu{
    background-color: transparent;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background-color: #ffffffaa;
  }
  .el-menu-item.is-active{
    color: #9d2b22;
  }
</style>
