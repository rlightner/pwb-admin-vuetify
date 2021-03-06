// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './i18n/'
import Vuetify from 'vuetify'
import axios from 'axios'
import 'vuetify/dist/vuetify.min.css'

// let token = document.getElementsByName('csrf-token')[0].getAttribute('content')

// below needed for rails to recognise request.xhr?
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// without above X-CSRF-Token token would not get sent from rails
// axios.defaults.headers.common['X-CSRF-Token'] = token
// axios.defaults.headers.common['Accept'] = 'application/json'


Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
