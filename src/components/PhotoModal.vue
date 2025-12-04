<template>
  <div class="modal" role="dialog" aria-modal="true" @keydown.escape="$emit('close')">
    <div class="overlay" @click="$emit('close')"></div>
    <div class="content" role="document">
      <button class="close" @click="$emit('close')" aria-label="Close">✕</button>
      <img :src="photo.src" :alt="photo.title" />
      <h2>{{ photo.title }}</h2>
      <p>{{ photo.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { photo: { type: Object, required: true } }
}
</script>

<style scoped>
.modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; z-index:9999; }
.overlay { position:absolute; inset:0; background:rgba(0,0,0,0.5); }
.content { position:relative; z-index:2; background:#fff; padding:1rem; border-radius:10px; max-width:900px; width:92%; max-height:90vh; overflow:auto; }
.content img { max-width:100%; height:auto; margin-bottom:0.5rem; border-radius:6px; display:block; }
.close { position:absolute; right:.5rem; top:.5rem; border:none; background:transparent; font-size:1.2rem; cursor:pointer; }
</style>
