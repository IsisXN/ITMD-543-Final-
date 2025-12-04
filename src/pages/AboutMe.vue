<template>
  <section class="container" style="padding:2rem 1rem;">

    <!-- About Me Section -->
    <div style="background:#2b0d3f;padding:1rem;border-radius:10px;margin-top:1rem;color:#f0f0f0;">
      <h1>About Me</h1>
      <p class="lead">
        Hi my name is <strong>Isis Navarro</strong>. I’m passionate about photography, creative expression, and building community through the arts. 
        I’ve been part of the Photography Club at IIT for three years serving as public relations chair for two years. 
        This year, I’m proud to serve as President of the club. And help create a welcoming environment for students to share their artistry. 
        One of my biggest accomplishments was establishing a partnership between our club and Career Services, giving student photographers more visibility and professional opportunities. 
        Alongside photography, I’ve also gained valuable instructional experience as a Teaching Assistant, where I developed strong communication, leadership, and student support skills.
      </p>
    </div>

    <!-- Experience Highlights -->
    <div style="background:#3d1a5a;padding:1rem;border-radius:10px;margin-top:1rem;color:#f0f0f0;">
      <h2>Experience Highlights</h2>
      <ul>
        <p class="lead"><strong>Photography Club President</strong></p>
        <li>Manage partnerships with campus departments including Career Services and external collaborators to expand event opportunities and increase club resources.</li>
        <li>Develop annual programming goals, budgets, and event calendars to boost member engagement and strengthen the club’s campus presence.</li>
        <li>Lead organizational strategy, oversee daily operations, and coordinate major events, exhibitions, and workshops.</li>
        <li>Mentor new members and guide the PR, events, and outreach teams to maintain a welcoming, creative environment.</li>

        <p class="lead"><strong>Lead Teaching Assistant, Exelon Summer Institute</strong></p>
        <li>Taught foundational media and photography lessons to incoming students, providing hands-on creative instruction.</li>
        <li>Supervised and managed a team of photographers responsible for producing headshots, sponsor content, and event coverage.</li>
        <li>Facilitated labs, guided student projects, and held office hours to support student success and skill development.</li>

        <p class="lead"><strong>Teaching Assistant, Exelon Summer Institute</strong></p>
        <li>Assisted with delivering media, photography, and digital literacy lessons to students transitioning into college.</li>
        <li>Provided support with camera operations, lighting, editing basics, and classroom activities.</li>
        <li>Helped capture event photography and assisted in producing high-quality digital content for program partners.</li>
      </ul>
    </div>

    <!-- Contact Section -->
    <div style="background:#4e2b73;padding:1rem;border-radius:10px;margin-top:1rem;color:#f0f0f0;">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:inavarro1@hawk.illinoistech.edu" style="color:#f0f0f0;">inavarro1@hawk.illinoistech.edu</a></p>
      <p>Photography Club Instagram:  
        <a href="https://www.instagram.com/iitphotographyclub/" target="_blank" style="color:#f0f0f0;">@iitphotographyclub</a>
      </p>
      <p>LinkedIn:  
        <a href="https://www.linkedin.com/in/isis-x-navarro-517089246/" target="_blank" style="color:#f0f0f0;">linkedin.com/in/isis-x-navarro-517089246</a>
      </p>
    </div>

    <!-- Buttons -->
    <div style="margin-top:1.25rem;">
      <router-link class="btn-primary" to="/gallery">See My Work</router-link>
      <router-link class="btn-primary" to="/bookings" style="margin-left:0.6rem;">Book a Session</router-link>
    </div>

  </section>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
/* 🎨 Button styling EXACTLY matching "Submit Booking" button */
.btn-primary {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background-color: #7b3fa6; /* deep purple - same as booking button */
  color: #f0f0f0;
  font-weight: bold;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #9b5fc0; /* hover color same as booking button */
}

/* Spacing */
.lead {
  margin-bottom: 0.8rem;
}

ul {
  margin-left: 1.2rem;
}
</style>
