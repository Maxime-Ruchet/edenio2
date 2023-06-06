<template>
    <div>
      <LMap :zoom="13" :center="[51.505, -0.09]" style="height: 400px">
        <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></LTileLayer>
        <LMarker :lat-lng="[51.5, -0.09]">
          <Popup>Hello OpenStreetMap!</Popup>
        </LMarker>
      </LMap>
    </div>
  </template>
  
  <script>
  import { LMap, LTileLayer, LMarker, Popup } from '@vue-leaflet/vue-leaflet'
  
  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      Popup
    }
  }
  </script>
  

  