<template>
  <nav class="nav" role="navigation" aria-label="Main Navigation" style="background:#0f172a;color:#fff;">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;padding:.75rem 0;">
      <div style="display:flex;align-items:center;gap:.75rem;">
        <a class="brand" @click.prevent="go('/')" href="/" style="font-weight:700;font-size:1.05rem;color:inherit;">Isis Navarro</a>
        <span style="color:#94a3b8;font-size:0.85rem;">Photography & Media</span>
      </div>

      <div>
        <button class="mobile-toggle" @click="open = !open" aria-label="Toggle menu" style="display:none;">☰</button>
        <ul :style="menuStyle" class="nav-links" role="menu" aria-label="Top Navigation" >
          <li style="display:inline-block;margin-right:1rem;"><router-link to="/">About</router-link></li>
          <li style="display:inline-block;margin-right:1rem;"><router-link to="/gallery">Photography</router-link></li>
          <li style="display:inline-block;"><router-link to="/bookings">Bookings</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const open = ref(false)
    const router = useRouter()
    function go(path) { router.push(path) }
    const menuStyle = computed(() => ({ listStyle:'none', margin:0, padding:0 }))
    return { open, go, menuStyle }
  }
}
</script>

<style scoped>
.nav-links a { color:#fff; padding:0.25rem 0.5rem; }
@media (max-width:700px){
  .mobile-toggle { display:block; }
}
</style>
