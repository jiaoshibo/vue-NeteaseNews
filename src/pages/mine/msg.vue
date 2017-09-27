<template>
    <div>
        <div class="msg">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/mine" class="btn"/>
            <span>我的消息</span>
        </div>
        <div class="card">
            <van-tabs type="card">
                <van-tab title="评论我的">
                    <p>没有评论</p>
                </van-tab>
                <van-tab title="通知">
                    <p>没有通知</p>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from 'vant';
Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
export default {
  name:'msg'
}
</script>
<style scoped lang="less">
.msg{
    height: 0.5rem;
    background: #d50000;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: #fff;
    text-align: center;
    span{
        
        line-height: 0.5rem;
        margin-left: -0.48rem;
        font-size: 0.2rem;
    }
    .btn{
        float: left;
    }
}
.card{
    margin-top: 0.51rem;
    p{
        text-align: center;
    }
}
</style>
