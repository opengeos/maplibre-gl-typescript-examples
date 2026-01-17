import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
        container: 'map',
        style: 'https://demotiles.maplibre.org/style.json',
        center: [30.0, 40.0],
    });

    map.addControl(new maplibregl.GlobeControl(), 'top-right');

    map.on('style.load', () => {
        map.setProjection({
            type: 'globe', // Set projection to globe
        });
    });

    map.on('load', () => {
        map.addSource('extrude-polygons', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': [
                                [
                                    [-120.0, 10.0],
                                    [120.0, 10.0],
                                    [120.0, -10.0],
                                    [-120.0, -10.0]
                                ]
                            ]
                        },
                        'properties': {
                            'height': 150000,
                            'color': '#ff0044'
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': [
                                [
                                    [10.0, 50.0],
                                    [20.0, 50.0],
                                    [20.0, 40.0],
                                    [10.0, 40.0]
                                ]
                            ]
                        },
                        'properties': {
                            'height': 450000,
                            'color': '#22ff44'
                        }
                    },
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Polygon',
                            'coordinates': [
                                [
                                    [-70.0, 55.0],
                                    [-65.0, 55.0],
                                    [-65.0, 50.0],
                                    [-70.0, 50.0]
                                ]
                            ]
                        },
                        'properties': {
                            'height': 600000,
                            'color': '#4400ff'
                        }
                    }
                ]
            }
        });
        map.addLayer({
            'id': 'extrude-polygon-layer',
            'source': 'extrude-polygons',
            'type': 'fill-extrusion',
            'paint': {
                'fill-extrusion-color': ['get', 'color'],
                'fill-extrusion-opacity': 1,
                'fill-extrusion-height': ['get', 'height'],
            }
        });
    });