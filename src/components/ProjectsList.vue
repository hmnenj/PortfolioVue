<template>
    <section class="projects" id="projects">
        <h2 class="projects-title">Projects</h2>
        <div class="projects-grid">
            <ProjectCard v-for="project in projects" :key="project.name" :project="project" />
        </div>
    </section>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.js";

export default {
    name: "ProjectsList",
    components: { ProjectCard },

    data() {
        return {
            projects
        };
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

.projects {
    min-height: 100vh;
    background-color: var(--pale-violet-red);
    text-align: center;
    padding: 2rem;
}

.projects-title {
    font-size: 5rem;
    color: var(--antique-white);
}

.projects-grid {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
}
</style>
