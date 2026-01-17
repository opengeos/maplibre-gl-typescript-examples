import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        zoom: 0,
        center: [137.9150899566626, 36.25956997955441],
        style: {
            'version': 8,
            'projection': {
                'type': 'globe'
            },
            'sources': {
                'satellite': {
                    'tiles': ['https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2020_3857/default/g/{z}/{y}/{x}.jpg'],
                    'type': 'raster'
                },
            },
            'layers': [
                {
                    'id': 'Satellite',
                    'type': 'raster',
                    'source': 'satellite',
                },
            ],
            'sky': {
                'atmosphere-blend': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 1,
                    5, 1,
                    7, 0
                ]
            },
            'light': {
                'anchor': 'map',
                'position': [1.5, 90, 80]
            }
        }
    });