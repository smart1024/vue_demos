<template>
    <div class="footer">
       <footer>
           <p>{{copyright}}</p>
       </footer>
    </div>
</template>

<script>
export default {
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