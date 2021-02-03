<template>
  <div class="detail-comment" v-if="commentIsNo">
    <div class="comment-title">
      <span>用户评价</span>
      <span>更多→</span>
    </div>
    <div class="comment-content">
      <div class="user">
        <img :src="comment.avatar">
        <p>{{comment.userName}}</p>
      </div>
      <p class="comment-text">{{comment.content}}</p>
      <p class="comment-time">{{comment.time | showTime}}</p>
      <p class="goods-style">{{comment.style}}</p>
    </div>
  </div>
  <div class="comment-title" v-else>
    <span>该商品还没有评论</span>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper';

  import {Format} from 'common/utils'

  export default {
    props: {
      comment: {
        type: Object,
        default() {
          return {};
        }
      },
      commentIsNo: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    filters: {
      showTime(value) {
          // 将获取到的时间戳转化成date对象
          var date = new Date(value * 1000);
          // 定义好时间的格式
          const fmt = 'yyyy-MM-dd hh:mm';
          // 返回格式化过的时间
          return Format(date, fmt);
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 0px 10px 15px;
    box-shadow: 0 5px rgba(111,111,111,.2);
    margin-bottom: 20px;
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

  .comment-time,.goods-style {
    font-size: 15px;
    color: rgb(111,111,111);
    padding: 2px;
  }
</style>