<template> 
  <HelloWorld msg="@mfe/app2 em VUE.js" />
  <img alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin: 60px;  
}
img {
  margin: 100px 100px;
}
</style>
