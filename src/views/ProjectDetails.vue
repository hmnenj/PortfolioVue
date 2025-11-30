<template>
  <section class="details-page">
    <div class="container">

      <router-link to="/work" class="back-btn">← Voltar</router-link>

      <h1 class="title">{{ project.name }}</h1>
      <p class="description">{{ project.description }}</p>

      <div class="tags">
        <span v-for="(t, i) in project.tech" :key="i" class="tag">
          {{ t }}
        </span>
      </div>

      <div class="buttons">
        <a v-if="project.github" :href="project.github" target="_blank" class="btn github">GitHub</a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="btn demo">Demo</a>
      </div>
    </div>
  </section>
</template>

<script>
import projects from "../data/projects.js";

export default {
  name: "ProjectDetails",
  data() {
    return {
      project: null
    };
  },
  created() {
    const id = this.$route.params.id;
    this.project = projects[id];
  }
};
</script>

<style scoped>
:root {
  --tan: #d1c791;
  --champagne-pink: #f3d8ce;
  --blood: #5e1104;
  --old-moss-green: #7f8330;
  --antique-white: #ffecda;
  --licorice: #1e151c;
  --cappuccino: #59382c;
  --pale-violet-red: #c66e8c;
  --white: #ffffff;
  --black: #000000;
}

</style>
