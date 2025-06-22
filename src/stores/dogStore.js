import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import axios from 'axios';

export const useDogStore = defineStore('dogStore', () => { 
  const breeds = ref([])
  const images = ref([])

  // Paginação 
  const currentPage = ref(1)
  const itemsPerPage = 16

  // salvar favoritos no localStorage
  const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'))

  // Paginação pra favoritos
  const favoritePage = ref(1)
  const favoritesPerPage = 12 

  const totalPages = computed(() => Math.ceil(images.value.length / itemsPerPage))
  const totalPagesFavorites = computed(() => Math.ceil(favorites.value.length / favoritesPerPage))

  const paginatedImages = computed(() => { 
    const start = (currentPage.value - 1) * itemsPerPage
    return images.value.slice(start, start + itemsPerPage)
  })

  const paginatedFavorites = computed(() => { 
    const start = (favoritePage.value - 1) * favoritesPerPage
    return favorites.value.slice(start, start + favoritesPerPage)
  })

  // Buscar as raças dos cachorros
  async function fetchBreeds() { 
    try { 
      const res = await axios.get('https://dog.ceo/api/breeds/list/all')
      breeds.value = Object.keys(res.data.message)
    } catch (err) { 
      console.error('Erro ao carregar raças:', err)
    }
  }

  // Buscar as imagens das raças selecionada
  async function fetchImages(breed) {
    try {
      const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
      images.value = res.data.message
      currentPage.value = 1 // reseta paginação
    } catch (err) {
      console.error('Erro ao carregar imagens:', err)
      images.value = []
    }
  }

  // Favoritos
  function toggleFavorite(imgUrl) { 
    if (favorites.value.includes(imgUrl)) { 
      favorites.value = favorites.value.filter(img => img !== imgUrl)
    } else { 
      favorites.value.push(imgUrl)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  function isFavorite(imgUrl) { 
    return favorites.value.includes(imgUrl)
  }

  // Paginação
  function nextPage() { 
    if (currentPage.value < totalPages.value) { 
      currentPage.value++
    }
  }

  function prevPage() { 
    if (currentPage.value > 1) { 
      currentPage.value--
    }
  }

  function goToPage(page) { 
    if (page >= 1 && page <= totalPages.value) { 
      currentPage.value = page
    }
  }

  function nextFavoritePage() { 
    if (favoritePage.value < totalPagesFavorites.value) favoritePage.value++
  }

  function prevFavoritePage() { 
    if (favoritePage.value > 1) favoritePage.value --
  }

  function goToFavoritePage(page) { 
    if (page >= 1 && page <= totalPagesFavorites.value) favoritePage.value = page
  }

  return { 
    breeds,
    images,
    favorites,
    currentPage,
    totalPages,
    paginatedImages,
    fetchBreeds,
    fetchImages,
    toggleFavorite,
    isFavorite,
    nextPage,
    prevPage,
    goToPage,

    paginatedFavorites,
    favoritePage,
    totalPagesFavorites,
    nextFavoritePage,
    prevFavoritePage,
    goToFavoritePage,
  }
})
