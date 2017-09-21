<template>
  <div>
    <mu-appbar>
        <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/home"/>
        <mu-icon-button icon="expand_more" slot="right"/>
    </mu-appbar>
    <div>
        <van-button type="default">Default</van-button>
        <van-button type="primary">Primary</van-button>
        <van-button type="danger">Danger</van-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

import { Button } from 'vant';

Vue.component(Button.name, Button);

export default {
  name:'zero',
  
}
</script>

