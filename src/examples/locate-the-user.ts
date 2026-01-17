import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-96, 37.8], // starting position
        zoom: 3 // starting zoom
    });

    // Add geolocate control to the map.
    map.addControl(
        new maplibregl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        })
    );