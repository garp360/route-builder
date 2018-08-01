import Vue from 'vue'
import Router from 'vue-router'
import DashboardComponent from './views/DashboardComponent.vue'
import RoutingView from './views/RoutingView.vue'
import SettingsComponent from './views/SettingsComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '/routing',
      name: 'routing',
      component: RoutingView
    },
    {
      path: '/qff',
      name: 'qff',
      component: DashboardComponent
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsComponent
    }
  ]
})
