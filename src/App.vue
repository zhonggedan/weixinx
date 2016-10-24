<!--suppress ALL -->
<template>
    <div>
        <router-view transition-mode="out-in" keep-alive>
            <shouye></shouye>

        </router-view>
    </div>



</template>

<script>
    import shouye from './components/ShouYe.vue'

    export default{
        components: {
            shouye,

        },
        data(){
            return{
                url:''
            }
        },
        methods:{
            tanchu:function(){
                alert(aaaaaaaaa);
            }
        }
    }
</script>

<style>

</style>

<!--
<template>
    <div>
        <p v-show="authenticating" style="color:red">Authenticating...</p>
        <h1>App Header</h1>
        <a v-link="{ path: '/inbox/message/123' }">inbox</a>
        <a v-link="{ path: '/baojia' }">about</a>
        <a v-link="{ path: '/sihua' }">about</a>
        <a v-link="{ path: '/user/1234/profile/what' }">user</a>
        <a v-link="{ path: '/forbidden' }">forbidden</a>
        <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                authenticating: false
            }
        }
    }
</script>
<style>
    .view {
        transition: all .5s ease;
    }
    .test-enter, .test-leave {
        opacity: 0;
        transform: translate3d(10px, 0, 0);
    }
    .v-link-active {
        color: red;
    }
    [v-cloak] {
        display: none;
    }
</style>
/-->