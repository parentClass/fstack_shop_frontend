/**
 * Order store module
 */
import axios from 'axios'

import { order } from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
    orders: [],
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
    /**
     * Get orders
     * @param context
     */
    getOrders: async(context) => {
        try {
            let resp = await axios.get(order.getOrders)
            if (!resp.data) {
                context.commit('setOrders', [])
                return
            }
            context.commit('setOrders', resp.data)
        } catch (error) {
            context.commit('setOrders', [])
        }
    }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
    /**
     * Set store state
     * @param state
     * @param data
     */
    setOrders: (state, data) => {
        state.orders = data
    }
}

export default { state, actions, mutations }