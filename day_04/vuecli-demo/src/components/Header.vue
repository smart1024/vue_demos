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