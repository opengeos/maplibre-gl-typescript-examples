import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json', // style URL
        center: [-122.65, 45.52], // starting position
        zoom: 3 // starting zoom
    });

    // disable map rotation using right click + drag
    map.dragRotate.disable();

    // disable map rotation using keyboard
    map.keyboard.disable();

    // disable map rotation using touch rotation gesture
    map.touchZoomRotate.disableRotation();