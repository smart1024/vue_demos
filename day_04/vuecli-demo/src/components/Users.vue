<template>
    <div class="users">
        <h1>Users.vue</h1>
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
    data() {
        return {
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