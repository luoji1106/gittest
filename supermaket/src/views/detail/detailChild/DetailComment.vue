<template>
  <div class="detail-comment">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-content">
      <div class="user">
        <img :src="comment.avatar">
        <p>{{comment.userName}}</p>
      </div>
      <p class="comment-text">{{comment.content}}</p>
      <p class="goods-style">{{comment.style}}</p>
    </div>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper';

  export default {
    props: {
      comment: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 0px 10px;
  }

  .comment-title {
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 1px rgba(111,111,111,.2);
  }
  .comment-title span {
    font-size: 18px;
  }

  .user {
    height: 50px;
  }
  .user img {
    width: 30px;
    height: 30px;
    border: 1px rgba(177, 177, 177,.3) solid;
    border-radius: 25px;
    margin: 15px 0 0;
  }
  .user p {
    margin-top: -40px;
    line-height: 50px;
    padding-left: 40px;
    color: black;
  }

  .comment-text {
    padding: 10px 5px;
    font-size: 16px;
  }

  .goods-style {
    font-size: 14px;
    color: rgb(111,111,111);
    padding-right: 10px;
    text-align: right;
  }
</style>