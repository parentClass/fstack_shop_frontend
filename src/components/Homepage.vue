<template>
  <v-container>
    <v-row>
      <v-col cols="6" justify-align-center align-self-center>
        <h1 class="display-1 white--text">
          $.Navigation
        </h1>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="white--text title">
              <router-link to="/orders">
                /orders - Orders page
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <p class="white--text subtitle">
          &emsp;&emsp;-> List of all customer order<br/>
          &emsp;&emsp;-> Search by part of the order, product name<br/>
          &emsp;&emsp;-> Filter order by date range<br/>
          &emsp;&emsp;-> Maximum 5 orders per page<br/>
          &emsp;&emsp;-> Switch between pages<br/>
          &emsp;&emsp;-> Data to be display<br/>
          &emsp;&emsp;&emsp;  # Order name<br/>
          &emsp;&emsp;&emsp;  # Customer Company name<br/>
          &emsp;&emsp;&emsp;  # Customer name<br/>
          &emsp;&emsp;&emsp;  # Order date<br/>
          &emsp;&emsp;&emsp;  # Delivered amount (dash if nothing is delivered)<br/>
          &emsp;&emsp;&emsp;  # Total amount<br/>
        </p>
        <h1 class="display-1 white--text">
          $.Links
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* pass */
</style>
