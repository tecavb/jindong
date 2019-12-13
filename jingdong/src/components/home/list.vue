<template>
  <div class="list">
    <div>为你推荐</div>
    <ul>
      <li v-for="item in ary" :key="item.id">
        <img :src="item.src" alt />
        <p>{{item.dic}}</p>
        <span class="pre">￥{{item.pre}}</span>
        <span>看相似</span>
      </li>
    </ul>
  </div>
</template>
<script>
import vue from "vue";
import Lazyload from "vant";
import { list } from "@/api/home";
export default {
  created() {
    list().then(data => {
      this.ary = data.data.data;
    });
  },
  data() {
    return {
      ary: []
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
.list {
  > div {
    height: 5vh;
    font-size: 0;
    background: url("../../assets/tj.png") no-repeat;
    background-size: contain;
  }
  ul {
    font-size: 0;
    li {
      img {
        height: 30vh;
        width: 50vw;
      }
      p {
        width: 50vw;
        box-sizing: border-box;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        color: #232326;
        margin-top: 5px;
        margin-bottom: 3px;
        padding: 0 4px;
      }
      .pre {
        border: none;
        font-size: 15px;
        color: #f23030;
        float: none;
      }
      span {
        float: right;
        color: #bfbfbf;
        font-size: 15px;
        border: 1px solid #bfbfbf;
      }
      text-align: left;
      float: left;
    }
  }
}
</style>