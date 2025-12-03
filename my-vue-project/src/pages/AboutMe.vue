<template>
  <section class="container" style="padding:2rem 1rem;">
    <h1>About Me</h1>
    <p class="lead">
      Hi my name is <strong>Isis Navarro</strong>. I’m passionate about photography, creative expression, and building community through the arts. 
      I’ve been part of the Photography Club at IIT for three years serving as public relations chair for two years, where I managed outreach, branding, and event promotion. 
      This year, I’m proud to serve as President of the club. In this role, I organize headshot events, lead workshops, mentor new members, and help create a welcoming environment for students to share their artistry. 
      One of my biggest accomplishments was establishing a partnership between our club and Career Services, giving student photographers more visibility and professional opportunities. 
      Alongside photography, I’ve also gained valuable instructional experience as a Teaching Assistant, where I developed strong communication, leadership, and student support skills.
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
