import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/login/login'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 找回密码
      path: "/retrieve/:name",
      name: "retrieve",
      component: () =>
        import(/* webpackChunkName: "login" */ './components/retrieve/retrieve'),
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false
      }
    },

    {
      // 众筹的路由
      path: '/theraise/:name',
      name: 'theraise',
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/theraise/theraise'),
      meta: {
        requiresAuth: false
      }
    },
    {
      // 首页的路由
      path: '/index/:name',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/index/index'),
      meta: {
        requiresAuth: false
      }
    },
    {
      // 矿机商城
      path: "/shop/:name",
      name: "shop",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/shop/shop'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/market/:name",
      name: "market",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/market/market'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 首页底部的详情
      path: "/details/:id",
      name: "details",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/details/details'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 首页我的矿机
      path: "/mill/:name",
      name: "mill",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/mill/mill'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 首页矿机的详情
      path: "/milldetails",
      name: "milldetails",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/milldetails/milldetails'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 我的交易
      path: "/trading/:name",
      name: "trading",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/trading/trading'),
      meta: {
        requiresAuth: false
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!getToken()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    console.log(to.matched)
    next()
  }
})

export default router
