// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axiosInstance from 'https';
//vue中原生的页面跳转:window.loaction.href=index.

Vue.config.productionTip = false//来关闭生产模式下给出的提示    
//必须要修改原型链 也就是vue实例下的prototype的修改
Vue.prototype.$http=axiosInstance;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  store,
  template: '<App/>',
  components: { App }

 
  // render:h=>h(App)
  // render:h=>h(App),//es6的写法 公司一般用这种方法

})
