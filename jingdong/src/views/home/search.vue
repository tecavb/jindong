<template>
  <div class="search-a">
    <van-icon name="arrow-left" @click="back"></van-icon>
    <van-search v-model="value" :placeholder="phd" show-action shape="round" @input="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <div class="hot" v-if="!value">
      <div>
        <h4>热门搜索</h4>
        <div @click="onshow" v-show="show">隐藏</div>
        <div @click="onshow" v-show="!show">显示</div>
      </div>
      <ul v-if="show">
        <li v-for="item in ary" :key="item">{{item}}</li>
      </ul>
      <div v-else class="hide">已隐藏搜索发现</div>
    </div>
    <div class="prompt" v-else>
      <ul>
        <li v-for="item in data" :key="item.key">{{item.key}}<span v-for="i in item.tag" :key="i.tse">{{i.tsh}}</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, Icon } from "vant";
import VueJsonp from "vue-jsonp";
import "vant/lib/index.css";
Vue.use(Search)
  .use(Icon)
  .use(VueJsonp);
export default {
  name: "search",
  data() {
    return {
      phd:'',
      data: [],
      show: true,
      value: "",
      ary: [
        "汰渍肖战大牌秒杀日",
        "食品饮料每满199减100",
        "北极星挂钟",
        "空气净化器",
        "按摩器",
        "紫砂花盆",
        "篮球鞋",
        "剃须刀电动",
        "电话交换机",
        "多美鲜黄油",
        "蓝牙音箱",
        "小米手环"
      ]
    };
  },
  created(){
    this.phd = this.$route.query.q
  },
  components: {
    "van-search": Search,
    "van-icon": Icon
  },
  methods: {
    onSearch() {
      Vue.jsonp("https://wq.jd.com/bases/searchdropdown/getdropdown", {
        terminal: "m",
        zip: "1",
        key: this.value,
        newjson: "1",
        _: Date.now(),
        sceneval: "2",
        callbackQuery: "callback",
        callbackName: "jsonpCBKC"
      }).then(json => {
        this.data = [];
        json && json.forEach(item => {
          this.data.push(item);
        });
      });
    },
    back() {
      history.back();
    },
    onshow() {
      this.show = !this.show;
    }
  }
};
</script>
<style lang="less" scoped>
.search-a {
  background-color: #efefef;
  height: 100vh;
  .prompt {
    ul {
      padding: 10px;
      background-color: #fff;
      li {
        font-size: 13px;
        text-align-last: left;
        height: 6vh;
        span{
          float: right;
          padding: 2px 10px;
          margin-left: 8px;
          border-radius:2px; 
          background-color: #efefef;
        }
      }
    }
  }
  .hot {
    border-top: 1px solid #aaa;
    text-align: left;
    background-color: #fff;
    > div {
      overflow: hidden;
      > div {
        float: right;
        margin-top: 16px;
        margin-right: 14px;
      }
    }
    h4 {
      float: left;
      margin-top: 16px;
      font-weight: normal;
      font-size: 15px;
    }
    .hide {
      height: 18vh;
      line-height: 18vh;
      text-align: center;
      font-size: 12px;
    }
    ul {
      padding: 10px 6px;
      box-sizing: border-box;
      > li:nth-child(1),
      > li:nth-child(2),
      > li:nth-child(3) {
        color: #e93b3d;
      }
      li {
        font-size: 12px;
        display: inline-block;
        background-color: #eee;
        padding: 4px 10px;
        border-radius: 4px;
        margin: 4px 6px;
      }
    }
  }
  .van-icon-arrow-left {
    background-color: #fff;
    padding-left: 2vh;
    line-height: 8vh;
    font-size: 20px;
    float: left;
  }
  .van-search--show-action {
    .van-cell--borderless {
      font-size: 10px;
    }
    .van-search__action {
      margin-right: 12px;
      background-color: #e93b3d;
      color: #fff;
      border-radius: 4px;
      height: 4.5vh;
      line-height: 4.5vh;
      width: 8vw;
      padding: 0 4px;
    }
  }
}
</style>