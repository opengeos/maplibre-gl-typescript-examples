import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-74.5, 40],
        cooperativeGestures: true,
        zoom: 4
    });
    map.addControl(new maplibregl.FullscreenControl());