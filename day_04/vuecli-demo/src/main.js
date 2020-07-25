import Vue from 'vue'
import App from './App.vue'

//1、main.js引入的vue组件
// import Users from './components/Users'

//2、注册全局组件,所以任何地方都可以使用
// Vue.component("users",Users);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
