import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [9.0679, 45.8822],
        zoom: 9
    });

    map.on('load', () => {
        map.addSource('railways_and_lifts', {
            type: 'geojson',
            data: 'https://maplibre.org/maplibre-gl-js/docs/assets/funicolares-and-funivias-como.json'
        });

        map.addLayer({
            id: 'railways_and_lifts_labels',
            type: 'symbol',
            source: 'railways_and_lifts',
            layout: {
                'text-field': '{name}',
                'text-font': ['Open Sans Semibold'],
                'text-offset': [0, 1],
                'text-anchor': 'top'
            },
            paint: {
                'text-color': '#000000',
                'text-halo-color': '#ffffff',
                'text-halo-width': 2
            },
            filter: [
                'case',
                ['==', ['to-string', ['global-state', 'type']], ''],
                true,
                ['==', ['get', 'type'], ['global-state', 'type']]
            ]
        });
        map.addLayer({
            type: 'circle',
            id: 'railways_and_lifts_points',
            source: 'railways_and_lifts',
            paint: {
                'circle-radius': 5,
                'circle-color': '#000000',
            },
            filter: [
                'case',
                ['==', ['to-string', ['global-state', 'type']], ''],
                true,
                ['==', ['get', 'type'], ['global-state', 'type']]
            ]
        });

        const select = document.querySelector('select[name="type"]');
        map.setGlobalStateProperty('type', select.value);

        select.addEventListener('change', (e) => {
            const value = e.target.value;
            map.setGlobalStateProperty('type', value);
        });
    });