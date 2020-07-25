<template>
  <div id="app">
    <Header />
    <!-- 3、调用组件 -->
    <Users />
    <!-- <users></users> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Footer />
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
