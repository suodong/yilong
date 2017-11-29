<template>
  <div class="hello">
      <div>
        <p v-show="true">{{ message }}</p>
        <!--v-show的默认值是true，有了两种写法，可以直接写true/false,也可以是写一个属性，设置为true/false-->
        <p v-show="isShow">{{ num }}</p>
        <p v-if = "true">我是你哥哥</p>
        <!--v-if直接可以设置为true/false，也可以设置属性值是否为true/false-->
        <p v-if="false">显示</p>
        <p v-else>隐藏</p>
        <p v-if="false">复杂显示</p>
        <p v-else>复杂隐藏</p>
        <p v-else-if = "false">contiun</p>
        <!--v-if-else是复杂的条件判断，例如：判断的条件不知一个，用于多个判断可以直接等于true/false-->
        <p>
          <button v-on:click="btnfunction">请点击</button>
          <button @click="daniu">请点击</button>
        </p>
        <input class="input_moudle" v-model="world" placeholder="请输入剑哥哥的昵称" />
        <div>{{ world }}</div>
        <div @click="oncebtn" v-once>我只执行一次</div>
        <!-- v-once用于加载或者渲染DOM元素一次，后面不会再次进行渲染，只当做静态页面进行跳过 -->
        <div>我就是吊</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message:'我是最强王者',
      num:'18518517713',
      isShow:true,
      world:'你好，妹子'
    }
  },
  methods:{
    btnfunction(){
      alert('---------无敌多么寂寞----------');
    },
    daniu:function(){
      alert('-------我喜欢妹子------------');
    },
    oncebtn(){
      alert('--我最帅，所以我只做一次--');
    }
  },
  watch:{

  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width:100%;
  height:300px;
  background: #ccc;
}
.input_moudle{
  display: block;
  margin:0 auto;
  width:200px;
  height: 30px;
  text-indent: 40px;
  
}
</style>
