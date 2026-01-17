import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-96, 37.8],
        zoom: 3
    });

    map.on('mousemove', (e) => {
        const features = map.queryRenderedFeatures(e.point);

        // Limit the number of properties we're displaying for
        // legibility and performance
        const displayProperties = [
            'type',
            'properties',
            'id',
            'layer',
            'source',
            'sourceLayer',
            'state'
        ];

        const displayFeatures = features.map((feat) => {
            const displayFeat = {};
            displayProperties.forEach((prop) => {
                displayFeat[prop] = feat[prop];
            });
            return displayFeat;
        });

        document.getElementById('features').innerHTML = JSON.stringify(
            displayFeatures,
            null,
            2
        );
    });