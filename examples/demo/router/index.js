import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Editor from '../src/page/editor.vue'

Vue.use(Router)
Vue.use(VueResource)

const routes = [
  { path: '/editor', component: Editor },
]

export default new Router({
  mode: 'history',
  routes: routes
})
