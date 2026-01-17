import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// Set bounds to New York, New York
    const bounds = [
        [-74.04728500751165, 40.68392799015035], // Southwest coordinates
        [-73.91058699000139, 40.87764500765852] // Northeast coordinates
    ];

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-73.9978, 40.7209],
        zoom: 13,
        maxBounds: bounds // Sets bounds as max
    });