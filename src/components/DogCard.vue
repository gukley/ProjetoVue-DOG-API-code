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
.card { 
    padding: 0.5rem; 
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 2px 2px 5px #00000010;
    transition: transform 0.2s;
}

.card:hover { 
    transform: scale(1.03);
}

.dog-image { 
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
}

.favorite-button { 
    width: 100%;
    margin-top: 0.5rem;
    background-color: #3490dc;
    color: white;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.favorite-button:hover { 
    background-color: #2779bd;
}
</style>