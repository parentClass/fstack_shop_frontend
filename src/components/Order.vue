<template>
  <v-container class="table_container">
      <v-layout align-center justify-center column>
          <v-flex>
            <h6 class="display-3 white--text mb-5">
              Orders
            </h6>
          </v-flex>
          <v-flex lg8>
              <v-card dark>
                <v-card-title>
                    <v-menu
                      ref="menu"
                      v-model="modal"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dates"
                          label="Created date"
                          prepend-icon="event"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                          single-line
                          hide-details
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="dates" no-title scrollable range>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn text color="primary" @click="modal = false">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>
                    <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                    dark
                    :loading="checkStatusLoading"
                    :headers="headers"
                    :items="orders"
                    :search="search"
                    :items-per-page=5
                    :footer-props="{
                      showFirstLastPage: true,
                      firstIcon: 'mdi-arrow-collapse-left',
                      lastIcon: 'mdi-arrow-collapse-right',
                      prevIcon: 'mdi-minus',
                      nextIcon: 'mdi-plus'
                    }"
                >
                  <template v-slot:body="{ items }">
                    <tbody>
                      <tr v-for="item in items" :key="item.id">
                        <td class="px-5 py-3">
                          {{ item.order_name }} <br/>
                          {{ item.product }}
                        </td>
                        <td>
                          {{ item.customer[0].customer_company[0].company_name }}
                        </td>
                        <td>
                          {{ item.customer[0].name }}
                        </td>
                        <td>
                          {{ moment(item.created_at).format('MMM Do, h:mm A') }}
                        </td>
                        <td>
                          <template v-if="item.delivered_quantity > 0">
                            {{ item.delivered_amount | currency }}
                          </template>
                          <template v-else>
                            -
                          </template>
                        </td>
                        <td>
                          {{ item.total_amount | currency }}
                        </td>
                      </tr>
                      <tr>
                        <td colspan=4></td>
                        <td>
                          Total amount: 
                        </td>
                        <td>
                          {{ computeTotalAmount | currency }}
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-data-table>
                </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
// Import vuex for store related processes
import { mapState, mapActions } from 'vuex'
  export default {
    data () {
      return {
        modal: false, // Binding for modal
        dates: [], // Binding for date range
        search: '' // Binding for search
      }
    },
    computed: {
      // Map state from store
      ...mapState({
        // Order state from store
        orders: state => state.order.orders
      }),
      // Computed headers
      headers () {
        return [
          {
            text: 'Order name',
            filterable: true,
            align: 'start',
            value: 'order_name'
          },
          {
            text: '',
            value: 'product',
            align: ' d-none'
          },
          {
            text: 'Customer Company',
            sortable: false,
            value: 'orders'
          },
          {
            text: 'Customer name',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Order date',
            sortable: true,
            value: 'created_at',
            filter: value => {
              // Check dates length
              if (this.dates.length <= 1) return true
              // Return result of range checking using moment
              return this.moment(value, "YYYY/MM/DD").isBetween(this.moment(this.dates[0], "YYYY/MM/DD"), this.moment(this.dates[1], "YYYY/MM/DD"))
            }
          },
          {
            text: 'Delivered Amount',
            filterable: true,
            value: 'delivered_amount'
          },
          {
            text: 'Total Amount',
            filterable: true,
            value: 'total_amount'
          },
        ]
      },
      // Compute for total amount
      computeTotalAmount() {
        // Total holder
        let t = 0
        // Loop through orders
        this.orders.filter(v => t += v.total_amount)
        // Return total
        return t
      },
      // Check loading
      checkStatusLoading() {
        // Check orders object length
        if (this.orders.length == 0) return true
        // False when orders > 0
        return false
      }
    },
    methods: {
      // Map store actions
      ...mapActions(['getOrders']),
      // Local component method for get orders
      getCustomerOrders(){
        // Async process of get orders
        this.getOrders()
      }
    },
    created () {
      // Get customer orther methods
      this.getCustomerOrders()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table_container{
    padding-top: 5vh;
  }
</style>
