// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import moment from 'moment'
import vuetify from '@/plugins/vuetify'
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)

Vue.prototype.moment = moment

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    vuetify,
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})