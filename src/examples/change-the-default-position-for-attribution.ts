import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-77.04, 38.907],
        zoom: 2,
        attributionControl: false
    });
    map.addControl(new maplibregl.AttributionControl(), 'top-left');