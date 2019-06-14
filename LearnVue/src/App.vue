<template>
  <div id="app">
    <div>
      <router-link class="button" to="/vue">VUE基础核心学习</router-link>
      <router-link class="button" to="/elui">Element-UI学习</router-link>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
