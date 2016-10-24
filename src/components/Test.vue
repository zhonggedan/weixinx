<!--suppress ALL -->
<template>
    <div>
        <tab :line-width=1 :index.sync="index">
            <tab-item class="vux-center"   @click="index=0">普及版</tab-item>
            <tab-item class="vux-center"   @click="index=1">成长版</tab-item>
        </tab>
        <swiper :index.sync="index"  :show-dots="false" @on-index-change="this.index=index">
            <swiper-item>
                <div class="tab-swiper">
                11111111111111111
                </div>
            </swiper-item>
            <swiper-item>
                <div class="tab-swiper">
                2222222222222222222222222222222222222
                </div>
            </swiper-item>

        </swiper>
    </div>
</template>

<script>
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Rater,Cell,Group,Badge,Checker,CheckerItem } from 'vux/src/components'
    export default{
        components: {
            Tab,
            TabItem,
            Sticky,
            Divider,
            XButton,
            Swiper,
            SwiperItem,
            Rater,
            Cell,
            Group,
            Badge,
            CheckerItem,
            Checker
        },
        data () {
            index:0

        },
        methods:{
            add:function () {

            }
        }
    }

</script>

<style>

</style>