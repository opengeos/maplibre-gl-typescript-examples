import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright', // stylesheet location
        center: [-116.231, 43.604], // starting position [lng, lat]
        zoom: 11 // starting zoom
    });

    map.on('load', () => {
        // data from https://opendata.cityofboise.org/
        map.addSource('off-leash-areas', {
            'type': 'geojson',
            'data':
                'https://maplibre.org/maplibre-gl-js/docs/assets/boise.geojson'
        });
        map.addLayer({
            'id': 'off-leash-areas',
            'type': 'symbol',
            'source': 'off-leash-areas',
            'layout': {
                'icon-image': 'dog_park',
                'text-field': [
                    'format',
                    ['upcase', ['get', 'FacilityName']],
                    {'font-scale': 0.8},
                    '\n',
                    {},
                    ['downcase', ['get', 'Comments']],
                    {'font-scale': 0.6}
                ],
                'text-font': ['Noto Sans Regular'],
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
            }
        });
    });