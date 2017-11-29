import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state={
	count:1,
	huha:{
		names:'哇哈哈'
	}

};
const mutations={//所有的修改state的行为动作都写在此处
	add(state){
		this.state.count +=1
	},
	reduce(state){
		this.state.count -=1
	},
	

};
const actions={

};
const getters={

};


// const moduleA={
// 	state:{},
// 	actions:{},
// 	mutations:{},
// 	getters:{}	
// };

// const moduleB={
// 	state:{},
// 	actions:{},
// 	mutations:{},
// 	getters:{}	
// };

// export default new Vuex.Store({
// 	modules:{
// 		a:moduleA,
// 		b:moduleB
// 	}

// });


export default new Vuex.Store({
	state, //数据的存储,访问对象
	mutations,//是开发人员做的一些行为动作,state只允许在此处修改
	actions,//异步改变 也就是提交mutations的一些修改 $store.commit()
	getters//是得到的意思 就是获得属性进行操作
})




// const moduleA={
// 	state:{
// 		count:1
	
// },
// actions:{
 
// },
// mutations:{
// 		add(state,num){
// 			this.state.a.count+=10
// 		},
// 		reduce(state){
// 			this.state.a.count-=1
// 		}
// },
// getters:{}
// };
// const moduleB={
// 	 	state:{},
// 	    actions:{},
// 	    mutations:{},
// 	    getters:{}	
// };
// export default new Vuex.Store({
// 	modules:{
// 		a:moduleA,
// 		b:moduleB
// 	}
// })