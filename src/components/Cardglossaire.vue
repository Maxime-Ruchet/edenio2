<script setup lang="ts">
import type { GlossaireResponse } from '@/pocketbase-types'
const props: GlossaireResponse = defineProps<GlossaireResponse>()
import {pb} from '@/backend' 
import { oneIDglossaire } from '@/backend'
const unglossaire = await oneIDglossaire(props.id)
</script>

<template>
    <div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols lg:grid-cols-2 gap-8">
    <div class="bg-white p-4 rounded shadow flex">
        <div>
    <p>{{ titre }}</p>
    <p class="ml-4" v-html=" unglossaire.description"></p>
    </div>
    </div>
    </div>
    </div>
  </template>