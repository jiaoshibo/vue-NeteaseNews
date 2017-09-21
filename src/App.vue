<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style>
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
