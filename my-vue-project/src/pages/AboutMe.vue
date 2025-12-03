<template>
  <section class="container" style="padding:2rem 1rem;">
    <h1>About Me</h1>
    <p class="lead">
      Hi my name is <strong>Isis Navarro</strong>. I'm passionate about photography and creative expression.
      I served as a Media TA for <strong>2 years</strong>, and last year I was Lead Media TA where I photographed the Exelon Summer Institute and coordinated weekly classes on topics like lighting, composition, and post-processing.
    </p>

    <div style="background:#f8fafc;padding:1rem;border-radius:10px;margin-top:1rem;">
      <h2>Experience Highlights</h2>
      <ul>
        <li>Media TA — 2 years: assisting classes, managing equipment, and mentoring students.</li>
        <li>Lead Media TA — 1 year: organized weekly lessons, scheduled shoots, coordinated with Exelon staff, and led team workflows.</li>
        <li>Event Photography: Exelon Summer Institute, campus events, workshops, and student portrait sessions.</li>
      </ul>
    </div>

    <div style="margin-top:1.25rem;">
      <router-link class="btn" to="/gallery">See my work</router-link>
      <router-link class="btn btn-outline" to="/bookings" style="margin-left:0.6rem;">Book a session</router-link>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
h1 { margin:0 0 0.5rem 0; }
</style>
