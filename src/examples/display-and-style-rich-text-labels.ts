import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

maplibregl.setRTLTextPlugin(
        'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/dist/mapbox-gl-rtl-text.js'
    );

    const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright', // style URL
        center: [17.49, 40.01], // starting position [lng, lat]
        zoom: 4 // starting zoom
    });

    map.on('load', () => {
        map.setLayoutProperty('label_country', 'text-field', [
            'format',
            ['get', 'name_en'],
            {'font-scale': 1.2},
            '\n',
            {},
            ['get', 'name'],
            {
                'font-scale': 0.8,
                'text-font': [
                    'literal',
                    ['Noto Sans Regular']
                ]
            }
        ]);
    });