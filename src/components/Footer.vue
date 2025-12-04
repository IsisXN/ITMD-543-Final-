<template>
  <footer style="border-top:1px solid #eee;padding:1rem 0;margin-top:2rem;">
    <div class="container" style="text-align:center;color:#6b7280;">
      © {{ year }} Isis Navarro - Photography & Media
    </div>
  </footer>
</template>

<script>
export default {
  data() { return { year: new Date().getFullYear() } }
}
</script>

<style scoped></style>
