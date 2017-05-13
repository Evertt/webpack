import '../../src/bootstrap.js'
import store from '../../src/store'
import router from '../../src/router'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.config.productionTip = false

export default function makeComponent(component: Vue): Vue {
    const Constructor = Vue.extend(component)

    return new Constructor({
      router, store
    }).$mount()
}
