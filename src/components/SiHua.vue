<!--suppress ALL -->
<template>
    <div>
        <input v-model="wh">
       <div :style="{width:wh+'px',height:wh+'px',borderWidth:'1px',borderStyle:'solid',borderColor:'red'}" ></div>
    </div>
</template>

<script>
    export default{
        components: {

        },
        data () {
            return {
                wh:100
            }
        },
        methods:{
            add:function () {
                this.arr.push(this.msg);
                this.msg='';
            }
        }
    }
</script>

