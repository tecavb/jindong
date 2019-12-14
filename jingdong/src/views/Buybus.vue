<template>
  <div>
    <div class="back">
      <van-icon name="arrow-left" @click="back"></van-icon>购物车
    </div>
    <div class="car">
      <img src="../assets/car.png" alt />
      <p>购物车空空如也，去逛逛吧~</p>
    </div>
    <miao></miao>
    <list></list>
  </div>
</template>
<script>
import Vue from "vue";
import miao from "@/components/home/miaosha";
import list from "@/components/home/list";
import { Icon } from "vant";
Vue.use(Icon);
// @ is an alias to /src
export default {
  name: "buy",
  data() {
    return {};
  },
  components: {
    list: list,
    miao: miao
  },
  methods: {
    back() {
      history.back();
    }
  }
};
</script>
<style lang="less">
.van-icon-arrow-left {
  background-color: #fff;
  padding-left: 2vh;
  line-height: 6vh;
  font-size: 20px;
  float: left;
}
.back {
  line-height: 6vh;
  font-size: 18px;
  background: #fff;
  height: 6vh;
}
.car {
  box-sizing: border-box;
  padding: 12vh;
  height: 40vh;
  img {
    width: 28vw;
  }
  p {
    margin-top: 4vh;
  }
}
</style>