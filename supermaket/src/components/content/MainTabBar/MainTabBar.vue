<template>
  <tab-bar>
    <tab-bar-item path='/home' activeColor='pink'>
      <img src="~assets/img/tabbar/home-yes.jpg" slot="TabBar-img-active">
      <img src="~assets/img/tabbar/home-no.jpg" slot="TabBar-img">
      <p slot="TabBar-text">首页</p>
    </tab-bar-item>
    <tab-bar-item path='/sort' activeColor='pink'>
      <img src="~assets/img/tabbar/sort-yes.jpg" slot="TabBar-img-active">
      <img src="~assets/img/tabbar/sort-no.jpg" slot="TabBar-img">
      <p slot="TabBar-text">分类</p>
      </tab-bar-item>
    <tab-bar-item path='/shoping' activeColor='pink'>
      <img src="~assets/img/tabbar/shoping-yes.jpg" slot="TabBar-img-active">
      <img src="~assets/img/tabbar/shoping-no.jpg" slot="TabBar-img">
      <p slot="TabBar-text">购物车</p>
      </tab-bar-item>
    <tab-bar-item path='/profile'>
      <img src="~assets/img/tabbar/profile-yes.jpg" slot="TabBar-img-active">
      <img src="~assets/img/tabbar/profile-no.jpg" slot="TabBar-img">
      <p slot="TabBar-text">我的</p>
      </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
