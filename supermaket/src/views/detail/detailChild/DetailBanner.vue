<template>
  <swiper class="detail-banner">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper';

  export default {
    props: {
      banners: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-banner {
    height: 250px;
    overflow: hidden;
  }
</style>