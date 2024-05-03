<template>
  <nav-bar-vue />
  <router-view/>
</template>

<script>
import NavBarVue from "./components/NavBar.vue"

export default ({
  components: {NavBarVue}
})
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 800px;
  margin: 0 auto;
  color: #555;
}

</style>
