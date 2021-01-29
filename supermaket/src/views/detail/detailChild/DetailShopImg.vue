<template>
  <div class="shop-images">
    <div class="desc">
      {{goodsImages.desc}}
    </div>
    <p>{{goodsImages.detailImage[0].key}}</p>
    <div v-for="(item, index) in goodsImages.detailImage[0].list" :key="index">
      <img :src="item" class="shopImg" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        shopImgLength: 0
      }
    },
    props: {
      goodsImages: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      imgLoad() {
        // 判断图片是否已经加载完成最后一张，加载完所有图片在发出事件
        if(++this.count == this.shopImgLength) {
          this.$emit('imgLoad');
        }
      }
    },
    mounted () {
      if(this.goodsImages) {
          this.shopImgLength = this.goodsImages.detailImage[0].list.length
        }
    }
    // watch: {
    //   goodsImages() {
    //     if(this.goodsImages) {
    //       this.shopImgLength = this.goodsImages.detailImage[0].list.length
    //     }
    //   }
    // }
  }
</script>

<style scoped>
  .shopImg {
    width: 100%;
  }
</style>