<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in getCartList" :key="index" :goods="item"/>
    <p class="cart-bottom" v-if="isBottomShow">~已经到底了~</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import CartListItem from './CartListItem'

  export default {
    components: {
      CartListItem
    },
    computed: {
      ...mapGetters(['getCartList']),
      isBottomShow() {
        return this.getCartList.length !== 0;
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    text-align: center;
    line-height: 30px;
  }
</style>