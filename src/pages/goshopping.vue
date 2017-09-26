<template>
  <div>
      <live></live>
      <tabb></tabb>
  </div>
</template>
<script>
import Vue from 'vue'
import Live from "./live/Live"
import Tabb from './live/Tab'
import { Tab, Tabs } from 'vant';

Vue.component(Tab.name, Tab);
Vue.component(Tabs.name, Tabs);
export default {
    name:'online',
    components:{
        Live,
        Tabb
    }
}
</script>

<style scoped>

    div{
        font-size: 21px;
    }
</style>
