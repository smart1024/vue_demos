<template>
<!-- html结构只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{age}}</p>
    <p>{{greeting()}}</p>
  </div>
</template>

//js逻辑
<script>
export default {
  name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      msg:"小李子",
      age:30
    }
  },
  methods: {
    greeting(){
      return "hello 大家好，我是靓仔"
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
