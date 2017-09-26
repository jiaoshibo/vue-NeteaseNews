<template>
    <div class="tabs">
        <van-tabs>
            <van-tab title="热门">
                <hot></hot>
            </van-tab>
            <van-tab title="猫主编">内容二</van-tab>
            <van-tab title="娱乐">内容三</van-tab>
            <van-tab title="汽车">内容四</van-tab>
            <van-tab title="美女">内容五</van-tab>
            <van-tab title="直播号">内容六</van-tab>
            <van-tab title="资讯">内容七</van-tab>
            <van-tab title="体育">内容八</van-tab>
            <van-tab title="生活">内容九</van-tab>
            <van-tab title="健康">内容十</van-tab>
            <van-tab title="艺术">内容十一</van-tab>
            <van-tab title="本地">内容十二</van-tab>
            <van-tab title="房产">内容十三</van-tab>
            <van-tab title="家庭">内容十四</van-tab>
        </van-tabs>
    </div>
</template>
<script>
import Hot from './tab_components/Hot'
export default {
  name:'tabb',
  components:{
      Hot
  }
}
</script>
<style scoped>
    .tabs{
        margin-top: 0.52rem;
        margin-bottom: 0.65rem;
    }
</style>
>

</style>

