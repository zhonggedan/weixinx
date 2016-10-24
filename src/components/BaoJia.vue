<!--suppress ALL -->
<template>
    <div>
        <tab :line-width=1 :index.sync="index">
            <tab-item class="vux-center"   @click="index=0">普及版</tab-item>
            <tab-item class="vux-center"   @click="index=1">成长版</tab-item>
            <tab-item class="vux-center"   @click="index=2">微版<badge text="荐"></badge></tab-item>
            <tab-item class="vux-center"   @click="index=3">专业版</tab-item>
        </tab>
        <swiper :index.sync="index"  :show-dots="false" @on-index-change="this.index=index">
            <swiper-item>
                <div class="tab-swiper">

                    <p><span>¥</span>4500<span>.00</span></p>
                    <card :header="{title:'方案支持'}">
                        <checker slot="content" class="card-padding" :value.sync="arr" type="checkbox" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                            <checker-item solt="content"
                                          v-for="i in [1, 2, 3, 4, 5, 6,7, 8, 9,10]" :value="i"
                                          @click.stop="" disabled>{{['终生版权', '著作权登记','响应式','APP','企业资质','多租户','云豆3年质保','完美兼容','分销','多渠道支付'][i - 1]}}</checker-item>
                        </checker>
                    </card>
                    <br/>
                    <group title="综合评价">
                        <cell title="支付便捷">
                            <rater :value="3.5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="性价比">
                            <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="用户体验反馈">
                            <rater :value="4.5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="用户体验反馈">
                            <rater :value="4.5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="用户体验反馈">
                            <rater :value="4.5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                    </group>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="tab-swiper" >
                    <group title="综合评价">
                        <cell title="支付便捷">
                            <rater :value="4" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="性价比">
                            <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="用户体验反馈">
                            <rater :value="4.3" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                    </group>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="tab-swiper">
                    <group title="综合评价">
                        <cell title="支付便捷">
                            <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="性价比">
                            <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                        <cell title="用户体验反馈">
                            <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                        </cell>
                    </group>
                </div>
            </swiper-item>
            <swiper-item>
                <div class="tab-swiper"> <group title="综合评价">
                    <cell title="支付便捷">
                        <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                    </cell>
                    <cell title="性价比">
                        <rater :value="4.5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                    </cell>
                    <cell title="用户体验反馈">
                        <rater :value="5" slot="value" :max="5" active-color="#04BE02" disabled></rater>
                    </cell>
                </group></div>
            </swiper-item>
        </swiper>
        <card :header="{title:'长按图片添加项目经理微信'}" class="center">
            <img slot="content"  src="./../assets/qrweixin.gif"/>
            <p slot="content" class="weui_panel_hd">昆明云豆网络科技有限公司</p>
            <p slot="content" class="weui_panel_hd">ICP许可证号：滇ICP备16007075号-1</p>
        </card>
    </div>
</template>

<script>
    import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem,Rater,Cell,Group,Badge,Checker,CheckerItem ,Card} from 'vux/src/components'
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
            Checker,
            Card
        },
        data () {
            return {

                index:0,
                arr:[1, 2, 3, 4, 5, 6, 8 ],
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

<style>
    .checker-popup {
        background: rgba(255,255,255,0.5);
    }
    .tab-swiper{
        height: auto;
    }
    .vux-swiper{
        height:600px !important;
    }
    .demo5-item-selected {
        background: #ffffff url(../assets/active.png) no-repeat right bottom;
        border-color: #ff4a00 !important;
    }
    .demo5-item {
        padding: 5px 15px ;
        line-height: 31px;
        text-align: center;
        border-radius: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
        margin: 6px;
    }
</style>