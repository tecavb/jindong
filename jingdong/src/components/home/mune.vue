<template>
  <van-swipe :show-indicators='false'>
    <van-swipe-item>
      <img src="../../assets/a1.png" alt />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../../assets/a2.png" alt />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {}
};
</script>
<style lang="less" scoped>
img {
  width: 100vw;
}
</style>