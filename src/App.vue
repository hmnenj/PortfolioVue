<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    About
  }
}
</script>

<template>
  <div>
    <Header />
    <Hero />
    <About />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
}
</style>
