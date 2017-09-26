
<template>
     <mu-appbar title="网易新闻" class="bar">
      <mu-flat-button class="demo-flat-button" icon="video_library" slot="right"/>
      <mu-flat-button color="white" slot="right" icon="search" class="search"/>
     </mu-appbar>
</template>
<<script>
export default {
  name:'tit'
}
</script>


<style lang="less" scoped>
.bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .appbar-search-field{
    color: #FFF;
    margin-bottom: 0;
    &.focus-state {
      color: #FFF;
    }
    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }
    .mu-text-field-input {
      color: #FFF;
    }
    .mu-text-field-focus-line {
      background-color: #FFF;
    }
  }
  .search{
    margin-left:0.5rem;
  }
}
</style>
