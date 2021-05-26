<template>
  <div id="app">
    <!--
    <img alt="Vue logo" src="./assets/logo.png">
    -->
    <NavMenu msg="Строка меню"/>
    <SettingsPage msg="Строка меню"/>
    <!--HelloWorld msg="Welcome to Your Vue.js App"/-->
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
import SettingsPage from './components/Settings.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    NavMenu,
    SettingsPage,
    //,     HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
