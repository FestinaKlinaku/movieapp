<template>
  <div id="app">
    <Header :title="title"/>
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      title: "MovieApp",
    }
  },
  components: {
    Header
  }
}
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: white;
    background: #111;
  }
</style>
