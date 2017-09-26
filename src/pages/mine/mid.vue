<template>
  <div>
        <div class="mid">
            <mu-list-item title="有态度的网友" disabled>
                <mu-avatar slot="left" icon="person"/>
            </mu-list-item>
            <div class="demo-chip-container">
                <mu-chip class="demo-chip" backgroundColor="#ff9900" color="#fff">
                    <mu-avatar :size="32" icon="attach_money" backgroundColor="#ff9900"/>签到
                </mu-chip>
            </div>
        </div>
        <mu-divider/>
        <mu-flexbox>
            <mu-flexbox-item class="flex-demo">
                <span class="c">0</span><span class="w">收藏</span>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
                <span class="c">0</span><span class="w">收藏</span>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-demo">
                <span class="c">0</span><span class="w">收藏</span>
            </mu-flexbox-item>
        </mu-flexbox>
        <mu-divider/>
  </div>
</template>
<script>
export default {
  name: 'mid'
}
</script>
<style scoped>
    .mid{
        height: 1rem;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;

    }
    .demo-chip-container{
        display: flex;
        flex-wrap: wrap;
        position: absolute;
        right: 0.1rem;
    }
    .demo-chip{
    margin: 0.04rem;
    }
    .flex-demo {
        height: 0.5rem;
        text-align: center;
        line-height:0.22rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .c{
        color: #d50000;
        font-weight: 600;
    }
    .w{
        color: #999;
    }
</style>

