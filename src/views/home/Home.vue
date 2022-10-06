<template>
  <div class="main">
    <Header />
    <router-view/>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'

</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/img/sunset.jpg");
}
</style>
