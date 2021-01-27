<template>
  <swiper>
    <swiper-item v-for="item in banners" :key='item.title'>
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper';

	export default {
    name: "HomeBanner",
    data () {
      return {
        isLoad: false,  
      }
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        // 判断轮播图是否加载完成，发射出事件（只发一次就行了）
        if(!this.isLoad) {
          this.$emit('bannerImgLoad');
          this.isLoad = true;
        }
      }
    }
	}
</script>

<style scoped>
  
</style>
