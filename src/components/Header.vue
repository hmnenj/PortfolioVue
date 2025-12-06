<template>
  <header class="header">
    <nav class="navbar">
      <h1 class="logo">MyPortfolio</h1>

      <ul class="nav-menu">

        <template v-if="isWorkPage">
          <li>
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
        </template>

        <template v-else>
          <li><router-link class="nav-link" to="/" @click.native="scrollTop">
              Home
            </router-link>

          </li>
          <li><a class="nav-link" href="#about">About</a></li>
          <li><a class="nav-link" href="#skills">Skills</a></li>
          <li><router-link class="nav-link" to="/work">Work</router-link></li>
        </template>

      </ul>

      <button class="menu-btn" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </nav>

    <ul class="mobile-menu" :class="{ open: menuOpen }">

      <template v-if="isWorkPage">
        <li>
          <router-link class="nav-link" to="/" @click="toggleMenu">Home</router-link>
        </li>
      </template>

      <template v-else>
        <li><router-link class="nav-link" to="/" @click="toggleMenu">Home</router-link></li>
        <li><a class="nav-link" href="#about" @click="toggleMenu">About</a></li>
        <li><a class="nav-link" href="#skills" @click="toggleMenu">Skills</a></li>
        <li><router-link class="nav-link" to="/work" @click="toggleMenu">Work</router-link></li>
      </template>

    </ul>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      menuOpen: false,
    }
  },

  computed: {
    isWorkPage() {
      return this.$route.path === "/work"
    }
  },

  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

}


</script>


<style>
* {
  font-family: 'Poppins', sans-serif;
}

body {
  margin-top: 80px;
}

a,
ul {
  text-decoration: none;
  list-style: none;
}

:root {
  --tan: #d1c791;
  --champagne-pink: #f3d8ce;
  --blood: #5e1104;
  --old-moss-green: #7f8330;
  --antique-white: #ffecda;
  --licorice: #1e151C;
  --cappuccino: #59382C;
  --pale-violet-red: #C66E8C;
  --white: #ffffff;
  --black: #000000;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--pale-violet-red);
  padding: 10px 0;
  z-index: 999;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}

.logo {
  font-size: 2rem;
  color: var(--antique-white);
  user-select: none;
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  position: relative;
  color: var(--antique-white);
  padding: 10px 5px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: var(--antique-white);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.menu-btn {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 6px;
  background: none;
  border: none;
}

.bar {
  width: 28px;
  height: 3px;
  background: var(--antique-white);
  border-radius: 4px;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  background: var(--pale-violet-red);
  width: 100%;
  padding: 20px 0;
  gap: 15px;
  text-align: center;
}

.mobile-menu.open {
  display: flex;
}

@media (max-width: 900px) {
  .header {
    width: 100%;
  }
  .nav-menu {
    display: none;
  }

  .menu-btn {
    display: flex;
  }
}

@media (max-width: 648px) {
  .header {
    width: 100%;
  }
  .nav-menu {
    display: none;
  }

  .menu-btn {
    display: flex;
  }
}
</style>
