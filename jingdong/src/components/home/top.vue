<template>
  <div class="top">
    <router-link to="/about" tag="span" class="nav">
      <van-icon name="wap-nav"></van-icon>
    </router-link>
    <router-link to="/search" tag="span">
      <van-search placeholder="t恤" shape="round" background="transparent">
        <div slot="label">
          <img src="../../assets/jd.png" alt />|
        </div>
      </van-search>
    </router-link>
    <router-link to="/my" tag="span" class="login">登录</router-link>
    <slot></slot>
  </div>
</template>
<script>
import { Search, Icon } from "vant";
import "vant/lib/index.css";
export default {
  name: "XXX",
  data() {
    return {};
  },
  components: {
    "van-search": Search,
    "van-icon": Icon
  }
};
</script>
<style lang="less" scoped>
.top {
  background:url('https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/94833/5/5834/86520/5def760dEfec94275/b9119d925e38cadb.jpg') 0 -60px;
  background-size: cover;
  .login {
    line-height: 8vh;
    color: #fff;
    font-size: 14px;
    margin-right: 0.5vw;
  }
  .nav {
    font-size: 28px;
    padding: 10px 12px;
    float: left;
    color: #fff;
  }
  .van-search {
    padding-left: 2px;
    float: left;
    width: 76vw;
    color: #efefef;
    .van-search__content {
      height: 5vh;
    }
    img {
      width: 7vw;
      margin: -3px 6px;
    }
  }
}
</style>