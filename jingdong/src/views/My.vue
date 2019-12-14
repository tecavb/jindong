// 登录
<template>
  <div>
    <div class="top">
      <van-nav-bar title="京东登录注册" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="msg">
      <van-cell-group>
        <van-field v-model="name" clearable placeholder="用户名/邮箱/手机号" />
        <van-field v-model="psw" type="password" clearable placeholder="请输入密码" />
      </van-cell-group>
      <van-button
        round
        color="linear-gradient(to right, rgb(242, 18, 220) ,rgb(242, 103, 18))"
        @click="login"
      >登录</van-button>
      <van-button round color="linear-gradient(to left, rgb(206, 108, 174), rgb(22, 218, 202))">一键登录</van-button>
      <span class="lt other">短信验证码登录</span>
      <span class="rt other">手机快速注册</span>
    </div>
    <div class="another">
      <van-divider>其他登录方式</van-divider>
      <div class="log">
        <div class="qq lt">
          <span>
            <i class="iconfont icon-qq"></i>
          </span>
          QQ
        </div>
        <div class="weixin lt">
          <span>
            <i class="iconfont icon-weixin"></i>
          </span>
          微信
        </div>
      </div>
      <p class="foot lt">
        登录即代表您已同意
        <a href="https://in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
export default {
  name: "XXX",
  data() {
    return {
      name: "",
      psw: "",
      show: false
    };
  },
  components: {},
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    login() {
      if (!this.name || !this.psw) {
        this.$toast.fail("用户名密码不能为空");
        return;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  height: 15vw;
  line-height: 15vw;
  text-align: center;
  .van-nav-bar .van-icon {
    color: #000;
  }
}
.msg {
  padding: 5vw;
  .van-cell {
    font-size: 16px;
    height: 18vw;
    line-height: 13vw;
  }
  .van-field__control {
    height: 14vw;
    border-top: none;
  }
  .van-button--normal {
    width: 80vw;
    margin: 2vw 0;
  }
  .other {
    float: left;
    color: #ccc;
    padding: 2vw;
    font-size: 4vw;
  }
}
.another {
  overflow: hidden;
  margin-top: 20vw;
  color: #ccc;
  .log {
    display: flex;
    justify-content: space-around;
  }
  span {
    display: block;
    border-radius: 50%;
    height: 12vw;
    width: 12vw;
    line-height: 12vw;
    text-align: center;
    .iconfont {
      font-size: 7vw;
    }
  }
  .qq {
    float: left;
    span {
      color: #4a90e2;
      background: rgba(54, 158, 228, 0.3);
    }
  }
  .weixin {
    float: left;
    span {
      color: green;
      background: rgba(36, 226, 121, 0.3);
    }
  }
  .foot {
    float: left;
    font-size: 3vw;
    text-align: center;
    margin: 5vw 25vw;
    a {
      color: #4a90e2;
      font-style: normal;
    }
  }
}
</style>
