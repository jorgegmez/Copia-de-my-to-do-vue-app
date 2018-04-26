import Vue from 'vue'
import Router from 'vue-router'
import AddTask from '@/components/AddTask/AddTask'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddTask',
      component: AddTask
    }
  ]
})
