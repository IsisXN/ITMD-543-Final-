<template>
  <section class="container" style="padding:2rem 1rem;">
    <h1>Photography</h1>

    <div style="margin:0.75rem 0;display:flex;gap:.5rem;align-items:center;flex-wrap:wrap;">
      <input 
        v-model="query" 
        placeholder="Search by title or tag" 
        aria-label="Search photos" 
        style="max-width:360px;padding:.55rem;border-radius:8px;border:1px solid #e5e7eb;" 
      />

      <select 
        v-model="tagFilter" 
        style="padding:.55rem;border-radius:8px;border:1px solid #e5e7eb;"
      >
        <option value="">All tags</option>
        <option v-for="t in tags" :key="t" :value="t">{{ t }}</option>
      </select>
    </div>

    <!-- GRID LAYOUT (4x5 portrait) -->
    <div class="photo-grid">
      <PhotoCard 
        v-for="p in filtered" 
        :key="p.id" 
        :photo="p" 
        @open="openModal" 
      />
    </div>

    <PhotoModal 
      v-if="selected" 
      :photo="selected" 
      @close="selected = null" 
    />
  </section>
</template>

<script>
import { ref, computed } from 'vue'
import PhotoCard from '../components/PhotoCard.vue'
import PhotoModal from '../components/PhotoModal.vue'
import photos from '../assets/photos.json'

export default {
  components: { PhotoCard, PhotoModal },
  setup() {
    const query = ref('')
    const tagFilter = ref('')
    const selected = ref(null)

    function openModal(photo) {
      selected.value = photo
    }

    const tags = Array.from(new Set(photos.flatMap(p => p.tags || [])))

    const filtered = computed(() => {
      const q = query.value.trim().toLowerCase()
      return photos.filter(p => {
        const matchesQuery =
          q === '' ||
          p.title.toLowerCase().includes(q) ||
          (p.description && p.description.toLowerCase().includes(q)) ||
          (p.tags && p.tags.join(' ').toLowerCase().includes(q))

        const matchesTag = !tagFilter.value || (p.tags || []).includes(tagFilter.value)

        return matchesQuery && matchesTag
      })
    })

    return { query, tagFilter, tags, filtered, selected, openModal }
  }
}
</script>

<style scoped>
/*  4×5 PORTRAIT GRID */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  justify-items: center;
}
</style>
