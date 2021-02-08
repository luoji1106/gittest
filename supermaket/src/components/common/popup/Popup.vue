<template>
  <div id="popup" v-show="isShow">{{message}}</div>
</template>

<script>
  export default {
    data () {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, delay=2000) {
        this.isShow = true;
        this.message = message;

        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        },delay)
      }
    }
  }
</script>

<style scoped>
  #popup {
    position: fixed;
    width: 50%;
    text-align: center;
    left: 25%;
    top: 40%;
    background: rgba(0,0,0,.7);
    z-index: 999;
    padding: 30px 10px;
    border-radius: 10px;
    color: white;
  }
</style>