<template>
  <div class="goods">
    <div v-for="(item, index) in goods" :key="index" class="goods-item" @click="goodsClick(item)">
      <goods-list-item :message="item" />
    </div>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      goodsClick(item) {
        // this.$router.push('/detail/' + item.iid);
        // 设置路由
        if(item.iid) {
          this.$router.push({
            path: '/detail',
            query: {
              iid: item.iid
            }
          })
        }else if(item.item_id) {
          this.$router.push({
            path: '/detail',
            query: {
              iid: item.item_id
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .goods-item {
    width: 48%;
  }
</style>