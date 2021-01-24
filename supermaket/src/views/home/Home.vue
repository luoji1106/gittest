<template>
  <div id="Home">
    <nav-bar class="home-nav"><p slot="center">购物街</p></nav-bar>
    <home-banner :banners="banner"/>
    <home-recommend :recommends="recommend"/>
    <feature/>
    <tab-control :titles="['流行','新款','精选']"/>
    <goods-list :goods="goods.pop.list"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import HomeBanner from './homeChild/HomeBanner'
  import HomeRecommend from './homeChild/HomeRecommend'
  import Feature from './homeChild/Feature'

  import {getHomeMultidata, getHomeGoods} from 'network/home'

  export default {
    name: 'Home',
    data () {
      return {
        banner: null,
        recommend: null,
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},
        }
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeBanner,
      HomeRecommend,
      Feature
    },
    created () {
      // 请求轮播图及相关数据
      this.HomeMultidata()

      // 请求 流行|新款|精选 相关数据
      this.HomeGoods('pop')
      this.HomeGoods('new')
      this.HomeGoods('sell')
    },
    methods: {
      HomeMultidata() {
        getHomeMultidata().then(res => {
          // 将请求到的数据保存下来
          this.banner = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      HomeGoods(type) {
        const page = this.goods[type].page + 1;

        getHomeGoods(type, page).then(res => {
          // 将获取到的数据中的数组用push保存添加到data中对应key的list中
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
      }
    }
  }
</script>

<style>
  #Home {
    padding: 44px 0 49px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }
</style>
