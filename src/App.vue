<template> 
  <div> 
    <nav class="navbar">
      <RouterLink to="/" active-class="active">🐶 Raças</RouterLink>
      <RouterLink to="/favorites" active-class="active">⭐ Favoritos</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>


<style> 
body { 
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f7f7f7;
  color: #333;
}

a { 
  text-decoration: none;
  color: inherit;
}

.navbar { 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background: linear-gradient(90deg, #3490dc, #2779bd);
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin: 1rem auto;
  max-width: 800px;
  font-size: 1.1rem;
  font-weight: 600;
}

.navbar a { 
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.navbar a:hover { 
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.navbar a.active { 
  background-color: #1c3d5a;
  box-shadow: 0 0 10px #1c3d5aaa;
  color: #e0e7ff;
}
</style>