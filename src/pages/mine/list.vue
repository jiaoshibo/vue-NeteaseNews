<template>
    <div class="lis">
        <div>
            <van-cell-group>
                <van-cell title="我的消息" icon="pending-evaluate" value="评论我的跟帖/通知" is-link></van-cell>
                <van-cell title="我的关注" icon="like-o" is-link></van-cell>
            </van-cell-group>
        </div>
        <div class="gold">
            <van-cell-group>
                <van-cell title="金币商城" icon="gold-coin" value="金币猜球/嗨翻五大联赛" is-link></van-cell>
                <van-cell title="活动广场" icon="like-o" value="开学啦......" is-link></van-cell>
                <van-cell title="我的钱包" icon="discount" is-link></van-cell>
            </van-cell-group>
        </div>
        <div class="setting">
            <van-cell-group>
            <router-link to="/setting"><van-cell title="设置" icon="setting" is-link></van-cell></router-link>
            </van-cell-group>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Cell, CellGroup, Icon } from 'vant';
    import 'vant/lib/vant-css/index.css';

    Vue.component(Icon.name, Icon);
    Vue.component(Cell.name, Cell);
    Vue.component(CellGroup.name, CellGroup);
    export default {
    name:'list'
    }
</script>
<style scoped>
.gold{
    margin-top: 0.1rem;

}
.setting{
    margin-top:0.1rem;
}
.lis{
    margin-bottom: 0.65rem;
}
</style>
