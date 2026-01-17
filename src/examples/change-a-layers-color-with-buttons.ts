import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [12.338, 45.4385],
        zoom: 17.4
    });

    const swatches = document.getElementById('swatches');
    const layer = document.getElementById('layer');
    const colors = [
        '#ffffcc',
        '#a1dab4',
        '#41b6c4',
        '#2c7fb8',
        '#253494',
        '#fed976',
        '#feb24c',
        '#fd8d3c',
        '#f03b20',
        '#bd0026'
    ];

    colors.forEach((color) => {
        const swatch = document.createElement('button');
        swatch.style.backgroundColor = color;
        swatch.addEventListener('click', () => {
            map.setPaintProperty(
                layer.value,
                'fill-color',
                color
            );
        });
        swatches.appendChild(swatch);
    });