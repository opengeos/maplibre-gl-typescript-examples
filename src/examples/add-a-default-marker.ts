import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [12.550343, 55.665957],
        zoom: 6
    });

    const marker = new maplibregl.Marker()
        .setLngLat([12.550343, 55.665957])
        .addTo(map);