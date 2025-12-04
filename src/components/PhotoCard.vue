<template>
  <figure class="photo-card" tabindex="0" role="button" @click="$emit('open', photo)" @keyup.enter="$emit('open', photo)">
    <img :src="photo.src" :alt="photo.title" loading="lazy" />
    <figcaption class="caption">
      <h3>{{ photo.title }}</h3>
      <p class="desc">{{ photo.description }}</p>
    </figcaption>
  </figure>
</template>

<script>
export default {
  props: { photo: { type: Object, required: true } }
}
</script>

<style scoped>
.photo-card {  width: 100%;
  max-width: 260px; /* keeps portrait ratio clean */position:relative; overflow:hidden; border-radius:10px; cursor:pointer; box-shadow: 0 8px 20px rgba(2,6,23,0.04); background:#fff; }
.photo-card img {
  width:100%;
  height:340px; /* taller = portrait shape */
  object-fit:cover;
  display:block;
  transition: transform .3s ease, filter .3s ease;
}
.caption { position:absolute; left:0; right:0; bottom:0; padding:0.75rem; transform: translateY(100%); transition: transform .22s ease; background: linear-gradient(transparent, rgba(0,0,0,0.55)); color:#fff; }
.caption h3 { margin:0; font-size:1rem; }
.caption { 
  position: absolute; 
  left: 0; right: 0; bottom: 0; 
  padding: 0.75rem; 
  transform: translateY(100%); 
  transition: transform .22s ease; 
  background: linear-gradient(transparent, rgba(0,0,0,0.55)); 
  color: #fff; 
}
.photo-card:hover img, .photo-card:focus img { filter: brightness(0.6); transform: scale(1.03); }
.photo-card:hover .caption, .photo-card:focus .caption { transform: translateY(0%); }
.photo-card:focus { outline: 3px solid #ffb703; }
</style>
