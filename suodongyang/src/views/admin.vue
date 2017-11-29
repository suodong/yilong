<template>
  <div id="admin">
    <div >我是admin，你好</div>
    <!-- <HelloWorld></HelloWorld> --><!-- 此标签就代表了HelloWorld这个页面 -->
  </div>
     
</template>

<script>
import HelloWorld from'../components/HelloWorld'
export default {
  name: 'admin',
  components:{
    HelloWorld
  },
  data () {
    return {
     currentPath:'',//当前要走的路径
     auths:[],//所有路由的来去监听的数组
    }
  },
  methods:{

  },
  watch:{
     $route(to,from){
      this.currentPath = to.path;//当前路由的监听
     },
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scope="scope">

</style>
