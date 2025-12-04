<template>
  <nav class="nav" role="navigation" aria-label="Main Navigation">
    <div class="nav-container">
      
      <!-- Brand -->
      <router-link to="/" class="brand">
        Isis Navarro <span class="subtext">Photography & Media</span>
      </router-link>

      <!-- Mobile Toggle -->
      <button class="mobile-toggle" @click="open = !open" aria-label="Toggle menu">☰</button>

      <!-- Navigation Links -->
      <ul :class="['nav-links', { open }]" role="menu" aria-label="Top Navigation">
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/gallery">Photography</router-link></li>
        <li><router-link to="/bookings">Bookings</router-link></li>
      </ul>

    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const open = ref(false);
    return { open };
  },
};
</script>

<style scoped>
/*  Fixed Navbar */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #2b0d3f; /* deep purple */
  color: #fff;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.35);
}

/*  Wider, clean layout with spacing from screen edge */
.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand button */
.brand {
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.brand:hover {
  background: #7b3fa6; /* same purple as Submit button */
}

.subtext {
  font-size: 0.9rem;
  font-weight: 400;
  color: #d7b8f1;
}

/* Nav links with purple button styling */
.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 1rem;
}

.nav-links li a {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: #7b3fa6; /* same purple as Submit Booking */
  color: #f0f0f0;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
}

.nav-links li a:hover {
  background: #9b5fc0; /* lighter hover purple */
}

/* Mobile Button */
.mobile-toggle {
  display: none;
  background: none;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
}

/* Mobile Navigation */
@media (max-width: 700px) {
  .mobile-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    right: 0;
    background: #2b0d3f;
    flex-direction: column;
    padding: 1rem;
    gap: 0.75rem;
    display: none;
    width: 200px;
    border-radius: 0 0 0 10px;
  }

  .nav-links.open {
    display: flex;
  }
}
</style>
