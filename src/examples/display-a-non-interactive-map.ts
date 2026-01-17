import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [74.5, 40],
        zoom: 3,
        // causes pan & zoom handlers not to be applied, similar to
        // .dragging.disable() and other handler .disable() functions in Leaflet.
        interactive: false
    });