<template>
    <footer>
        <section class="footer">
            <div class="footer-content">
                <h2 class="footer-title">Let's Work Together</h2>
            </div>

            <div class="social-media">
                <div class="social-item">
                    <i class="fa-solid fa-at"></i>
                    <a href="mailto:heloysacarmo7@gmail.com" class="social-link">Gmail</a>
                </div>

                <div class="social-item">
                    <i class="fa-brands fa-whatsapp"></i>
                    <a href="#" class="social-link">WhatsApp</a>
                </div>
            </div>
        </section>
    </footer>

</template>

<script>
export default {
    name: "Footer",
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

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    min-height: 100vh;
    background-color: var(--antique-white);
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.footer-title {
    font-size: 7rem;
    color: var(--pale-violet-red);
    position: relative;
    margin: 0;
    line-height: 1;
}

.social-media {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
}


.social-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

i {
    padding: 12px;
    border-radius: 50%;
    background-color: var(--pale-violet-red);
    color: var(--antique-white);
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.3s ease;
}

i:hover {
    transform: scale(1.15);
    border-color: var(--pale-violet-red);
}


.social-link {
    color: var(--pale-violet-red);
    font-weight: 600;
    text-decoration: none;
}
</style>