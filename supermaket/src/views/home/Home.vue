<template>
  <div id="Home">
    <nav-bar class="home-nav"><p slot="center">购物街</p></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControlTop"
                  v-show="controlIsFixed" :class="{'isFixed': controlIsFixed}" @click.native="heightGoto"/>
    <scroll ref="scroll" :probeType='3' :pullUpLoad='true' @scrollTo="scrollTo" @loadMore="loadMore">
      <home-banner :banners="banner" @bannerImgLoad="bannerImgLoad"/>
      <home-recommend :recommends="recommend"/>
      <feature/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>
    <scroll-to @click.native="topClick" v-show="toTopIsShow"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import ScrollTo from 'components/content/scrollto/ScrollTo'

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
        },
        currentType: 'pop',
        toTopIsShow: false,
        controlOffsetTop: null,
        controlIsFixed: false,
        homeScroll: 0,
      }
    },
    components: {
      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      ScrollTo,
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
    activated () {
      // 当重新返回home组件页面时，将页面定位到之前离开时的滚动距离
      this.$refs.scroll.scrollToTop(0, this.homeScroll, 0);
      // 重新定位之后，刷新一下scroll对象，防止一些问题
      this.$refs.scroll.refresh();
    },
    deactivated () {
      // 离开home组件时，记录下当前页面滚动的距离
      this.homeScroll = this.$refs.scroll.scroll.y;
    },
    methods: {
      /* 子传父相关方法 */
      tabClick(index) {
        if(index == 0){
          this.currentType = 'pop';
        }else if(index == 1){
          this.currentType = 'new';
        }else if(index == 2){
          this.currentType = 'sell';
        }

        // 让吸顶的选项卡与原本的选项卡的显示同步
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControlTop.currentIndex = index;
      },

      /* 网络请求相关方法 */
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
      },

      /* 页面滚动设置相关方法 */
      topClick() {
        this.$refs.scroll.scrollToTop(0, 0);
      },
      bannerImgLoad() {
        // 获取选项卡距离父元素顶部的距离，并保存下来
        this.controlOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      scrollTo(position) {
        // 监听滚动距离判断是否显示'返回顶部按钮'
        this.toTopIsShow = (-position.y) > 1000;
        // 监听滚动距离判断选项卡是否需要吸顶
        this.controlIsFixed = (-position.y) > this.controlOffsetTop ;
      },
      heightGoto() {
        // 当选项卡吸顶时，点击选项卡切换商品类型时，回到顶部
        this.$refs.scroll.scrollToTop(0, -this.controlOffsetTop);
      },
      loadMore() {
        // 请求更多商品数据添加到网页中
        this.HomeGoods(this.currentType);
        // 下拉加载已完成，可以进行下一次下拉加载
        this.$refs.scroll.finishPullUp();
        // 加载完成后让better-scroll插件重新计算可滚动的页面长度，防止在图片等信息加载完之前就算好导致滚动问题
        this.$refs.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
  #Home {
    padding-bottom: 49px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    z-index: 9;
  }
  .isFixed {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .wrapper{
    height: calc(100vh - 93px);
    overflow: hidden;
  }
</style>
