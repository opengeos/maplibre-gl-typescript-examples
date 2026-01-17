import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        zoom: 2,
        center: [0, 0],
    });

    map.on('style.load', () => {
        map.setProjection({
            type: 'globe', // Set projection to globe
        });
    });