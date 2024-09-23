import { defineStore } from 'pinia';
import { LatLng } from 'leaflet';

const API_URL = 'https://api.tuxmapa.com.mx/v2';

export const useTuxmapaStore = defineStore('tuxmapa.store', {
  state: () => ({}),
  actions: {
    async fetchRoutes() {
      try {
        const response = await fetch(`${API_URL}/rutas`);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchRoute(id) {
      try {
        const response = await fetch(`${API_URL}/ruta/${id}`);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async getBestRoute(firstPoint: LatLng, secondPoint: LatLng) {
      const params = new URLSearchParams({
        lat1: firstPoint.lat.toString(),
        lng1: firstPoint.lng.toString(),
        lat2: secondPoint.lat.toString(),
        lng2: secondPoint.lng.toString()
      });
      try {
        const response = await fetch(`${API_URL}/mejor_ruta?${params}`);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchNearRoutes(point: LatLng) {
      const params = new URLSearchParams({
        lat: point.lat.toString(),
        lng: point.lng.toString()
      });
      try {
        const response = await fetch(`${API_URL}/rutas_cercanas?${params}`);
        return await response.json();
      } catch (error) {
        console.error(error);
      }
    }
  }
});
