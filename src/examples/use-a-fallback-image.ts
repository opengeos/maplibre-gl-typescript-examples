import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-77, 38.75],
        zoom: 5
    });
    map.on('load', () => {
        map.addSource('points', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -77.03238901390978, 38.913188059745586
                            ]
                        },
                        'properties': {
                            'title': 'Washington DC',
                            'icon': 'monument'
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-79.9959, 40.4406]
                        },
                        'properties': {
                            'title': 'Pittsburgh',
                            'icon': 'bridges'
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-76.2859, 36.8508]
                        },
                        'properties': {
                            'title': 'Norfolk',
                            'icon': 'harbor'
                        }
                    }
                ]
            }
        });
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'points',
            'layout': {
                'icon-image': [
                    'coalesce',
                    ['image', ['concat', ['get', 'icon'], '_11']],
                    ['image', 'marker_11']
                ],
                'text-field': ['get', 'title'],
                'text-font': ['Noto Sans Regular'],
                'text-offset': [0, 0.6],
                'text-anchor': 'top'
            }
        });
    });