<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img v-lazy="image"/>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  data() {
    return {
      images: [
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/96238/6/4955/91556/5dede233Ed3f1a056/0d07cdaf45b55a8d.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85022/24/6014/98607/5df06705E133a5dc5/46a416827572949a.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/89134/28/5729/96767/5def7289E76975bc4/c14cfbb19c6336a0.jpg!cr_1125x445_0_171!q70.jpg.dpg",
        "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/102382/4/5426/145481/5dedb49cE13a07f3c/acb807ce6c3ccec2.jpg!cr_1125x445_0_171!q70.jpg.dpg"
      ]
    };
  },
  components: {}
};
</script>
<style lang="less" scoped>
img{
    width: 90vw;
    border-radius:10px; 
}
</style>