import './bootstrap.js'
import App from './App.vue'
{{#vuex}}
import store from './store'
{{/vuex}}
{{#router}}
import router from './router'
{{/router}}

{{#if_and vuex router}}
sync(store, router)
{{/if_and}}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  {{#router}}router, {{/router}}{{#vuex}}store, {{#vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
})
