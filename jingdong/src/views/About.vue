<template>
  <div>
    <div class="searchLMX" style=" background: red;box-sizing:border-box">
      <van-icon name="arrow-left" @click="back"></van-icon>
      <van-search v-model="value" :placeholder="phd" show-action shape="round">
        <div slot="action">
          <van-icon name="ellipsis"></van-icon>
        </div>
      </van-search>
    </div>
    <van-tree-select
      height="100vh"
      :items="items"
      :active-id.sync="activeId"
      :main-active-index.sync="activeIndex"
      @click-nav="changeLMX"
      class="barBox"
    >
      <div slot="content">
        <div class="commodityLMX">
          <h4 class="four">热门推荐</h4>
          <van-grid :gutter="10">
            <van-grid-item v-for="value in 32" :key="value" icon="qr" text="文字" />
          </van-grid>
        </div>
      </div>
    </van-tree-select>
  </div>
</template>
<script>
import Vue from "vue";
import { Search, TreeSelect, Grid, GridItem, Icon } from "vant";
Vue.use(Search)
  .use(TreeSelect)
  .use(Grid)
  .use(GridItem)
  .use(Icon);
export default {
  name: "classification",
  data() {
    return {
      phd:'',
      value: "",
      items: [
        {
          text: "生活旅行",
          index: 0,
          className: "my-class",
          children: [
            {
              text: "机票",
              id: 1
            }
          ]
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  },
  created() {
    this.phd = this.$store.state.phd
  },
  methods: {
    changeLMX(index) {
      let aLMX = document.getElementsByClassName("my-class")[0];
      let aHeight = aLMX.offsetHeight;
      let domH =
        document.documentElement.clientHeight || document.body.clientHeight;
      let firstH = document.getElementsByClassName("navBox")[0];
      let fH = firstH.clientHeight;
      let headerH = document.getElementsByClassName("searchLMX")[0];
      let hH = headerH.clientHeight;
      let centerBOX = domH - fH - hH;
      let allA = this.items.length * aHeight;
      let ele = document.querySelector(".barBox").querySelector(".van-sidebar");
      console.log(this.activeIndex * aHeight, this.activeIndex);
      this.move(ele, index * aHeight);
    },
    move(ele, tar) {
      let t = ele.scrollTop;
      function fn() {
        t += 10;
        ele.scrollTop = t;
        if (t >= tar) {
          ele.scrollTop = tar;
          return;
        }
        requestAnimationFrame(() => {
          fn();
        });
      }
      fn();
    },
    back() {
      history.back();
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.barBox {
  .van-sidebar {
    height: 80vh;
  }
}
.searchLMX {
  position: fixd;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
}
.searchLMX > .van-search  {
  z-index: 9999;
  background: #ee3033 !important;
}
.van-tree-select__content  {
  flex: 3;
}
.van-grid-item__content--center  {
  width: 21vw;
}
.van-grid {
  height: 60vh;
}
.four  {
  margin: 4vw 0 1.5vh 2.5vw;
}
.my-class {
  box-sizing: border-box;
}
.van-icon-arrow-left {
  background: #e93b3d;
  padding-left: 2vh;
  line-height: 7.4vh;
  font-size: 20px;
  float: left;
}
.van-icon-ellipsis{
  font-size: 30px
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
</style>

</style>