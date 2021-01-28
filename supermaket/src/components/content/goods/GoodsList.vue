<template>
  <div class="goods">
    <div v-for="(item, index) in goods" :key="index" class="goods-item" @click="goodsClick(item)">
      <img :src="item.show.img" alt="">
      <div class="goods-info">
        <p class="title">{{item.title}}</p>
        <p>
          <span class="price">{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
        this.$router.push('/detail/' + item.iid);
      }
    }
  }
</script>

<style>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .goods-item {
    width: 48%;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-item .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .goods-info {
    text-align: center;
    padding: 7px 2px 10px;
  }
  .goods-info .price {
    color: var(--color-tint);
    margin-right: 30px;
  }
  .goods-info .collect {
    position: relative;
    z-index: -1;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 2px;
    width: 14px;
    height: 14px;
    background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>