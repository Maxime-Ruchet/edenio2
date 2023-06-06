<script setup lang="ts">
import {pb} from '../../backend'
import recettes from '../../components/Cardrecettes.vue'
import { Allrecettes } from '../../backend';
const recettesliste = await Allrecettes();
</script>

<template>
    <h1 class="text-green text-center mt-8">Recettes</h1>
    <div
    class="space-y-0 pt-10 max-w-screen-xl ml-9 grid grid-cols-3 gp-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:ml-60"
  >
  <recettes v-for="recettes of recettesliste" v-bind="{ ...recettes }"/>
  </div>
    </template>