import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

Vue.config.productionTip = false

Vue.component('app-header', PageHeader)
Vue.component('app-footer', PageFooter)



  new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
