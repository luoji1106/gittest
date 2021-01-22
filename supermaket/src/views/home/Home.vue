<template>
  <div id="Home">
    <nav-bar class="home-nav"><p slot="center">购物街</p></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home'

  export default {
    name: 'Home',
    data () {
      return {
        banner: null,
        recommend: null
      }
    },
    components: {
      NavBar
    },
    created () {
      // 请求数据
      getHomeMultidata().then(res => {
        this.banner = res.data.banner;
        this.recommend = res.data.recommend;
      })
    }
  }
</script>

<style>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
