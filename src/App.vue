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
  background-color: #F5EBDD; 
  color: #4B3B2B; 
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
  background: linear-gradient(90deg, #A67843, #8FAF65); 
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(75, 59, 43, 0.15); 
  margin: 1rem auto;
  max-width: 800px;
  font-size: 1.1rem;
  font-weight: 600;
}

.navbar a {
  color: #F5EBDD; 
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.navbar a:hover {
  background: rgba(245, 235, 221, 0.35); 
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(143, 175, 101, 0.4); 
}

.navbar a.active {
  background-color: #4B3B2B; 
  box-shadow: 0 0 12px #4B3B2B99;
  color: #F5EBDD; 
}
</style>
