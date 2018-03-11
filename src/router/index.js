import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: '默认页',
      redirect: '/appoint/home'
    }, {
      path: '/appoint/home',
      name: '预约首页',
      component: () => import('@/views/appointment/index.vue')
    }, {
      path: '/appoint/detail',
      name: '预约详情',
      component: () => import('@/views/appointment/detail.vue')
    }, {
      path: '*',
      component: () => import('@/views/error.vue')
    }
  ]
})
