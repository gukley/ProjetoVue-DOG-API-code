<template>
  <div class="favorites">
    <h2>🐾 Meus Favoritos</h2>

    <div v-if="favorites.length === 0" class="empty">
      Nenhuma imagem favoritada ainda.
    </div>

    <div v-else>
    <div class="image-grid">
      <DogCard
        v-for="img in paginatedFavorites"
        :key="img"
        :image="img"
      />
    </div>

    <Pagination
      :current-page="favoritePage"
      :total-pages="totalPagesFavorites"
      @prev="store.prevFavoritePage"
      @next="store.nextFavoritePage"
      @go-to="store.goToFavoritePage"
    />
  </div>
  </div>
</template>

<script setup>
import { useDogStore } from '@/stores/dogStore'
import { storeToRefs } from 'pinia'
import DogCard from '@/components/DogCard.vue'
import Pagination from '@/components/Pagination.vue'

const store = useDogStore()
const { 
  favorites,
  paginatedFavorites,
  favoritePage,
  totalPagesFavorites
} = storeToRefs(store)

</script>

<style scoped>
.favorites {
  padding: 1.1rem;
}

h2 {
  margin-bottom: 1.3rem;
  color: #333;
}

.empty {
  color: #7777779f;
  font-style: italic;
  margin-top: 2rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  gap: 1rem;
}
</style>
