import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [-90.96, -0.47],
        zoom: 7.5
    });

    map.on('load', async () => {
        // Add an image to use as a custom marker
        const image = await map.loadImage('https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png');
        map.addImage('custom-marker', image.data);
        // Add a GeoJSON source with 3 points.
        map.addSource('points', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -91.395263671875,
                                -0.9145729757782163
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -90.32958984375,
                                -0.6344474832838974
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -91.34033203125,
                                0.01647949196029245
                            ]
                        }
                    }
                ]
            }
        });

        // Add a symbol layer
        map.addLayer({
            'id': 'symbols',
            'type': 'symbol',
            'source': 'points',
            'layout': {
                'icon-image': 'custom-marker'
            }
        });

        // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
        map.on('click', 'symbols', (e) => {
            map.flyTo({
                center: e.features[0].geometry.coordinates
            });
        });

        // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
        map.on('mouseenter', 'symbols', () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'symbols', () => {
            map.getCanvas().style.cursor = '';
        });
    });