import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [120.3049, 31.4751],
        zoom: 12,
        localIdeographFontFamily: '"Apple LiSung", serif'
    });