import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import * as turf from '@turf/turf';

const radiusCenter = [2.3454, 48.8452];
    const map = new maplibregl.Map({
        container: 'map',
        zoom: 13,
        center: radiusCenter,
        style: {
            version: 8,
            sources: {
                osm: {
                    type: 'raster',
                    tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                    tileSize: 256,
                    attribution: '&copy; OpenStreetMap Contributors',
                    maxzoom: 19
                }
            },
            layers: [
                {
                    id: 'osm',
                    type: 'raster',
                    source: 'osm'
                }
            ]
        },
        maxZoom: 18,
        maxPitch: 85
    });

    map.on('load', () => {
        // Generate a polygon using turf.circle
        // See https://turfjs.org/docs/#circle
        const radius = 1; // kilometer
        const options = {
            steps: 64,
            units: 'kilometers'
        };
        const circle = turf.circle(radiusCenter, radius, options);

        // Add the circle as a GeoJSON source
        map.addSource('location-radius', {
            type: 'geojson',
            data: circle
        });

        // Add a fill layer with some transparency
        map.addLayer({
            id: 'location-radius',
            type: 'fill',
            source: 'location-radius',
            paint: {
                'fill-color': '#8CCFFF',
                'fill-opacity': 0.5
            }
        });

        // Add a line layer to draw the circle outline
        map.addLayer({
            id: 'location-radius-outline',
            type: 'line',
            source: 'location-radius',
            paint: {
                'line-color': '#0094ff',
                'line-width': 3
            }
        });
    });