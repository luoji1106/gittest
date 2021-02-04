<template>
  <div class="detail-bottom-bar">
    <div class="Shops">
      <i></i>
      <p>店铺</p>
    </div>
    <div class="service">
      <i></i>
      <p>客服</p>
    </div>
    <div class="collect">
      <i></i>
      <p>收藏</p>
    </div>
    <div class="shop-btn">
      <div class="shopping-car" @click="cartClick">加入购物车</div>
      <div class="shopping-now">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      cartClick() {
        this.$emit('cartClick');
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    height: 49px;
    background: #fff;
    box-shadow: 0px -1px rgba(111,111,111,.2);
    padding-top: 5px;
  }

  .Shops, .service, .collect {
    width: 15%;
    height: 100%;
    text-align: center;
    font-size: 14px;
    float: left;
  }
  .Shops i, .service i, .collect i {
    display: block;
    width: 22px;
    height: 22px;
    background: url('~assets/img/detail/detail_bottom.png') no-repeat;
    background-size: 22px;
    margin: auto;
    margin-bottom: 3px; 
  }
  .Shops i{
    background-position-y: -100px;
  }
  .service i{
    background-position-y: -53px;
  }
  .collect i{
    background-position-y: 0px;
    /* background-position-y: -27px; */
  }

  .shop-btn {
    width: 50%;
    height: 40px;
    border-radius: 20px;
    margin-left: 47%;
    overflow: hidden;
    font-size: 14px;
    line-height: 40px;
    color: white;
  }
  .shop-btn>div {
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
  }
  .shopping-car {
    background-image: linear-gradient(to right, rgb(254,201,1) , rgb(254,149,2));
  }
  .shopping-now {
    background-image: linear-gradient(to right, rgb(254,118,0) , rgb(254,75,0));
  }
</style>