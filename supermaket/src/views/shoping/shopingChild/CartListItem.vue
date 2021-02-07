<template>
  <div class="cart-item">
    <cart-check-btn @click.native="checkClick" :isCheck="goods.isCheck"/>
    <div class="cart-item-image">
      <img :src="goods.image">
    </div>
    <div class="cart-item-message">
      <p class="title">{{goods.title}}</p>
      <p class="desc">{{goods.desc}}</p>
      <p class="price">
        <span>￥{{goods.price}}</span>
        <span>X{{goods.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
  import CartCheckBtn from './CartCheckBtn'

  export default {
    props: {
      goods: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      CartCheckBtn
    },
    methods: {
      checkClick() {
        this.goods.isCheck = !this.goods.isCheck;
      }
    }
  }
</script>

<style scoped>
  .cart-item{
    height: 120px;
    padding-top: 10px;
    overflow: hidden;
    border-bottom: 1px solid rgba(111,111,111,.2);
  }
  .cart-item>div {
    float: left;
  }
  .check-btn {
    margin: 40px 10px;
  }

  .cart-item-image {
    width: 70px;
    height: 100px;
    overflow: hidden;
    border-radius: 10px;
  }
  .cart-item-image img {
    width: 100%;
    height: 100%;
  }

  .cart-item-message {
    width: calc(100% - 110px);
    padding: 0 10px;
  }
  .title, .desc {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .title {
    font-size: 20px;
  }
  .desc {
    font-size: 14px;
    line-height: 40px;
  }
  .price {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    line-height: 40px;
  }
  .price span:nth-child(1){
    color: orange;
  }
</style>