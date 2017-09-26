<template>
  <div>
      <div class="set">
        <mu-icon-button icon="keyboard_arrow_left" class="btn" to="/mine"/>
        <span>设置</span>
      </div>
      <div class="cell">
        <van-cell-group>
          <van-cell title="个人设置"></van-cell>
          <van-cell title="阅读偏好"></van-cell>
          <van-cell title="被屏蔽的用户"></van-cell>
        </van-cell-group>
      </div>
      <div class="cell0">
        <van-cell-group>
          <van-cell title="字体设置" value="系统字体" is-link></van-cell>    
          <van-cell title="正文字号" value="中" is-link></van-cell>    
          <van-cell title="语言环境" value="简体中文" is-link></van-cell>    
        </van-cell-group>        
      </div>
      <div class="cell0">
        <van-cell-group>
          <van-cell title="推送设置" is-link></van-cell>
          <van-cell title="栏目插件设置" is-link></van-cell>
          <van-cell title="仅WI-FI网络下图片"></van-cell>
        </van-cell-group>
      </div>
  </div>
</template>
<script>
  import Vue from "vue"
  import { Cell, CellGroup } from 'vant';
import { Switch } from 'vant';

Vue.component(Switch.name, Switch);
  Vue.component(Cell.name, Cell);
  Vue.component(CellGroup.name, CellGroup);
  export default {
    name:'setting',
    data() {
      return {
        switchState1: true,
        switchState2: false
      };
    },
  }
</script>
<style scoped lang="less">
  .set{
    height: 0.5rem;
    background: #d50000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    text-align: center;
    line-height: 0.5rem;
    color: #fff;
    font-size: 0.22rem;
    span{
      margin-left: -0.48rem;
    }
    .btn{
      float: left;
    }
  }
  .cell{
    margin-top: 0.5rem;
  }
  .cell0{
    margin-top: 0.1rem;
  }
</style>
