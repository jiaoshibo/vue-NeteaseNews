<template>
    <div>
        <div class="foucs">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/mine" class="btn"/>
            <span>我的关注</span>
        </div>

        <div class="card">
            <van-tabs type="card">
                <van-tab title="网易号">
                    <div class="rss">
                        <mu-flat-button label="订阅更多网易号" class="demo-flat-button" icon="rss_feed"/>
                    </div>
                    <mu-divider/>
                    <div class="content">
                        <p>寻找我感兴趣的网易号</p>
                    </div>
                </van-tab>
                <van-tab title="好友">
                    <div class="content">
                        <p class="word">你还没有关注任何人</p>
                        <mu-chip class="demo-chip" backgroundColor="#d50000" color="#fff">
                            查看热门用户
                        </mu-chip>
                    </div>
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
        name:'foucs'
    }
</script>
<style scoped>
    .foucs{
        height: 0.5rem;
        background: #d50000;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        text-align: center;
        color: #fff;
    }
    .btn{
        float: left;
    }
    .foucs span{
        line-height: 0.5rem;
        margin-left: -0.48rem;
        font-size: 0.2rem;
    }
    .card{
        margin-top: 0.51rem;
    }
    .rss{
        height: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content{
        height: 3rem;
        margin-top: 0.1rem;
        text-align: center;
        flex-direction: column;
        color: #666;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .word{
        margin-bottom: 0.2rem;
    }
</style>
