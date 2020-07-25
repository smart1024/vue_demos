<template>
    <div @click="changeMsg" class="header">
       <h1>{{title}}</h1>
       <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            required:true
        }
    },
    data() {
        return {
            title:"Vue components Demo"
        }
    },
    methods: {
        changeMsg(){
            //注册自定义事件
            this.$emit("changeMsg","小李子通过$emit修改了msg值");
        }
    },
    // 声明周期函数
    beforeCreate() {
        console.log("beforeCreate----vue实例创建之前");
    },
    created() {
        console.log("created----vue实例创建成功");
    },
    beforeMount() {
        console.log("beforeMount-----vue实例挂载之前,页面是空白，这时render函数被调用");
    },
    mounted() {
        console.log("mounted----这时你才可以看到页面，也可以访问Dom了");
    },
    beforeUpdate() {
        console.log("beforeUpdate--------数据发生变化就会触发");
    },
    updated() {
        console.log("updated----------数据更新完毕");
    },
    beforeDestroy() {
        console.log("beforeDestroy-----当前实例被销毁之前，释放一些资源定时器、第三方Dom");
    },
    destroyed() {
        console.log("destroyed--------------当前实例被销毁");
    },
}
</script>

<style scoped>
    .header{
        background-color: lightgreen;
        padding: 10px;
    }

    h1{
        color:#222;
        text-align: center;
    }
</style>