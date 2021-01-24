<template>
  <div id="recommend">
    <div v-for="item in recommends" :key='item.title' class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style>
  #recommend {
    display: flex;
    padding: 10px 0 20px;
    border-bottom: 10px #eee solid;
  }

  .recommend-item {
    flex: 1;
    font-size: 12px;
    text-align: center;
  }
  .recommend-item img {
    width: 90%;
    margin-bottom: 7px;
  }
</style>