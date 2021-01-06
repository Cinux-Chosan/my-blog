import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34c90548 = () => interopDefault(import('../pages/posts.vue' /* webpackChunkName: "pages/posts" */))
const _2dbe75cb = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _f515221a = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _6464cc60 = () => interopDefault(import('../pages/auth/login/index.vue' /* webpackChunkName: "pages/auth/login/index" */))
const _4e95f260 = () => interopDefault(import('../pages/edit/_id.vue' /* webpackChunkName: "pages/edit/_id" */))
const _e78dca72 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _34c90548,
    children: [{
      path: "",
      component: _2dbe75cb,
      name: "posts"
    }, {
      path: ":id",
      component: _f515221a,
      name: "posts-id"
    }]
  }, {
    path: "/auth/login",
    component: _6464cc60,
    name: "auth-login"
  }, {
    path: "/edit/:id?",
    component: _4e95f260,
    name: "edit-id"
  }, {
    path: "/",
    component: _e78dca72,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
