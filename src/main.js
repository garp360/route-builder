import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import 'vuetify/dist/vuetify.min.css'
import "../node_modules/ag-grid/dist/styles/ag-grid.css"
import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css"

Vue.use(Vuetify, Vuelidate, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
