<template>
  <div class="miaosha">
    <div>
      <img src="../../assets/miaosha.png" alt />
      <van-count-down :time="time"></van-count-down>
      <a href="javascript:;">更多秒杀</a>
    </div>
    <ul @touchstart="movestart" @touchend="moveend" ref="ul">
      <li v-for="item in data" :key="item.id">
        <img :src="item.src" alt />
        <span>￥{{item.pri}}</span>
        <del>￥{{item.lpri}}</del>
      </li>
    </ul>
  </div>
</template>
<script>
import { miao } from "@/api/home.js";
import Vue from "vue";
import { CountDown } from "vant";
Vue.use(CountDown);
export default {
  data() {
    return {
      temp: "",
      data: "",
      time: 60 * 60 * 1000
    };
  },
  created() {
    miao().then(data => {
      this.data = data.data.data;
    });
  },
  methods: {
    movestart(e) {
      this.temp = e.changedTouches[0].pageX;
    },
    moveend(e) {
      let t = 0;
      let temp = e.changedTouches[0].pageX - this.temp;
      let n = this.$refs.ul.offsetWidth;
      if (temp > 0) {
        temp = 0;
      } else if (temp < -n) {
        temp = n;
      }
      t = temp + t;
      this.$refs.ul.style.transform = `translate(${t}px)`;
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.miaosha {
  margin: 0 2vw;
  background-color: #fff;
  width: 96vw;
  overflow: hidden;
  > div {
    background: url(../../assets/msbg.png);
    background-size: cover;
    text-align: left;
    .van-count-down {
      float: left;
      margin-top: 1vh;
    }
    img {
      float: left;
      margin: 6px 16px;
      width: 20vw;
      height: 3vh;
    }
    a {
      font-size: 12px;
      padding: 4px;
      color: #f23030;
      float: right;
    }
  }
  ul {
    width: 192vw;
    overflow: hidden;
    li {
      img {
        padding: 4px 0;
        height: 10vh;
      }
      span:nth-child(2) {
        font-weight: 600;
        color: #f23030;
        font-size: 16px;
      }
      del:nth-child(3) {
        padding: 4px 0;
        display: block;
        font-size: 12px;
      }
      padding: 0 3vw;
      font-size: 0;
      width: 18vw;
      float: left;
    }
  }
}
</style>