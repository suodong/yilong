<template>
  <div id="income">
      <div class="child_router">
        <aside>
              <ul class="nav_list" >
            <li class="a"v-for="(item,index) in $router.options.routes" @click="toFirstRouter(item.path,item.name)">
              <router-link :to="{path:item.path}">
                {{ item.alias }}
              </router-link>
              <div class="child_alias" v-for="child in item.children" @click="toChildViews(child.path,child.name)">
                <router-link :to="{path:item.path + '/' +child.path}">{{ child.alias}}
                </router-link>
              </div>
            </li>
          </ul>
        </aside>
        <div class="hei">
 <!--            <button @click="$store.commit('add')">加一</button>
         <!      <span>{{$store.state.count}}</span> -->
      <!--         <span>{{ count }}</span>
              <span>{{huha.names}}</span>
            <button @click="$store.commit('reduce')">减一</button>  -->
            <button @click="add">加一</button>
            <span>{{ count }}</span>
            <button @click="reduce">减一</button>

        </div>
        <div class="requestTest" >
        	<span>{{}}</span>
        </div>
        <section>
          <router-view></router-view>
        </section>
      </div>
  </div>
</template>

<script>
// import vuex from '../store'
import { mapState,mapMutations,mapGetters } from 'vuex';
export default {
  name: 'income',
  data () {
    return      	currentPath:'',
    	auths:[],
    	total:''     
    }
  },
  methods:{
  	...mapMutations([//映射方法的辅助函数,也就是简化$store.commit()
  		'add',
  		'reduce'
  		]),
  	//请求测试,模拟json数据格式,以后的数据由后台提供
  requestTest(){
  	this.$http.get('../../static/index.json')
  	.then().((response)=>{
  		for(let i=0;len=arr.people.length;i<len;i++){
  			console.log(i);

  		}

  	}).catch((error)=>{
  		alert();

  	});

    },
  toFirstRouter(_path,_name){
  	

  	},
  	toChildViews(_path,_name){
  		console.log(child.path);
  	}
  },
  // methods:{
  // 	toFirstRouter(_path,_name){

  // 	},
  // 	toChildViews(_path,_name){
  // 		console.log(child.path);
  // 	}
  // },
  // computed:mapState([//辅助函数,简化数据的访问 这是一种辅助函数的写法
  // 	'count',
  // 	'huha'

  // 	]),
  computed:{//mapState或者...mapstate 代表了$store.state 这是第二种辅助函数的写法
  	...mapState([
  		'count',
  		'huha'
  	])
  },

  watch:{

  },
  mounted(){
  	this

  }
}
</script>

<style lang="scss" scope="scope">
.child_router{
	display:flex;
	section{
		flex:1 auto;
	}
}

.nav_list{
  list-style:none;
  padding:0px;


}

 li{
    width: 300px;
    height: 50px;
    background:lightblue;
    line-height:50px;
    border-bottom:1px solid #fff;
}

    .child_alias{
      list-style:none;
      padding:0px;
      display:block;
      width: 200px;
      height: auto;
      position: relative;
      left:140px;
      top:-50px;  
      display: none;
  }
  .a:hover{
     .child_alias{
     	display: block;
     }
  }

  li{
       background:lightgreen;
       width: 200px;
    }


*{
	  text-decoration: none;
	 color: 16px;
}
.hei{
	width:320px;height:200px;
	background:lightblue;
	position:absolute;
	left:600px;

}
.hei span{
	width:100px;height:40px;
	background:#fff;
	display:block;
	line-height:40px;
	border-radius:100px;

}

</style>

