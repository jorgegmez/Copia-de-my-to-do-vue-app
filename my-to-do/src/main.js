// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Styles
import './assets/app-styles.css'

// Componentes
import AddTask from '@/components/AddTask/AddTask'
import Tasks from '@/components/Tasks/Tasks'

Vue.component('addTasks', AddTask)
Vue.component('tasks', Tasks)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
