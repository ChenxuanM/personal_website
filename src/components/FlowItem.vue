<script setup lang="ts">

import BigText from '@/components/BigText.vue'
import ItaText from '@/components/ItaText.vue'

defineProps({
  flowStruct: Array,
})
</script>

<template>
<div class="arc_flow_item">
  <div class="flow_item wow fadeInDown"
       :data-wow-delay='"0." + index + "s"'
       :key="index"
       :style="{
         '--left-img': 'url(' + item.leftImg + ')',
       }"
       v-for="(item, index) in flowStruct">
    <big-text
      class="no_flex _t1"
      :text="item.name"
    />
    <ita-text
      class="no_flex _st1"
      :is-italic="fasle"
      :text="item.subName"
      />
    <ita-text
      class="no_flex _st2"
      :is-italic="fasle"
      :text="item.lastName"
    />
  </div>
</div>
</template>

<style scoped lang="scss">
.arc_flow_item {

  .flow_item {
    position: relative;
    padding-left: 63px;
    padding-bottom: 30px;

    &:last-child {
      padding-bottom: 0;
    }

    &::before {
      content: '';
      width: 1px;
      height: 100%;
      left: 7px;
      top: -5px;
      position: absolute;
      background-color: rgb(189, 189, 189);
    }

    &::after {
      position: absolute;
      content: '';
      left: -3px;
      top: 0px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: var(--left-img);
    }

    .no_flex {
      display: block;
    }
    ._t1 {
      color: rgba(160, 160, 160, 1);
      font-weight: 500;
      font-size: 18px;
      letter-spacing: -0.4px;
    }
    ._st1 {
      margin: 6px 0;
    }
    ._st1, ._st2 {
      color: rgb(144, 144, 144);
      font-weight: 400;
      font-size: 14px;
      letter-spacing: -0.2px;
      font-style: normal;
      height: unset;
      font-family: inter-normal;
      line-height: unset;
    }
    ._st2 {
      color: rgb(176, 176, 176);
    }
  }

}
</style>
