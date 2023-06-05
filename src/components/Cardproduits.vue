<script setup lang="ts">
import type { ProduitsResponse } from '../pocketbase-types'
const props: ProduitsResponse = defineProps<ProduitsResponse>()
import {pb} from '../backend' 
const urlImg0 = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
import { oneIDproduits } from '../backend'
const unproduits = await oneIDproduits(props.id)
</script>

<template>
    <div
    class="space-y-0 pt-10 max-w-screen-xl ml-5 grid grid-cols-2 gp-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:ml-60"
  >
    <div class="break-inside-avoid space-y-1">
      <img :src="urlImg0" class="w-20 ml-10" />
      <p class="ml-10">{{ titre }}</p>
      <p class="ml-16">{{ prix }}</p>
      <button class="bg-yellow hover:bg-yellow2 text-white font-bold py-2 px-4 rounded-full">
        Ajouter au panier
      </button>
    </div>
    </div>
  </template>