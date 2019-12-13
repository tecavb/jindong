<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">主页</router-link>
      <router-link to="/about">分类</router-link>
      <router-link to="/jingxi">一元拼</router-link>
      <router-link to="/buybus">购物车</router-link>
      <router-link to="/my">我的</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f6f6f6;
}

#nav {
  height: 8vh;
  line-height: 8vh;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  a {
    display: inline-block;
    width: 20vw;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
