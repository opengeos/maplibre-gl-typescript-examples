import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map1 = new maplibregl.Map({
        container: 'map1',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [0, 0],
        zoom: 1,
        maplibreLogo: true
    });
    const map2 = new maplibregl.Map({
        container: 'map2',
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [0, 0],
        zoom: 1,
        maplibreLogo: true
    });
    const map3 = new maplibregl.Map({
        container: 'map3',
        style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
        center: [0, 0],
        zoom: 1,
        maplibreLogo: true
    });

    syncMaps(map1, map2, map3);