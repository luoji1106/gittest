<template>
  <div class="bottom-bar">
    <div class="check-all">
      <cart-check-btn class="check-btn" :isCheck="isCheckAll" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="price-all">
      <p>合计：<span>￥{{priceAll}}</span></p>
    </div>
    <div class="Clearing" @click="ClearingClick">去结算({{cartLength}})</div>
  </div>
</template>

<script>
  import CartCheckBtn from './CartCheckBtn'

  import {mapGetters} from 'vuex'

  export default {
    components: {
      CartCheckBtn
    },
    computed: {
      ...mapGetters(['getCartList']),

      priceAll() {
        // 塞选出复选框为选中状态的商品，并计算出价钱的总和
        return this.getCartList.filter(item => item.isCheck).reduce((total, value) => {
          return total + value.price * value.count;
        },0).toFixed(2);
      },
      cartLength() {
        return this.getCartList.filter(item => item.isCheck).length;
      },
      isCheckAll() {
        // 购物车为空时，返回false
        if(this.getCartList.length == 0) return false;
        // 一旦找到一个未选中，就返回false
        return !(this.getCartList.find(item => !item.isCheck));
      }
    },
    methods: {
      checkClick() {
        if(this.isCheckAll) {
          this.getCartList.forEach(item => item.isCheck = false);
        }else {
          this.getCartList.forEach(item => item.isCheck = true);
        }
      },
      ClearingClick() {
        if(this.cartLength == 0) {
          this.$popup.show('请选择商品')
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    background: #eee;
    display: flex;
    align-items: center;
  }

  .check-all {
    width: 25%;
  }
  .check-all span {
    font-size: 18px;
    position: relative;
    top: -2px;
  }
  .check-btn {
    display: inline-block;
    margin: 0 8px 0 12px;
  }

  .price-all {
    flex: 1;
    text-align: right;
    padding: 0 8px;
  }
  .price-all span {
    color: orangered;
  }

  .Clearing {
    width: 30%;
    height: 30px;
    border-radius: 20px;
    margin-right: 5px;
    background: orangered;
    color: #eee;
    text-align: center;
    line-height: 30px;
  }
</style>