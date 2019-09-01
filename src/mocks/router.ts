import { VueConstructor } from 'vue'
import VueRouter from 'vue-router'

export default function createRouter(Vue?: VueConstructor) {
  if (Vue) Vue.use(VueRouter)
  return new VueRouter({
    routes: [
      {
        path: '/',
        name: 'index',
        meta: { title: 'Vue Hooks' }
      },
      {
        path: '*',
        name: '404',
        meta: { title: '404 - Not Found' }
      }
    ]
  })
}
