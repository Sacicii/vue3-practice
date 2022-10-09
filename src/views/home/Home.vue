<template>
  <div class="main">
    <div class="header">
      <Header />
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from './Header.vue'

</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100vh;
  padding-top: .58rem;
  background-image: url("@/assets/img/sunset.jpg");
  // background-size: cover;
  // background-position: 0 .58rem;
}
</style>
