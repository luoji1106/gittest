<template>
  <div class="TabBar-item" @click="TabBarClick">
    <div v-if="isActive"><slot name="TabBar-img-active"></slot></div>
    <div v-else><slot name="TabBar-img"></slot></div>
    <div :style="textColor"><slot name="TabBar-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBar_item',
  data () {
    return {
      // isActive: false
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    TabBarClick() {
      if(this.$route.path.indexOf(this.path) == -1){
        this.$router.replace(this.path)
      }
    }
  },
  computed: {
    isActive() {
      // 判断当前路径是否包含设置好并传进来的的路径 
      return this.$route.path.indexOf(this.path) !== -1;
    },
    textColor() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  }
}
</script>

<style>
  .TabBar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .TabBar-item img {
    margin-top: 3px;
    width: 22px;
    height: 22px;
    margin-bottom: -2px;
  }
</style>
