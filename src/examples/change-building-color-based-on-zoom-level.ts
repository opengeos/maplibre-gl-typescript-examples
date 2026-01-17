import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-90.73414, 14.55524],
        zoom: 13
    });

    map.on('load', () => {
        map.setPaintProperty('building-top', 'fill-color', [
            'interpolate',
            ['exponential', 0.5],
            ['zoom'],
            15,
            '#e2714b',
            22,
            '#eee695'
        ]);

        map.setPaintProperty('building-top', 'fill-opacity', [
            'interpolate',
            ['exponential', 0.5],
            ['zoom'],
            15,
            0,
            22,
            1
        ]);
    });

    document.getElementById('zoom').addEventListener('click', () => {
        map.zoomTo(19, {duration: 9000});
    });