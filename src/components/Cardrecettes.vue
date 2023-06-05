<script setup lang="ts">
import type { RecettesResponse } from '../pocketbase-types'
const props: RecettesResponse = defineProps<RecettesResponse>()
import {pb} from '../backend' 
const urlImg0 = props.field ? pb.getFileUrl(props, props.field, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
import { oneIDrecettes } from '../backend'
const unproduits = await oneIDrecettes(props.id)
import Iconhorloge from '../components/icons/iconehorloge.vue'
</script>

<template>
    <div
    class="space-y-0 pt-10 max-w-screen-xl ml-9 grid grid-cols-3 gp-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:ml-60"
  >
    <div class="break-inside-avoid space-y-3">
        <img :src="urlImg0" class="h-20 w-20">
        <p>{{ titre }}</p>
      <div class="flex items-center">
        <Iconhorloge class="block"></Iconhorloge>
        <p>{{ heure }}</p>
      </div>
    </div>
    </div>
  </template>