<template>
  <div class="welcome">
    欢迎来到WebS！这是您的第{{times}}次访问！
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
  },
  components:{
  },
  data(){
    return {
      times: 0
    }
  },
  methods: {
  },
  mounted(){
    this.times = this.$cookies.get('user').times
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome{
    width: 80vw;
    height: 100vh;
    font-family:fantasy;
    padding-top: 10vh;
    font-size: 40px;
    background-color: #001440;
    color: #ffffffcc;
    font-weight: bolder;
    font-style: italic;
  }
</style>
<style>
</style>
