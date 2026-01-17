import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

maplibregl.setRTLTextPlugin(
        'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.3.0/dist/mapbox-gl-rtl-text.js',
        true // Lazy load the plugin
    );

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [44.3763, 33.2788],
        zoom: 11
    });