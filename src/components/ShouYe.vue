<!--suppress ALL -->
<template>
    <div>
        <!--divider>软件定制开发</divider-->
        <!--<a v-link="{ path: '/inbox/message/123' }">inbox</a>-->
        <card :header="{title:'金牌服务、价格透明'}" v-link="{ path: '/m/baojia' }">
            <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-l vux-1px-r">
                    <span>¥4500</span>
                    <br/>
                    普及版
                </div>
                <div class="vux-1px-r">
                    <span>¥9800</span>
                    <br/>
                    成长版
                </div>
                <div class="vux-1px-r">
                    <span>¥25600</span>
                    <br/>
                    微版
                </div>
                <div>
                    <span>¥65000</span>
                    <br/>
                    专业版
                </div>

            </div>
        </card>
        <card :header="{title:'软件、网站定制开发'}" :footer="{title:'查看更多',link:'/m/sihua'}" v-link="{ path: '/m/sihua' }">
            <!--h3 slot="content" class="card-padding">一、联系我们，沟通需求</h3>
            <p slot="content" class="card-padding">东三省的冯绍峰的水电费</p>
            <h3 slot="content" class="card-padding">二、需求定位，签订合同</h3>
            <p slot="content" class="card-padding">东三省的冯绍峰的水电费</p>
            <h3 slot="content" class="card-padding">三、选定技术，正式开发</h3>
            <p slot="content" class="card-padding">东三省的冯绍峰的水电费</p>
            <h3 slot="content" class="card-padding">四、内部测试，交付运营</h3>
            <p slot="content" class="card-padding">东三省的冯绍峰的水电费</p-->
            <flexbox slot="content">
                <flexbox-item><div class="flex-demo"><i class="iconfont">&#xe629;</i><span class="weui_panel_hd " style="font-size: 15px;font-weight: 500">平台移动化</span></div></flexbox-item>
                <flexbox-item><div class="flex-demo"><i class="iconfont">&#xe65d;</i><span class="weui_panel_hd " style="font-size: 15px;font-weight: 500">扩展社交化</span></div></flexbox-item>
            </flexbox>
            <br>
            <flexbox slot="content">
                <flexbox-item><div class="flex-demo"><i class="iconfont">&#xe65c;</i><span class="weui_panel_hd " style="font-size: 15px;font-weight: 500">数据云端化</span></div></flexbox-item>
                <flexbox-item><div class="flex-demo"><i class="iconfont">&#xe65e;</i><span class="weui_panel_hd " style="font-size: 15px; font-weight: 500">代码规范化</span></div></flexbox-item>
            </flexbox>
        </card>
        <card :header="{title:'点击下方按钮、拨打电话联系我们'}">
            <flexbox slot="content">
                <flexbox-item><div class="flex-demo"><a slot="content" href="tel:087165228007"><x-button type="primary"><i class="iconfont" style="font-size: 18px">&#xe61d;</i>客服电话</x-button></a></div></flexbox-item>
                <flexbox-item><div class="flex-demo"><a slot="content" href="tel:18787127435"><x-button type="warn"><i class="iconfont" style="font-size: 18px">&#xe61d;</i>项目经理</x-button></a></div></flexbox-item>
            </flexbox>

        </card>
        <card :header="{title:'长按图片添加项目经理微信'}" class="center">
            <img slot="content"  src="./../assets/qrweixin.gif"/>
            <p slot="content" class="weui_panel_hd">昆明云豆网络科技有限公司</p>
            <p slot="content" class="weui_panel_hd">ICP许可证号：滇ICP备16007075号-1</p>
        </card>
    </div>

</template>

<script>
    import {Flexbox,FlexboxItem,Cell,Group,XButton,Divider,Card}  from 'vux/src/components'
    import 'vux/dist/vux.css'
    import 'vux/dist/styles/1px.css'

    export default{
        components: {
            Card,
            Divider,
            Cell,
            Group,
            Flexbox,
            FlexboxItem,
            Divider,
            XButton
        },
        data(){
            return{
                url:''
            }
        }
    }
</script>

<style>
    @font-face {
        font-family: 'iconfont';
        src: url('//at.alicdn.com/t/font_1476527418_869576.eot'); /* IE9*/
        src: url('//at.alicdn.com/t/font_1476527418_869576.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('//at.alicdn.com/t/font_1476527418_869576.woff') format('woff'), /* chrome、firefox */
        url('//at.alicdn.com/t/font_1476527418_869576.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url('//at.alicdn.com/t/font_1476527418_869576.svg#iconfont') format('svg'); /* iOS 4.1- */
    }
    .iconfont{font-family:"iconfont";
        font-size:36px;font-style:normal;}
    .card-demo-flex {
        display: flex;
    }
    .card-demo-content01 {
        padding: 10px 0;
    }
    .card-padding {
        padding: 15px;
    }
    .card-demo-flex > div {
        flex: 1;
        text-align: center;
        font-size: 12px;
    }
    .card-demo-flex span {
        color: #f74c31;
    }
    .flex-demo {
        text-align: center;
        color: #00aaee;
        background-color: #fff;
        border-radius: 0px;

    }
    .vux-flexbox-item{
        padding: 5px;
    }
    .center{
        text-align: center;
    }
</style>