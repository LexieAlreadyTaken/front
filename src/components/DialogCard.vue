<template>
  <el-card class="card">
    <div slot="header" class="clearfix">
      <div class="senderhead">{{sender}}</div>
      <div class="sendtimehead">{{sendtime}}</div>
    </div>
    <div class="content">{{content}}</div>
  </el-card>
</template>

<script>
export default {
  name: 'DialogCard',
  props: {
    sender: String,
    sendtime: String,
    content: String
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card{
    color: #000000a0;
    text-align: left;
    width: 80%;
    margin: 0 auto 10vh;
  }
  .senderhead{
    font-size: 30px;
  }
  .sendtimehead{
    text-align: right;
    /*transform: translateY(-30px);*/
  }
  .content{
    white-space: pre-wrap;
    word-break: break-all;
  }
</style>
<style>
  .el-card__header{
    padding-bottom: 0;
  }
</style>
