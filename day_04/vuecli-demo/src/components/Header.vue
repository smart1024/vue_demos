<template>
    <div class="header">
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