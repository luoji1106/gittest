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
    mounted () {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true,
        scrollY: true,
      })
    },
    methods: {
      scrollToTop(x, y, time=300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style>

</style>