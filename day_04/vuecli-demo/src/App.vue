<template>
  <div id="app">
      <!-- 直接使用是没有问题的 -->
      <!-- <form-one></form-one>
      <form-two></form-two> -->

    <!--keep-alive组件帮住用户缓存表单数据，组件切换数据不会丢失 -->
    <keep-alive>
        <!-- 下面演示动态组件 is属性值用来确定显示哪个组件-->
        <component :is="component"></component>
    </keep-alive>
    <button @click="component ='form-one'">显示Form One</button>
    <button @click="component ='form-two'">显示Form Two</button>
  </div>
</template>

<script>

import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';

export default {
  name: 'App',
  data() {
    return {//动态绑定组件
        component:"form-one"
    }
  },
  methods: {
    
  },
  components: { //2、局部注册组件
    "form-one":FormOne,
    "form-two":FormTwo
  }
}
</script>

<style scoped>

</style>
