<template> 
    <div class="card"> 
        <img :src="image" class="dog-image" />
        <button @click="toggle" class="favorite-button"> 
            {{ isFav ? 'Remover' : 'Favoritar' }}
        </button>
    </div>
</template>

<script setup> 
import { computed } from 'vue';
import { useDogStore } from '@/stores/dogStore';

const props = defineProps(['image']);
const store = useDogStore();

const isFav = computed(() => store.isFavorite(props.image));
const toggle = () => store.toggleFavorite(props.image);
</script>


<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

.card { 
  padding: 0.5rem; 
  border: 1px solid #A67843; 
  border-radius: 8px;
  box-shadow: 2px 2px 6px #4B3B2B40; 
  transition: transform 0.2s;
  background-color: #F5EBDD; 
  color: #4B3B2B; 
}

.card:hover { 
  transform: scale(1.03);
  box-shadow: 4px 4px 12px #4B3B2B60; 
}

.dog-image { 
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  border: 2px solid #8FAF65; 
}

.favorite-button { 
  width: 100%;
  margin-top: 0.5rem;
  background-color: #A67843; 
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif; 
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px #6B4E2A80; 
}

.favorite-button:hover { 
  background-color: #8FAF65; 
}
</style>
