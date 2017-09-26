<template>
  <div>
      <person></person>
      <mid></mid>
      <list></list>
  </div>
</template>
<script>
import Person from './mine/Person'
import Mid from './mine/Mid'
import List from './mine/List'
export default {
  name:'mine',
  components:{
    Person,
    Mid,
    List
  }
}
</script>
<style scoped>

</style>
