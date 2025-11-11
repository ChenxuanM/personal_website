<script setup lang="ts">
import { getImg } from '@/utils/getImg.ts'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const routeName = route.meta.title
defineProps({
  fileName: String,
  assetsPath: String,
  hoverClass: String,
  isUseOrigin: {
    type: Boolean,
    default: true,
  },
  routerList: {
    type: Array,
  },
})

const onRouteJumpHome = () => {
  router.push('/')
}

const onRouteJumpRoute = (routePath) => {
  router.push(routePath)
}
</script>

<template>
  <div
    class="dir_compo wow fadeIn"
    style="--hover-color: rgb(30, 30, 30); --gang-color: rgb(138, 138, 138)"
  >
    <div class="top_dir">
      <img :src="getImg(assetsPath, fileName)" alt="" />
      <div class="dir_list" v-if="isUseOrigin">
        <span @click="onRouteJumpHome" class="route_name">Home</span>
        <span class="r_g">/</span>
        <span class="route_name active">{{ routeName }}</span>
      </div>
      <div class="dir_list active_dirList" v-else>
        <span
          :class="{
              active: item.pathName === routeName
          }"
          @click="onRouteJumpRoute(item.path)"
          :key="index"
          class="route_name"
          v-for="(item, index) in routerList"
        >
          {{ item.pathName }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flexStyle($align: 'center', $justContent: 'space-around') {
  display: flex;
  align-items: $align;
  justify-content: $justContent;
}
.dir_compo {
  .top_dir {
    @include flexStyle(center);
    img {
      --size: 48px;
      width: var(--size);
      height: var(--size);
      margin-right: 15px;
    }

    .dir_list {
      @include flexStyle(center);

      &.active_dirList {
        .route_name {
          @include flexStyle(center);
          &:last-child {
            &:after {
              content: unset;
            }
          }
          &:after {
            content: '/';
            color: rgba(138, 138, 138, 1);
            font-family: Inter;
            font-weight: 400;
            font-size: 16px;
            display: block;
            margin: 0 3px;
          }
        }
      }

      .route_name {
        color: rgb(138, 138, 138);
        transition: all 0.3s linear;
        cursor: pointer;
        &:hover,
        &.active {
          color: var(--hover-color);
        }
      }

      .r_g {
        margin: 0 4px;
        color: var(--gang-color);
      }
    }
  }
}
</style>
