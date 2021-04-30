<template>
  <div class="index">
    <div class="dialogcont">
      <dialog-card v-for="dialog in dialogs" :key="dialog.sendtime" 
      :sender="dialog.sender" :sendtime="dialog.sendtime" :content="dialog.content"/>
    </div>
    <el-form>
      <el-input type="textarea" v-model="message" class="textarea"></el-input>
      <el-button class="sendbtn" @click.stop="send()">发送</el-button>
    </el-form>
    <my-global />
  </div>
</template>

<script>
import axios from 'axios'
import DialogCard from './DialogCard.vue'
export default {
  name: 'Dialog',
  props: {
  },
  components:{
    DialogCard
  },
  data(){
    return {
      dialogs: [],
      message: ""
    }
  },
  methods: {
    send(){
      var messagefull = {
        sender: this.$cookies.get('user').username,
        sendtime: Date().toLocaleString().split(" G")[0],
        content: this.message
      }
      axios.get('/api/sendmessage',{
        params:JSON.stringify(messagefull)
      })
      .then( (response) => {
        var w = response.data.slice(3,-3).split("'), ('").map(a => a.split("', '"))
        this.dialogs = []
        for(var i=0; i<w.length; i++){
          this.dialogs.push({
            sender: w[i][0],
            sendtime: w[i][1],
            content: w[i][2]
          })
        }
        console.log(w)
      })
      .catch(function (error) {
        console.log(error);
        alert("可能有什么地方出错了！")
      })
      this.message = ""
      return
    }
  },
  created:function(){
    console.log("a??")
      axios.get('/api/getmessages')
      .then( (response) => {
        var w = response.data.slice(3,-3).split("'), ('").map(a => a.split("', '"))
        this.dialogs = []
        for(var i=0; i<w.length; i++){
          this.dialogs.push({
            sender: w[i][0],
            sendtime: w[i][1],
            content: w[i][2].replace('\\n','\n')
          })
        }
        console.log(w)
      })
      .catch(function (error) {
        console.log(error);
        alert("可能有什么地方出错了！")
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index{
    background: #561226;
    width: 80vw;
    height: 100vh;
    overflow-y: scroll;
    display: inline-block;
  }
  .dialogcont{
    padding-top: 10vh;
  }
  .sendbtn{
    background-color: #733380;
    border-width: 0;
    color: #ffffffc0;
  }
  .textarea{
    border-radius: 0;
    background: #ffffffa0;
  }
</style>
<style>
  .el-textarea__inner{
    border-radius: 0;
    background: #ffffffa0;
  }
</style>
