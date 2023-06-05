<script setup lang="ts">
import type { EvenementResponse } from '../pocketbase-types'
const props: EvenementResponse = defineProps<EvenementResponse>()
import {pb} from '../backend' 
const urlImg0 = props.image ? pb.getFileUrl(props, props.image, { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
import { oneID } from '../backend'
const unevenement = await oneID(props.id)
</script>

<template>
    <div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols lg:grid-cols-2 gap-8">
    <div class="bg-white p-4 rounded shadow flex">
      <img class="m-auto pb-4 w-24" :src="urlImg0">
        <div>
  <p class="ml-4" v-html=" unevenement.description "></p>
    <p class="ml-4" v-html=" unevenement.heure"></p>
    </div>
    </div>
    </div>
    </div>
  </template>