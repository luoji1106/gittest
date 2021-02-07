<template>
  <div class="check-btn" :class="{chenked: isCheck}">
    <img src="~assets/img/cart/tick.svg" v-if="isCheck">
  </div>
</template>

<script>
  export default {
    props: {
      isCheck: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style scoped>
  .check-btn {
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    padding-top: 2px;
    border: 1px gray solid;
  }
  .chenked {
    border: 1px orange solid;
    background: orange;
  }
</style>