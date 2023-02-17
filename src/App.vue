<template>
  <div id="app">
      <Header></Header>
      <!-- 路由组件出口的地方 -->
      <router-view></router-view>
      <!-- 在 home或者search 是显示的，在登录、注册是隐藏的 -->
      <!-- 不建议这样写 代码太冗余 -->
      <!-- <Footer v-show="$route.path == '/home' || $route.path == '/search'"></Footer> -->
      <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App1',
  components: {
    Header,  // kv 一致 省略v 语法糖
    Footer
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
