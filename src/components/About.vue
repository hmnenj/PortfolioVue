<template>
    <section class="about" id="about">
        <div class="about-content">
            <h2 class="about-title">About Me</h2>
            <div class="about-me">
                <p class="about-description">
                    I'm Heloysa Assis, an 18-year-old Brazilian Technical student in Informatics for Internet. I'm
                    finishing my high school education this year at ETEC Prof. Antônio Furlan, where I gained experience
                    in full-stack development. The technologies I worked with during my course include HTML, CSS,
                    JavaScript, PHP, MySQL, and some frameworks like Bootstrap.
                    The Technical Course also provided me with knowledge in computer hardware and networks. I also had
                    the opportunity to visit companies such as Meta, HP, and Cardif, experiences that helped me
                    understand more about the corporate world.
                    My passion for technology started when I was 14, when I wrote my first Arduino codes. At the moment,
                    I’m focusing on front-end development.
                    In my free time, I enjoy watching movies and series, listening to music, and playing logical games
                    like chess and sudoku.
                </p>

                <img class="self" src="../assets/img/cat.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "About",
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

.about {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: var(--antique-white);
    text-align: center;
}

.about-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.about-title {
    font-size: 7rem;
    color: var(--pale-violet-red);
    position: relative;
    margin: 0;
    line-height: 1;
}

.about-me {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.about-description {
    font-size: 1.12rem;
    color: var(--licorice);
    max-width: 800px;
    margin-top: 30px;
    line-height: 1.5;
    text-align: justify;
    margin-right: 5%;
}

.self {
    width: 260px;
    height: 260px;
    object-fit: cover;
    border: 5px solid var(--pale-violet-red);
    border-radius: 70% 50% 70% 50% / 50% 70% 50% 70%;
    transition: 0.4s ease;
}

.self:hover {
    border-radius: 40% 60% 45% 55% / 55% 40% 60% 45%;
}
</style>