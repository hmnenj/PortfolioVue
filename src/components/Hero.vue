<template>
  <section class="hero" id="hero">
    <div class="hero-content">
      <h1 class="hero-title">portfolio</h1>

      <p class="hero-subtitle">Heloysa Assis</p>

      <div class="social-media">
        <div class="social-item">
          <i class="fa-brands fa-linkedin-in"></i>
          <a href="#" class="social-link">LinkedIn</a>
        </div>

        <div class="social-item">
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/hmnenj" class="social-link">GitHub</a>
        </div>

        <div class="social-item">
          <i class="fa-brands fa-x-twitter"></i>
          <a href="#" class="social-link">Twitter</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
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

body {
  margin-top: 80px;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 20px;
  background-color: var(--pale-violet-red);
  text-align: center;
}

.hero-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-title {
  font-size: 9rem;
  color: var(--antique-white);
  margin: 0;
  line-height: 1;
}

.hero-subtitle {
  font-family: "Pinyon Script", cursive;
  font-weight: 500;
  font-size: 4rem;
  color: var(--cappuccino);

  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);

  white-space: nowrap;
}

.social-media {
  display: flex;
  gap: 2rem;
  margin-top: 4rem;
}

.social-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

i {
  padding: 10px;
  border-radius: 50%;
  background-color: var(--antique-white);
  color: var(--pale-violet-red);
  font-size: 1.3rem;
  cursor: pointer;
}

.social-link {
  color: var(--antique-white);
  font-weight: 600;
  text-decoration: none;
  transition: color .3s ease;
}

.social-link:hover {
  color: var(--cappuccino);
}


@media (max-width: 992px) {

  .hero-title {
    font-size: 8rem;
  }

  .hero-subtitle {
    font-size: 3rem;
    top: 22%;
  }

  .social-media {
    margin-top: 3rem;
    gap: 1.5rem;
  }

  i {
    font-size: 1.1rem;
    padding: 8px;
  }

  .social-link {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {

  .hero-title {
    font-size: 5.5rem;
  }

  .hero-subtitle {
    font-size: 3.5rem;
    top: 5%;
  }

  .social-media {
    flex-direction: column;
    margin-top: 2.5rem;
    gap: 1.2rem;
  }

  .social-item {
    justify-content: center;
  }

  i {
    font-size: 1rem;
    padding: 8px;
  }

  .social-link {
    font-size: 0.95rem;
  }
}
</style>
