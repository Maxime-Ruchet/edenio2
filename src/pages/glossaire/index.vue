<script setup lang="ts">
import {pb} from '../../backend'
import glossaire from '../../components/Cardglossaire.vue'
import { Allglossaire } from '../../backend';
const glossaireliste = await Allglossaire();
</script>

<template>
    <h1 class="text-green text-center mt-8">Glossaire</h1>

  <glossaire v-for="glossaire of glossaireliste" v-bind="{ ...glossaire }"/>

    </template>