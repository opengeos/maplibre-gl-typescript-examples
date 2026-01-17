import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as THREE from 'three';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [16.05, 48],
        zoom: 2.9
    });

    document
        .getElementById('buttons')
        .addEventListener('click', (event) => {
            const language = event.target.id.substr('button-'.length);
            // Use setLayoutProperty to set the value of a layout property in a style layer.
            // The three arguments are the id of the layer, the name of the layout property,
            // and the new property value.
            map.setLayoutProperty('label_country_1', 'text-field', [
                'get',
                `name:${language}`
            ]);
            map.setLayoutProperty('label_country_2', 'text-field', [
                'get',
                `name:${language}`
            ]);
            map.setLayoutProperty('label_country_3', 'text-field', [
                'get',
                `name:${language}`
            ]);
        });