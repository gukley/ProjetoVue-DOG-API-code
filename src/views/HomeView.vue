<template> 
  <div class="home"> 
    <select v-model="selectedBreed" @change="loadImages" class="breed-select"> 
      <option disabled value="">Escolha uma raça</option>
      <option v-for="breed in breeds" :key="breed">{{ breed }}</option>            
    </select>
    <div class="image-grid"> 
      <DogCard v-for="img in paginatedImages" :key="img" :image="img" />
    </div>

    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @prev="store.prevPage"
      @next="store.nextPage"
      @go-to="store.goToPage"
      />
  </div>
</template>

<script setup> 
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useDogStore } from '@/stores/dogStore'
import DogCard from '@/components/DogCard.vue'
import Pagination from '@/components/Pagination.vue';

const store = useDogStore()
const { breeds, paginatedImages, totalPages, currentPage } = storeToRefs(store)

const selectedBreed = ref('')

onMounted(() => store.fetchBreeds())

const loadImages = () => { 
  if (selectedBreed.value) store.fetchImages(selectedBreed.value)
}
</script>

<style scoped> 
.home { 
  padding: 1rem;
}

.breed-select { 
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 300px;
}

.image-grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1rem;
}
</style>
