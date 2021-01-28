<template>
  <div class="goods-info">
    <p class="title">{{goodsInfo.title}}</p>
    <p class="priceInfo">
      <span class="newPrice">{{goodsInfo.price}}</span>
      <del class="oldPrice">{{goodsInfo.oldPrice}}</del>
      <span class="discount" :style="{backgroundColor: goodsInfo.discountBgColor}">{{goodsInfo.discount}}
      </span>
    </p>
    <div class="columns">
      <span v-for="(item, index) in goodsInfo.columns" :key="index">{{item}}</span>
    </div>
    <div class="services">
      <span v-for="(item, index) in goodsInfo.services" :key="index" 
            class="services-item">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>

<style scoped>
  .goods-info {
    padding: 10px 5px 0;
    text-align: left;
    box-shadow: 0 5px 1px rgba(111,111,111,.1);
  }

  .title {
    font-size: 18px;
  }

  .priceInfo {
    padding: 10px 0;
  }
  .newPrice {
    font-size: 22px;
    color: var(--color-high-text);
  }
  .oldPrice {
    font-size: 14px;
    color: gray;
    margin: 0 5px;
  }
  .discount{ 
    font-size: 16px;
    color: white;
    padding: 1px 5px;
    border-radius: 8px;
  }

  .columns {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding-bottom: 5px;
    box-shadow: 0 1px 1px rgba(111,111,111,.2);
  }

  .services {
    color: black;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 40px;
    flex-wrap: wrap;
  }
  .services-item {
    position: relative;
    z-index: -1;
    margin-left: 15px;
  }
  .services-item::before{
    content: '';
    position: absolute;
    left: -15px;
    top: 13px;
    width: 14px;
    height: 14px;
    background: url(~assets/img/detail/upload.png) 0 0/14px 14px;
  }
</style>