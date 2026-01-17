import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
            container: 'map',
            projection: {type: 'globe'},
            style: 'https://demotiles.maplibre.org/style.json',
            center: [0, 0],
            zoom: 2
        });

        map.on('mousemove', (e) => {
            const lngLat = e.lngLat.wrap();
            const pointSource = map.getSource('point');

            if (pointSource && lngLat.lng && lngLat.lat) {
                pointSource.setData({
                    'type': 'Point',
                    'coordinates': [lngLat.lng, lngLat.lat]
                });
            }
        });
        map.addControl(new maplibregl.GlobeControl());

        map.on('load', () => {

            map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'Point',
                    'coordinates': [0, 0]
                }
            });

            map.addLayer({
                'id': 'point',
                'source': 'point',
                'type': 'circle',
                'paint': {
                    'circle-radius': 10,
                    'circle-color': '#007cbf'
                }
            });
        });