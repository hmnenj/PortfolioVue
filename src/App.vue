<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue"

export default {
  components: { Header }
}
</script>


<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.soft-slide-enter-active,
.soft-slide-leave-active {
  transition: all .5s cubic-bezier(.4, 0, .2, 1);
}

.soft-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.soft-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
