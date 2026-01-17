import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const places = {
        'type': 'FeatureCollection',
        'features': [
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'theatre'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.038659, 38.931567]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'theatre'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.003168, 38.894651]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'bar'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.090372, 38.881189]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'bicycle'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.052477, 38.943951]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'music'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.031706, 38.914581]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'music'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.020945, 38.878241]
                }
            },
            {
                'type': 'Feature',
                'properties': {
                    'icon': 'music'
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': [-77.007481, 38.876516]
                }
            }
        ]
    };

    const layerIDs = []; // Will contain a list used to filter against.
    const filterInput = document.getElementById('filter-input');
    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://tiles.openfreemap.org/styles/bright',
        center: [-77.04, 38.907],
        zoom: 11.15
    });

    map.on('load', () => {
        // Add a GeoJSON source containing place coordinates and information.
        map.addSource('places', {
            'type': 'geojson',
            'data': places
        });

        places.features.forEach((feature) => {
            const symbol = feature.properties['icon'];
            const layerID = `poi-${symbol}`;

            // Add a layer for this symbol type if it hasn't been added already.
            if (!map.getLayer(layerID)) {
                map.addLayer({
                    'id': layerID,
                    'type': 'symbol',
                    'source': 'places',
                    'layout': {
                        'icon-image': `${symbol}_11`,
                        'icon-overlap': 'always',
                        'text-field': symbol,
                        'text-font': ['Noto Sans Regular'],
                        'text-size': 11,
                        'text-transform': 'uppercase',
                        'text-letter-spacing': 0.05,
                        'text-offset': [0, 1.5]
                    },
                    'paint': {
                        'text-color': '#202',
                        'text-halo-color': '#fff',
                        'text-halo-width': 2
                    },
                    'filter': ['==', ['get', 'icon'], symbol]
                });

                layerIDs.push(layerID);
            }
        });

        filterInput.addEventListener('keyup', (e) => {
            // If the input value matches a layerID set
            // it's visibility to 'visible' or else hide it.
            const value = e.target.value.trim().toLowerCase();
            layerIDs.forEach((layerID) => {
                map.setLayoutProperty(
                    layerID,
                    'visibility',
                    layerID.indexOf(value) > -1 ? 'visible' : 'none'
                );
            });
        });
    });