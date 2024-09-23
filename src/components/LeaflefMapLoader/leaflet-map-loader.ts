import L, { Map, MapOptions } from 'leaflet';
import 'leaflet.markercluster';

export interface MapConfig {
  config: MapOptions;
}

export interface LeafletElement extends HTMLDivElement {
  map: Map;
}

const initializeMap = (mapRef: LeafletElement, mapConfig: MapConfig) => {
  if (mapRef.map) {
    mapRef.map.remove();
  }

  const map = L.map(mapRef, mapConfig);
  mapRef.map = map;

  return {
    map,
    leaflet: L
  };
};

export { initializeMap };
