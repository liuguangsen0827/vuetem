import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
/* title:标题
   isKeepAlive：是否缓存， true表示缓存， false表示不缓存
   needLogin：是否需要登录，true表示需要， false表示不需要
 */
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld',
        isKeepAlive: false
      }
    }
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: Login,
    //   meta: {
    //     title: '登录',
    //     isKeepAlive: false
    //   }
    // }
  ]
})
router.beforeEach((to, from, next) => {
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(record => record.meta.needLogin)) {
    // 判断登录状态
    // if (storage.get('token')) {
    //   next()
    // } else {
    //   next({
    //     path: '/login',
    //     query: {
    //       redirect: to.fullPath
    //     }
    //   })
    // }
  }
  next()
})
export default router
