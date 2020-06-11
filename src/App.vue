<template>
  <v-app>
    <div id="app">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(2,2,27,1) 35%, rgba(19,42,47,1) 100%);
}
</style>
