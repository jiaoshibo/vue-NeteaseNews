<template>
  <div class="a">
    <tit></tit>
    <neirong></neirong>
  </div>
</template>

<script>
  import Tit from './home/Nav'
  import Neirong from './home/Neirong'
  export default {
    name:'home',
    components:{
        Tit,
        Neirong
    }
  }
</script>
<style scoped>
.a{
  margin-bottom:0.65rem;
}
</style>


