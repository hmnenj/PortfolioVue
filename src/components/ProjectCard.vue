<template>
    <div class="project-card">
        <h3 class="project-title">{{ project.name }}</h3>
        <p class="project-description">{{ project.description }}</p>

        <div class="tags">
            <span class="tag" v-for="(tech, index) in project.tech" :key="index">
                {{ tech }}
            </span>
        </div>

        <div class="links">
            <a :href="project.github" target="_blank" class="btn">GitHub</a>

            <a v-if="project.demo" :href="project.demo" target="_blank" class="btn demo">
                Demo
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
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

.project-card {
    background-color: var(--antique-white);
    padding: 1.8rem;
    border-radius: 20px;
    width: 100%;
    max-width: 350px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform .3s ease, box-shadow .3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.20);
}

.project-title {
    font-size: 1.6rem;
    color: var(--pale-violet-red);
    margin: 0;
}

.project-description {
    color: var(--cappuccino);
    font-size: 1rem;
    line-height: 1.4;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
}

.tag {
    background-color: var(--pale-violet-red);
    color: var(--antique-white);
    padding: 0.25rem 0.7rem;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 600;
}

.links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.btn {
    text-decoration: none;
    background-color: var(--pale-violet-red);
    border: 2px solid var(--pale-violet-red);
    padding: .5rem 1rem;
    border-radius: 12px;
    color: var(--antique-white);
    font-weight: 600;
    transition: background .3s;
    flex: 1;
    text-align: center;
}

.btn:hover {
    background-color: transparent;
    color: var(--pale-violet-red);
}

.demo {
    background-color: var(--cappuccino);
    border: 2px solid var(--cappuccino);
}

.demo:hover {
    background-color: transparent;
    color: var(--cappuccino);
}

@media (max-width: 480px) {
    .project-card {
        padding: 1.3rem;
        max-width: 100%;
    }

    .project-title {
        font-size: 1.4rem;
    }

    .project-description {
        font-size: 0.9rem;
    }

    .btn {
        padding: 0.45rem 0.8rem;
        font-size: 0.9rem;
    }
}
</style>
