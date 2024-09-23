<script setup lang="ts">
import LeafletMapLoader, { Init } from '@/components/LeaflefMapLoader';

const init: Init = async (initializeMap) => {
  const mapInstance = await initializeMap({
    config: {
      center: [16.756386, -93.132305],
      zoom: 13
    }
  });

  if (mapInstance) {
    const apiKey = import.meta.env.VITE_MAP_API_KEY;
    const { map, leaflet } = mapInstance;

    leaflet
      .tileLayer(
        `https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=${apiKey}`,
        {
          attribution: '&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      )
      .addTo(map);
  }
};

</script>

<template>
  <div class="w-screen h-screen">
    <LeafletMapLoader :init="init" class="h-full" />
  </div>
</template>

