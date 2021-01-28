<template>
  <div id="goods-detail">
    <detail-nav-bar :title="['商品','参数','评论','推荐']" />
    <detail-banner :banners="banners" />
    <detail-info :goodsInfo="goodsInfo" />
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import DetailBanner from './detailChild/DetailBanner'
  import DetailInfo from './detailChild/DetailInfo'

  import {getDetail,Goods} from 'network/detail'

  export default {
    name: 'Detail',
    data () {
      return {
        iid: null,
        banners: null,
        goodsInfo: {}
      }
    },
    components: {
      DetailNavBar,
      DetailBanner,
      DetailInfo
    },
    /* 由于detail组件也在home组件中，而home组件使用了keep-alive不会被销毁，所以detail不会再次创建,里面的数据得不到更新，所以要在keep-alive中用exclude方法把Detail组件排除在外 */
    created () {
      this.iid = this.$route.params.iid;
      // 根据商品的iid发送请求，获取数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        // 将请求到的数据抽离出来
        this.banners = data.itemInfo.topImages;
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo)
      })
    }
  }
</script>

<style>

</style>