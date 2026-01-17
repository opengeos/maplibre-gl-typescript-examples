import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-77.04, 38.907],
        zoom: 3
    });

    document
        .getElementById('listing-group')
        .addEventListener('change', (e) => {
            const handler = e.target.id;
            if (e.target.checked) {
                map[handler].enable();
            } else {
                map[handler].disable();
            }
        });