<template>
  <div class="shop-images" v-if="loading">
    <div class="desc">
      <i></i>
      <p>{{goodsImages.desc}}</p>
      <i></i>
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
        loading: false,
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
    watch: {
      goodsImages() {
        if(this.goodsImages) {
          // 判断是否获取到了数据决定是否渲染页面（v-if），否则数据没来时，标签中通过下标获取数据可能会出问题
          this.loading = true;

          this.shopImgLength = this.goodsImages.detailImage[0].list.length;
        }
      }
    }
  }
</script>

<style scoped>
  .shop-images {
    box-shadow: 0px 5px 1px rgba(111,111,111,.2);
    margin-bottom: 5px;
  }

  .shopImg {
    width: 100%;
  }
  
  .desc {
    margin-top: 10px;
    border-left: 3px pink dashed;
    border-right: 3px pink dashed;
  }
  .desc p {
    padding: 5px;
  }
  .desc i:nth-child(1) {
    display: block;
    width: 40%;
    height: 3px;
    background: pink;
  }
  .desc i:nth-child(3) {
    display: block;
    width: 40%;
    height: 3px;
    background: pink;
    position: absolute;
    right: 0;
  }

  .shop-images>p {
    font-size: 18px;
    padding: 10px;
  }
</style>