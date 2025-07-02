<template> 
    <div class="pagination" v-if="totalPages > 1"> 
    <button @click="$emit('prev')" :disabled="currentPage === 1">⬅</button>

    <button
        v-for="page in visiblePages"
       :key="page"
        @click="typeof page === 'number' && $emit('go-to', page)"
        :disabled="page === '...'"
        :class="{ active: page === currentPage }">
        {{ page }} 
    </button>

    <button @click="$emit('next')" :disabled="currentPage === totalPages">➡</button>
    </div>     
</template>

<script setup> 
import { computed } from 'vue'

const props = defineProps({ 
    currentPage: Number,
    totalPages: Number,
})

const emit = defineEmits(['prev', 'next', 'go-to'])

const visiblePages = computed(() => { 
    const pages = []
    const total = props.totalPages
    const current = props.currentPage

    if (total <= 7) { 
        for (let i = 1; i<= total; i++) pages.push(i)
    }   else { 
        if (current <= 4) { 
            pages.push(1, 2, 3, 4, 5, '...', total)
        } else if (current >= total - 3) { 
            pages.push(1, '...', total - 4, total - 3, total - 2, total -1, total)
        } else { 
            pages.push(1, '...', current - 1, current, current + 1, '...', total)
        }
    }
    return pages
})
</script>
<style scoped> 

.pagination { 
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    margin-top: 1rem;
}

.pagination button { 
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    background-color: #eee;
    cursor: pointer;
    font-size: 14px;
}

.pagination button.active { 
    background-color: #3490dc;
    color: white;
    font-weight: bold;
}

.pagination button:disabled { 
    opacity: 0.5;
    cursor: default;
}
</style>