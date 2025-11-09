<script setup lang="ts">
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css'
new WOW().init()
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">

#app {
  max-width: 1920px;
  height: 100%;
  min-width: 1000px;
  overflow: auto;
}

// 滚动条样式
::-webkit-scrollbar {
  --size: 6px;
  width: var(--size);
  height: var(--size);
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

body {
  background-color: rgba(30, 30, 30, 1);;
}
</style>
