import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

maplibregl.addProtocol('cog', MaplibreCOGProtocol.cogProtocol);

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/styles/osm-bright-gl-style/style.json',
        center: [11.39831, 47.26244],
        zoom: 14
    });

    map.on('load', () => {
        map.addSource('cogSource', {
            type: 'raster',
            url: 'cog://https://maplibre.org/maplibre-gl-js/docs/assets/cog.tif',
            tileSize: 256
        });

        map.addLayer({
            id: 'cogLayer',
            source: 'cogSource',
            type: 'raster'
        });
    });