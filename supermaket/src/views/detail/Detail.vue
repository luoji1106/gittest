<template>
  <div id="goods-detail">
    <detail-nav-bar :title="['商品','参数','评论','推荐']" @navClick="navClick" ref="navBar"/>
    <scroll :probeType='3' ref="scroll" @scrollTo="scrollTo">
      <detail-banner :banners="banners" />
      <detail-info :goodsInfo="goodsInfo" />
      <detail-shop :shopInfo="shopInfo" />
      <detail-shop-img :goodsImages="goodsImages" @imgLoad="imgLoad"/>
      <detail-param :paramInfo="paramInfo" ref="param" />
      <detail-comment :comment="comment" :commentIsNo="commentIsNo" ref="comment" />
      <goods-list :goods="recommends" ref="recommends" />
      <p class="detail-bottom">~没有更多了~</p>
    </scroll>
    <scroll-to @click.native="topClick" v-show="toTopIsShow"/>
    <detail-bottom-bar @cartClick="cartClick" />
  </div>
</template>

<script>
  import DetailNavBar from './detailChild/DetailNavBar'
  import DetailBanner from './detailChild/DetailBanner'
  import DetailInfo from './detailChild/DetailInfo'
  import DetailShop from './detailChild/DetailShop'
  import DetailShopImg from './detailChild/DetailShopImg'
  import DetailParam from './detailChild/DetailParam'
  import DetailComment from './detailChild/DetailComment'
  import DetailBottomBar from './detailChild/DetailBottomBar'

  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail,getRecommend,Goods,Shop,ParamInfo,Comment} from 'network/detail'

  import {scrollTo} from 'common/mixin'

  export default {
    name: 'Detail',
    data () {
      return {
        iid: null,
        banners: [],
        goodsInfo: {},
        shopInfo: {},
        goodsImages: {},
        paramInfo: {},
        comment: {},
        commentIsNo: null,
        recommends: [],
        scrollToY: [],
        navBarIndex: null
      }
    },
    components: {
      DetailNavBar,
      DetailBanner,
      DetailInfo,
      DetailShop,
      DetailShopImg,
      DetailParam,
      DetailComment,
      DetailBottomBar,
      GoodsList,
      Scroll
    },
    mixins: [scrollTo],
    /* 由于detail组件也在home组件中，而home组件使用了keep-alive不会被销毁，所以detail不会再次创建,里面的数据得不到更新，所以要在keep-alive中用exclude方法把Detail组件排除在外 */
    created () {
      this.iid = this.$route.query.iid;
      // 根据商品的iid发送请求，获取数据
      getDetail(this.iid).then(res => {
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
        // 商品参数数据
        this.paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule);
        // 商品评论数据(先判断是否有评论)
        if(data.rate.cRate !== 0) {
          this.comment = new Comment(data.rate.list[0]);
          this.commentIsNo = true;
        }
      })
      // 请求推荐商品数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })
    },
    methods: {
      imgLoad() {
        // 加载完图片刷新一下scroll对象，重新计算可滚动高度
        this.$refs.scroll.refresh();
        // 加载完图片将各个模块的offSetTop保存下来
        this.scrollToY = [];
        this.scrollToY.push(0);
        this.scrollToY.push(-this.$refs.param.$el.offsetTop);
        this.scrollToY.push(-this.$refs.comment.$el.offsetTop);
        this.scrollToY.push(-this.$refs.recommends.$el.offsetTop);
        this.scrollToY.push(-Number.MAX_VALUE);
      },
      navClick(index) {
        if(this.scrollToY.length > 0) {
          this.$refs.scroll.scrollToTop(0, this.scrollToY[index]);
        }
      },
      scrollTo(position) {
        for(let i = 0;i < this.scrollToY.length-1;i++) {
          // 判断滚动的距离在那个区间, 并且避免频繁赋值
          if(this.navBarIndex !== i && (position.y <= this.scrollToY[i] && position.y>this.scrollToY[i+1])) {
            this.$refs.navBar.currentIndex = this.navBarIndex = i;
          }
        }

        // 监听滚动距离判断是否显示'返回顶部按钮'
        this.toTopIsShow = (-position.y) > 1000;
      },
      cartClick() {
        const product = {};
        product.iid = this.iid;
        product.image = this.banners[0];
        product.title = this.goodsInfo.title;
        product.desc = this.goodsImages.desc;
        product.price = this.goodsInfo.cartPrice;

        this.$store.dispatch('collectCart', product).then(res => {
          // 添加成功显示弹窗，并提示添加成功
          this.$popup.show(res, 2500);
        })
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
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
  }

  .detail-bottom {
    padding: 10px 0;
    text-align: center;
  }
</style>