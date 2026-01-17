import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = window.map = new maplibregl.Map({
        container: 'map',
        zoom: 10,
        center: [11.491, 47.274],
        pitch: 0,
        renderWorldCopies: false,
        hash: true,
        style: {
            version: 8,
            sources: {
                hillshadeSource: {
                    type: 'raster-dem',
                    url: 'https://demotiles.maplibre.org/terrain-tiles/tiles.json',
                    tileSize: 256
                }
            },
            layers: [
                {
                    id: 'hillshade',
                    type: 'hillshade',
                    source: 'hillshadeSource',
                    paint: {
                        'hillshade-method': 'standard',
                        'hillshade-illumination-direction': 315,
                        'hillshade-shadow-color': '#000000',
                        'hillshade-highlight-color': '#FFFFFF',
                        'hillshade-accent-color': '#000000',
                        'hillshade-exaggeration': 0.5
                    }
                }
            ]
        },
        maxZoom: 18,
        maxPitch: 85
    });