<script setup lang="ts">
import {pb} from '@/backend'
import produits from '@/components/Cardproduits.vue'
import { Allproduits } from '@/backend';

const produitsliste = await Allproduits();

</script>

<template>
  <div>

    <h1 class="text-green text-center mt-8">  Produits</h1>
    <div
    class="space-y-0 pt-10 max-w-screen-xl ml-5 grid grid-cols-2 gap-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:ml-60"
  >
  <produits  v-for="produits of produitsliste" v-bind="{ ...produits }" :key="produits.id"/>
  </div>
</div>

    </template>