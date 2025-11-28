<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'


export default {
  name: 'App',
  components: {
    Header,
    Hero
  }
}
</script>

<template>
  <div>
    <Header />
    <Hero />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
