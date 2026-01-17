import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright', // stylesheet location
        center: [30.0222, -1.9596], // starting position [lng, lat]
        zoom: 7 // starting zoom
    });

    map.on('load', () => {
        map.addSource('rwanda-provinces', {
            'type': 'geojson',
            'data': 'https://maplibre.org/maplibre-gl-js/docs/assets/rwanda-provinces.geojson'
        });
        map.addLayer({
            'id': 'rwanda-provinces',
            'type': 'fill',
            'source': 'rwanda-provinces',
            'layout': {},
            'paint': {
                'fill-color': [
                    'let',
                    'density',
                    ['/', ['get', 'population'], ['get', 'sq-km']],
                    [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        8,
                        [
                            'interpolate',
                            ['linear'],
                            ['var', 'density'],
                            274,
                            ['to-color', '#edf8e9'],
                            1551,
                            ['to-color', '#006d2c']
                        ],
                        10,
                        [
                            'interpolate',
                            ['linear'],
                            ['var', 'density'],
                            274,
                            ['to-color', '#eff3ff'],
                            1551,
                            ['to-color', '#08519c']
                        ]
                    ]
                ],
                'fill-opacity': 0.7
            }
        });
    });