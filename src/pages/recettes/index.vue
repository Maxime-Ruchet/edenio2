<script setup lang="ts">
import {pb} from '@/backend'
import recettes from '@/components/Cardrecettes.vue'
import { Allrecettes } from '@/backend';
const recettesliste = await Allrecettes();
</script>

<template>
    <h1 class="text-green text-center mt-8">Produits</h1>
  <recettes v-for="recettes of recettesliste" v-bind="{ ...recettes }"/>
    </template>