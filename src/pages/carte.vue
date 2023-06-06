<template>
    <div style="height:600px; width:800px">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.510356, 6.798466]">
        <l-tile-layer
          url="https://%7Bs%7D.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </div>
  </template>
  
  <script setup lang="ts">
  import "leaflet/dist/leaflet.css";
  import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
  import { ref } from 'vue';
  
  const zoom = ref(14);
  </script>
  
  <style></style>
