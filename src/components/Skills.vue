<template>
    <section class="skills" id="skills">
        <div class="skills-content">
            <h2 class="skills-title">What I do</h2>
            <p class="skills-subtitle">Here are some of my skills</p>

            <div class="skills-group">
                <div 
                    class="skill" 
                    v-for="skill in skills" 
                    :key="skill.name" 
                    @click="openModal(skill)"
                >
                    <i :class="skill.icon"></i>
                    <p class="skill-description">{{ skill.name }}</p>
                </div>
            </div>
        </div>

        <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
            <div class="modal-box" @click.stop>
                <h3 class="skill-name">{{ selectedSkill.name }}</h3>
                <p class="skill-modal-description">{{ selectedSkill.description }}</p>
                <button class="close-btn" @click="closeModal">Close</button>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: "skills",

    data() {
        return {
            modalOpen: false,
            selectedSkill: {},

            skills: [
                { name: "HTML5", icon: "fa-brands fa-html5", description: "Markup language used to structure web pages." },
                { name: "CSS3", icon: "fa-brands fa-css3-alt", description: "Stylesheet language used to design beautiful websites." },
                { name: "JS", icon: "fa-brands fa-square-js", description: "Programming language of the web. Used for interactivity." },
                { name: "PHP", icon: "fa-brands fa-php", description: "Backend language used to build dynamic applications." },
                { name: "Node.js", icon: "fa-brands fa-node", description: "JavaScript runtime used for backend development." },
                { name: "React Native", icon: "fa-brands fa-react", description: "Framework to build native mobile apps with JS." },
                { name: "GitHub", icon: "fa-brands fa-github", description: "Platform for version control and collaboration." },
                { name: "Figma", icon: "fa-brands fa-figma", description: "Tool for UI/UX design and prototyping." }
            ]
        };
    },

    methods: {
        openModal(skill) {
            this.selectedSkill = skill;
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        }
    }
};
</script>


<style >
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

.skills {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--pale-violet-red);
    text-align: center;
}

.skills-content {
    max-width: 1200px;
    width: 100%;
}

.skills-title {
    font-size: 6rem;
    font-weight: bold;
    color: var(--antique-white);
    margin-bottom: 5px;
}

.skills-subtitle {
    font-size: 1.6rem;
    color: var(--antique-white);
}

.skills-group {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    width: 100%;
    padding: 20px;
}

.skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: pointer;
}

.skill i {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    background-color: var(--antique-white);
    color: var(--pale-violet-red);
    border-radius: 50%;
    padding: 10px;

}

.skill-description {
    font-size: 1.3rem;
    color: var(--antique-white);
    font-weight: 600;
}

.skill-modal-description {
    font-size: 1.1rem;
    color: var(--cappuccino);
}

.skill:hover {
    transform: translateY(-5px);
}

.skill:hover i {
    background: var(--champagne-pink);
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease;
}

.modal-box {
    background: var(--antique-white);
    padding: 30px;
    border-radius: 15px;
    width: 400px;
    max-width: 85%;
    text-align: center;
    animation: slideUp 0.3s ease;
}

.skill-name {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--pale-violet-red);
}

.close-btn {
    margin-top: 20px;
    padding: 8px 20px;
    background: var(--pale-violet-red);
    color: white;
    border: 2px solid var(--pale-violet-red);
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
}

.close-btn:hover {
    background: transparent;
    color: var(--pale-violet-red);
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        transform: translateY(40px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}
</style>
