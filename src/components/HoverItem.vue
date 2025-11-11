<script setup lang="ts">
defineProps({
  dataItem: Array
})
</script>

<template>
<div class="hover_item">
  <div class="hover_item_body" v-for="(item, index) in dataItem">
    {{ item }}
  </div>
</div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align:'center', $justContent:'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.hover_item {
  &_body {
    height: 44px;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: rgba(138, 138, 138, 1);
    @include flexStyle(center);
    position: relative;
    border-left: 2px solid rgb(232, 232, 232) ;
    --transion: all .3s linear;
    transition: var(--transion);
    &:hover {
      border-left-color: rgb(42, 42, 42);
      color: rgb(42, 42, 42);
      &:before {
        background-color: rgb(42, 42, 42);
      }
    }

    &:before {
      content: '';
      background-color: rgba(138, 138, 138, 1) ;
      --size: 4px;
      width: var(--size);
      height: var(--size);
      border-radius: 50%;
      margin: 0 9px;
      transition: var(--transion);
    }
  }
}
</style>
