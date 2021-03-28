import Vue from 'vue'
import App from './components/App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import ApiService from './api/api'

Vue.config.productionTip = false

ApiService.init();

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
