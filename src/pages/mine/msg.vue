<template>
    <div>
        <div class="msg">
            <mu-icon-button icon="keyboard_arrow_left" slot="left" to="/mine"/>
        </div>
    </div>
</template>
<script>
export default {
  name:'msg'
}
</script>
<style scoped>
.msg{
    height: 0.5rem;
    background: #d50000;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    color: #fff;
}
</style>
