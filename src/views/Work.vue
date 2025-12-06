<template>
  <section class="projects-page">
    <ProjectsList />
  </section>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";

export default {
  name: "Work",
  components: { ProjectsList }
}
</script>

<style>
body {
  padding: 2rem 0 0;
}
</style>