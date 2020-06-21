import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72f8c000 = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _ddcfb2fa = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _2e73edab = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _7b0fd118 = () => interopDefault(import('../pages/edit/_id.vue' /* webpackChunkName: "pages/edit/_id" */))
const _1df3b57f = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/posts",
    component: _72f8c000,
    children: [{
      path: "",
      component: _ddcfb2fa,
      name: "posts"
    }, {
      path: ":id",
      component: _2e73edab,
      name: "posts-id"
    }]
  }, {
    path: "/edit/:id?",
    component: _7b0fd118,
    name: "edit-id"
  }, {
    path: "/",
    component: _1df3b57f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
