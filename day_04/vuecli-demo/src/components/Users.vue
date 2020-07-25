<template>
    <div class="users">
        <ul>
            <li v-for="(item,index) in users" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users:["小猪佩奇","大象艾米丽","小羊苏西"]
        }
    },
}
</script>

<style scoped>

</style>