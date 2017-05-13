{{#axios}}
import axios from 'axios'
{{/axios}}

import {
    Vue,
    Mix,
    prop,
    Mixin,
    watch,
    state,
    getter,
    action,
    filter,
    mutation,
    resultOf,
    lifecycle,
    Component,
} from 'vue-typescript-decorators'

{{#axios}}
axios.defaults.headers.common = {
    "X-Requested-With": "XMLHttpRequest"
};
{{/axios}}

global.Vue       = Vue
global.Mix       = Mix
global.prop      = prop
global.Mixin     = Mixin
global.watch     = watch
global.state     = state
global.getter    = getter
global.action    = action
global.filter    = filter
global.mutation  = mutation
global.resultOf  = resultOf
global.lifecycle = lifecycle
global.Component = Component
