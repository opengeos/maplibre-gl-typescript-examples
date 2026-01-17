import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-8.3226655, 53.7654751],
        zoom: 8
    });

    function handleFileSelect(evt) {
        const file = evt.target.files[0]; // Read first selected file

        const reader = new FileReader();

        reader.onload = function (theFile) {
            // Parse as (geo)JSON
            const geoJSONcontent = JSON.parse(theFile.target.result);

            // Add as source to the map
            map.addSource('uploaded-source', {
                'type': 'geojson',
                'data': geoJSONcontent
            });

            map.addLayer({
                'id': 'uploaded-polygons',
                'type': 'fill',
                'source': 'uploaded-source',
                'paint': {
                    'fill-color': '#888888',
                    'fill-outline-color': 'red',
                    'fill-opacity': 0.4
                },
                // filter for (multi)polygons; for also displaying linestrings
                // or points add more layers with different filters
                'filter': ['==', '$type', 'Polygon']
            });
        };

        // Read the GeoJSON as text
        reader.readAsText(file, 'UTF-8');
    }

    document
        .getElementById('file')
        .addEventListener('change', handleFileSelect, false);