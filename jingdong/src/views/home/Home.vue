<template>
  <div class="home">
    <!-- <router-link to='search'>搜索</router-link> -->
    <my-top>
      <swipe></swipe>
    </my-top>
    <div style="font-size:0">
      <my-mune></my-mune>
    </div>
    <div class="ad">
      <img
        src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/99043/36/5887/78826/5df0577fEd91dd414/ba8c10df3f4e1cb3.jpg!q70.jpg.dpg"
        alt
      />
      <img
        src="https://m.360buyimg.com/mobilecms/jfs/t1/99212/9/5917/81406/5df059d0E1510850c/9e762975c0d0792b.gif"
        alt
      />
      <img
        src="https://m.360buyimg.com/mobilecms/s250x200_jfs/t1/107013/13/5932/81680/5df059d7E8c9bbe27/53ca7d62a2d8d4ad.jpg!q70.jpg.dpg"
        alt
      />
    </div>
    <miao></miao>
    <div class="zes">
      <img src="../../assets/001.jpg" alt />
      <img src="../../assets/002.jpg" alt />
      <img src="../../assets/003.jpg" alt />
      <img src="../../assets/004.jpg" alt />
    </div>
    <list></list>
    <div style="height:8vh"></div>
    <div id="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/about">分类</router-link>
      <router-link to="/jingxi">一元拼</router-link>
      <router-link to="/buybus">购物车</router-link>
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>
import top from "@/components/home/top";
import swipe from "@/components/home/swipe";
import mune from "@/components/home/mune";
import miao from "@/components/home/miaosha";
import list from "@/components/home/list";
export default {
  name: "home",
  components: {
    "my-top": top,
    swipe: swipe,
    "my-mune": mune,
    miao: miao,
    list: list
  }
};
</script>
<style lang="less" scoped>
.ad {
  img {
    width: 33.33vw;
  }
}
.zes {
  margin-top: 2vh;
  img {
    width: 50vw;
  }
}
</style>
