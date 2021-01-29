<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data () {
      return {
        scroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default() {
          return 0;
        }
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroll,{
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      })

      // 监听滚动的距离
      this.scroll.on('scroll', (position) => {
        this.$emit('scrollTo', position);
      })
      // 监听是否滚动到底部
      this.scroll.on('pullingUp', () => {
        this.$emit('loadMore');
      })
    },
    methods: {
      // 将页面定位到某个位置
      scrollToTop(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      // 可以进行下一次下拉加载
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },
      // 重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
      refresh() {
        this.scroll && this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>
  
</style>