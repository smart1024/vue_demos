<template>
    <div class="footer">
       <footer>
           <p>{{copyright}}----{{msg}}</p>
       </footer>
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
            copyright:"Copyright 2020 Vue Demo"
        }
    },
}
</script>

<style scoped>
    footer{
        background-color: #222;
        padding: 6px;
    }
    p{
        color: lightgreen;
        text-align: center;
    }
</style>