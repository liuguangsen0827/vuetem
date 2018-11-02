<template>
  <div id="app">
    <!-- 缓存的页面 -->
<keep-alive>
   <router-view v-if="$route.meta.isKeepAlive"></router-view>
</keep-alive>
<!-- 不缓存的页面 -->
<router-view v-if="!$route.meta.isKeepAlive"></router-view>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  height: 100%;
  width: 100%;
  background: #f5f5f9;
  touch-action: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
</style>
