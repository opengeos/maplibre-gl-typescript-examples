import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-74.5, 40], // starting position
        zoom: 2, // starting zoom
        rollEnabled: true // Enable mouse control of camera roll angle with `Ctrl` + right-click and drag
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new maplibregl.NavigationControl({
        visualizePitch: true,
        visualizeRoll: true,
        showZoom: true,
        showCompass: true
    }));