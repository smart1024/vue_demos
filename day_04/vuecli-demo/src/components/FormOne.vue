<template>
    <div>
        <form-helper>
            <div slot="form-header">
                <h3>Form One父组件使用子组件FormHelper并将标签传给FormHelper</h3>
                <p>填写以内容</p>
            </div>

            <div slot="form-fields">
                <input type="text" placeholder="name" required>
                <label for="">随便说点啥:</label>
                <textarea name="" id="" cols="30" rows="10">

                </textarea>
            </div>

            <div slot="form-controls">
                <button @click="handleSubmit">发送</button>
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
            console.log("thanks for submitting form one & contacting us");
        }
    },
}
</script>
    