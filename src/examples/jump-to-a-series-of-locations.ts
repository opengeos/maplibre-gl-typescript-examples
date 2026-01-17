import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const cities = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [100.507, 13.745]
                }
            },
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [98.993, 18.793]
                }
            },
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [99.838, 19.924]
                }
            },
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [102.812, 17.408]
                }
            },
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [100.458, 7.001]
                }
            },
            {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                    'type': 'Point',
                    'coordinates': [100.905, 12.935]
                }
            }
        ]
    };

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [100.507, 13.745],
        zoom: 9
    });

    map.on('load', () => {
        cities.features.forEach((city, index) => {
            setTimeout(() => {
                map.jumpTo({center: city.geometry.coordinates});
            }, 2000 * index);
        });
    });