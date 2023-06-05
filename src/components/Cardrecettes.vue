<script setup lang="ts">
import type { RecettesResponse } from '@/pocketbase-types'
const props: RecettesResponse = defineProps<RecettesResponse>()
import {pb} from '@/backend' 
const urlImg0 = props.field ? pb.getFileUrl(props, props.field, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
import { oneIDrecettes } from '@/backend'
const unproduits = oneIDrecettes(props.id)
import Iconhorloge from '../components/icons/iconehorloge.vue'
</script>

<template>
    <div
    class=" pt-10 max-w-screen-xl  grid gap-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0"
  >
    <div class="break-inside-avoid space-y-3">
        <img :src="urlImg0" class="w-20">
        <p>{{ titre }}</p>
      <div class="flex items-center">
        <Iconhorloge class="block"></Iconhorloge>
        <p class="">{{ heure }}</p>
      </div>
    </div>
    </div>
  </template>