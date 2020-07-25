<template>
    <div class="users">
        <h1>Users.vue</h1>
        <p>{{users}}</p>
        <ul>
            <!-- 单击显示隐藏 -->
            <li @click="user.show = !user.show" v-for="(user,index) in users" :key="index">
                <h2>{{user.name}}</h2>
                <h3 v-show="user.show">{{user.age}}</h3>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // props数组元素可像data里面的属性一样直接使用
    //写法1
    // props:["users"],
    //写法2
    props:{ //父组件给子组件传值
        users:{
            type:Array, //指定属性类型
            required:true //是否必传
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    h1{
        color: green;
    }

    .user{
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
        box-sizing: border-box;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    li{
        flex-grow: 1;
        flex-basis: 200px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>