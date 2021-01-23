<template>
  <div id="Home">
    <nav-bar class="home-nav"><p slot="center">购物街</p></nav-bar>
    <home-banner :banners="banner" :recommends="recommend"></home-banner>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeBanner from './homeChild/HomeBanner'

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
      NavBar,
      HomeBanner
    },
    created () {
      // 请求数据
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        // console.log(this.banner)
        this.recommend = res.data.recommend.list;
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
