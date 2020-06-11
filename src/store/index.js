import Vue from 'vue'
import Vuex from 'vuex'

/**
 * modules import
 */
import order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        order
    }
})