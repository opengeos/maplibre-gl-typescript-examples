import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        zoom: 13,
        center: [-122.447303, 37.753574]
    });

    map.on('load', () => {
        map.addSource('contours', {
            type: 'vector',
            url:
                'https://api.maptiler.com/tiles/contours/tiles.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL'
        });
        map.addLayer({
            'id': 'contour-lines',
            'type': 'line',
            'source': 'contours',
            'source-layer': 'contour',
            'layout': {
                'line-join': 'round',
                'line-cap': 'round'
            },
            'paint': {
                'line-color': '#ff69b4',
                'line-width': 1
            }
        });

        map.addLayer({
            'id': 'contour-labels',
            'type': 'symbol',
            'source': 'contours',
            'source-layer': 'contour',
            "layout": {
              "text-field": "{height}",
              "symbol-placement": "line",
              "text-font": ["Noto Sans Regular"],
            },
            'paint': {
                'text-color': '#ff69b4',
            }
        });
    });