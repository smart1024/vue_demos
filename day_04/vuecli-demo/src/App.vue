<template>
  <div id="app">
    <Header :msg="msg"/>
    <!-- 3、调用组件 -->
    <!-- 属性传值：传值(基本数据类型)和传引用(对象类型) -->
    <!-- 传引用 -->
    <Users :users="users"/>
    <hr>
    <Users :users="users"/>
    <!-- <users></users> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 传值 -->
    <Footer :msg="msg"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// 1.局部引入组件
import Users from "./components/Users"
import Header from "./components/Header"
import Footer from "./components/Footer"
export default {
  name: 'App',
  data() {
    return {
      msg:"小李子",
      users:[
              {name:"小李子1",age:30,show:false},
              {name:"小李子2",age:30,show:false},
              {name:"小李子3",age:30,show:false},
              {name:"小李子4",age:30,show:false},
              {name:"小李子5",age:30,show:false},
              {name:"小李子6",age:30,show:false},
              {name:"小李子7",age:30,show:false}
            ]
    }
  },
  components: { //2、局部注册组件
    // HelloWorld
    // users:Users   相当于取别名，使用时标签用users
    Users,
    Header,
    Footer
  }
}
</script>

<style scoped>
h1{
  color: purple;
}
</style>
