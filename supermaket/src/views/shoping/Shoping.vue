<template>
  <div id="Shoping">
    <nav-bar class="cart-navbar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll :probeType="3" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartList from './shopingChild/CartList'
  import CartBottomBar from './shopingChild/CartBottomBar'

  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到组件的局部计算属性中
  import {mapGetters} from 'vuex'

  export default {
    name: 'Shoping',
    components: {
      CartList,
      CartBottomBar,
      NavBar,
      Scroll
    },
    computed: {
      // mapGetters 数组形式
      // ...mapGetters(['cartListLength', 'getCartList'])
      // 如果你想将一个 getter 属性另取一个名字，使用对象形式
      ...mapGetters({
        length: 'cartListLength'
      }),
    },
    activated () {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .cart-navbar {
    background: var(--color-tint);
    color: white;
    box-shadow: 0px 1px rgba(111,111,111,.2);
  }
  .wrapper {
    height: calc(100vh - 44px - 49px - 40px);
  }
</style>
