<template>
  <nav-bar class="detailNavBar">
    <div slot="left" class="NavBarLeft" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="NavBarCenter">
      <span v-for="(item, index) in title" :key="index" 
            :class="{active: index == currentIndex}" @click="navClick(index)">
        {{item}}
      </span>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    data () {
      return {
        currentIndex: 0
      }
    },
    props: {
      title: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      NavBar,
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      navClick(index) {
        this.currentIndex = index;
        // 传出导航点击事件
        this.$emit('navClick', index);
      }
    }
  }
</script>

<style scoped>
  .NavBarLeft img {
    margin-top: 12px;
  }
  .NavBarCenter{
    display: flex;
  }
  .NavBarCenter span {
    flex: 1;
    font-size: 14px;
  }

  active {
    color: var(--color-high-text);
  }
</style>