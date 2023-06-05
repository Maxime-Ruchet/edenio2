<script setup lang="ts">
import {pb} from '@/backend'
import evenement from '@/components/Cardevenements.vue'
import { Allevenement } from '@/backend';
const evenementliste = await Allevenement();
</script>

<template>
  <h1 class="text-green text-center mt-8">Évènements</h1>
<evenement v-for="evenement of evenementliste" v-bind="{ ...evenement }"/>
  </template>