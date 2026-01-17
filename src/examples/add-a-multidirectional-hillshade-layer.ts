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
                        'hillshade-method': 'multidirectional',
                        'hillshade-highlight-color': ['#FF4000', '#FFFF00', '#40ff00', '#00FF80'],
                        'hillshade-shadow-color': ['#00bfff', '#0000ff', '#bf00ff', '#FF0080'],
                        'hillshade-illumination-direction': [270, 315, 0, 45],
                        'hillshade-illumination-altitude': [30, 30, 30, 30]
                    }
                }
            ]
        },
        maxZoom: 18,
        maxPitch: 85
    });