<template>
  <el-container class="cont">
    <el-aside class="asider">
      <nav-menu />
    </el-aside>
    <el-main class="mainer">
      <Test />
    </el-main>
  </el-container>
</template>

<script>
import Test from './Test.vue'
import NavMenu from './NavMenu.vue'
export default {
  name: 'TestPage',
  props: {
  },
  components:{
    Test, NavMenu
  },
  data(){
    return {}
  },
  methods: {
  },
  mounted(){
    if(!this.$cookies.get('user')){
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cont{
    height: 100vh;
  }
  .asider{
    width: 20vw !important;
    box-sizing: border-box;
  }
  .mainer{
    padding: 0;
  }
</style>
<style>
</style>
