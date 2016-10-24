export function configRouter (router) {

  // 一般的路由
  router.map({
    // basic example
    '/m/baojia': {
      component: require('./components/BaoJia.vue')
    },
    '/m/sihua': {
      component: require('./components/SiHua.vue')
    },
    '/m': {
      component: require('./components/ShouYe.vue')
    },
    // 嵌套路由的例子
    '/user/:userId': {
      component: require('./components/user/index.vue'),
      subRoutes: {
        // matches "/user/:userId/profile/:something"
        'profile/:something': {
          component: require('./components/user/profile.vue')
        },
        // matches "/user/:userId/posts"
        'posts/:id': {
          component: require('./components/user/posts.vue')
        },
        // matches "/user/:userId/settings"
        'settings': {
          component: require('./components/user/settings.vue')
        }
      }
    },

    // not found handler
    '*': {
      component: require('./components/not-found.vue')
    },
      // not found handler
      '/m/*': {
          component: require('./components/not-found.vue')
      },
    // advanced example高级例子
    '/inbox': {
      component: require('./components/inbox/index.vue'),
      subRoutes: {
        '/message/:messageId': {
          component: require('./components/inbox/message.vue')
        },
        '/archived': {
          component: require('./components/inbox/archive.vue')
        },
        // default component to render into the nested outlet
        // when the parent route is matched but there's no
        // nested segment. In this case, "/inbox".
        '/': {
          // inline component
          component: {
            template: 'default yo'
          }
        }
      }
    }
  })



  // redirect
  router.redirect({
    '/info': '/about',
    '/hello/:userId': '/user/:userId'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}
