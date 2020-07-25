<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form Two作为父组件使用子组件FormHelper并将标签传给FormHelper</h3>
                <p>随便写的东西</p>
            </div>

            <div slot="form-fields">
                <input type="text" placeholder="username" required>
                
                <input type="password" placeholder="password" required>
            </div>

            <div slot="form-controls">
                <button @click="handleSubmit">登录</button>
            </div>
        </form-helper>
    </div>
</template>

<script>
import formHelper from "./FormHelper"

export default {
    data(){
        return {};
    },
    components:{
        "form-helper":formHelper
    },
    methods: {
        handleSubmit(){
            console.log("thanks for logging in (form two)");
        }
    },
}
</script>
    