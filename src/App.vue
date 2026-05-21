<script setup lang="ts">
// App.vue es el componente raíz. 
// RouterView se encarga de cargar la página activa.
</script>

<template>
  <div class="app-container">
    <!-- Aquí se renderizan las páginas (Dashboard, Tires, etc.) -->
    <router-view />
  </div>
</template>

<style scoped>
/* Estilos globales si fueran necesarios, pero usaremos Tailwind */
</style>