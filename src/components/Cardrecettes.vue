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

    <div class="break-inside-avoid space-y-3">
        <img :src="urlImg0" class="h-20 w-20">
        <p>{{ titre }}</p>
      <div class="flex items-center">
        <Iconhorloge class="block"></Iconhorloge>
        <p>{{ heure }}</p>
      </div>
    </div>

  </template>