import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright', //stylesheet location
        center: [11.255, 43.77], // starting position
        zoom: 13 // starting zoom
    });

    map.addControl(new maplibregl.FullscreenControl());