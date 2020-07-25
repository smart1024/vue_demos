<template>
  <div id="app">
    <!-- 3、调用组件 -->
    <Users />
    <!-- <users></users> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// 1.局部引入组件
import Users from "./components/Users"

export default {
  name: 'App',
  components: { //2、局部注册组件
    // HelloWorld
    // users:Users   相当于取别名，使用时标签用users
    Users
  }
}
</script>

<style>

</style>
