import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-96, 37.8],
        zoom: 3
    });

    const popup = new maplibregl.Popup({closeOnClick: false})
        .setLngLat([-96, 37.8])
        .setHTML('<h1>Hello World!</h1>')
        .addTo(map);