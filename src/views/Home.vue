<template>
  <div>
    <Hero />
    <About />
    <Skills />
    <Footer />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue"
import About from "../components/About.vue"
import Skills from "../components/Skills.vue"
import Footer from "../components/Footer.vue"

export default {
  components: { Hero, About, Skills, Footer }
}
</script>
