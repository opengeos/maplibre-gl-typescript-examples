import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map', // container id
        style: 'https://tiles.openfreemap.org/styles/bright', // style URL
        center: [-91.874, 42.76], // starting position
        zoom: 12 // starting zoom
    });

    // By default, all terra-draw drawing modes are enabled.
    // you can disable some of modes in the constructor options if you want.
    const draw = new MaplibreTerradrawControl.MaplibreTerradrawControl({
        modes: [
            // 'render', comment this to always show drawing tool
            'point',
            'linestring',
            'polygon',
            'rectangle',
            'circle',
            'freehand',
            'angled-rectangle',
            'sensor',
            'sector',
            'select',
            'delete-selection',
            'delete',
            'download'
        ],
        open: true,
    });
    map.addControl(draw, 'top-left');