import vue from 'vue'
import axios from 'axios'



const axiosIntance =axios.creata({
	baseURL:'192.168.33.80:8080',
	headers:{
		//'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
		'Content-Type':'application/json',
		//请求头部的设置和后天有关，看后台给你返回的是什么数据
	},
	withCreadentials:true,//此处为true时是跨域的确认，为false是取消跨域
	//crossDomain:true,此属性是为了
	timeout:5000, //timeout是响应超时的时间
});
//响应的配置如下
axiosIntance.interceptors.response.use(
	response => {
		if(response.data.errorCode===10000){
			//执行的逻辑代码
		};
		return response;

	},
	error =>{
		if(error){
			//执行的逻辑代码

		}
		return promise.reject(error);
     
	}


	);
export default axiosIntance;