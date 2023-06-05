<script setup lang="ts">
import Iconsuivi from '../components/icons/iconsuivi.vue'
</script>

<template>
  <h1 class="text-center text-green mt-8">Suivi</h1>

  <div class="bg-green2 mt-6">
    <p class="text-white ml-2">Vous pouvez encore manger 2853 Calories</p>
    <div class="flex justify-center">
      <img class="w-80 sm:w-80 ml-6" src="../public/imagesuivi1.webp" alt="" />
    </div>
    <p class="text-white ml-2">395 calories absorbées</p>
  </div>

  <div class="flex flex-wrap justify-center mt-10">
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
      <div class="flex justify-center">
        <img src="../public/imagesuivi2.webp" alt="Image 1" class="w-24 h-24 object-cover" />
      </div>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
      <div class="flex justify-center">
        <img src="../public/imagesuivi3.webp" alt="Image 2" class="w-24 h-24 object-cover" />
      </div>
    </div>
    <div class="w-full  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
      <div class="flex justify-center">
        <img src="../public/imagesuivi4.webp" alt="Image 3" class="w-24 h-24 object-cover" />
      </div>
    </div>
  </div>

  <div class="flex flex-col items-center">
    <div class="">
      <img class="w-full h-auto max-w-xs mx-auto mt-10" src="../public/imagesuivi5.webp" alt="" />
      <div class="flex justify-center items-center w-full h-full">
        <p class="text-center -mt-60" style="position: relative; z-index: 1">Astuce du jour</p>
      </div>
      <div class="flex justify-center items-center w-full h-full">
        <p class="text-center -mt-40 text-yellow" style="position: relative; z-index: 1">
          Bonnes sources de Glucides
        </p>
      </div>
      <div class="flex justify-center items-center w-full h-full">
        <p class="text-center -mt-20" style="position: relative; z-index: 1">Manger équilibré</p>
      </div>
    </div>
  </div>

  <div class="absolute -mt-10 right-0">
    <Iconsuivi></Iconsuivi>
  </div>

  <div class="flex justify-center items-center">
    <div class="border border-black w-80 sm:w-auto mx-4 mt-10">
      <p class="ml-2 mt-2">IMC</p>
      <p class="ml-2">18.5</p>
      <img class="w-72 ml-4 mt-2" src="../public/imagesuivi6.webp" alt="" />
    </div>
  </div>

  <div class="flex items-center justify-center mb-10">
    <div class="bg-green2 w-96 h-48 rounded-r-full flex">
      <div class="w-1/2 flex flex-col justify-between">
        <p class="ml-16">Gain 10,0kg</p>
        <p class="ml-16 text-xs -mt-2">Le 5 sept.2023</p>
        <p class="ml-16">60,0kg</p>
        <p class="ml-16 text-xs -mt-2">Début</p>
        <div class="bg-white w-20 h-9 rounded ml-16 mt-2">
          <p class="ml-4">63,2kg</p>
          <p class="text-xs ml-4">Actuel</p>
        </div>
        <div class="bg-white w-20 h-9 rounded ml-16 mb-2">
          <p class="ml-4">70,0kg</p>
          <p class="text-xs ml-4">Objectif</p>
        </div>
      </div>
      <div class="w-1/2">
        <img class="h-full object-cover ml-3" src="../public/imagesuivi7.webp" alt="Image" />
      </div>
    </div>
  </div>
</template>
