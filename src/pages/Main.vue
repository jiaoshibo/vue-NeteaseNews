<template>
  <div>
      <router-view></router-view>
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange" id="footer">
          <mu-bottom-nav-item value="/home" title="首页" icon="chrome_reader_mode"/>
          <mu-bottom-nav-item value="/nearby" title="要闻" icon="lightbulb_outline"/>
          <mu-bottom-nav-item value="/goshopping" title="直播" icon="video_library"/>
          <mu-bottom-nav-item value="order" title="视频" icon="videocam"/>
          <mu-bottom-nav-item value="mine" title="我的" icon="person"/>
        </mu-bottom-nav>
      </mu-paper>
  </div>
</template>

<script>
export default {
    name:'zhuyao',
  data () {
    return {
      bottomNav: 'recents'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val,
      this.$router.push(val)
    }
  },
  mounted(){
        let path=this.$route.path;
        if(path=='/'){
            path='/home'
        }
        this.bottomNav=path
  }
}
</script>

<style scoped>
html{
  font-size: 100px;
}
#footer{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 0.01rem solid #f0f0f0;
}
.mu-buttom-item{
  min-width: 0.5rem;
}
</style>