<template>
    <div class="top">
        <p>我</p>
    </div>
</template>
<script>
export default {
  name: 'person'
}
</script>

<style scoped>
    .top{
        height: 0.5rem;
        background: #d50000;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
    .top p{
        text-align: center;
        line-height: 0.5rem;
        margin: 0;
        color: #fff;
        font-size: 0.2rem;
    }
</style>
