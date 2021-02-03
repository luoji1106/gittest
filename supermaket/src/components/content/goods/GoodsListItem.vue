<template>
  <div>
     <img :src="findImg">
      <div class="goods-info">
        <p class="title">{{message.title}}</p>
        <p>
          <span class="price">{{message.price}}</span>
          <span class="collect">{{message.cfav}}</span>
        </p>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    computed: {
      findImg() {
        if(this.message.show) {
          return this.message.show.img;
        }else{
          return this.message.image;
        }
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    border-radius: 5px;
  }
  .title {
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