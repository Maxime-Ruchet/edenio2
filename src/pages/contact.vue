<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-center bg-gray-100">
    <div class="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded shadow">
      <h1 class="text-2xl font-bold mb-6 text-green">Contactez-nous</h1>
      <form action="#" method="POST">
        <div class="mb-4">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
            required
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green"
            required
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="w-full px-4 py-2 bg-green text-white font-semibold rounded hover:bg-green2 transition-colors duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
