<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>

      <h1 class="text-6xl text-center font-bold text-gray-900">404</h1>
      <p class="text-2xl text-center font-semibold mt-4">Page not found</p>
      <p class="text-gray-700 text-center mt-2">The page you are looking for does not exist.</p>
      <div class="flex items-center justify-center mt-4">
        <RouterLink to="/" >
            <button class="px-4 py-2 bg-green text-white font-semibold rounded hover:bg-green-200 transition-colors duration-300 md:mx-auto">
      Return to home
    </button>
    </RouterLink>
  </div>



</template>