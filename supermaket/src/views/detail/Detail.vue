<template>
  <div id="goods-detail">
    <detail-nav-bar :title="['商品','参数','评论','推荐']" />
    <scroll :probeType='3' :pullUpLoad='true' ref="scroll">
      <detail-banner :banners="banners" />
      <detail-info :goodsInfo="goodsInfo" />
      <detail-shop :shopInfo="shopInfo" />
      <detail-shop-img :goodsImages="goodsImages" @imgLoad="imgLoad"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import DetailBanner from './detailChild/DetailBanner'
  import DetailInfo from './detailChild/DetailInfo'
  import DetailShop from './detailChild/DetailShop'
  import DetailShopImg from './detailChild/DetailShopImg'

  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail,Goods,Shop} from 'network/detail'

  export default {
    name: 'Detail',
    data () {
      return {
        iid: null,
        banners: [],
        goodsInfo: {},
        shopInfo: {},
        goodsImages: {}
      }
    },
    components: {
      DetailNavBar,
      DetailBanner,
      DetailInfo,
      DetailShop,
      Scroll,
      DetailShopImg
    },
    /* 由于detail组件也在home组件中，而home组件使用了keep-alive不会被销毁，所以detail不会再次创建,里面的数据得不到更新，所以要在keep-alive中用exclude方法把Detail组件排除在外 */
    created () {
      this.iid = this.$route.params.iid;
      // 根据商品的iid发送请求，获取数据
      getDetail(this.iid).then(res => {
        console.log(res);
        const data = res.result;
        // 将请求到的数据抽离出来
        // 轮播图数据
        this.banners = data.itemInfo.topImages;
        // 商品信息数据
        this.goodsInfo = new Goods(data.itemInfo, data.columns, data.shopInfo);
        // 店家信息数据
        this.shopInfo = new Shop(data.shopInfo);
        // 商品图片数据
        this.goodsImages = data.detailInfo;
      })
    },
    methods: {
      imgLoad() {
        this.$refs.scroll.refresh();
        console.log('aa')
      }
    }
  }
</script>

<style>
  #goods-detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }

  .wrapper{
    height: calc(100vh - 44px);
    overflow: hidden;
  }
</style>