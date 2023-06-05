<script setup lang="ts">
import {pb} from '../../backend'
import produits from '../../components/Cardproduits.vue'
import { Allproduits } from '../../backend';
const produitsliste = await Allproduits();
</script>

<template>
    <h1 class="text-green text-center mt-8">Produits</h1>
  <produits v-for="produits of produitsliste" v-bind="{ ...produits }"/>
    </template>