<template>
    <div >
        <h1>作为子组件接收父组件Form One和Form Two传过来的标签</h1>
        <h1>填充以下表单内容</h1>
        <form action="">
            <div id="form-header">
                <!-- 占位插槽名为form-header -->
                <slot name="form-header"></slot>
            </div>

            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>

            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>

            <div id="useful-links">
                <ul>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props:{
        
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    
</style>