<script setup lang="ts">
import IconInstagram from '../components/icons/iconeinstagram.vue'
import Icontwitter from '../components/icons/twitter.vue'
import Iconfacebook from '../components/icons/facebook.vue'
import Iconelogo from './icons/iconelogo.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer
    class="space-y-10 pt-20 max-w-screen-xl m-auto lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0 border-t-2 border-t-green2 mt-8"
  >
    <Iconelogo class="mx-8 lg:col-span-1"></Iconelogo>
    <nav class="px-5 columns-2 gap-8 space-y-8 lg:columns-2 lg:col-span-3 lg:px-0">
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Infos pratique</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Contact</a></li>
          <li><a href="#">Aide & Assistance</a></li>
          <li><a href="#">Localisation</a></li>
        </ul>
      </div>
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">CGV et confidentialité</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <RouterLink to="/mention legale">Mentions légales</RouterLink>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">CGV</a></li>
        </ul>
      </div>

      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">Navigation</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">Mon compte</a></li>
          <li><a href="#">Mon panier</a></li>
        </ul>
      </div>
      <div class="break-inside-avoid space-y-3">
        <h3 class="uppercase text-sm lg:text-base">A propos</h3>
        <ul class="text-gray-400 text-sm lg:text-base">
          <li><a href="#">SAV</a></li>
          <li><a href="#">Services clients</a></li>
          <li><a href="#">Nos engagements</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
    </nav>
    <div
      class="px-5 text-gray-400 border-t border-gray-300 py-8 space-y-6 text-center lg:col-span-4 lg:flex lg:justify-around lg:items-center lg:space-y-0"
    >
      <ul class="flex gap-12 justify-center">
        <li>
          <a href="#"><Iconfacebook></Iconfacebook></a>
        </li>
        <li>
          <a href="#"><IconInstagram /></a>
        </li>
        <li>
          <a href="#"><Icontwitter></Icontwitter></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
