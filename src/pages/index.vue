<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <h1 class="text-center mt-5 text-green">Découvrez Edenio</h1>
  <div class="grid grid-cols-1 lg:grid-cols-3">
  <div class="flex justify-center flex-col items-center">
    <img src="../public/imageindex1.webp" alt="" class="h-40 w-40" />
    <h2 class="text-center mt-5 text-green">Une sélection durable et savoureuse</h2>
    <p class="ml-5 m-auto mt-5 mr-3 lg:text-center">
      Explorez notre site local dédié à la nourriture bio et découvrez une sélection fraîche et savoureuse, issue de producteurs locaux engagés dans une agriculture durable.
    </p>
  </div>

  <div class="flex justify-center flex-col items-center">
    <img src="../public/imageindex2.webp" alt="" class="h-40 w-40" />
    <h2 class="text-center mt-5 text-green">Des recettes illimitées !</h2>
    <p class="ml-5 m-auto mt-5 mr-3 lg:text-center">
      Faites le choix d'une alimentation saine et respectueuse de l'environnement en optant pour nos produits bio, cultivés avec soin et exempts de pesticides.
    </p>
  </div>

  <div class="flex justify-center flex-col items-center">
    <img src="../public/imageindex3.webp" alt="" class="h-40 w-40" />
    <h2 class="text-center mt-5 text-green">Une communauté en or !</h2>
    <p class="ml-5 m-auto mt-5 lg:text-center mr-3">
      Rejoignez notre communauté bio et savourez des saveurs authentiques tout en soutenant une agriculture locale et durable.
    </p>
  </div>
</div>




  <h2 class="text-center mt-5 text-green">Trouvez des producteurs locaux près de chez vous !</h2>
  <div class="flex justify-center">
    <RouterLink to="/carte"
      ><img src="../public/imageindex4.webp" alt="" class="h-60 w-60 mt-4"
    /></RouterLink>
  </div>

  <div class="bg-yellow3 pb-10 lg:mt-10 -mb-8 lg:pt-5">
    <h2 class="text-center mt-5 text-green">
      Edenio c’est la solution pour une alimentation saine, des économies et pour préserver
      l’environnement.
    </h2>
    <div class="grid grid-cols-1 lg:flex lg:flex-row lg:justify-center">
  <div class="flex justify-center flex-col items-center">
    <div class="flex justify-center">
      <img src="../public/imageindex5.webp" alt="" class="h-10 w-10 mt-10" />
    </div>
    <p class="text-center mt-5 ml-5">
      Des produits bio, locaux et de qualité pour préserver notre environnement
    </p>
  </div>

  <div class="flex justify-center flex-col items-center">
    <div class="flex justify-center">
      <img src="../public/imageindex6.webp" alt="" class="h-10 w-10 mt-10" />
    </div>
    <p class="text-center mt-5">
      Moins de transport pour plus d'économie et un meilleur respect de l'environnement
    </p>
  </div>

  <div class="flex justify-center flex-col items-center">
    <div class="flex justify-center">
      <img src="../public/imageindex7.webp" alt="" class="h-10 w-10 mt-10" />
    </div>
    <p class="text-center mt-5">Des produits locaux, pour un meilleur goût dans l'assiette</p>
  </div>

  <div class="flex justify-center flex-col items-center">
    <div class="flex justify-center">
      <img src="../public/imageindex8.webp" alt="" class="h-10 w-10 mt-10" />
    </div>
    <p class="text-center mt-5">Un goût supérieur pour un prix nettement moins cher</p>
  </div>
</div>
</div>
</template>
