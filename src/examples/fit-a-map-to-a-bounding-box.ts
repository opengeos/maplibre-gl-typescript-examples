import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-74.5, 40],
        zoom: 9
    });

    document.getElementById('fit').addEventListener('click', () => {
        map.fitBounds([
            [32.958984, -5.353521],
            [43.50585, 5.615985]
        ]);
    });