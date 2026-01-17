import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        zoom: 1
    });

    map.on('load', async () => {
        // Add GeoJSON data
        map.addSource('source', {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [
                        [
                            [-30, -25],
                            [-30, 35],
                            [30, 35],
                            [30, -25],
                            [-30, -25]
                        ]
                    ]
                }
            }
        });

        // Load an image to use as the pattern
        const image = await map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/64px-Cat_silhouette.svg.png');
        // Declare the image
        map.addImage('pattern', image.data);

        // Use it
        map.addLayer({
            'id': 'pattern-layer',
            'type': 'fill',
            'source': 'source',
            'paint': {
                'fill-pattern': 'pattern'
            }
        });
    });