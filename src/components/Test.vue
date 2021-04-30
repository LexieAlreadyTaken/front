<template>
  <el-form class="welcome">
    <template v-for="q,i in qlist">
      <p :key="q['问题']+'p'">{{(parseInt(i)+1)+'. '+q['问题']}}</p>
      <el-radio-group :key="q['问题']" v-if="q['单选']" v-model="answer[i]">
        <template v-for="s,i in q['单选']">
          <el-radio :label="i" :key=s></el-radio>
          <span :key="s + 'span'" class="tagspan">{{'：'+s}}</span>
        </template>
      </el-radio-group>
    </template>
    <div class="buttoncont">
      <el-button @click="mySubmit()">测试</el-button>
    </div>
    <p>{{message}}</p>
  </el-form>
</template>

<script>
export default {
  name: 'Test',
  props: {
  },
  components:{
  },
  data(){
    return {
      qlist: [],
      answer: [],
      correct: 0,
      message: ""
    }
  },
  methods: {
    mySubmit(){
      console.log(this.qlist)
      for(let i in this.qlist){
        console.log(this.answer[i])
        console.log(this.qlist[i]["答案"])
        if(this.answer[i]==this.qlist[i]["答案"].split('\n')[0]){
          this.correct++
          console.log(this.correct)
        }
      }
      this.message="您一共答对了"+this.correct+"题！"
    }
  },
  beforeCreate(){
    this.$axios.get('/api/gettest')
    .then((response)=>{
      console.log(response.data[0])
      this.qlist = response.data
    })
    .catch(function (error) {
      console.log(error)
      alert("可能有什么地方出错了！")
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome{
    width: 80vw;
    height: 100vh;
  }
  .tagspan{
    margin-right: 30px;
  }
  .buttoncont{
    padding-top: 5vh;
  }
</style>
<style>
  .el-radio-group {
    font-size: 14px;
    color: #606266;
  }
  .el-radio{
    margin-right: 0;
  }
</style>
