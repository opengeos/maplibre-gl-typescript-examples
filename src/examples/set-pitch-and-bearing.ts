import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        // camera options properties
        center: [-73.5804, 45.53483],
        pitch: 60, // pitch in degrees
        bearing: -60, // bearing in degrees
        zoom: 4
    });