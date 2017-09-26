<template>
  <div>
      <person></person>
      <mid></mid>
  </div>
</template>
<script>
import Person from './mine/Person'
import Mid from './mine/Mid'
export default {
  name:'mine',
  components:{
    Person,
    Mid
  }
}
</script>
