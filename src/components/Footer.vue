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

footer {
    width: 100%;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    min-height: 80vh;
    background-color: var(--antique-white);
    flex-wrap: wrap; 
}

.footer-content {
    display: flex;
    flex-direction: column;
}

.footer-title {
    font-size: 5rem;
    color: var(--pale-violet-red);
    margin: 0;
    line-height: 1.1;
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
    gap: 0.7rem;
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
}

.social-link {
    color: var(--pale-violet-red);
    font-weight: 600;
    text-decoration: none;
}


@media (max-width: 992px) {
    .footer {
        padding: 40px 6%;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }

    .footer-title {
        font-size: 4rem;
        text-align: center;
    }

    .social-media {
        text-align: center;
    }

    .social-item {
        justify-content: center;
    }
}

@media (max-width: 600px) {
    .footer-title {
        font-size: 3rem;
    }

    .social-media {
        gap: 1.5rem;
    }

    i {
        font-size: 1.2rem;
        padding: 10px;
    }

    .social-link {
        font-size: 1rem;
    }
}
</style>
