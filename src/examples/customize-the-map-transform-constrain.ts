import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

function customTransformConstrain(lngLat, zoom) {
        return {center: lngLat, zoom: zoom ?? 0}
    };

    const map = new maplibregl.Map({
        container: 'map',
        renderWorldCopies: false,
        transformConstrain: customTransformConstrain,
        zoom: -2,
        center: [360, 0],
        style: {
            version: 8,
            sources: {
                rgb: {
                    type: 'raster',
                    tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution: '&copy; OpenStreetMap Contributors',
                    maxzoom: 19
                },
            },
            layers: [{id: 'rgb', type: 'raster', source: 'rgb'}]
        },
    });