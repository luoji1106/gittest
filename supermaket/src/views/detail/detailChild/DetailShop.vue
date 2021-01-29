<template>
  <div class="shop-info">
    <div class="title">
      <img :src="shopInfo.shopLogo" alt="">
      <p>{{shopInfo.shopName}}</p>
    </div>
    <div class="info">
      <div class="sales">
        <p>
          <span>{{transformSales}}万</span>
          <span>{{shopInfo.shopGoods}}</span>
        </p>
        <p>
          <span>总销量</span>
          <span>全部宝贝</span>
        </p>
      </div>
      <div class="score">
        <p v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{textHigh: item.isBetter,textLow: !item.isBetter}">{{item.score}}</span>
          <span v-if="item.isBetter" class="scoreHigh">高</span>
          <span v-else class="scoreLow">低</span>
        </p>
      </div>
    </div>
    <div class="shopURL">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      transformSales() {
        return (this.shopInfo.sales / 10000).toFixed(1);
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    margin: 5px 0;
    padding-bottom: 20px;
    box-shadow: 0 5px 1px rgba(111,111,111,.2);
  }

  .title {
    height: 100px;
  }
  .title img {
    width: 50px;
    height: 50px;
    border: 1px rgba(177, 177, 177,.3) solid;
    border-radius: 25px;
    margin: 25px 10px 0;
  }
  .title p {
    margin-top: -50px;
    line-height: 50px;
    padding-left: 70px;
  }

  .info {
    overflow: hidden;
    margin-bottom: 20px;
  }
  .info>div {
    float: left;
  }

  .sales {
    width: 50%;
    padding-top: 10px;
  }
  .sales p {
    border-right: 1px solid rgba(111,111,111,.2);
  }
  .sales span {
    display: inline-block;
    width: 50%;
    text-align: center;
    padding: 5px 0;
  }

  .score {
    width: 50%;
  }
  .scoreHigh {
    border-radius: 3px;
    background: red;
    color: white;
  }
  .scoreLow {
    border-radius: 3px;
    background: green;
    color: white;
  }
  .textHigh {
    color: red;
  }
  .textLow {
    color: green;
  }
  .score p {
    position: relative;
    padding: 3px 0;
  }
  .score p :nth-child(1) {
    margin-left: 8vw;
  }
  .score p :nth-child(2) {
    margin-left: 3vw;
  }
  .score p :nth-child(3) {
    position: absolute;
    right: 3vw;
  }

  .shopURL {
    background-color: rgb(223,226,231);
    width: 50%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
    margin-left: 25%;
  }
</style>