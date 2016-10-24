// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
require('es6-promise').polyfill()

Vue.use(VueRouter)
const router = new VueRouter({
    history: true,
    saveScrollPosition: true
})

// configure router
configRouter(router)

// bootstrap the app
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

// just for debugging
//window.router = router

