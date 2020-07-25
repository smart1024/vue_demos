<template>
  <div id="app">
      <FormHelper>
          <!-- 带有slot属性标签元素 -->
          <h2 slot="title">{{title}}</h2>
          <p slot="text">这个是文本内容</p>
      </FormHelper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper"
export default {
  name: 'App',
  data() {
    return {
        title:"这个是title"
    }
  },
  methods: {
    
  },
  components: { //2、局部注册组件
    FormHelper
  }
}
</script>

<style scoped>
h1{
  color: purple;
}
</style>
